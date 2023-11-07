import React, {useState} from "react";
import {CountryEntity, CategoryEntity, PaymentEntity} from 'types';
import {apiUrl} from "../../../../config/api";
import {handleErrors} from "../../../../utils/handleErrors";
import {useFetchAndLoading} from "../../../../hooks/useFetchAndLoading";
import {Button} from "../../../common/Button/Button";
import {LoadingView} from "../../LoadingView/LoadingView";
import {InputField} from "../../../common/InputField/InputField";
import {SelectCurrencyFromDatabase} from "./SelectCurrencyFromDatabase/SelectCurrencyFromDatabase";
import {SelectCountry} from "./SelectCountry/SelectCountry";
import {SelectCategory} from "./SelectCategory/SelectCategory";
import {StatusResponse} from "../../../feature/StatusResponse/StatusResponse";
import {ErrorMessage} from "../../../feature/ErrorMesage/ErrorMessage";

export const AddPaymentView = () => {
    const token: Readonly<string | null> = sessionStorage.getItem('token');
    const [form, setForm] = useState<PaymentEntity>({
        cost: 0,
        currency: '',
        boughtAt: '',
        idCountry: '',
        idCategory: '',
    });

    const [status, setStatus] = useState<number>(0);
    const [countriesData, isLoadingCountriesData] = useFetchAndLoading<CountryEntity[] | null, boolean>(`${apiUrl}/country`);
    const [categoriesData, isLoadingCategoriesData] = useFetchAndLoading<CategoryEntity[] | null, boolean>(`${apiUrl}/category`);
    const currencies = countriesData?.map((country: CountryEntity) => country.currency) ?? [];
    const noDoubleCurrencies = [...new Set(currencies)];

    const saveNewPayment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await fetch(`${apiUrl}/payment`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    ...form
                })
            })
            const status = res.status;
            setStatus(status)
            setForm({cost: 0, currency: '', boughtAt: '', idCategory: '', idCountry: ''})
        } catch (err) {
            handleErrors(err);
        }
    }
    const saveForm = (key: string, value: string) => {
        setForm(prevState => ({
            ...prevState,
            [key]: value,
        }))
    }
    const clearInput = () => {
        setStatus(0);
    }
    const chosenDate = new Date(form.boughtAt)
    const todayDate = new Date();

    if (isLoadingCategoriesData || isLoadingCountriesData) return <LoadingView/>
    return (
        <>
            <h3>Dodaj płatność, aby móc ewidencjonować swoje wydatki 💰</h3>
            <div className="form-box">
                <form className="form" onSubmit={saveNewPayment}>
                    <h4>Dodaj wydatek</h4>
                    {form.cost > 999999 ?
                        <ErrorMessage message="Płatność nie może być wyższa niż milion złotych"/> : null}
                    <InputField label="Kwota:" type="number" name="cost" value={form.cost}
                                onChange={e => saveForm('cost', e.target.value)} min={1} maxLength={999999}
                                onMouseDown={clearInput}
                                required/>
                    <SelectCurrencyFromDatabase form={form} noDoubleCurrencies={noDoubleCurrencies}
                                                saveForm={saveForm}/>
                    <InputField label="Data zakupu" type="date" name="date" value={form.boughtAt}
                                onChange={e => saveForm('boughtAt', e.target.value)} required/>
                    {form.boughtAt !== '' && chosenDate > todayDate ?
                        <ErrorMessage message="Data płatności nie może być z przyszłości"/> : null}
                    <SelectCountry form={form} countriesData={countriesData} saveForm={saveForm}/>
                    <SelectCategory form={form} categoriesData={categoriesData} saveForm={saveForm}/>
                    <Button text="Dodaj" name="btn"/>
                    <StatusResponse code={status} keyCategory="payment"/>
                </form>
            </div>
        </>)
}
