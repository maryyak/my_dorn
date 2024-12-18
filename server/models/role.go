package models

// Role представляет роль пользователя в системе
type Role struct {
	RoleID   int    `json:"role_id" gorm:"primaryKey;autoIncrement"`
	RoleName string `json:"role_name" gorm:"size:20;unique;not null"`
	Users    []User `json:"users,omitempty" gorm:"foreignKey:RoleID;references:RoleID"`
}
