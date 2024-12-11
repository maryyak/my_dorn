package config

import "os"

// DBConfig Конфигурация подключения к базе данных
var DBConfig = struct {
	Host     string
	Port     string
	User     string
	Password string
	DBName   string
}{
	Host:     getEnv("DB_HOST", "localhost"),
	Port:     getEnv("DB_PORT", "5432"),
	User:     getEnv("DB_USER", "dev_user"),
	Password: getEnv("DB_PASSWORD", "password"),
	DBName:   getEnv("DB_NAME", "test_db"),
}

// Получение переменной окружения с дефолтным значением
func getEnv(key, fallback string) string {
	if value, exists := os.LookupEnv(key); exists {
		return value
	}
	return fallback
}
