/* Скрипт для шапки навигации */
const mobileNavButton = document.querySelector(".mobile-nav-button");
const mobileNavIcon = document.querySelector(".mobile-nav-button_icon");
const mobileNav = document.querySelector(".MobiHeader");

mobileNavButton.addEventListener('click', function () {
    mobileNavIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

/*Скрипт для кнопки проигрывания видео */
const videoFile = document.querySelector("#video-story");
const videoBtn = document.querySelector("#video-story-btn");
const videoBtnPlay = document.querySelector("#video-btn-play");

videoBtn.addEventListener('click', function () {
    
    if (videoFile.paused) {
        videoFile.play();
        videoBtnPlay.src ="src/img/Img/button_pause.svg"; /*  Прописиваем функцию, если видеофайл проигрывает 
        меняет ссылку на картинку с паузой  */
    } else {
        videoFile. pause();
        videoBtnPlay.src ="src/img/Img/play-white.png"; /* Если видео остановилось то меняет на кнопку пуск*/
    } 
    
});
