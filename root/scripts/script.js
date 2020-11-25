let searchBars = document.getElementById("searchBar");
let searchBtn = document.getElementById("searchBtn");
const apikey = "32JqrYMH5Gim2ivIe1qlQejBjP3VzXXQ";
const containerGifs = document.getElementById("container-gifs");

async function autocomplete(nombreAuto) {
  let urlSearch = `https://api.giphy.com/v1/gifs/search/tags?api_key=${apikey}&q=${nombreAuto}&limit=5`;
 
  const resp = await fetch(urlSearch);
  const data = await resp.json();
  console.log(nombreAuto);
  console.log(data);
  //createStructure(quote);
}

searchBars.addEventListener("input", () => autocomplete(searchBars.value));


async function createStructure(element) {
  document.getElementById("quoteDiv").innerHTML = element;
}






/*
function trending() {
  fetch(urlTrend)
    .then((resp) => resp.json())
    .then((json) => {
      console.log(json.data[0]);
      for (let index = 0; index < json.data.length; index++) {
        console.log(json.data[index].url);
        imagenTrending = json.data[index].images.original;
        addToDOM(imagenTrending, containerGifs, "fotos");
      }
    })
    .catch((e) => console.error("Falló el fetch", e));
}
function addToDOM(info, container, clase) {
  let img = document.createElement("img");
  img.setAttribute("src", info.url);
  container.appendChild(img);
  img.classList.add(clase);
  //evento que llama al moda
  img.addEventListener("click", Modal);
}
trending();
console.log(imagenTrending);
*/
