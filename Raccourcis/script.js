const shortcuts = [
    { keys: "CTRL + C", desc: "Copier" },
    { keys: "CTRL + V", desc: "Coller" },
    { keys: "CTRL + A", desc: "Tout sélectionner" },
    { keys: "CTRL + R", desc: "Recharger la page du navigateur" },
    { keys: "CTRL + P", desc: "Imprimer" },
    { keys: "CTRL + S", desc: "Enregistrer" },
    { keys: "CTRL + F", desc: "Rechercher" },
    { keys: "CTRL + Y", desc: "Revenir en avant" },
    { keys: "CTRL + Z", desc: "Revenir en arrière" },
    { keys: "WIN + L", desc: "Vérouiller le PC" },
    { keys: "CTRL + N", desc: "Ouvrir une nouvelle fenêtre" },
    { keys: "CTRL + X", desc: "Couper"},
    { keys: "CTRL + T", desc: "Nouvel onglet" },
    { keys: "CTRL + W", desc: "Fermer l'onglet" },
    { keys: "CTRL + SHIFT + T", desc: "rouvrir un onglet fermer" },
    { keys: "CTRL + SHIFT + I", desc: "Inspecteur" }
];

const listElement = document.getElementById('shortcut-list');

// Fonction pour afficher les raccourcis
function displayShortcuts(items) {
    listElement.innerHTML = ""; // On vide la liste
    items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${item.keys}</strong> : ${item.desc}`;
        listElement.appendChild(li);
    });
}

// Premier affichage au chargement
displayShortcuts(shortcuts);

const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (e) => {
    // On récupère ce que l'utilisateur a tapé
    const term = e.target.value.toLowerCase();

    // On filtre le tableau original
    const filtred = shortcuts.filter(shortcut => {
        // On vérifie si le terme est dans la description ou les touches
        return shortcut.desc.toLowerCase().includes(term) ||
        shortcut.keys.toLowerCase().includes(term);
    });

    // On appelle la fonction d'affichage avec le nouveau tableau filtré
    displayShortcuts(filtred);
});