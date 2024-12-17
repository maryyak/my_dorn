package roomHandlers

import (
	"dorn_project/server/database"
	"dorn_project/server/models"
	"log"
	"net/http"
)

func DeleteRoom(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodDelete {
		http.Error(w, "Invalid method", http.StatusMethodNotAllowed)
		return
	}

	roomID := r.URL.Query().Get("id")
	if roomID == "" {
		http.Error(w, "Room ID is required", http.StatusBadRequest)
		return
	}

	var room models.Room
	if err := database.DB.First(&room, roomID).Error; err != nil {
		http.Error(w, "Room not found", http.StatusNotFound)
		return
	}

	if err := database.DB.Delete(&models.Room{}, roomID).Error; err != nil {
		http.Error(w, "Failed to delete room", http.StatusInternalServerError)
		log.Printf("Error deleting room: %v", err)
		return
	}

	w.WriteHeader(http.StatusNoContent)
}
