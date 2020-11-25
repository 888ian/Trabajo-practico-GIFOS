let searchBars = document.getElementById("searchBar");
let searchBtn = document.getElementById("searchBtn");
const apikey = "32JqrYMH5Gim2ivIe1qlQejBjP3VzXXQ";
const containerGifs = document.getElementById("container-gifs");

async function autocomplete(nombreAuto) {
  console.clear();
  let urlSearch = `https://api.giphy.com/v1/gifs/search/tags?api_key=${apikey}&q=${nombreAuto}&limit=5`;
  const resp = await fetch(urlSearch);
  const data = await resp.json();
  try {
    for (let i = 0; i < 5; i++) {
      console.log(data.data[i].name);
    }
  } catch (error) {
    console.log("no hay nada relacionado");
  }
  //createStructure(quote);
}

searchBars.addEventListener("input", () => autocomplete(searchBars.value));

async function createStructure(element) {
  document.getElementById("quoteDiv").innerHTML = element;
}

