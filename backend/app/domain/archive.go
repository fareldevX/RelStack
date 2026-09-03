package domain

import (
	"time"

	"go.mongodb.org/mongo-driver/v2/bson"
)

type ArchiveType string

const (
	ArchiveTypeProject ArchiveType = "project"
	ArchiveTypeCertification ArchiveType = "certification"
)

type Archive struct {
	ID bson.ObjectID `json:"id" bson:"_id,omitempty"`
	Type ArchiveType `json:"type" bson:"type"`
	Name string `json:"name" bson:"name"`
	Description string `json:"description" bson:"description"`
	Images []string `json:"images" bson:"images"`

	TechStack []string `json:"tech_stack,omitempty" bson:"tech_stack,omitempty"`
	DemoURL string `json:"demo_url,omitempty" bson:"demo_url,omitempty"`
	GithubURL string `json:"github_url,omitempty" bson:"github_url,omitempty"`

	Issuer string `json:"issuer,omitempty" bson:"issuer,omitempty"`
	IssuedDate *time.Time `json:"issued_date,omitempty" bson:"issued_date,omitempty"`
	ExpiryDate *time.Time `json:"expiry_date,omitempty" bson:"expiry_date,omitempty"`
	CredentialID string `json:"credential_id,omitempty" bson:"credential_id,omitempty"`
	CredentialURL string `json:"credential_url,omitempty" bson:"credential_url,omitempty"`

	CreatedAt time.Time `json:"created_at" bson:"created_at"`
	UpdatedAt time.Time `json:"updated_at" bson:"updated_at"`
}

type CreateArchiveDTO struct {
	Type ArchiveType `json:"type" validate:"required,oneof=project certification"`
	Name string `json:"name" validate:"required,min=3"`
	Description string `json:"description" validate:"required,min=10"`
	Images []string `json:"images"`
	TechStack []string `json:"tech_stack,omitempty"`
	DemoURL string `json:"demo_url,omitempty" validate:"omitempty,url"`
	GithubURL string `json:"github_url,omitempty" validate:"omitempty,url"`
	Issuer string `json:"issuer,omitempty"`
	IssuedDate *time.Time `json:"issued_date,omitempty"`
	ExpiryDate *time.Time `json:"expiry_date,omitempty"`
	CredentialID string `json:"credential_id,omitempty"`
	CredentialURL string `json:"credential_url,omitempty" validate:"omitempty,url"`
}