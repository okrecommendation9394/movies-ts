/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCountry\": () => (/* binding */ getCountry),\n/* harmony export */   \"getMovie\": () => (/* binding */ getMovie)\n/* harmony export */ });\nfunction getMovie(name) {\r\n    return fetch(`https://www.omdbapi.com/?t=${name}&apikey=31bb3c78`).then((data) => data.json());\r\n}\r\nfunction getCountry(country) {\r\n    return fetch(`https://restcountries.com/v3.1/name/${country}`).then((data) => data.json());\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU87QUFDUCwrQ0FBK0MsS0FBSztBQUNwRDtBQUNPO0FBQ1Asd0RBQXdELFFBQVE7QUFDaEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZXMvLi9zcmMvYXBwLnRzPzIzOTkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldE1vdmllKG5hbWUpIHtcclxuICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly93d3cub21kYmFwaS5jb20vP3Q9JHtuYW1lfSZhcGlrZXk9MzFiYjNjNzhgKS50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvdW50cnkoY291bnRyeSkge1xyXG4gICAgcmV0dXJuIGZldGNoKGBodHRwczovL3Jlc3Rjb3VudHJpZXMuY29tL3YzLjEvbmFtZS8ke2NvdW50cnl9YCkudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.ts\n");

/***/ }),

