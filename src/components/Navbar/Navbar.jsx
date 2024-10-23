import React, { useContext } from 'react';
import {UserContext} from "../../App";
import NavbarUnauthorized from "./NavbarUnauthorized";
import NavbarAuthorized from "./NavbarAuthorized";

const Navbar = () => {
    const { userType } = useContext(UserContext);

    if (userType === 'unauthorized') {
        return <NavbarUnauthorized/>;
    }
    else {
        return <NavbarAuthorized userType={userType}/>
    }
};

export default Navbar;