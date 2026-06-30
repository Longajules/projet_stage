/* =========================================
   Pizza Pinos — main.js
   ========================================= */

/* --- Logo → accueil --- */
const icone = document.getElementById('icone');
if (icone) {
  icone.addEventListener('click', function () {
    window.location.href = 'index.html';
  });
}

/* --- Catégories --- */
const categories = {
  menuPizza:    'pizzas.html',
  menuBurger:   'burgers.html',
  menuPaninis:  'paninis.html',
  menuTexM:     'texmex.html',
  menuSalades:  'salades.html',
  menuDesserts: 'desserts.html',
  menuGlaces:   'glaces.html',
  menuBoissons: 'boissons.html',
  menuCouscous: 'couscous.html',
  nosMenus:     'menus.html',
};

Object.entries(categories).forEach(([id, page]) => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('click', function () {
      window.location.href = page;
    });
  }
});

/* --- Page commande : champ adresse conditionnel --- */
const typeSelect = document.getElementById('type');
if (typeSelect) {
  typeSelect.addEventListener('change', function () {
    const adresseGroup = document.getElementById('adresse-group');
    const adresseInput = document.getElementById('adresse');
    if (this.value === 'livraison') {
      adresseGroup.style.display = 'flex';
      adresseInput.required = true;
    } else {
      adresseGroup.style.display = 'none';
      adresseInput.required = false;
    }
  });
}

/* --- Page commande : soumission --- */
const orderForm = document.querySelector('.order-form');
if (orderForm) {
  orderForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = document.querySelector('.btn-submit');
    btn.textContent = 'Commande envoyée ✓';
    btn.style.background = '#2e7d32';
    btn.disabled = true;
  });
}