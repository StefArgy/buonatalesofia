function apriSezione(nomeSezione) {
    const overlay = document.getElementById('overlay-' + nomeSezione);
    overlay.classList.add('aperto');
}

function chiudiSezione(nomeSezione) {
    const overlay = document.getElementById('overlay-' + nomeSezione);
    overlay.classList.remove('aperto');
}

// Genera la neve pixelata sullo sfondo
function creaNeve() {
    const container = document.getElementById('neve-container');
    const numeroFiocchi = 45; // Puoi aumentare o diminuire i fiocchi

    for (let i = 0; i < numeroFiocchi; i++) {
        const fiocco = document.createElement('div');
        fiocco.classList.add('fiocco');
        
        // Posizione orizzontale casuale
        fiocco.style.left = Math.random() * 100 + 'vw';
        
        // Velocità di caduta casuale (tra 4 e 9 secondi)
        fiocco.style.animationDuration = (Math.random() * 5 + 4) + 's';
        
        // Ritardo casuale così non partono tutti insieme
        fiocco.style.animationDelay = Math.random() * 5 + 's';
        
        // Dimensione casuale (alcuni pixel più grandi, altri più piccoli)
        const dimensione = (Math.random() * 4 + 4) + 'px';
        fiocco.style.width = dimensione;
        fiocco.style.height = dimensione;

        container.appendChild(fiocco);
    }
}

// Avvia la neve appena si apre la pagina
creaNeve();