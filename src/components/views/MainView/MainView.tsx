import React from "react"
import './MainView.scss'
import {ChartView} from "./ChartView/ChartView";
import {UserSelectView} from "./UserSelectView/UserSelectView";
import {Subtitle} from "../../common/Subtitle/Subtitle";

export const MainView = () => {
    return (<>
        <main>
            <div className="chart">
                <div className="text-box">
                    <Subtitle color="#5C647F"
                              text="Sprawdź wydatki w wybranym kraju lub miesiącu w podziale na kategorie"/>
                </div>
                <ChartView/>
            </div>
            <div className="choose">
                <UserSelectView/>
            </div>
        </main>
    </>)
}
