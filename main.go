package main

import (
	"dorn_project/server/database"
	"dorn_project/server/utilits"
	"log"
	"net/http"
)

func main() {
	database.Connect()

	utilits.VkParsing()

	log.Print("Connecting to localhost:8080....")
	err := http.ListenAndServe("localhost:8080", nil)
	if err == nil {
		log.Fatal("Cant connect to url - localhost:8080")
	}

}
