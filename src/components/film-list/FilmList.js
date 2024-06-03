import React from "react";
import {FilmItem} from "../film-item";
import styles from './FilmList.module.css'

export const FilmList = ({items,onFilmClick}) => {

    return (
        <div className={styles.listWrapper}>
            {items.map(item =>
                <div
                    className={styles.itemWrapper}
                    onClick={() => onFilmClick(item)}
                    key={item.id}>
                <FilmItem   {...item} />
            </div>)}
        </div>
    )
}