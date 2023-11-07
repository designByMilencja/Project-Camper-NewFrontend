import React from "react";
import {useEffect, useState} from "react";

export const Datetime = () => {
    const [datetime, setDatetime] = useState<Date>(new Date());
    useEffect(() => {
        setInterval(() => {
            setDatetime(new Date())
        }, 1000)
    })
    return (
        <div className="date">
            <p>Aktualne miejsce: Teneryfa</p>
            <p> {datetime.toLocaleString()}</p>
        </div>
    )
}
