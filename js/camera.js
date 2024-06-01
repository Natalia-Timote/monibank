const startCameraBtn = document.querySelector('[data-video-botao]');
const cameraField = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');

startCameraBtn.addEventListener('click', async function () {
    const startVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false});

    startCameraBtn.style.display = 'none';
    cameraField.style.display = 'block';

    video.srcObject = startVideo;
})