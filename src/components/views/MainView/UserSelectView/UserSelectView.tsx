import React from "react";
import {SelectMonthView} from "./SelectMonthView/SelectMonthView";
import {SelectCountryView} from "./SelectCountryView/SelectCountryView";
import './UserSelectView.scss'
export const UserSelectView = () => {
    return (
        <div className="select-box">
        <SelectMonthView/>
        <SelectCountryView/>
        </div>
    )
}

