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
    const urlCountry = `/country/${country}`;
    if (isLoadingCountriesData) return <LoadingView/>
    return <>
        <form onSubmit={sendForm} className="select-form">
            <select className="country" name="country" onChange={changeCountry} value={country}>
                <option value=""> - kraj -</option>
                {countriesData ? countriesData.map((country: CountryEntity) => <option key={country.id}
                                                                                       value={country.name}>{country.name}</option>) : []}
            </select>
            <Button text="sprawdź" to={urlCountry} name="select"></Button>
        </form>
    </>;
}
