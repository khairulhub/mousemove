let container = document.querySelector('.container');
let layer = document.querySelectorAll('.layer');

container.onmousemove = function(e) {
    let X = e.pageX;
    let Y = e.pageY;

    layer[0].style.transform = 'translate('+ X/100*-7 +'px,'+ Y/100*-7 + 'px)';
    layer[1].style.transform = 'translate('+ X/100*-6 +'px,'+ Y/100*-6 + 'px)';
    layer[2].style.transform = 'translate('+ X/100*-3 +'px,'+ Y/100*-3 + 'px)';
    layer[3].style.transform = 'translate('+ X/100*-1 +'px,'+ Y/100*-1 + 'px)';
    layer[4].style.transform = 'translate('+ X/100*4 +'px,'+ Y/100*4 + 'px)';
    layer[5].style.transform = 'translate('+ X/100*7 +'px,'+ Y/100*7 + 'px)';
    layer[6].style.transform = 'translate('+ X/100*11 +'px,'+ Y/100*11 + 'px)';
}