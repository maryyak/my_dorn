import React, {useContext} from 'react';
import styles from './UserProfile.module.css';
import {UserContext} from "../../UserProvider";

const UserProfile = () => {
    const { userData } = useContext(UserContext);

    return (
        <div className={`${styles.user} row-container`}>
            <div className={`${styles.userNotifications}`}>
                <img src="/assets/images/notifications.png" alt="notifications"/>
            </div>
            <div className={`${styles.userInfo} row-container`}>
                <div className={`${styles.userName}`}>
                    {userData.firstName}
                    &nbsp;{userData.lastName}
                </div>
                <div className={`${styles.userPhoto}`}>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;