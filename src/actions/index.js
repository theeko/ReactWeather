import axios from "axios";

const API_KEY = "24e75b084aa0de4b90f0cffc6fe57bcd";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}