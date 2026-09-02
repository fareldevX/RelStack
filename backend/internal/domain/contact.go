package domain

import (
	"time"

	"go.mongodb.org/mongo-driver/v2/bson"
)

type Contact struct {
	ID bson.ObjectID `json:"id" bson:"_id,omitempty"`
	Name string `json:"name" bson:"name"`
	Email string `json:"email" bson:"email"`
	Message string `json:"message" bson:"message"`
	CreatedAt time.Time `json:"created_at" bson:"created_at"`
	UpdatedAt time.Time `json:"updated_at" bson:"updated_at"`
}

type CreateContactDTO struct {
	Name string `json:"name" validate:"required,min=3"`
	Email string `json:"email" validate:"required,email"`
	Message string `json:"message" validate:"required,min=10"`
}