package routes

import (
	"dorn_project/server/database"
	"dorn_project/server/models"
	"encoding/json"
	"log"
	"net/http"
)

func GetRooms(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodGet {
		var rooms []models.Room

		if err := database.DB.Find(&rooms).Error; err != nil {
			http.Error(w, "Failed to retrieve users", http.StatusInternalServerError)
			return
		}

		log.Printf("Retrieved rooms: %+v\n", rooms)

		w.Header().Set("Content-Type", "application/json")
		if err := json.NewEncoder(w).Encode(rooms); err != nil {
			http.Error(w, "Failed to encode users to JSON", http.StatusInternalServerError)
			return
		}
	} else {
		http.Error(w, "Invalid method", http.StatusMethodNotAllowed)
	}
}
