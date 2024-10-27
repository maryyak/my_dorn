import React from 'react';

const NavbarAuthorized = ({userData}) => {
    return (
        <div>
            {userData.userType}
        </div>
    );
};

export default NavbarAuthorized;