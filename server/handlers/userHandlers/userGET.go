package userHandlers

import (
	"dorn_project/server/database"
	"dorn_project/server/models"
	"encoding/json"
	"log"
	"net/http"
)

func GetUsers(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodGet {
		var users []models.User

		if err := database.DB.Find(&users).Error; err != nil {
			http.Error(w, "Failed to retrieve users", http.StatusInternalServerError)
			return
		}

		log.Printf("Retrieved users: %+v\n", users)

		w.Header().Set("Content-Type", "application/json")
		if err := json.NewEncoder(w).Encode(users); err != nil {
			http.Error(w, "Failed to encode users to JSON", http.StatusInternalServerError)
			return
		}
	} else {
		http.Error(w, "Invalid method", http.StatusMethodNotAllowed)
	}
}
