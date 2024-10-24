import React, { useContext } from 'react';
import {UserContext} from "../../App";
import FooterUnauthorized from "./FooterUnauthorized";
import FooterAuthorized from "./FooterAuthorized";

const Footer = () => {
    const { userType } = useContext(UserContext);
    if (userType === 'unauthorized') {
        return <FooterUnauthorized/>;
    }
    else {
        return <FooterAuthorized userType={userType}/>
    }

};

export default Footer;