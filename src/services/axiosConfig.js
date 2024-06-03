import axios from "axios";

export const AXIOS = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers:{
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDc1OTNlMjM1MWIxNGI4N2IyZmUwOGNmN2U3ZWY2ZiIsInN1YiI6IjY2NWI3YThjYzk2Mjc5ODE4ODQzNzcwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zqxxS1RudMWK1NZcIWINOrPS3F8c01DCxCnT71S_aek`
    }
});