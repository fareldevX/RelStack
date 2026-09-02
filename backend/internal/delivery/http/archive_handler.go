package http

import (
	"encoding/json"
	"errors"
	"log"

	"portfolio-backend/internal/domain"
	"portfolio-backend/internal/service"
	"portfolio-backend/internal/utils"

	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/v2/mongo"
)

type ArchiveHandler struct {
	service service.ArchiveService
	validate *validator.Validate
}

func NewArchiveHandler(service service.ArchiveService) *ArchiveHandler {
	return &ArchiveHandler{
		service: service,
		validate: validator.New(),
	}
}

func (h *ArchiveHandler) AddArchive(c *fiber.Ctx) error {
	ctx := c.UserContext()

	form, parseErr := c.MultipartForm()
	if parseErr != nil || form == nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status":  "error",
    		"message": "Failed to parse multipart form or form is empty",
		})
	}

	files := form.File["images"]
	if len(files) == 0 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status":  "error",
			"message": "At least one image is required",
		})
	}

	issuedDate, issDateErr := utils.ParseDatePointer(c.FormValue("issued_date"))
	if issDateErr != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status":  "error",
			"message": "Invalid issued_date format. Expected YYYY-MM-DD",
		})
	}

	expiryDate, expDateErr := utils.ParseDatePointer(c.FormValue("expiry_date"))
	if expDateErr != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status":  "error",
			"message": "Invalid expiry_date format. Expected YYYY-MM-DD",
		})
	}

	var techStack []string
	techStackRaw := c.FormValue("tech_stack")
	if techStackRaw != "" {
		_ = json.Unmarshal([]byte(techStackRaw), &techStack)
	}

	req := domain.CreateArchiveDTO{
		Type: domain.ArchiveType(c.FormValue("type")),
		Name: c.FormValue("name"),
		Description: c.FormValue("description"),
		TechStack: techStack,
		DemoURL: c.FormValue("demo_url"),
		GithubURL: c.FormValue("github_url"),
		Issuer: c.FormValue("issuer"),
		IssuedDate: issuedDate,
		ExpiryDate: expiryDate,
		CredentialID: c.FormValue("credential_id"),
		CredentialURL: c.FormValue("credential_url"),
	}

	if valErr := h.validate.Struct(req); valErr != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "error",
			"message": "Validation failed",
			"details": valErr.Error(),
		})
	}

	result, err := h.service.CreateArchive(ctx, &req, files)
	if err != nil {
		log.Printf("Failed to insert archive: %v", err)

		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"status": "error",
			"message": "Internal Server Error",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"status": "success",
		"message": "Successfully insert one archive",
		"data": result,
	})
}

func (h *ArchiveHandler) GetAllArchives(c *fiber.Ctx) error {
	ctx := c.UserContext()

	archives, err := h.service.FetchAll(ctx)
	if err != nil {
		log.Printf("Failed to get archives: %v", err)

		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"status": "error",
			"message": "Internal Server Error",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"status": "success",
		"data": fiber.Map{
			"archives": archives,
		},
	})
}

func (h *ArchiveHandler) GetByID(c *fiber.Ctx) error {
	ctx := c.UserContext()
	idStr := c.Params("id")

	archive, err := h.service.FetchByID(ctx, idStr)
	if err != nil {
		log.Printf("Failed to get archives: %v", err)

		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"status": "error",
			"message": "Internal Server Error",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"status": "success",
		"data": archive,
	})
}

func (h *ArchiveHandler) UpdateArchive(c *fiber.Ctx) error {
	ctx := c.UserContext()
	idStr := c.Params("id")

	form, parseErr := c.MultipartForm()
	if parseErr != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status":  "error",
			"message": "Failed to parse multipart form",
		})
	}

	files := form.File["images"]
	if len(files) == 0 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status":  "error",
			"message": "At least one image is required",
		})
	}

	issuedDate, issDateErr := utils.ParseDatePointer(c.FormValue("issued_date"))
	if issDateErr != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status":  "error",
			"message": "Invalid issued_date format. Expected YYYY-MM-DD",
		})
	}

	expiryDate, expDateErr := utils.ParseDatePointer(c.FormValue("expiry_date"))
	if expDateErr != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status":  "error",
			"message": "Invalid expiry_date format. Expected YYYY-MM-DD",
		})
	}

	var techStack []string
	techStackRaw := c.FormValue("tech_stack")
	if techStackRaw != "" {
		_ = json.Unmarshal([]byte(techStackRaw), &techStack)
	}

	req := domain.CreateArchiveDTO{
		Type: domain.ArchiveType(c.FormValue("type")),
		Name: c.FormValue("name"),
		Description: c.FormValue("description"),
		TechStack: techStack,
		DemoURL: c.FormValue("demo_url"),
		GithubURL: c.FormValue("github_url"),
		Issuer: c.FormValue("issuer"),
		IssuedDate: issuedDate,
		ExpiryDate: expiryDate,
		CredentialID: c.FormValue("credential_id"),
		CredentialURL: c.FormValue("credential_url"),
	}

	if valErr := h.validate.Struct(&req); valErr != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "error",
			"message": "Validation failed",
			"details": valErr.Error(),
		})
	}

	result, updErr := h.service.UpdateArchive(ctx, idStr, &req, files)
	if updErr != nil {
		if errors.Is(updErr, mongo.ErrNoDocuments) {
			return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
				"status":  "error",
				"message": "Archive not found",
			})
		}

		log.Printf("Failed to insert archive: %v", updErr)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"status": "error",
			"message": "Internal Server Error",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"status": "success",
		"message": "Archive update successfully",
		"data": result,
	})
}

func (h *ArchiveHandler) DeleteArchive(c *fiber.Ctx) error {
	ctx := c.UserContext()
	idStr := c.Params("id")

	err := h.service.DeleteArchive(ctx, idStr)
	if err != nil {
		log.Printf("Failed to get archives: %v", err)

		if errors.Is(err, mongo.ErrNoDocuments) {
			return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
				"status":  "error",
				"message": "Archive not found",
			})
		}
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"status":  "error",
			"message": "Internal Server Error",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"status":  "success",
		"message": "Archive deleted successfully",
	})
}