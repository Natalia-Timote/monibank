// Iniciar vídeo
const startCameraBtn = document.querySelector('[data-video-botao]');
const cameraField = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');

// Tirar foto
const takePictureBtn = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const message = document.querySelector('[data-mensagem]');

let imageURL = '';

// Enviar foto
const sendPictureBtn = document.querySelector('[data-enviar]');

// Iniciar vídeo
startCameraBtn.addEventListener('click', async function () {
    const startVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false});

    startCameraBtn.style.display = 'none';
    cameraField.style.display = 'block';

    video.srcObject = startVideo;
})

 // Tirar foto
takePictureBtn.addEventListener('click', function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imageURL = canvas.toDataURL('image/jpeg');

    cameraField.style.display = 'none';
    message.style.display = 'block';
})

// Enviar foto
sendPictureBtn.addEventListener('click', () => {
    const receiveExistingData = localStorage.getItem('cadastro');
    const convertReturn = JSON.parse(receiveExistingData);

    convertReturn.image = imageURL;

    localStorage.setItem('cadastro', JSON.stringify(convertReturn));

    window.location.href = './abrir-conta-form-3.html';
})