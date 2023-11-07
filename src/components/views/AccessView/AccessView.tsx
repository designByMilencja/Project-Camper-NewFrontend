import React from "react";
import {Button} from "../../common/Button/Button";
import {LoginView} from "./LoginView/LoginView";
import './AccessView.scss';

export const AccessView = () => {
    return (
        <>
            <h3>Zaloguj się, aby móc ewidencjonowac swoje wydatki 💰</h3>
            <div className="form-box">
                <LoginView/>
                <p className="ask">Nie masz jeszcze konta?</p>
                <Button text="Zarejestruj się" to="/registration" name="signin-btn"/>
            </div>
        </>
    )
}
