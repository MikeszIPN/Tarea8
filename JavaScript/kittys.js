function imagenAleatoria() {
    var elemento = document.body
    var cantidadImagenes = 10
    var aleatorio = Math.floor(Math.random() * cantidadImagenes)
    elemento.innerHTML = "<img src=\"" + aleatorio + ".png\"></img> <p> GATITO ALEATORIO </p>"
}

const PHOTO_LIST = imagenAleatoria();


function createImage(src){
    const image = document.createElement('img');
    image.src = src;
    return image;
}

const albumView = document.querySelector('#Gatos');

for (let i = 0; i < PHOTO_LIST.length; i++){
    const photoSrc = PHOTO_LIST[i];
    const image = createImage(photoSrc);
    image.addEventListener('click', onThumbnailClick);
    albumView.appendChild(image);
}