const createRestaurantMenuPage = () => {
  const container = document.querySelector(".content-area");
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  container.appendChild(menuContainer);

  const menuSlot1 = document.createElement("div");

  const img1 = document.createElement("img");
  img1.src = "../images/menu-1.png";
  img1.width = "300";
  img1.height = "200";
  menuSlot1.appendChild(img1);

  const text1 = document.createElement("p");
  text1.innerHTML = "BBQ Beef Burger <br> $7.20";
  menuSlot1.appendChild(text1);

  const menuSlot2 = document.createElement("div");

  const img2 = document.createElement("img");
  img2.src = "../images/menu-2.png";
  img2.width = "300";
  img2.height = "200";
  menuSlot2.appendChild(img2);

  const text2 = document.createElement("p");
  text2.innerHTML = "Spicy Beef Burger <br> $5.20";
  menuSlot2.appendChild(text2);

  const menuSlot3 = document.createElement("div");

  const img3 = document.createElement("img");
  img3.src = "../images/menu-3.png";
  img3.width = "300";
  img3.height = "200";
  menuSlot3.appendChild(img3);

  const text3 = document.createElement("p");
  text3.innerHTML = "Classic Beef Burger <br> $6.20";
  menuSlot3.appendChild(text3);

  const menuSlot4 = document.createElement("div");

  const img4 = document.createElement("img");
  img4.src = "../images/menu-4.png";
  img4.width = "300";
  img4.height = "200";
  menuSlot4.appendChild(img4);

  const text4 = document.createElement("p");
  text4.innerHTML = "Cheese Beef Burger <br> $5.30";
  menuSlot4.appendChild(text4);

  menuContainer.appendChild(menuSlot1);
  menuContainer.appendChild(menuSlot2);
  menuContainer.appendChild(menuSlot3);
  menuContainer.appendChild(menuSlot4);
};
export default createRestaurantMenuPage;
