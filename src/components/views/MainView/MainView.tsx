import React from "react"
import {UserSelectView} from "./UserSelectView/UserSelectView";

export const MainView = () => {
    return (<>
        <main>
            <h3>Sprawdź wydatki w wybranym kraju lub miesiącu w podziale na kategorie 💰</h3>
            <div className="form-box">
                <UserSelectView/>
            </div>
        </main>
    </>)
}
