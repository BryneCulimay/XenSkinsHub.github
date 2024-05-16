function nextSlide() {
    var slides = document.querySelectorAll('.slide');
    for (var i = 0; i < slides.length; i++) {
        if (slides[i].style.opacity === '1') {
            if (i === slides.length - 1) {
                slides[0].style.opacity = '1';
            } else {
                slides[i + 1].style.opacity = '1';
            }
            slides[i].style.opacity = '0';
            break;
        }
    }
}

function prevSlide() {
    var slides = document.querySelectorAll('.slide');
    for (var i = 0; i < slides.length; i++) {
        if (slides[i].style.opacity === '1') {
            if (i === 0) {
                slides[slides.length - 1].style.opacity = '1';
            } else {
                slides[i - 1].style.opacity = '1';
            }
            slides[i].style.opacity = '0';
            break;
        }
    }
}