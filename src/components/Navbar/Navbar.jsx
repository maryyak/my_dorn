import React, {useContext} from 'react';
import NavbarUnauthorized from "./NavbarUnauthorized";
import NavbarAuthorized from "./NavbarAuthorized";
import {UserContext} from "../UserProvider";

const Navbar = () => {
    const { userData } = useContext(UserContext);

    if (userData.userType === 'unauthorized') {
        return <NavbarUnauthorized/>;
    }
    else {
        return <NavbarAuthorized userData={userData}/>
    }
};

export default Navbar;