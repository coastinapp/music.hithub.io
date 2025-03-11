// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar elementos del DOM
    const video = document.getElementById('entrada-video');
    const videoContainer = document.getElementById('video-container');
    const contenidoPrincipal = document.getElementById('contenido-principal');

    // Ocultar el video y mostrar el contenido principal cuando termine
    video.addEventListener('ended', function () {
        videoContainer.style.display = 'none';
        contenidoPrincipal.style.display = 'flex';
    });

    // Si el video no se carga, mostrar el contenido principal después de 3 segundos
    setTimeout(function () {
        if (video.paused && video.currentTime === 0) {
            videoContainer.style.display = 'none';
            contenidoPrincipal.style.display = 'flex';
        }
    }, 3000);
});
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar elementos del DOM
    const video = document.getElementById('entrada-video');
    const videoContainer = document.getElementById('video-container');
    const contenidoPrincipal = document.getElementById('contenido-principal');

    // Ocultar el video y mostrar el contenido principal cuando termine
    video.addEventListener('ended', function () {
        videoContainer.style.display = 'none';
        contenidoPrincipal.style.display = 'block';
    });

    // Si el video no se carga, mostrar el contenido principal después de 3 segundos
    setTimeout(function () {
        if (video.paused && video.currentTime === 0) {
            videoContainer.style.display = 'none';
            contenidoPrincipal.style.display = 'block';
        }
    }, 3000);
});



next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});

// Opcional: Función para pantalla completa
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Agregar un botón o evento para activar pantalla completa
document.addEventListener('keypress', function (e) {
    if (e.key === 'f') {
        toggleFullScreen();
    }
});