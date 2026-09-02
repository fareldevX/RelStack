package utils

import (
	"path"
	"strings"
)

func ExtractPublicID(imageURL string) string {
	if imageURL == "" {
		return ""
	}

	parts := strings.Split(imageURL, "/upload/")
	if len(parts) < 2 {
		return ""
	}

	uploadPath := parts[1]

	segments := strings.Split(uploadPath, "/")
	if len(segments) > 0 && strings.HasPrefix(segments[0], "v") {
		uploadPath = strings.Join(segments[1:], "/")
	}

	ext := path.Ext(uploadPath)
	publicID := strings.TrimSuffix(uploadPath, ext)

	return publicID
}