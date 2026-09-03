package handler

import (
	"log"
	"net/http"
	"sync"

	"portfolio-backend/app/config"
	"portfolio-backend/app/delivery/http/handler"
	"portfolio-backend/app/repository"
	"portfolio-backend/app/service"
	"portfolio-backend/pkg/database"

	"github.com/cloudinary/cloudinary-go/v2"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/adaptor"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
)

var (
	app *fiber.App
	once sync.Once
)

func initApp() {
	cfg := config.LoadConfig()

	client, err := database.NewMongoClient(cfg.MongoURI)
	if err != nil {
		log.Fatalf("Fatal: %v", err)
	}
	db := client.Database("Dashboard")

	cld, err := cloudinary.NewFromParams(
		cfg.CloudinaryCloudName,
		cfg.CloudinaryApiKey,
		cfg.CloudinaryApiSecret,
	)
	if err != nil {
		log.Fatalf("Failed to initialize Cloudinary SDK: %v", err)
	}

	archiveRepo := repository.NewArchiveRepository(db)
	cloudinaryRepo := repository.NewCloudinaryRepository(cld)
	archiveSvc := service.NewArchiveService(archiveRepo, cloudinaryRepo)
	archiveHandler := handler.NewArchiveHandler(archiveSvc)

	contactRepo := repository.NewContactRepository(db)
	contactSvc := service.NewContactService(contactRepo)
	contactHandler := handler.NewContactHandler(contactSvc)

	app = fiber.New(fiber.Config{
		AppName: cfg.AppName,
		BodyLimit: 4 * 1024 * 1024,
	})

	app.Use(logger.New())
	app.Use(recover.New())
	app.Use(cors.New(cors.Config{
		AllowOrigins: cfg.FrontendURL,
		AllowHeaders: "Origin, Content-Type, Accept, Authorization",
	}))

	api := app.Group("/api/v1")

	api.Post("/archive", archiveHandler.AddArchive)
	api.Get("/archive", archiveHandler.GetAllArchives)
	api.Get("/archive/:id", archiveHandler.GetByID)
	api.Put("/archive/:id", archiveHandler.UpdateArchive)
	api.Delete("/archive/:id", archiveHandler.DeleteArchive)

	api.Post("/contact", contactHandler.AddMessage)
}

func Handler(w http.ResponseWriter, r *http.Request) {
	once.Do(func() {
		initApp()
	})

	adaptor.FiberApp(app)(w, r)
}