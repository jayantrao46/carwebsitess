// JavaScript to handle car image changes

function changeCarImage(imageSrc) {
    document.getElementById('carImage').src = imageSrc;
}

function changeCarColor() {
    const carImage =document.getElementById('carImage');
    const currentImage = carshow.src;

    // Change color when the button is clicked
    if (currentImage.includes('car-blue')) {
        carImage.src = 'C:\Users\yhars\Pictures\Camera Roll\BMW-M8-Coupe-Fire-Red-005.webp';
    } else if (currentImage.includes('car-red')) {
        carImage.src = "C:\Users\yhars\Desktop\html\carshow\BMW M8 OIP.jpg";
    } else {
        carImage.src = "C:\Users\yhars\Desktop\html\carshow\OIP (1).jpeg";
    }
}