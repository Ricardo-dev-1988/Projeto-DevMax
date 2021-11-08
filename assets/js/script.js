function menuToggle(){
   let menuToggle = document.querySelector('.menu-opener--click');

   if (menuToggle.style.display == 'flex') {
       menuToggle.style.display = 'none';
   } else {
    menuToggle.style.display = 'flex';
   }
     
}

function scrollUP() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function sumirBotao() {

    let scrollLateral = document.querySelector('.scrollButton');

    if (window.scrollY == 0){
        scrollLateral.style.display = 'none';
    } else {
        scrollLateral.style.display = 'flex';
    }
}

window.addEventListener('scroll', sumirBotao);
