const createRestaurantHomePage = () => {
  const container = document.querySelector(".container");

  const imgHolder = document.createElement("div");
  imgHolder.classList.add("img-holder");
  container.appendChild(imgHolder);

  const img = document.createElement("img");
  img.src = "../images/logo.png";
  img.width = "560";
  img.height = "392";

  const imgText = document.createElement("p");
  imgText.innerHTML = `Savor artisanal burger bliss, where each<br>
  bite reveals a symphony of flavors tailored<br>
  to delight.`;
  imgHolder.appendChild(img);
  imgHolder.appendChild(imgText);

  const btnBookNow = document.createElement("button");
  btnBookNow.textContent = "BOOK NOW";
  btnBookNow.classList.add("book-now");
  container.appendChild(btnBookNow);
};
export default createRestaurantHomePage;
