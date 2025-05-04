arrow_left = document.getElementById('arrow-left') 

arrow_right = document.getElementById('arrow-right') 

slides = document.querySelectorAll('.slide')




slideNum = 0




function manual_right() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    });

    ++slideNum

    if (slideNum >= slides.length) {
        slideNum = 0;
    }

    slides[slideNum].classList.add("active")

}



function manual_left() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    });

    --slideNum

    if (slideNum >= slides.length) {
        slideNum = 0;
    }

    if (
        slideNum == -1 ) {
            slideNum = 5;
        }

    slides[slideNum].classList.add("active")

}

