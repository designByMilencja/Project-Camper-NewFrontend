import React from "react";
import './HeaderView.scss';
import {Datetime} from "./DateTime/Datetime";

export const HeaderView = () => {
    return <>
        <header>
                <div className="shadow"></div>
                <div className="header-text">
                    <h1>Camper Cash</h1>
                    <h2>Zaplanuj wydatki w podróży</h2>
                    <Datetime/>
                </div>
        </header>
    </>
}
