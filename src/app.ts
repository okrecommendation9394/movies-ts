import { Movie, Country } from "./types";
export function getMovie(name: string): Promise<Movie> {
  return fetch(`https://www.omdbapi.com/?t=${name}&apikey=31bb3c78`).then(
    (data) => data.json()
  );
}
export function getCountry(country: string): Promise<Country[]> {
  return fetch(`https://restcountries.com/v3.1/name/${country}`).then((data) =>
    data.json()
  );
}
