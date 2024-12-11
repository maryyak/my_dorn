package database

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"log"
)

// DB глобальная переменная для работы с базой данных через GORM
var DB *gorm.DB

// Connect устанавливает соединение с базой данных
func Connect() {
	/*dsn := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
		config.DBConfig.Host,
		config.DBConfig.User,
		config.DBConfig.Password,
		config.DBConfig.DBName,
		config.DBConfig.Port,
	)*/

	dsn := "host=81.177.136.21 user=student9 password=student11122024 dbname=mydorn port=5432 sslmode=disable"

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Ошибка подключения к базе данных: %v", err)
	}

	DB = db
	log.Println("Успешное подключение к базе данных")
}
