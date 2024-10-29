import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const initialUserData = {
    id: null,
    firstName: '',
    lastName: '',
    middleName: '',
    roomNumber: '',
    telegram: '',
    email: '',
    userType: 'unauthorized',
};

const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(initialUserData);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
