import React, {useEffect, useState} from "react";
import {FilmList} from "../../components";
import {genresService, moviesService} from "../../services";
import styles from "./Home.module.css"
import {useHistory} from "react-router-dom";

export const Home = () => {
    const history =useHistory();
    const [moviesList, setMoviesList] = useState([]);
    const [isLoading, setLoading] = useState(null);

    const fetchMovies = async () => {
        try {

            const {results, page, total_pages, total_results} = await moviesService.getMovies();
            return results;
        } catch (e) {
            console.error(e);
        }

    }
    const fetchGenres = async () =>{
        try {
            const {genres} = await genresService.getGenres();
            // console.table(genres);
            return genres;
        } catch (e) {
            console.error(e);
        }
    }
    const fetchMoviesData = async () => {
        const requests = [fetchMovies(), fetchGenres()];
        try {
            setLoading(true);
            const [movies, genres] = await Promise.all(requests);
            const mergedWithGenresMovies = movies.map((movie) => {
                const {genre_ids} = movie;
                const movieGenresList = genre_ids.map(genreId => genres.find(el => el.id === genreId));
                return {
                    ...movie,
                    movieGenresList,
                }
            })
            // console.log(mergedWithGenersMovies);
            setMoviesList(mergedWithGenresMovies);
        }catch (e) {
            console.error(e);
        }finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchMoviesData();
    }, []);
    const renderLoadingIndicator = () => {
        <div className={styles.loading}>Loading...</div>
    }
    const onFilmClick = (film) => {
        history.push(`/movie/${film.id}`)

    }
    return (
        <div>
            {/*{isLoading != null && !isLoading && moviesList.length && 'no data found'}*/}
            {/*{true ? renderLoadingIndicator() : <FilmList/>}*/}
            {isLoading || isLoading === null? renderLoadingIndicator() : (
                <FilmList
                    onFilmClick={onFilmClick}
                    items={moviesList}/>)}

        </div>)
}