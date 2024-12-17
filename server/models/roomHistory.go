package models

import "time"

type RoomHistory struct {
	HistoryID int        `json:"history_id" gorm:"primaryKey;autoIncrement"`
	UserID    int        `json:"user_id"`
	User      User       `json:"user" gorm:"foreignKey:UserID"`
	RoomID    int        `json:"room_id"`
	Room      Room       `json:"room" gorm:"foreignKey:RoomID"`
	CheckIn   time.Time  `json:"check_in"`
	CheckOut  *time.Time `json:"check_out,omitempty"`
}
