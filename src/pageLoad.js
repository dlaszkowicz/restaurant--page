import createRestaurantHomePage from "./restaurant";
import createRestaurantMenuPage from "./menu";
import createRestaurantContactPage from "./contact";

function initialLoad() {
  /* createRestaurantHomePage(); */
  createRestaurantContactPage();
  /* createRestaurantMenuPage(); */
  menuBtn.addEventListener("click", function () {
    createRestaurantMenuPage();
  });
}

export default initialLoad;
