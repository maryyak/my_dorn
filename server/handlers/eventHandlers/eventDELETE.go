package eventHandlers

import (
	"dorn_project/server/database"
	"dorn_project/server/models"
	"log"
	"net/http"
)

func DeleteEvent(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodDelete {
		http.Error(w, "Invalid method", http.StatusMethodNotAllowed)
		return
	}

	eventID := r.URL.Query().Get("id")
	if eventID == "" {
		http.Error(w, "Event ID is required", http.StatusBadRequest)
		return
	}

	var event models.Event
	if err := database.DB.First(&event, eventID).Error; err != nil {
		http.Error(w, "Room not found", http.StatusNotFound)
		return
	}

	if err := database.DB.Delete(&models.Event{}, eventID).Error; err != nil {
		http.Error(w, "Failed to delete event", http.StatusInternalServerError)
		log.Printf("Error deleting event: %v", err)
		return
	}

	w.WriteHeader(http.StatusNoContent)
}
