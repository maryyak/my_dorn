package userHandlers

import (
	"dorn_project/server/database"
	"dorn_project/server/models"
	"log"
	"net/http"
)

func DeleteUser(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodDelete {
		http.Error(w, "Invalid method", http.StatusMethodNotAllowed)
		return
	}

	userID := r.URL.Query().Get("id")
	if userID == "" {
		http.Error(w, "User ID is required", http.StatusBadRequest)
		return
	}

	if err := database.DB.Delete(&models.User{}, userID).Error; err != nil {
		http.Error(w, "Failed to delete user", http.StatusInternalServerError)
		log.Printf("Error deleting user: %v", err)
		return
	}

	w.WriteHeader(http.StatusNoContent)
}
