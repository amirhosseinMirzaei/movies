
const API_KEY="01bb346bd76b9f8f9f34c458cf1f5050"
const BASE_URL="https://api.themoviedb.org/3";
import React from 'react'

export const getPopularMovie= async ()=>{
    const response= await fetch(` ${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data= await response.json()
    return data.results;
}


export const searchMovies= async (query)=>{
    const response= await fetch(` ${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data= await response.json()
    return data.results;
}