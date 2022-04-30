let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .hp .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

const themeToggleButton = document.querySelector('.theme-toggle-button');
const bodyElement = document.body;

const currenttheme = localStorage.getItem('dark-theme');
if (currenttheme) {
    bodyElement.classList.add('dark-theme');
}

const toggleTheme = () => {
    bodyElement.classList.toggle('dark-theme');

    if(bodyElement.classList.contains('dark-theme')){
        localStorage.setItem('dark-theme','active');
    }
    else{
        localStorage.removeItem('dark-theme');
    }
};

themeToggleButton.addEventListener('click', toggleTheme);