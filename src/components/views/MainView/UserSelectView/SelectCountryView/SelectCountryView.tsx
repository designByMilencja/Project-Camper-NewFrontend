import React, {useState} from "react";
import {CountryEntity} from 'types';
import {apiUrl} from "../../../../../config/api";
import {useFetchAndLoading} from "../../../../../hooks/useFetchAndLoading";
import {Button} from "../../../../common/Button/Button";
import {LoadingView} from "../../../LoadingView/LoadingView";

export const SelectCountryView = () => {
    const [country, setCountry] = useState<string>('');
    const [countriesData, isLoadingCountriesData] = useFetchAndLoading<CountryEntity[] | null, boolean>(`${apiUrl}/country`);

    const changeCountry = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setCountry(e.target.value)
    };
    const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    const urlCountry =`/country/${country}`;
    if (isLoadingCountriesData) return <LoadingView/>
    return <>
        <form onSubmit={sendForm} className="form">
            <h3>Wybierz kraj</h3>
            <select name="country" onChange={changeCountry} value={country}>
                <option value=""></option>
                {countriesData ? countriesData.map((country: CountryEntity) => <option key={country.id}
                                                                                       value={country.name}>{country.name}</option>) : []}
            </select>
            <Button text="Sprawdź" to={urlCountry} name="btn"></Button>
        </form>
    </>;
}
