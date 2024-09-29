function playAudio() {
    var audio = document.getElementById('audioPlayer');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
// Tableau associant les identifiants des QR codes aux fichiers audio
const audioFiles = {
    1: "synthesis 2.wav",
    2: "synthesis 3.wav",
    // Ajoute d'autres fichiers si nécessaire
};

// Fonction pour récupérer le paramètre 'audio' dans l'URL
function getAudioIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('audio'); // Récupère la valeur du paramètre 'audio'
}

// Fonction pour charger et jouer l'audio correspondant au QR code
function loadAudio() {
    const audioId = getAudioIdFromUrl();
    if (audioId && audioFiles[audioId]) {
        // On récupère le fichier audio associé à l'identifiant
        const audioPlayer = document.getElementById('audioPlayer');
        audioPlayer.src = `audio/${audioFiles[audioId]}`;
        audioPlayer.play();  // Joue l'audio automatiquement
    } else {
        console.log("Aucun audio correspondant n'a été trouvé pour cet identifiant.");
    }
}

// Appel de la fonction pour charger l'audio au chargement de la page
window.onload = loadAudio;
