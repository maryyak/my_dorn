package roomHandlers

import (
	"dorn_project/server/database"
	"dorn_project/server/models"
	"encoding/json"
	"log"
	"net/http"
)

func GetRooms(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Invalid method", http.StatusMethodNotAllowed)
		return
	}

	var rooms []models.Room
	if err := database.DB.Find(&rooms).Error; err != nil {
		http.Error(w, "Failed to retrieve rooms", http.StatusInternalServerError)
		log.Printf("Error retrieving rooms: %v", err)
		return
	}

	log.Printf("Retrieved rooms: %+v", rooms)
	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(rooms); err != nil {
		http.Error(w, "Failed to encode rooms to JSON", http.StatusInternalServerError)
		return
	}
}
