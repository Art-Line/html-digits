const menuButton = document.querySelector('.js-menu-btn');
const menuList = document.querySelector('.js-menu-list');
menuButton.addEventListener("click", function() {
    menuList.classList.toggle("menu__list_show");
    menuButton.classList.toggle("menu__btn_active");
})