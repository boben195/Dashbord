const hamburgerBtn = document.querySelector('.hambutger-btn');
const sideBar = document.querySelector('.side-bar');


hamburgerBtn.addEventListener('click', sidebarToggle);
function sidebarToggle() {
    sideBar.classList.toggle('active')
}

const modeSwitcher = document.querySelector('.mode-switch i');
const body = document.querySelector('body');

modeSwitcher.addEventListener('click', modeSwitch);
function modeSwitch() {
    body.classList.toggle('active');
}
