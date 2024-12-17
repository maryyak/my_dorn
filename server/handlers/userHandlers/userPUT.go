package userHandlers

import (
	"dorn_project/server/database"
	"dorn_project/server/models"
	"encoding/json"
	"log"
	"net/http"
)

func UpdateUser(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPut {
		http.Error(w, "Invalid method", http.StatusMethodNotAllowed)
		return
	}

	var user models.User
	if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	var existingUser models.User
	if err := database.DB.First(&existingUser, user.UserID).Error; err != nil {
		http.Error(w, "User not found", http.StatusNotFound)
		return
	}

	if err := database.DB.Model(&existingUser).Updates(user).Error; err != nil {
		http.Error(w, "Failed to update user", http.StatusInternalServerError)
		log.Printf("Error updating user: %v", err)
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(existingUser)
}
