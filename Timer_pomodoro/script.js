let timeLeft = 25 * 60;
let isRunning = false;
timerInterval = null; // On l'initialise à vide

const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

function MiseAJour() {
    // Calcul des minutes et secondes
    const minutes = Math.floor(timeLeft / 60);
    const secondes = timeLeft % 60;

    // Formatage pour toujours avoir 2 chiffres
    const displayMinutes = String(minutes).padStart(2, '0');
    const displaySecondes = String(secondes).padStart(2, '0');

    // On met à jour l'élément HTML
    document.getElementById('timer').textContent = `${displayMinutes}:${displaySecondes}`;
}

// Bouton démarrer
startBtn.addEventListener('click', () => {
    if (!isRunning) { // On ne lance le timer que s'il ne tourne pas déjà
        isRunning = true;
        timerInterval = setInterval(() => {
            if (timeleft > 0) {
                timeLeft--; // On enlève une seconde
                MiseAJour(); // On rafraîchit l'affichage
            } else {
                clearInterval(timerInterval);
                alert("C'est l'heure de la pause !");
                isRunning = false;
            }
        }, 1000); // 1000ms = 1 seconde
    }
});

// Bouton pause
pauseBtn.addEventListener('click', () =>{
    clearInterval(timerInterval) // On stoppe l'intervalle
    isRunning = false;
});

// Bouton reset
resetBtn.addEventListener('click', () => {
    // On arrête le chrono
    clearInterval(timerInterval);
    isRunning = false;

    // On remet le temps à 25 minutes
    timeLeft = 25 * 60;

    // On appelle la fonction pour que l'écran affiche "25:00" immédiatement
    MiseAJour();
});