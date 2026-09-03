package service

import (
	"context"

	"portfolio-backend/app/domain"
	"portfolio-backend/app/repository"
)

type ContactService interface {
	CreateMessage(ctx context.Context, contact *domain.Contact) error
}

type contactService struct {
	repo repository.ContactRepository
}

func NewContactService(repo repository.ContactRepository) ContactService {
	return &contactService{repo: repo}
}

func (s *contactService) CreateMessage(ctx context.Context, contact *domain.Contact) error {
	return s.repo.Create(ctx, contact)
}