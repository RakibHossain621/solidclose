const gearButton = document.querySelector('.gear-tab');
const menuButton =  document.querySelector('.hamburger_menu');

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

gearButton.addEventListener('click', myFunction);

function myFunction() {
    var element = document.body;

    if (element.classList.contains("dark-mode")) {
        element.classList.remove("dark-mode");
        localStorage.setItem('darkMode', 'disabled');
    } else {
        element.classList.add("dark-mode");
        localStorage.setItem('darkMode', 'enabled');
    }
}
