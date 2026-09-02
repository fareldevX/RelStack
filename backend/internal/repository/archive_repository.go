package repository

import (
	"context"

	"portfolio-backend/internal/domain"

	"go.mongodb.org/mongo-driver/v2/bson"
	"go.mongodb.org/mongo-driver/v2/mongo"
	"go.mongodb.org/mongo-driver/v2/mongo/options"
)

type ArchiveRepository interface {
	Create(ctx context.Context, archive *domain.Archive) error
	FindAll(ctx context.Context) ([]domain.Archive, error)
	FindByID(ctx context.Context, id bson.ObjectID) (*domain.Archive, error)
	UpdateByID(ctx context.Context, id bson.ObjectID, archive *domain.Archive) error
	DeleteByID(ctx context.Context, id bson.ObjectID) error
}

type archiveRepository struct {
	collection *mongo.Collection
}

func NewArchiveRepository(db *mongo.Database) ArchiveRepository {
	return &archiveRepository{
		collection: db.Collection("archives"),
	}
}

func (r *archiveRepository) Create(ctx context.Context, archive *domain.Archive) error {
	result, err := r.collection.InsertOne(ctx, archive)
	if err != nil {
		return err
	}

	if insertedID, ok := result.InsertedID.(bson.ObjectID); ok {
		archive.ID = insertedID
	}

	return nil
}

func (r *archiveRepository) FindAll(ctx context.Context) ([]domain.Archive, error) {
	var archives []domain.Archive

	findOptions := options.Find().SetSort(bson.M{"created_at": -1})
	cursor, err := r.collection.Find(ctx, bson.M{}, findOptions)
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)

	if err := cursor.All(ctx, &archives); err != nil {
		return nil, err
	}

	if archives == nil {
		archives = []domain.Archive{}
	}

	return archives, nil
}

func (r *archiveRepository) FindByID(ctx context.Context, id bson.ObjectID) (*domain.Archive, error) {
	var archive domain.Archive
	filter := bson.M{"_id": id}

	err := r.collection.FindOne(ctx, filter).Decode(&archive)
	if err != nil {
		return nil, err
	}

	return &archive, nil
}

func (r *archiveRepository) UpdateByID(ctx context.Context, id bson.ObjectID, archive *domain.Archive) error {
	filter := bson.M{"_id": id}
	update := bson.M{
		"$set": archive,
	}

	result, err := r.collection.UpdateOne(ctx, filter, update);
	if err != nil {
		return err
	}

	if result.MatchedCount == 0 {
		return mongo.ErrNoDocuments
	}

	return nil
}

func (r *archiveRepository) DeleteByID(ctx context.Context, id bson.ObjectID) error {
	filter := bson.M{"_id": id}

	result, err := r.collection.DeleteOne(ctx, filter)
	if err != nil {
		return err
	}

	if result.DeletedCount == 0 {
		return mongo.ErrNoDocuments
	}

	return nil
}