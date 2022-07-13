/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const showButton = document.getElementById("show");
const renderCard = (brand) => {
  const card = document.createElement("div");
  const brandNameEl = document.createElement("h2");
  const listEl = document.createElement("ul");

  brandNameEl.textContent = brand.brand;
  brand.models.forEach((model) => {
    const modelEl = document.createElement("li");
    modelEl.textContent = model;
    listEl.append(modelEl);
  });

  brandNameEl.style.textAlign = "center";
  brandNameEl.style.color = "blue";
  card.className = "card";
  card.style.backgroundColor = "#f3f3f3";
  card.append(brandNameEl, listEl);
  document.getElementById("output").append(card);
};

showButton.addEventListener("click", () => {
  document.getElementById("output").textContent = "";
  fetch(ENDPOINT)
    .then((resp) => resp.json())
    .then((response) => {
      console.log(response);
      response.forEach((brand) => renderCard(brand));
    })
    .catch((error) => {
      console.error(error);
    });
});
