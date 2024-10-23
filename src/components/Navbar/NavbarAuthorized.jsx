import React from 'react';

const NavbarAuthorized = (props) => {
    const userType = props.userType;
    return (
        <div>
            {userType}
        </div>
    );
};

export default NavbarAuthorized;