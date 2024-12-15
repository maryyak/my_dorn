import React, { useContext, useState } from 'react';
import { UserContext } from "../components/UserProvider";

const DutySchedule = () => {
    const { userData } = useContext(UserContext);
    const [photo, setPhoto] = useState('/assets/images/dutySchedule.jpg'); // Начальное изображение

    const handlePhotoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setPhoto(reader.result); // Устанавливаем изображение в стейт
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="App">
            <div className="container">
                {userData.userType === 'resident' && (
                    <>
                        <div className="rules-title">Текущее расписание</div>
                        <img src={photo} alt="schedule" />
                    </>
                )}
                {userData.userType === 'dormHead' && (
                    <>
                        <div className="rules-title">Текущее расписание</div>
                        <img
                            src={photo}
                            alt="User Schedule"
                            style={{cursor: 'pointer'}}
                            onClick={() => document.getElementById('photoUpload').click()}
                        />
                        <input
                            type="file"
                            id="photoUpload"
                            accept="image/*"
                            style={{display: 'none'}}
                            onChange={handlePhotoUpload}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default DutySchedule;
