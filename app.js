const inp = document.querySelector('input');
const select = document.querySelector('.select');
const block = document.querySelector('.block')
const arrow = document.querySelector('.img')
let flag = false;

select.addEventListener('click', () => {
    if (!flag) {
        block.style = 'visibility:visible';
        flag = true;
        arrow.style = 'background-image:url(./assets/arrow.svg)'
    }else{
        block.style = 'visibility:hidden';
        arrow.style = 'background-image:url(./assets/arrowdown.svg)'
        flag = false;
    }
})