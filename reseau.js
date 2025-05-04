
document.addEventListener("DOMContentLoaded", function () {
    // Variable pour vérifier l'état du menu (ouvert/fermé)
    let isMenuOpen = false;

    // Récupération des éléments dans le DOM
    const menuToggleBtn = document.getElementById('menu-toggle');  // Bouton pour ouvrir/fermer
    const sideMenu = document.getElementById('side-menu');  // Menu latéral
    const menuIcon = document.getElementById('menu-icon');  // Icône du bouton

    // Fonction pour basculer l'état du menu
    function toggleMenu() {
        if (isMenuOpen) {
            // Si le menu est ouvert, on le ferme
            sideMenu.classList.remove('open');
            isMenuOpen = false;
            menuIcon.src = 'menu-icon.png';  // Icône de menu pour ouvrir
        } else {
            // Si le menu est fermé, on l'ouvre
            sideMenu.classList.add('open');
            isMenuOpen = true;
            menuIcon.src = 'close-icon.png';  // Icône de fermeture
        }
    }

    // Ajouter l'événement au bouton pour basculer entre ouvert/fermé
    menuToggleBtn.addEventListener('click', toggleMenu);
});

