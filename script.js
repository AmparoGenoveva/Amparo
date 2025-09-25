// Crear lightbox dinámicamente
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const img = document.createElement('img');
lightbox.appendChild(img);

// Selecciona todas las imágenes clicables (obras dentro de series)
const images = document.querySelectorAll('figure img');

images.forEach(image => {
  image.addEventListener('click', () => {
    lightbox.classList.add('active');
    img.src = image.src;
  });
});

// Cierra al hacer click en el fondo
lightbox.addEventListener('click', (e) => {
  if (e.target !== img) {
    lightbox.classList.remove('active');
  }
});
