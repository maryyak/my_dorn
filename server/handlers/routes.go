package routes

import (
	"dorn_project/server/handlers/eventHandlers"
	"dorn_project/server/handlers/roomHandlers"
	"dorn_project/server/handlers/userHandlers"
	"net/http"
)

// регистрация маршрутов для сервера
func InitRoutes(mux *http.ServeMux) {

	//CRUD операции над пользователем
	mux.HandleFunc("/users/create", userHandlers.CreateUser)
	mux.HandleFunc("/users/read", userHandlers.GetUsers)
	mux.HandleFunc("/users/update", userHandlers.UpdateUser)
	mux.HandleFunc("/users/delete", userHandlers.DeleteUser)

	//CRUD операции над комнатами
	mux.HandleFunc("/rooms/create", roomHandlers.CreateRoom)
	mux.HandleFunc("/rooms/read", roomHandlers.GetRooms)
	mux.HandleFunc("/rooms/update", roomHandlers.UpdateRoom)
	mux.HandleFunc("/rooms/delete", roomHandlers.DeleteRoom)

	//CRUD операции над мероприятиями
	mux.HandleFunc("/events/create", eventHandlers.CreateEvent)
	mux.HandleFunc("/events/read", eventHandlers.GetEvents)
	mux.HandleFunc("/events/update", eventHandlers.UpdateEvent)
	mux.HandleFunc("/events/delete", eventHandlers.DeleteEvent)
}
