import React from "react";
import "./Navbar.scss"
import {Button} from "../../common/Button/Button";

const Navbar = () => {
    return (
        <nav>
            <a href="/" className="logo">
                <img alt="logo-camper van" width={120} src="../../../camper-logo-mini.png"/>
            </a>
            <Button text="Logowanie" name="menu" to="access"/>
        </nav>
    );
}

export default Navbar;
