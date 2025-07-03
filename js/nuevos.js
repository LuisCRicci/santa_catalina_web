
$(document).ready(function() {
    // Maneja el evento de clic en el botón de reproducir/pausar video
    $('.play-btn').on('click', function() {
        // Obtiene el elemento de video asociado al botón presionado
        const video = $(this).closest('.model-item').find('.model-video')[0];
        if (video.paused) {
            // Si el video está pausado, pausa y recarga todos los demás videos para mostrar su poster
            $('.model-video').each(function() {
                if (this !== video) {
                    this.pause();      // Pausa el video
                    this.load();       // Recarga el video y muestra el poster
                    // Cambia el texto del botón de los otros videos a "Ver video"
                    $(this).closest('.model-item').find('.play-btn').text('▶️ Ver video');
                }
            });
            video.play(); // Reproduce el video seleccionado
            $(this).text('⏸️ Pausar video'); // Cambia el texto del botón a "Pausar video"
        } else {
            // Si el video está reproduciéndose, lo pausa y cambia el texto del botón
            video.pause();
            $(this).text('▶️ Ver video');
        }
    });

    // Cuando termina la reproducción del video
    $('.model-video').on('ended', function() {
        this.load(); // Recarga el video para mostrar el poster
        // Cambia el texto del botón a "Ver video"
        $(this).closest('.model-item').find('.play-btn').text('▶️ Ver video');
    });
});