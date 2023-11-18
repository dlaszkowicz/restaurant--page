import createRestaurantHomePage from "./restaurant";
import createRestaurantMenuPage from "./menu";
import createRestaurantContactPage from "./contact";

function initialLoad() {
  const contentArea = document.querySelector(".content-area");
  function clearContainer() {
    contentArea.innerHTML = "";
  }
  const container = document.querySelector(".container");

  const navBar = document.createElement("nav");
  container.appendChild(navBar);

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";

  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";

  navBar.appendChild(menuBtn);
  navBar.appendChild(homeBtn);
  navBar.appendChild(contactBtn);

  createRestaurantHomePage();

  menuBtn.addEventListener("click", function () {
    clearContainer();
    createRestaurantMenuPage();
  });
  homeBtn.addEventListener("click", function () {
    clearContainer();
    createRestaurantHomePage();
  });
  contactBtn.addEventListener("click", function () {
    clearContainer();
    createRestaurantContactPage();
  });
}

export default initialLoad;
