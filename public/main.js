const commandButton = document.getElementById("commandButton");
if (commandButton) {
    commandButton.addEventListener("click", function() {
        window.location.href = "commande.html";
    });
}

const menuButton = document.getElementById("menuButton");
if (menuButton) {
    menuButton.addEventListener("click", function() {
        window.location.href = "menu.html";
    });
}

const icone = document.getElementById("icone");
if (icone) {
    icone.addEventListener("click", function() {
        window.location.href = "index.html";
    });
}