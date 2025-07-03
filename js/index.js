//Control de sonido para el audio principal
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos de audio y botones
    const audio = document.getElementById('heroAudio');
    const playBtn = document.getElementById('playAudioBtn');
    const pauseBtn = document.getElementById('pauseAudioBtn');
    const stopBtn = document.getElementById('stopAudioBtn');

    // Intentar reproducir el audio automáticamente al cargar la página
    // (algunos navegadores pueden requerir interacción del usuario)
    if (audio) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.catch(function(error) {
                // Si el navegador bloquea la reproducción automática, no hacer nada
            });
        }
    }

    // Evento para reproducir el audio al hacer clic en el botón de play
    if (playBtn) {
        playBtn.addEventListener('click', function() {
            audio.play();
        });
    }
    // Evento para pausar el audio al hacer clic en el botón de pausa
    if (pauseBtn) {
        pauseBtn.addEventListener('click', function() {
            audio.pause();
        });
    }
    // Evento para detener el audio (pausar y volver al inicio) al hacer clic en el botón de stop
    if (stopBtn) {
        stopBtn.addEventListener('click', function() {
            audio.currentTime = 0;
            audio.pause();
        });
    }
});