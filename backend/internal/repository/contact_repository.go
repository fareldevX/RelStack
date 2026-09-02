package repository

import (
	"context"
	"time"

	"portfolio-backend/internal/domain"

	"go.mongodb.org/mongo-driver/v2/bson"
	"go.mongodb.org/mongo-driver/v2/mongo"
)

type ContactRepository interface {
	Create(ctx context.Context, contact *domain.Contact) error
}

type contactRepository struct {
	collection *mongo.Collection
}

func NewContactRepository(db *mongo.Database) ContactRepository {
	return &contactRepository{
		collection: db.Collection("contacts"),
	}
}

func (r *contactRepository) Create(ctx context.Context, contact *domain.Contact) error {
	now := time.Now()
	contact.CreatedAt = now
	contact.UpdatedAt = now

	result, err := r.collection.InsertOne(ctx, contact)
	if err != nil {
		return err
	}

	if insertedID, ok := result.InsertedID.(bson.ObjectID); ok {
		contact.ID = insertedID
	}

	return nil
}