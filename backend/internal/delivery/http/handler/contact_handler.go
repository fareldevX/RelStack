package handler

import (
	"log"

	"portfolio-backend/internal/domain"
	"portfolio-backend/internal/service"

	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
)

type ContactHandler struct {
	service service.ContactService
	validate *validator.Validate
}

func NewContactHandler(service service.ContactService) *ContactHandler {
	return &ContactHandler{
		service: service,
		validate: validator.New(),
	}
}

func (h *ContactHandler) AddMessage(c *fiber.Ctx) error {
	ctx := c.UserContext()

	var req domain.CreateContactDTO
	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "error",
			"message": "Invalid JSON format",
		})
	}

	if err := h.validate.Struct(req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status": "error",
			"message": "Validation failed",
			"details": err.Error(),
		})
	}

	contact := &domain.Contact{
		Name: req.Name,
		Email: req.Email,
		Message: req.Message,
	}

	err := h.service.CreateMessage(ctx, contact)
	if err != nil {
		log.Printf("Failed to insert message: %v", err)

		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"status": "error",
			"message": "Internal Server Error",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"status": "success",
		"message": "Successfully insert one message",
	})
}