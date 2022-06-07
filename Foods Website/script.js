const icons = document.querySelectorAll('.section-1-icons i');
let i = 1;
setInterval(()=> {
    i++;

    const icon = document.querySelector('.section-1-icons i.show');

    icon.classList.remove('show');

    if(i > icons.length){
        icons[0].classList.add('show');
        i=1;
    }else{
        icon.nextElementSibling.classList.add('show');
    }
    
}, 3000)