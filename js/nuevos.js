
$(document).ready(function() {
    // Reproducir/pausar video al hacer clic en el botón
    $('.play-btn').on('click', function() {
        const video = $(this).closest('.model-item').find('.model-video')[0];
        if (video.paused) {
            // Pausar y recargar otros videos para mostrar el poster
            $('.model-video').each(function() {
                if (this !== video) {
                    this.pause();
                    this.load(); // Esto fuerza el poster
                    $(this).closest('.model-item').find('.play-btn').text('▶️ Ver video');
                }
            });
            video.play();
            $(this).text('⏸️ Pausar video');
        } else {
            video.pause();
            $(this).text('▶️ Ver video');
        }
    });

    // Cuando termina el video, vuelve a mostrar el poster y cambia el texto del botón
    $('.model-video').on('ended', function() {
        this.load(); // Esto fuerza el poster
        $(this).closest('.model-item').find('.play-btn').text('▶️ Ver video');
    });
});