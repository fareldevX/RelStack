package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

type Config struct {
	AppPort string
	AppName string
	FrontendURL string
	MongoURI string
	CloudinaryCloudName string
	CloudinaryApiKey string
	CloudinaryApiSecret string
}

func LoadConfig() *Config {
	if err := godotenv.Load(); err != nil {
		log.Println("File .env not found")
	}

	return &Config{
		AppPort: getEnv("APP_PORT", "8080"),
		AppName: getEnv("APP_NAME", "Portfolio Backend"),
		FrontendURL: getEnv("FRONTEND_URL", "https://rel-stack.vercel.app"),

		MongoURI: getEnvOrFatal("MONGO_URI"),
		CloudinaryCloudName: getEnv("CLOUDINARY_CLOUD_NAME", ""),
		CloudinaryApiKey: getEnv("CLOUDINARY_API_KEY", ""),
		CloudinaryApiSecret: getEnv("CLOUDINARY_API_SECRET", ""),
	}
}

func getEnv(key, fallback string) string {
	if value, exists := os.LookupEnv(key); exists && value != "" {
		return value
	}
	return fallback
}

func getEnvOrFatal(key string) string {
	value, exists := os.LookupEnv(key)
	if !exists || value == "" {
		log.Fatalf("FATAL CONFIG ERROR: Environment variable '%s' is required but not set!", key)
	}
	return value
}