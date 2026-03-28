// On récupère le bouton dans le HTML
const btn = DocumentFragment.getElementById('toggleBtn');

// On écoute le clic
btn.addEventLister('click', async () => {
    // On récupère l'onglet actuel
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    // On injecte le script "debug"
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: toggleRedBorders,
    });
});

// La fonction qui va s'exécuter sur la page web
function toggleRedBorders() {
    // On séléctionne tous les éléments de la page
    const tousLesElements = document.querySelectorAll('*');

    // On passe sur chaque élément avec une boucle
    tousLesElements.forEach((el) => {
        // On change la bordure
        if (el.style.border = '1px solid red') {
            // On efface la bordure
            el.style.border = '';
        } else {
            // On met la bordure
            el.style.border = '1px solid red';
        }
    });
}