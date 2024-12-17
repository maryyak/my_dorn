package roomHandlers

import (
	"dorn_project/server/database"
	"dorn_project/server/models"
	"encoding/json"
	"log"
	"net/http"
)

func UpdateRoom(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPut {
		http.Error(w, "Invalid method", http.StatusMethodNotAllowed)
		return
	}

	var room models.Room
	if err := json.NewDecoder(r.Body).Decode(&room); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	var existingRoom models.Room
	if err := database.DB.First(&existingRoom, room.RoomID).Error; err != nil {
		http.Error(w, "Room not found", http.StatusNotFound)
		return
	}

	if err := database.DB.Model(&existingRoom).Updates(room).Error; err != nil {
		http.Error(w, "Failed to update room", http.StatusInternalServerError)
		log.Printf("Error updating room: %v", err)
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(existingRoom)
}
