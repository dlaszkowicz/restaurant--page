const nav = () => {
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
};
export default nav;
