package main

import (
	"dorn_project/server/database"
	routes "dorn_project/server/handlers"
	"dorn_project/server/utilits"
	"log"
	"net/http"
)

func main() {
	database.Connect()

	go utilits.VkParsing()

	mux := http.NewServeMux()
	routes.InitRoutes(mux)

	log.Print("Connecting to localhost:8080....")
	err := http.ListenAndServe("localhost:8080", mux)
	if err == nil {
		log.Fatal("Cant connect to url - localhost:8080")
	}

}
