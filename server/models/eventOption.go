package models

type EventOption struct {
	OptionID   int    `json:"option_id" gorm:"primaryKey;autoIncrement"`
	EventID    int    `json:"-" gorm:"not null"`
	Event      Event  `json:"-" gorm:"foreignKey:EventID;references:EventID"`
	OptionText string `json:"text" gorm:"size:255;not null"`
	Votes      int    `json:"votes" gorm:"default:0"`
}
