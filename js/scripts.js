document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const titleContainer = document.getElementById("title-container");
  const contentWrapper = document.getElementById("content-wrapper");

  function toggleNavbarVisibility() {
    const titleContainerBottom = titleContainer.getBoundingClientRect().bottom;
    if (titleContainerBottom <= 0) {
      navbar.classList.add("navbar-visible");
      navbar.classList.remove("navbar-hidden");
    } else {
      navbar.classList.add("navbar-hidden");
      navbar.classList.remove("navbar-visible");
    }
  }

  function toggleContentVisibility() {
    const titleContainerBottom = titleContainer.getBoundingClientRect().bottom;
    if (titleContainerBottom <= 0) {
      contentWrapper.classList.add("visible");
    } else {
      contentWrapper.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", () => {
    toggleNavbarVisibility();
    toggleContentVisibility();
  });

  document
    .querySelector(".scroll-button")
    .addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });

  toggleNavbarVisibility(); // Initial check
  toggleContentVisibility(); // Initial check
});
