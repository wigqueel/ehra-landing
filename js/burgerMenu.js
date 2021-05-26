const bmBtn = document.querySelector(".bm-btn");
const bmMenu = document.querySelector(".bm-menu");
const burgerMenu = document.querySelector(".burger-menu");

function clickHandlerBurger() {
    console.log(bmMenu.classList)
  bmMenu.classList.add("bm-menu-active");
  
}

const dropdownStatus = (e) => {
    console.log( e)
    if (!e.target.closest("burgerMenu") && e.target.className  !== 'bm-btn') {
        bmMenu.classList.remove("bm-menu-active")
    }
}

document.addEventListener('click', dropdownStatus);

bmBtn.addEventListener("click", clickHandlerBurger);


