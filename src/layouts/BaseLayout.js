import React from "react";
import style from "./BaseLayout.module.css";

export const BaseLayout = ({ children }) => {
    return (
        <div className={style.mainWrapper}>
            <header>header data</header>
            <main>
                {children}
            </main>
            <footer>footer data</footer>
        </div>
    );
}