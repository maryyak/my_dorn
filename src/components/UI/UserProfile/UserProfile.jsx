import React, {useContext} from 'react';
import styles from './UserProfile.module.css';
import {UserContext} from "../../UserProvider";
import {Link} from "react-router-dom";

const UserProfile = () => {
    const { userData } = useContext(UserContext);

    return (
        <div className={`${styles.user} row-container`}>
            <Link to="/notifications" className={`${styles.userNotifications}`}>
                <img src="/assets/images/notifications.png" alt="notifications"/>
            </Link>
            <Link to="/account" className={`${styles.userInfo} row-container`}>
                <div className={`${styles.userName}`}>
                    {userData.firstName}
                    &nbsp;{userData.lastName}
                </div>
                <div className={`${styles.userPhoto}`}>
                </div>
            </Link>
        </div>
    );
};

export default UserProfile;