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
        <form onSubmit={sendForm} className="select-form">
            <select className="month" name="month" value={month} onChange={changeMonth}>
                <option value=""> - miesiąc -</option>
                {monthsData ? monthsData.map((month: MonthEntity) => <option key={month.id} value={month.name}>{month.name}</option>) : []}
            </select>
            <Button text="sprawdź" to={urlMonth} name="select"></Button>
        </form>
    </>;
}
