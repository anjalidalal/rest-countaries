let mainContainer = document.querySelector(".main-content");
let select = document.getElementById("filter-by-region");

function createBoxElements(data) {
  data.forEach(function (el) {
    //   console.log(el.name);

    let box = document.createElement("div");
    box.classList.add("box-container-styles");

    const flag = document.createElement("img");
    flag.classList.add("flag-image");
    flag.src = el.flag;

    const contentBox = document.createElement("div");
    contentBox.classList.add("content-box-styles");

    const countryName = document.createElement("h3");
    countryName.textContent = el.name;

    const population = document.createElement("p");
    population.textContent = "Population :" + el.population;

    const region = document.createElement("p");
    region.textContent = "Region :" + el.region;

    const capital = document.createElement("p");
    capital.textContent = "Capital :" + el.capital;

    contentBox.appendChild(countryName);
    contentBox.appendChild(population);
    contentBox.appendChild(region);
    contentBox.appendChild(capital);

    box.appendChild(flag);
    box.appendChild(contentBox);

    mainContainer.appendChild(box);
  });
}

fetch("https://restcountries.com/v2/all")
  .then(function (response) {
    return response.json();
  })
  .then(function (data1) {
    // console.log(data);
    createBoxElements(data1);
  });

select.addEventListener("change", (event) => {
  let filter = event.target.value;
  console.log(filter);

  fetch(`https://restcountries.com/v2/region/${filter}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data2) {
      //mainContainer.removeChild()
      mainContainer.innerHTML = "";
      createBoxElements(data2);
    });
});
