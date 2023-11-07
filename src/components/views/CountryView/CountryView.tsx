import React from "react";
import {CountryEntity, CategoryEntity} from 'types';
import {useFetchAndLoading} from "../../../hooks/useFetchAndLoading";
import {useParams} from "react-router-dom";
import {ConverterView} from "../../feature/Converter/Converter";
import {SumAllCategoryInCountry} from "../../feature/Sum/SumAllCategoryInCountry";
import {CountrySumTableView} from "./CountrySumTableView";
import {Line} from "../../common/Line/Line";
import {ErrorView} from "../ErrorView/ErrorView";
import {LoadingView} from "../LoadingView/LoadingView";
import {apiUrl} from "../../../config/api";


export const CountryView = () => {
    const {country} = useParams();
    const [categoriesData, isLoadingCategories] = useFetchAndLoading<CategoryEntity[] | null, boolean>(`${apiUrl}/category`);
    const [countriesData, isLoadingCountries] = useFetchAndLoading<CountryEntity[] | null, boolean>(`${apiUrl}/country`);
    const allowCountries = countriesData?.map((country: CountryEntity) => country.name) ?? [];
    const [chosenCountry] = countriesData?.filter((chosenCountry: CountryEntity) => chosenCountry.name === country).map((chosenCountry: CountryEntity) => chosenCountry.id) ?? [];

    if (isLoadingCountries || isLoadingCategories) return <LoadingView/>
    return (<>
        {country && allowCountries.includes(country.toUpperCase()) ?
            <>
                <h3>Wydatki 2023 💰 Kraj: ${country.toUpperCase()}</h3>
                <div className="table">
                    <CountrySumTableView categoriesData={categoriesData} chosenCountry={chosenCountry}/>
                    <SumAllCategoryInCountry idCountry={chosenCountry}/>
                    <Line/>
                </div>
                <h3>Przelicz kwotę w PLN na EUR lub USD 💰</h3>
                <ConverterView/>
            </>
            :
            <ErrorView text="Wprowadź poprawną nazwę kraju, aby sprawdzić wydatki"/>}
        </>
    );
};
