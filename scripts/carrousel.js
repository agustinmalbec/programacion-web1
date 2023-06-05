const contain = document.querySelector('.contain');
const item = document.querySelectorAll('.itemNav');


// recorre los elementos del carrousel
item.forEach((each, i) => {
    item[i].addEventListener('click', () => {
        let pos = i;
        let op = pos * -33.3;

        contain.style.transform = `translateX(${op}%)`;


        // modifica selector de imagen
        item.forEach((each, i) => {
            item[i].classList.remove('active');
        })
        item[i].classList.add('active');
    })
})