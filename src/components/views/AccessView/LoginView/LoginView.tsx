import React, {useMemo, useState} from "react";
import {LoginEntity} from "types";
import {apiUrl} from "../../../../config/api";
import "../../AddView/AddView.scss";
import {useForm} from "../../../../hooks/useForm";
import {useNavigate} from "react-router-dom";
import {handleErrors} from "../../../../utils/handleErrors";
import {Button} from "../../../common/Button/Button";
import {StatusResponse} from "../../../feature/StatusResponse/StatusResponse";
import {LoadingView} from "../../LoadingView/LoadingView";

export const LoginView = () => {
    const [status, setStatus] = useState<number>(0);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useForm<LoginEntity>({
        login: '',
        password: '',
    });
    const navigate = useNavigate();
    const body = useMemo(() => JSON.stringify({...user}), [user]);
    const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch(`${apiUrl}/login`, {
                mode: 'cors',
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body,
            });

            if (response.ok) {
                const {token} = await response.json();
                sessionStorage.setItem('token', token);
                navigate('/add/category/country');
                setLoading(false);
            } else {
                setStatus(401);
                setLoading(false);
            }
        } catch (err) {
            handleErrors(err);
        }
    }
    return (<>
        {loading ? <LoadingView/> :
            <form id="login" className="form-login" onSubmit={sendForm}>
                <h3 className="h3-login">Formularz logowania</h3>
                <label>Login:</label>
                <input
                    type="text"
                    name="login"
                    value={user.login}
                    minLength={3}
                    maxLength={30}
                    onChange={setUser}
                    required
                />
                <label>Hasło:</label>
                <input
                    type="password"
                    name="password"
                    minLength={8}
                    maxLength={40}
                    value={user.password}
                    onChange={setUser}
                    required
                />
                <Button text="Zaloguj" name="login-btn"/>
                <StatusResponse code={status} keyCategory="error"/>
            </form>
        }
    </>)
}
