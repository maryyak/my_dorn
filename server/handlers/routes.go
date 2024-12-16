package routes

import (
	"net/http"
)

// InitRoutes регистрирует маршруты для сервера
func InitRoutes(mux *http.ServeMux) {
	mux.HandleFunc("/users", GetUsers)
	mux.HandleFunc("/rooms", GetRooms)
}
