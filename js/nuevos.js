
$(document).ready(function() {
    // Reproducir video al hacer clic en el botón
    $('.play-btn').on('click', function() {
        const video = $(this).closest('.model-item').find('.model-video')[0];
        if (video.paused) {
            video.play();
            $(this).text('⏸️ Pausar video');
        } else {
            video.pause();
            $(this).text('▶️ Ver video');
        }
    });
});
