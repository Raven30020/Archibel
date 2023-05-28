const offset = 100;
const offsetDeroulement = 200;


/* ---ANIMATION PAR LE SCROLL DES 3 RECTANGLES DE LA PAGE D'ACCEUIL ?*/

window.addEventListener('scroll', function (e) {
    const rectangle_1 = document.querySelector('.rectangle_1');
    const rectangle_2 = document.querySelector('.rectangle_2');
    const rectangle_3 = document.querySelector('.rectangle_3');

    const topDistance = rectangle_1.getBoundingClientRect().top;
    const fullScreen = window.innerHeight;
    const end = fullScreen*0.3;

    if (topDistance > fullScreen) {
        rectangle_1.style.transform = 'translateX(-' + offsetDeroulement + '%)'
        rectangle_3.style.transform = 'translateX(' + offsetDeroulement + '%)'
        return;
    }

    if (topDistance < end) {
        rectangle_1.style.transform = 'translateX(0%)'
        rectangle_3.style.transform = 'translateX(0%)'
        return;
    }

    const progress = (topDistance - end) / (fullScreen);

    rectangle_1.style.transform = 'translateX(' + (-progress) * offsetDeroulement + '%)'
    rectangle_3.style.transform = 'translateX(' + (progress) * offsetDeroulement + '%)'
});

/* ---ANIMATION PAR LE SCROLL DES 3 RECTANGLES DE LA PAGE D'ACCEUIL ?*/