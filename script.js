const openMobileBtn = document.getElementById("open-modal-window");
const menuMobile = document.getElementById("mobile-window");
const closeMobileBtn = document.querySelector("#close-mobile-window");

openMobileBtn.addEventListener("click", () => {
  menuMobile.classList.add("is-open");
  console.log(menuMobile);
});

closeMobileBtn.addEventListener("click", () => {
  menuMobile.classList.remove("is-open");
  console.log(menuMobile);
});

const modalLinks = document.querySelectorAll("#mobile-window a");

modalLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuMobile.classList.remove("is-open");
  });
});
