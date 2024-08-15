let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.corusel ');
let listItemDom = document.querySelector('.corusel .list');
let thumbmailDom = document.querySelector('.corusel .thumbmail');

nextDom.onclick = function (){
    showSlider('next');
}
prevDom.onclick = function (){
    showSlider('prev');
}
let timeRunning= 2000;
let runTimeOut;
function showSlider(type){
    let itemSlider = document.querySelectorAll('.corusel .list .item');
    let itemThumbmail = document.querySelectorAll('.corusel .thumbmail .item');

    if (type ==='next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbmailDom.appendChild(itemThumbmail[0]);
        carouselDom.classList.add('next');
    }else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbmailDom.prepend(itemThumbmail[positionLastItem]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut= setTimeout(() =>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning)
}