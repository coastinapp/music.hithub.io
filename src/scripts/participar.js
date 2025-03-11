 // Animación de aparición para las secciones
 document.addEventListener('DOMContentLoaded', function() {
    const secciones = document.querySelectorAll('.seccion');
    
    secciones.forEach((seccion, index) => {
        seccion.style.opacity = '0';
        seccion.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            seccion.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            seccion.style.opacity = '1';
            seccion.style.transform = 'translateY(0)';
        }, 300 + (index * 150));
    });
});