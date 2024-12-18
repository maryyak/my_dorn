package models

import (
	"time"
)

type Event struct {
	EventID   int           `json:"id" gorm:"primaryKey;autoIncrement"`
	Title     string        `json:"title" gorm:"size:255;not null"`
	UserID    int           `json:"user_id" gorm:"not null"`
	User      User          `json:"user" gorm:"foreignKey:UserID;references:UserID"`
	EventDate time.Time     `json:"date" gorm:"not null"`
	Options   []EventOption `json:"options" gorm:"foreignKey:EventID;references:EventID"`
	CreatedAt time.Time     `json:"created_at" gorm:"autoCreateTime"`
}
