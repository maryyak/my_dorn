package models

import "time"

type User struct {
	UserID       int       `json:"user_id" gorm:"primaryKey;autoIncrement"`
	Name         string    `json:"name" gorm:"size:100;not null"`
	Email        string    `json:"email" gorm:"size:100;unique;not null"`
	PasswordHash string    `json:"-" gorm:"size:255;not null"`
	RoleID       int       `json:"role_id" gorm:"not null;index"`
	Role         Role      `json:"role" gorm:"foreignKey:RoleID;references:RoleID"`
	RoomID       *int      `json:"room_id,omitempty" gorm:"index"`
	Room         *Room     `json:"room,omitempty" gorm:"foreignKey:RoomID"`
	Events       []Event   `json:"events" gorm:"foreignKey:UserID;references:UserID"`
	PhoneNumber  string    `json:"phone_number" gorm:"size:15"`
	RegisteredAt time.Time `json:"registered_at" gorm:"autoCreateTime"`
}