/***/ "./src/script.ts":
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\nconst movieInput = document.getElementById(\"movie\");\r\nconst movieBtn = document.getElementById(\"movie-btn\");\r\nconst movieContainer = document.getElementById(\"movie-container\");\r\nconst calculateBtn = document.getElementById(\"calculate-btn\");\r\nconst firstInput = document.getElementById(\"first\");\r\nconst secondInput = document.getElementById(\"second\");\r\nconst thirdInput = document.getElementById(\"third\");\r\nconst movieInfo = document.getElementById(\"movie-info\");\r\nfunction getMovies() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        movieContainer.innerHTML = \"\";\r\n        let name = movieInput.value;\r\n        const result = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.getMovie)(name);\r\n        const actorNames = result.Actors.split(\", \")\r\n            .map((e) => e.split(\" \")[0])\r\n            .join(\", \");\r\n        const countries = result.Country.split(\", \");\r\n        const countryInfo = yield Promise.all(countries.map((country) => (0,_app__WEBPACK_IMPORTED_MODULE_0__.getCountry)(country))).then((data) => {\r\n            return data.map((elem) => {\r\n                return {\r\n                    flagUrl: elem[0].flags.png,\r\n                    currency: Object.keys(elem[0].currencies)[0],\r\n                };\r\n            });\r\n        });\r\n        const wrapper = document.createElement(\"div\");\r\n        wrapper.classList.add(\"wrapper\");\r\n        wrapper.innerHTML = `\r\n        <div>${new Date().getFullYear() - Number(result.Year)} years ago</div>\r\n        <div>Actors: ${actorNames}</div>\r\n        <div class='country'>${countries}</div>\r\n        <div class='currency'>${countryInfo.map((elem) => elem.currency)}</div>\r\n        <div class='flags'><img src=${countryInfo[0].flagUrl} style=\"width: 2rem; height:2rem\"; margin: 1rem></div>\r\n        <hr>\r\n        `;\r\n        movieContainer === null || movieContainer === void 0 ? void 0 : movieContainer.appendChild(wrapper);\r\n    });\r\n}\r\nfunction calculate() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        movieInfo.innerHTML = \"\";\r\n        let movieNames = [\r\n            firstInput.value,\r\n            secondInput.value,\r\n            thirdInput.value,\r\n        ];\r\n        const filmsStat = yield Promise.all(movieNames.map((movieName) => (0,_app__WEBPACK_IMPORTED_MODULE_0__.getMovie)(movieName))).then((filmInfo) => {\r\n            return filmInfo;\r\n        });\r\n        const statistics = filmsStat.map((film) => ({\r\n            duration: parseInt(film.Runtime),\r\n            country: String(film.Country),\r\n        }));\r\n        const countriesArr = [\r\n            ...new Set(statistics.map((film) => film.country.split(\", \")).flat()),\r\n        ];\r\n        const runtime = statistics.reduce((acc, curr) => (acc += curr.duration), 0);\r\n        const population = yield Promise.all(countriesArr.map((country) => (0,_app__WEBPACK_IMPORTED_MODULE_0__.getCountry)(country))).then((data) => {\r\n            return data\r\n                .map((country) => country[0].population)\r\n                .reduce((acc, curr) => {\r\n                return (acc += curr);\r\n            }, 0);\r\n        });\r\n        movieInfo.innerHTML = `\r\n  <div class='runtime'>${runtime} minutes long</div>\r\n  <div class='pop'>Sum of population:${population}</div>\r\n  `;\r\n    });\r\n}\r\nmovieBtn.addEventListener(\"click\", getMovies);\r\ncalculateBtn.addEventListener(\"click\", calculate);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0LnRzLmpzIiwibWFwcGluZ3MiOiI7O0FBQUEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQzZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw4Q0FBUTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSxnREFBVTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdEQUFnRDtBQUMvRCx1QkFBdUIsV0FBVztBQUNsQywrQkFBK0IsVUFBVTtBQUN6QyxnQ0FBZ0MseUNBQXlDO0FBQ3pFLHNDQUFzQyx3QkFBd0Isb0JBQW9CLGNBQWM7QUFDaEc7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSw4Q0FBUTtBQUNsRjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsZ0RBQVU7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EseUJBQXlCLFNBQVM7QUFDbEMsdUNBQXVDLFdBQVc7QUFDbEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92aWVzLy4vc3JjL3NjcmlwdC50cz9lODYxIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgZ2V0Q291bnRyeSwgZ2V0TW92aWUgfSBmcm9tIFwiLi9hcHBcIjtcclxuY29uc3QgbW92aWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW92aWVcIik7XHJcbmNvbnN0IG1vdmllQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3ZpZS1idG5cIik7XHJcbmNvbnN0IG1vdmllQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3ZpZS1jb250YWluZXJcIik7XHJcbmNvbnN0IGNhbGN1bGF0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsY3VsYXRlLWJ0blwiKTtcclxuY29uc3QgZmlyc3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlyc3RcIik7XHJcbmNvbnN0IHNlY29uZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWNvbmRcIik7XHJcbmNvbnN0IHRoaXJkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoaXJkXCIpO1xyXG5jb25zdCBtb3ZpZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vdmllLWluZm9cIik7XHJcbmZ1bmN0aW9uIGdldE1vdmllcygpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgbW92aWVDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBsZXQgbmFtZSA9IG1vdmllSW5wdXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgZ2V0TW92aWUobmFtZSk7XHJcbiAgICAgICAgY29uc3QgYWN0b3JOYW1lcyA9IHJlc3VsdC5BY3RvcnMuc3BsaXQoXCIsIFwiKVxyXG4gICAgICAgICAgICAubWFwKChlKSA9PiBlLnNwbGl0KFwiIFwiKVswXSlcclxuICAgICAgICAgICAgLmpvaW4oXCIsIFwiKTtcclxuICAgICAgICBjb25zdCBjb3VudHJpZXMgPSByZXN1bHQuQ291bnRyeS5zcGxpdChcIiwgXCIpO1xyXG4gICAgICAgIGNvbnN0IGNvdW50cnlJbmZvID0geWllbGQgUHJvbWlzZS5hbGwoY291bnRyaWVzLm1hcCgoY291bnRyeSkgPT4gZ2V0Q291bnRyeShjb3VudHJ5KSkpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGEubWFwKChlbGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYWdVcmw6IGVsZW1bMF0uZmxhZ3MucG5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5OiBPYmplY3Qua2V5cyhlbGVtWzBdLmN1cnJlbmNpZXMpWzBdLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwid3JhcHBlclwiKTtcclxuICAgICAgICB3cmFwcGVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2PiR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gTnVtYmVyKHJlc3VsdC5ZZWFyKX0geWVhcnMgYWdvPC9kaXY+XHJcbiAgICAgICAgPGRpdj5BY3RvcnM6ICR7YWN0b3JOYW1lc308L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdjb3VudHJ5Jz4ke2NvdW50cmllc308L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdjdXJyZW5jeSc+JHtjb3VudHJ5SW5mby5tYXAoKGVsZW0pID0+IGVsZW0uY3VycmVuY3kpfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2ZsYWdzJz48aW1nIHNyYz0ke2NvdW50cnlJbmZvWzBdLmZsYWdVcmx9IHN0eWxlPVwid2lkdGg6IDJyZW07IGhlaWdodDoycmVtXCI7IG1hcmdpbjogMXJlbT48L2Rpdj5cclxuICAgICAgICA8aHI+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBtb3ZpZUNvbnRhaW5lciA9PT0gbnVsbCB8fCBtb3ZpZUNvbnRhaW5lciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW92aWVDb250YWluZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBjYWxjdWxhdGUoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIG1vdmllSW5mby5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGxldCBtb3ZpZU5hbWVzID0gW1xyXG4gICAgICAgICAgICBmaXJzdElucHV0LnZhbHVlLFxyXG4gICAgICAgICAgICBzZWNvbmRJbnB1dC52YWx1ZSxcclxuICAgICAgICAgICAgdGhpcmRJbnB1dC52YWx1ZSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IGZpbG1zU3RhdCA9IHlpZWxkIFByb21pc2UuYWxsKG1vdmllTmFtZXMubWFwKChtb3ZpZU5hbWUpID0+IGdldE1vdmllKG1vdmllTmFtZSkpKS50aGVuKChmaWxtSW5mbykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZmlsbUluZm87XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgc3RhdGlzdGljcyA9IGZpbG1zU3RhdC5tYXAoKGZpbG0pID0+ICh7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiBwYXJzZUludChmaWxtLlJ1bnRpbWUpLFxyXG4gICAgICAgICAgICBjb3VudHJ5OiBTdHJpbmcoZmlsbS5Db3VudHJ5KSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgY29uc3QgY291bnRyaWVzQXJyID0gW1xyXG4gICAgICAgICAgICAuLi5uZXcgU2V0KHN0YXRpc3RpY3MubWFwKChmaWxtKSA9PiBmaWxtLmNvdW50cnkuc3BsaXQoXCIsIFwiKSkuZmxhdCgpKSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IHJ1bnRpbWUgPSBzdGF0aXN0aWNzLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiAoYWNjICs9IGN1cnIuZHVyYXRpb24pLCAwKTtcclxuICAgICAgICBjb25zdCBwb3B1bGF0aW9uID0geWllbGQgUHJvbWlzZS5hbGwoY291bnRyaWVzQXJyLm1hcCgoY291bnRyeSkgPT4gZ2V0Q291bnRyeShjb3VudHJ5KSkpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgICAgICAgICAgIC5tYXAoKGNvdW50cnkpID0+IGNvdW50cnlbMF0ucG9wdWxhdGlvbilcclxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChhY2MgKz0gY3Vycik7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1vdmllSW5mby5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz0ncnVudGltZSc+JHtydW50aW1lfSBtaW51dGVzIGxvbmc8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPSdwb3AnPlN1bSBvZiBwb3B1bGF0aW9uOiR7cG9wdWxhdGlvbn08L2Rpdj5cclxuICBgO1xyXG4gICAgfSk7XHJcbn1cclxubW92aWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldE1vdmllcyk7XHJcbmNhbGN1bGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FsY3VsYXRlKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/script.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.ts");
/******/ 	
/******/ })()
;