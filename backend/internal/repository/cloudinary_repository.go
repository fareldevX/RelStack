package repository

import (
	"context"
	"mime/multipart"

	"github.com/cloudinary/cloudinary-go/v2"
	"github.com/cloudinary/cloudinary-go/v2/api/admin"
	"github.com/cloudinary/cloudinary-go/v2/api/uploader"
)

type CloudinaryRepository interface {
	UploadImage(ctx context.Context, fileHeader *multipart.FileHeader, folder string) (string, error)
	DeleteImage(ctx context.Context, publicID string) error
}

type cloudinaryRepository struct {
	cld *cloudinary.Cloudinary
}

func NewCloudinaryRepository(cld *cloudinary.Cloudinary) CloudinaryRepository {
	return &cloudinaryRepository{cld: cld}
}

func (r *cloudinaryRepository) UploadImage(ctx context.Context, fileHeader *multipart.FileHeader, folder string) (string, error) {
	file, err := fileHeader.Open()
	if err != nil {
		return "", err
	}
	defer file.Close()

	resp, errUpl := r.cld.Upload.Upload(ctx, file, uploader.UploadParams{
		Folder: folder,
	})
	if errUpl != nil {
		return "", errUpl
	}

	return resp.SecureURL, nil
}

func (r *cloudinaryRepository) DeleteImage(ctx context.Context, publicID string) error {
	_, err := r.cld.Admin.DeleteAssets(ctx, admin.DeleteAssetsParams{
		PublicIDs: []string{publicID},
	})

	return err
}