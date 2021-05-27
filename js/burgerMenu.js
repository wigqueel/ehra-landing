const bmBtn = document.querySelector(".bm-btn");
const bmMenu = document.querySelector(".bm-menu");
const burgerMenu = document.querySelector(".burger-menu");

function clickHandlerBurger() {
  bmMenu.classList.add("bm-menu-show");
  bmMenu.classList.add("bm-menu-active");
}

const dropdownStatus = (e) => {
  console.log(e.target.closest('.bm-menu'));
  console.log(e.target.tagName)
  if ((!e.target.closest('.bm-menu') && e.target.className !== "bm-btn" )|| e.target.tagName === 'A') {
    bmMenu.classList.remove("bm-menu-active");
    bmMenu.classList.remove("bm-menu-show");
  }
  
};

document.addEventListener("click", dropdownStatus);

bmBtn.addEventListener("click", clickHandlerBurger);
