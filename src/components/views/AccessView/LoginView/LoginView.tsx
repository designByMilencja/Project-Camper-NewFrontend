import React, {useMemo, useState} from "react";
import {LoginEntity} from "types";
import {apiUrl} from "../../../../config/api";
import {useForm} from "../../../../hooks/useForm";
import {useNavigate} from "react-router-dom";
import {handleErrors} from "../../../../utils/handleErrors";
import {Button} from "../../../common/Button/Button";
import {StatusResponse} from "../../../feature/StatusResponse/StatusResponse";
import {LoadingView} from "../../LoadingView/LoadingView";
import {InputField} from "../../../common/InputField/InputField";

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
            <form className="form" onSubmit={sendForm}>
                <h4>Formularz logowania</h4>
                <InputField label="Login:" type="text" name="login" value={user.login} onChange={setUser}
                            required={true} minLength={3} maxLength={40}/>
                <InputField label="Hasło:" type="password" name="password" value={user.password} onChange={setUser}
                            required={true} minLength={3} maxLength={60}/>
                <label>Hasło:</label>
                <Button text="Zaloguj" name="btn"/>
                <StatusResponse code={status} keyCategory="error"/>
            </form>
        }
    </>)
}
