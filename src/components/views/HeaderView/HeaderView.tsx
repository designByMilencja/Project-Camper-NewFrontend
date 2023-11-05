import React from "react";
import './HeaderView.scss';
import {Datetime} from "./DateTime/Datetime";
import {Subtitle} from "../../common/Subtitle/Subtitle";

export const HeaderView = () => {
    return <>
        <header>
            <div className="header-box">
                <div className="shadow"></div>
                <div className="header-text">
                    <h1 className="title">Camper Cash</h1>
                    <Subtitle text="Zaplanuj wydatki w podróży"/>
                    <Datetime/>
                </div>
            </div>
        </header>
    </>
}
