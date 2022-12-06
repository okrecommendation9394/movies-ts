var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const movieInput = document.getElementById("movie");
const movieBtn = document.getElementById("movie-btn");
const movieContainer = document.getElementById("movie-container");
const calculateBtn = document.getElementById("calculate-btn");
const firstInput = document.getElementById("first");
const secondInput = document.getElementById("second");
const thirdInput = document.getElementById("third");
const movieInfo = document.getElementById("movie-info");
function getMovies() {
    movieContainer.innerHTML = "";
    let name = movieInput.value;
    fetch(`http://www.omdbapi.com/?s=${name}&apikey=31bb3c78`)
        .then((response) => response.json())
        .then((data) => {
        const movies = data.Search;
        movies === null || movies === void 0 ? void 0 : movies.forEach((movie) => {
            getDetails(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=31bb3c78`).then((data) => {
                const namesArr = data.Actors.split(", ").map((elem) => elem.split(" ")[0]);
                const countries = data.Country.split(", ");
                const wrapper = document.createElement("div");
                wrapper.classList.add("wrapper");
                wrapper.innerHTML = `
        <div>${new Date().getFullYear() - data.Year} years ago</div>
        <div>Actors: ${namesArr.join(", ")}</div>
        <div class='country'>${countries}</div>
        <div class='currency'></div>
        <div class='flag'></div>
        <hr>
        `;
                movieContainer.appendChild(wrapper);
                addFlagsAndCurr(countries, wrapper.children[3], wrapper.children[4]);
            });
        });
    });
}
function getDetails(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(url);
        const data = yield res.json();
        return data;
    });
}
function addFlagsAndCurr(arr, parent, flagContainer) {
    const newArr = [...arr];
    newArr.forEach((elem) => {
        getDetails(`https://restcountries.com/v3.1/name/${elem}`)
            .then((response) => {
            const currency = Object.values(Object.entries(response[0].currencies)[0][1]).join(" ");
            const flagSrc = response[0].flags.png;
            const obj = {
                currency: currency,
                flag: flagSrc,
            };
            return obj;
        })
            .then((data) => {
            parent.innerHTML += `${data.currency}, `;
            const img = document.createElement("img");
            img.setAttribute("src", data.flag);
            flagContainer.appendChild(img);
        });
    });
}
function calculate() {
    movieInfo.innerHTML = "";
    let arr = [
        firstInput.value,
        secondInput.value,
        thirdInput.value,
    ];
    let movieIds = [];
    let countriesCalc = [];
    let runtime = 0;
    let population = 0;
    arr.forEach((elem, index) => {
        getDetails(`https://www.omdbapi.com/?s=${elem}&apikey=31bb3c78`).then((response) => {
            movieIds.push(response.Search[0].imdbID);
            getDetails(`https://www.omdbapi.com/?i=${response.Search[0].imdbID}&apikey=31bb3c78`).then((response) => {
                countriesCalc.push(...response.Country.split(", "));
                let uniqueCountries = [...new Set(countriesCalc)];
                const movieLength = response.Runtime.split(" ")[0];
                runtime += Number(movieLength);
                movieInfo.innerHTML = `
          <div>${runtime} minutes long</div>
          <div></div>
          `;
                uniqueCountries.forEach((country) => {
                    getDetails(`https://restcountries.com/v3.1/name/${country}`).then((response) => {
                        population += Number(response[0].population);
                        (movieInfo.children[1]).innerText = `Sum of population: ${population}`;
                    });
                });
            });
        });
    });
}
movieBtn.addEventListener("click", getMovies);
calculateBtn.addEventListener("click", calculate);
export {};
