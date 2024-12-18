package eventHandlers

import (
	"dorn_project/server/database"
	"dorn_project/server/models"
	"encoding/json"
	"log"
	"net/http"
)

func UpdateEvent(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPut {
		http.Error(w, "Invalid method", http.StatusMethodNotAllowed)
		return
	}

	var updatedEvent models.Event
	if err := json.NewDecoder(r.Body).Decode(&updatedEvent); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	var existingEvent models.Event
	if err := database.DB.Preload("Options").First(&existingEvent, updatedEvent.EventID).Error; err != nil {
		http.Error(w, "Event not found", http.StatusNotFound)
		return
	}

	if err := database.DB.Model(&existingEvent).Updates(updatedEvent).Error; err != nil {
		http.Error(w, "Failed to update event", http.StatusInternalServerError)
		log.Printf("Error updating event: %v", err)
		return
	}

	for _, option := range updatedEvent.Options {
		if option.OptionID == 0 {
			option.EventID = existingEvent.EventID
			database.DB.Create(&option)
		} else {
			database.DB.Model(&option).Updates(option)
		}
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(existingEvent)
}
