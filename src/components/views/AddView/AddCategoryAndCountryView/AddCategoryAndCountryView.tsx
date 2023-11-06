import React from "react";
import {AddCategoryView} from "./AddCategoryView/AddCategoryView";
import {AddCountryView} from "./AddCountryView/AddCountryView";
import {Button} from "../../../common/Button/Button";

export const AddCategoryAndCountryView = () => {
    return (<>
        <h3>Dodaj kategorię lub kraj, aby móc ewidencjonowac swoje wydatki 💰</h3>
        <div className="form-box">
            <AddCategoryView/>
            <AddCountryView/>
            <Button text="Dodaj wydatek" to="/add/payment" name="btn-add"/>
        </div>
    </>)

}
