package models

type Room struct {
	RoomID     int    `json:"room_number" gorm:"primaryKey"`
	Capacity   int    `json:"capacity"`
	OccupiedBy []User `json:"occupied_by" gorm:"foreignKey:User.RoomID;references:RoomID"`
}
