package eventHandlers

import (
	"dorn_project/server/database"
	"dorn_project/server/models"
	"encoding/json"
	"log"
	"net/http"
)

func GetEvents(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Invalid method", http.StatusMethodNotAllowed)
		return
	}

	var events []models.Event

	if err := database.DB.Preload("User").Preload("Options").Find(&events).Error; err != nil {
		http.Error(w, "Failed to retrieve events", http.StatusInternalServerError)
		log.Printf("Error retrieving events: %v", err)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(events); err != nil {
		http.Error(w, "Failed to encode events to JSON", http.StatusInternalServerError)
		return
	}
}
