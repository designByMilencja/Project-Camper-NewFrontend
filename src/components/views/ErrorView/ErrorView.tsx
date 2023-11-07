import React from "react";
import './Error.scss';
import {Button} from "../../common/Button/Button";

interface Props {
    text: string;
}

export const ErrorView = (props: Props) => {
    return (<>
            <h3>{props.text}</h3>
            <div className="error-box">
                <div className="error-img"/>
                <Button to="/" name="btn" text="Powrót na stronę główną"/>
            </div>
        </>
    )
}
