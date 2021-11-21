import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const inputCountry = document.querySelector("#search-box");
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");

inputCountry.addEventListener("click", () => {
  fetchCountry()
    .then((name) => renderCountryName(name))
    .catch((error) => console.log(error));
});

function fetchCountry() {
    return fetch("https://restcountries.com/v3.1/")
        .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function renderCountryName(name) {
  const markup = name
    .map((name) => {
      return `<li>
          <p><b>Name</b>: ${name.official}</p>
          <p><b>Capital</b>: ${name.capital}</p>
          <p><b>Population</b>: ${name.population}</p>
          <p><b>Flags</b>: ${name.flags.svg}</p>
          <p><b>Languages</b>: ${name.languages}</p>
        </li>`;
    })
    .join("");
  countryList.innerHTML = markup;
}

fetch("https://restcountries.com/v3.1/name/USA")
  .then(response => {
    // Response handling
  })
  .then(data => {
    // Data handling
  })
  .catch(error => {
    // Error handling
  });
