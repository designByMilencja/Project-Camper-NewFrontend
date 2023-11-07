import React, {useEffect, useState} from "react";
import "./Navbar.scss"
import {Button} from "../../common/Button/Button";
import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const url = useLocation();
    const navigate = useNavigate();
    const [isLogged, setIsLogged] = useState<boolean>(false);
    console.log(isLogged)
    function logout() {
        sessionStorage.removeItem('token');
        navigate('/');
        setIsLogged(false);
    }

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
    }, [url.pathname])

    return (
        <nav>
            <a href="/" className="logo">
                <img alt="logo-camper van" width={120} src="../../../camper-logo-mini.png"/>
            </a>
            {!isLogged ? (
                    (url.pathname === "/access") ?
                        (<Button text="Zarejestruj się" name="menu" to="/registration"/>)
                        :
                        (<Button text="Zaloguj się" name="menu" to="/access"/>))
                :
                (<Button name="btn" text="Wyloguj" onClick={logout}/>)
            }

        </nav>
    );
}

export default Navbar;
