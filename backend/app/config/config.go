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
		log.Println("File .env not found, reading from system environment")
	}

	return &Config{
		AppPort: getEnv("APP_PORT", "8080"),
		AppName: getEnv("APP_NAME", "Portfolio Backend"),
		FrontendURL: getEnv("FRONTEND_URL", "https://rel-stack.vercel.app"),

		MongoURI: getEnv("MONGO_URI", ""),
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