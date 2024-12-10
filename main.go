package main

import (
	"dorn_project/server/database"
	"log"
	"net/http"
)

func main() {

	database.Connect()

	log.Print("Connecting to localhost:8080....")
	err := http.ListenAndServe("localhost:8080", nil)
	if err == nil {
		log.Fatal("Cant connect to url - localhost:8080")
	}
}
