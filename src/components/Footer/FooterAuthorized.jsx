import React from 'react';

const FooterAuthorized = (props) => {
    const userType = props.userType;
    return (
        <div>
            {userType}
        </div>
    );
};

export default FooterAuthorized;