import React from "react";
import {Button} from "../../common/Button/Button";
import {LoginView} from "./LoginView/LoginView";
import './AccessView.scss';

export const AccessView = () => {
    return <div className="login">
        <LoginView/>
        <p className="ask">Nie masz jeszcze konta?</p>
        <Button text="Zarejestruj się" to="/registration" name="signin-btn"/>
    </div>
}
