function menuPlay() {
    let menuMobile = document.querySelector(".menu-mobile");
    if (menuMobile.classList.contains("open")) {
      menuMobile.classList.remove("open");
      document.querySelector(".icon").src =
        "https://cdn.icon-icons.com/icons2/1527/PNG/48/menu_106637.png";
    } else {
      menuMobile.classList.add("open");
      document.querySelector(".icon").src =
        "https://cdn.icon-icons.com/icons2/1527/PNG/48/menu_106637.png";
    }
  }
  