import React from "react";
import {useEffect, useState} from "react";
import {Subtitle} from "../../../common/Subtitle/Subtitle";

export const Datetime = () => {
    const [datetime, setDatetime] = useState<Date>(new Date());
    useEffect(() => {
        setInterval(() => {
            setDatetime(new Date())
        }, 1000)
    })
    return (
        <>
            <Subtitle text="Aktualne miejsce: Teneryfa"/>
            <Subtitle text={datetime.toLocaleString()}/>
        </>
    )
}
