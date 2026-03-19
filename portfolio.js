const burgerMenuButton = document.querySelector('.burger-menu-button')
const burgerMenuButtonIcon = document.querySelector('.burger-menu-button i')
const burgerMenu = document.querySelector('.burger-menu')
console.log(burgerMenuButton)

burgerMenuButton.onclick = function(){
    burgerMenu.classList.toggle('open')
    const isOpen = burgerMenu.classList.contains('open')
    burgerMenuButtonIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
}
function verifier() {
    let nom = document.getElementById("infos").value 
    let sms = document.getElementById("message").value
    console.log(nom)
    if (nom ===" " && sms===" "){
        alert("Vous devez remplir tous les champs")
    }
    }

document.addEventListener('DOMContentLoaded', () => {
    const introOverlay = document.getElementById('mon_animation');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        introOverlay.classList.add('hidden');
        if(mainContent) mainContent.classList.add('active');
    }, 3600);
});