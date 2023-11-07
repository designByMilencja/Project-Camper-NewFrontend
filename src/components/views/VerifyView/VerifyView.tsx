import React from "react";
import "./VerifyView.scss";
import img from "../../../img/envelop.png";

export const VerifyView = () => {
    return (<>
        <h3>Dziękujemy za rejestrację!</h3>
        <div className="verify-view">
            <div className="verify">
            <h4>Na podany przez Ciebie adres email został wysłany link weryfikacyjny.</h4>
            <img src={img} width={120} height={120} alt="Koperta symbolizująca mail z wysłanym linkiem weryfikacyjnym"/>
            <p>Kliknij w niego, aby dokończyć proces rejestracji!</p>
            </div>
        </div>
    </>)
}
