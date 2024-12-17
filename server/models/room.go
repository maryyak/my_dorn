package models

import "time"

type Room struct {
	RoomID      int       `json:"room_id" gorm:"primaryKey;autoIncrement"`
	RoomNumber  int       `json:"room_number" gorm:"unique;not null"`
	Capacity    int       `json:"capacity" gorm:"not null"`
	Description string    `json:"description,omitempty"`
	CreatedAt   time.Time `json:"created_at" gorm:"autoCreateTime"`
	Users       []User    `json:"users,omitempty" gorm:"foreignKey:RoomID"`
}
