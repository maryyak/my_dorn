package models

import (
	"time"
)

// User represents a user in the system
//type User struct {
//	UserID       int       `json:"user_id" db:"userid" gorm:"primary_key;AUTO_INCREMENT"`
//	Name         string    `json:"name" db:"name"`
//	Email        string    `json:"email" db:"email"`
//	PasswordHash string    `json:"-" db:"passwordhash"`
//	Role         string    `json:"role" db:"role"`
//	RoomID       int       `json:"room_id" db:"roomid"`
//	Room         *Room     `json:"room,omitempty" gorm:"foreignKey:RoomID;references:RoomNumber"` // Связь для загрузки данных о комнате
//	PhoneNumber  string    `json:"phone_number" db:"phonenumber"`
//	RegisteredAt time.Time `json:"registered_at" db:"registeredat"`
//}

// User представляет пользователя в системе
type User struct {
	UserID       int       `json:"user_id" gorm:"primaryKey;column:userid;autoIncrement"`
	Name         string    `json:"name" gorm:"column:name;size:100"`
	Email        string    `json:"email" gorm:"column:email;size:100"`
	Password     string    `json:"-" gorm:"column:password;size:255"`
	Role         string    `json:"role" gorm:"column:role;size:20;default:'student'"`
	RoomID       int       `json:"room_id" gorm:"column:roomid"`
	PhoneNumber  string    `json:"phone_number" gorm:"column:phonenumber;size:15"`
	RegisteredAt time.Time `json:"registered_at" gorm:"column:registeredat;default:CURRENT_TIMESTAMP"`
}
