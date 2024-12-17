package roomHandlers

import (
	"dorn_project/server/database"
	"dorn_project/server/models"
	"encoding/json"
	"log"
	"net/http"
)

func CreateRoom(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Invalid method", http.StatusMethodNotAllowed)
		return
	}

	var room models.Room
	if err := json.NewDecoder(r.Body).Decode(&room); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	if err := database.DB.Create(&room).Error; err != nil {
		http.Error(w, "Failed to create room", http.StatusInternalServerError)
		log.Printf("Error creating room: %v", err)
		return
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(room)
}
