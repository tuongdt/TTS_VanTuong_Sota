window.addEventListener("scroll", function () {
    const topBar = document.querySelector(".top-bar");
    const navBar = document.querySelector(".nav-bar");
    const body = document.body;

    if (window.scrollY > 35) {
      topBar.style.display = "none";
      navBar.classList.add("fixed");
      body.classList.add("nav-fixed");
    } else {
      topBar.style.display = "flex";
      navBar.classList.remove("fixed");
      body.classList.remove("nav-fixed");
    }
  });