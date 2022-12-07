import { Movie, CountryInfo, FilmInfo } from "./types";
import { getCountry, getMovie } from "./app";
const movieInput = document.getElementById("movie");
const movieBtn = document.getElementById("movie-btn");
const movieContainer = document.getElementById("movie-container");
const calculateBtn = document.getElementById("calculate-btn");
const firstInput = document.getElementById("first");
const secondInput = document.getElementById("second");
const thirdInput = document.getElementById("third");
const movieInfo = document.getElementById("movie-info");
async function getMovies() {
  movieContainer!.innerHTML = "";
  let name = (<HTMLInputElement>movieInput).value;
  const result = await getMovie(name);
  const actorNames: string = result.Actors.split(", ")
    .map((e: string) => e.split(" ")[0])
    .join(", ");
  const countries: string[] = result.Country.split(", ");
  const countryInfo: CountryInfo[] = await Promise.all(
    countries.map((country) => getCountry(country))
  ).then((data) => {
    return data.map((elem) => {
      return {
        flagUrl: elem[0].flags.png,
        currency: Object.keys(elem[0].currencies)[0],
      };
    });
  });
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  wrapper.innerHTML = `
        <div>${new Date().getFullYear() - Number(result.Year)} years ago</div>
        <div>Actors: ${actorNames}</div>
        <div class='country'>${countries}</div>
        <div class='currency'>${countryInfo.map((elem) => elem.currency)}</div>
        <div class='flags'><img src=${
          countryInfo[0].flagUrl
        } style="width: 2rem; height:2rem"; margin: 1rem></div>
        <hr>
        `;
  movieContainer?.appendChild(wrapper);
}
async function calculate() {
  movieInfo!.innerHTML = "";
  let movieNames: string[] = [
    (<HTMLInputElement>firstInput).value,
    (<HTMLInputElement>secondInput).value,
    (<HTMLInputElement>thirdInput).value,
  ];
  const filmsStat: Movie[] = await Promise.all(
    movieNames.map((movieName) => getMovie(movieName))
  ).then((filmInfo) => {
    return filmInfo;
  });
  const statistics: FilmInfo[] = filmsStat.map((film) => ({
    duration: parseInt(film.Runtime),
    country: String(film.Country),
  }));
  const countriesArr: string[] = [
    ...new Set(statistics.map((film) => film.country.split(", ")).flat()),
  ];
  const runtime: number = statistics.reduce(
    (acc, curr) => (acc += curr.duration),
    0
  );
  const population: number = await Promise.all(
    countriesArr.map((country) => getCountry(country))
  ).then((data) => {
    return data
      .map((country) => country[0].population)
      .reduce((acc, curr) => {
        return (acc += curr);
      }, 0);
  });
  movieInfo!.innerHTML = `
  <div class='runtime'>${runtime} minutes long</div>
  <div class='pop'>Sum of population:${population}</div>
  `;
}
movieBtn!.addEventListener("click", getMovies);
calculateBtn!.addEventListener("click", calculate);
