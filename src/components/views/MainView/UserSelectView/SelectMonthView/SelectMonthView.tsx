import React, {useState} from "react";
import '../UserSelectView.scss'
import {apiUrl} from "../../../../../config/api";
import {MonthEntity} from 'types';
import {useFetchAndLoading} from "../../../../../hooks/useFetchAndLoading";
import {Button} from "../../../../common/Button/Button";
import {LoadingView} from "../../../LoadingView/LoadingView";

export const SelectMonthView = () => {
    const [month, setMonth] = useState<string>('');
    const [monthsData, isLoadingMonthData] = useFetchAndLoading<MonthEntity[] | null, boolean>(`${apiUrl}/month`);

    const changeMonth = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setMonth(e.target.value)
    };
    const sendForm = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
    }
    const urlMonth = `/month/${month}`;
    if (isLoadingMonthData) return <LoadingView/>
    return <>
        <form onSubmit={sendForm} className="form">
            <h3>Wybierz miesiąc</h3>
            <select name="month" value={month} onChange={changeMonth}>
                <option value=""></option>
                {monthsData ? monthsData.map((month: MonthEntity) => <option key={month.id} value={month.name}>{month.name}</option>) : []}
            </select>
            <Button text="Sprawdź" to={urlMonth} name="btn"></Button>
        </form>
    </>;
}
