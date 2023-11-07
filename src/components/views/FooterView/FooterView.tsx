import React from "react";
import "./FooterView.scss";

export const FooterView = () => {
    const year = new Date().getFullYear();
    return <>
        <footer>
            <h3>Camper Cash</h3>
            <div className="contact-logo">
                <div className="desc">
                    <p className="desc-title">Z tą aplikacją zaplanujesz swoją podróż, przewidując jakie wydatki
                        można
                        ponieść w poszczególnych krajach. Są one podzielone na kategorię oraz miesiące. Możesz
                        też przeliczyć PLN na EUR lub USD, aby wiedzieć jaką kwotę powinieneś wymienić na podróż.</p>
                </div>
            </div>

            <div className="contact-links">
                <div className="logo-box">
                    <img className="logo" src="../../../camper-logo-mini.png" alt="camper-logo"/>
                </div>
                <ul className="link-box">
                    <li className="link"><a href="/registration">Zarejestruj się</a></li>
                    <li className="link"><a href="/access">Zaloguj się</a></li>
                    <li className="link"><a href="https://van-life-kohl.vercel.app/" target="_blank">Camper Van Life</a></li>
                    <li className="link"><a href="portfolio" target="_blank">Zakup strony internetowej</a></li>
                    <li className="link"><a href="https://pixabay.com/pl/users/texler-3778340/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2450337" target="_blank">Obrazy Jannik Texler Pixabay</a></li>
                    <li className="link"><a href="https://pixabay.com/pl/users/stocksnap-894430/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=925610" target="_blank">Obraz StockSnap Pixabay</a></li>
                    <li className="link"><a href="https://pixabay.com/pl/users/elisariva-1348268/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1700515" target="_blank">Obraz Elisa Pixabay</a></li>
                </ul>
            </div>
            <p className="footer">
                &copy; Copyright {year} <a href="https://github.com/designByMilencja/" className="brand">DesignByMilencja </a>
            </p>
        </footer>
    </>
}
