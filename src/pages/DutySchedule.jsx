import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../components/UserProvider";

const DutySchedule = () => {
    const { userData } = useContext(UserContext);
    const [photo, setPhoto] = useState('/assets/images/dutySchedule.jpg'); // Начальное изображение

    // Загрузка сохраненного изображения из localStorage при монтировании
    useEffect(() => {
        const savedPhoto = localStorage.getItem("dutySchedulePhoto");
        if (savedPhoto) {
            setPhoto(savedPhoto); // Если картинка есть в localStorage, используем её
        }
    }, []);

    const handlePhotoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const result = reader.result;
                setPhoto(result); // Устанавливаем изображение в стейт
                localStorage.setItem("dutySchedulePhoto", result); // Сохраняем изображение в localStorage
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="App">
            <div className="container">
                {userData.userType === "resident" && (
                    <>
                        <div className="rules-title">Текущее расписание</div>
                        <img src={photo} alt="schedule" />
                    </>
                )}
                {userData.userType === "dormHead" && (
                    <>
                        <div className="rules-title">Текущее расписание</div>
                        <img
                            src={photo}
                            alt="User Schedule"
                            style={{ cursor: "pointer" }}
                            onClick={() => document.getElementById("photoUpload").click()}
                        />
                        <input
                            type="file"
                            id="photoUpload"
                            accept="image/*"
                            style={{ display: "none" }}
                            onChange={handlePhotoUpload}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default DutySchedule;
