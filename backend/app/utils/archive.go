package utils

import "time"

func ParseDatePointer(dateStr string) (*time.Time, error) {
	if dateStr == "" { 
		return nil, nil
	}

	parsed, err := time.Parse("2006-01-02", dateStr)
	if err != nil {
		return nil, err
	}

	return &parsed, nil
}