package service

import (
	"context"
	"errors"
	"mime/multipart"
	"time"

	"portfolio-backend/app/domain"
	"portfolio-backend/app/repository"
	"portfolio-backend/app/utils"

	"go.mongodb.org/mongo-driver/v2/bson"
)

type ArchiveService interface {
	CreateArchive(ctx context.Context, req *domain.CreateArchiveDTO, files []*multipart.FileHeader) (*domain.Archive, error)
	FetchAll(ctx context.Context) ([]domain.Archive, error)
	FetchByID(ctx context.Context, idStr string) (*domain.Archive, error)
	UpdateArchive(ctx context.Context, idStr string, req *domain.CreateArchiveDTO, files []*multipart.FileHeader) (*domain.Archive, error)
	DeleteArchive(ctx context.Context, idStr string) error
}

type archiveService struct {
	archiveRepo repository.ArchiveRepository
	cloudinaryRepo repository.CloudinaryRepository
}

func NewArchiveService(archiveRepo repository.ArchiveRepository, cloudinaryRepo repository.CloudinaryRepository) ArchiveService {
	return &archiveService{
		archiveRepo: archiveRepo,
		cloudinaryRepo: cloudinaryRepo,
	}
}

func (s *archiveService) CreateArchive(ctx context.Context, req *domain.CreateArchiveDTO, files []*multipart.FileHeader) (*domain.Archive, error) {
	var imageUrls []string

	for _, file := range files {
		url, err := s.cloudinaryRepo.UploadImage(ctx, file, "archives")
		if err != nil {
			return nil, err
		}
		imageUrls = append(imageUrls, url)
	}
	
	archive := &domain.Archive{
		Type: req.Type,
		Name: req.Name,
		Description: req.Description,
		Images: imageUrls,
		TechStack: req.TechStack,
		DemoURL: req.DemoURL,
		GithubURL: req.GithubURL,
		Issuer: req.Issuer,
		IssuedDate: req.IssuedDate,
		ExpiryDate: req.ExpiryDate,
		CredentialID: req.CredentialID,
		CredentialURL: req.CredentialURL,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	err := s.archiveRepo.Create(ctx, archive)
	if err != nil {
		return nil, err
	}

	return archive, nil
}

func (s *archiveService) FetchAll(ctx context.Context) ([]domain.Archive, error) {
	return s.archiveRepo.FindAll(ctx)
}

func (s *archiveService) FetchByID(ctx context.Context, idStr string) (*domain.Archive, error) {
	objID, err := bson.ObjectIDFromHex(idStr)
	if err != nil {
		return nil, errors.New("Invalid archive ID format")
	}

	return s.archiveRepo.FindByID(ctx, objID)
}

func (s *archiveService) UpdateArchive(ctx context.Context, idStr string, req *domain.CreateArchiveDTO, files []*multipart.FileHeader) (*domain.Archive, error) {
	objID, parseErr := bson.ObjectIDFromHex(idStr);
	if parseErr != nil {
		return nil, errors.New("Invalid archive ID format")
	}

	oldArchive, findErr := s.archiveRepo.FindByID(ctx, objID)
	if findErr != nil {
		return nil, findErr
	}

	imageURLs := oldArchive.Images

	if len(files) > 0 {
		var newImageURLs []string

		for _, file := range files {
			url, err := s.cloudinaryRepo.UploadImage(ctx, file, "archives")
			if err != nil {
				return nil, err
			}
			newImageURLs = append(newImageURLs, url)
		}

		for _, oldURL := range oldArchive.Images {
			publicID := utils.ExtractPublicID(oldURL)
			if publicID != "" {
				_ = s.cloudinaryRepo.DeleteImage(ctx, publicID)
			}
		}

		imageURLs = newImageURLs
	}

	updateArchive := &domain.Archive{
		ID: objID,
		Type: req.Type,
		Name: req.Name,
		Description: req.Description,
		Images: imageURLs,
		TechStack: req.TechStack,
		DemoURL: req.DemoURL,
		GithubURL: req.GithubURL,
		Issuer: req.Issuer,
		IssuedDate: req.IssuedDate,
		ExpiryDate: req.ExpiryDate,
		CredentialID: req.CredentialID,
		CredentialURL: req.CredentialURL,
		CreatedAt: oldArchive.CreatedAt,
		UpdatedAt: time.Now(),
	}

	updErr := s.archiveRepo.UpdateByID(ctx, objID, updateArchive)
	if updErr != nil {
		return nil, updErr
	}

	return updateArchive, nil
}

func (s *archiveService) DeleteArchive(ctx context.Context, idStr string) error {	
	objID, parseErr := bson.ObjectIDFromHex(idStr)
	if parseErr != nil {
		return errors.New("Invalid archive ID format")
	}

	archive, findErr := s.archiveRepo.FindByID(ctx, objID)
	if findErr != nil {
		return findErr
	}

	delErr := s.archiveRepo.DeleteByID(ctx, objID)
	if delErr != nil {
		return delErr
	}

	for _, imageURL := range archive.Images {
		publicID := utils.ExtractPublicID(imageURL)
		if publicID != "" {
			_ = s.cloudinaryRepo.DeleteImage(ctx, publicID)
		}
	}

	return nil
}