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
    } else {
        arrow.style = 'background-image:url(./assets/arrowdown.svg)'
        flag = false;
        arrow.style = 'background-image:url(./assets/arrowdown.svg)'
        flag = false;
    }
})

block.addEventListener('click', (event) => {
    inp.value = event.target.textContent;
    block.style = 'visibility:hidden';
    arrow.style = 'background-image:url(./assets/arrowdown.svg)'
    flag = false;
})

inp.addEventListener('keydown', (event) => {
    try {
        if (event.key == 'Enter') {
            if (!inp.value) throw new Error('value is empty')
            const p = document.createElement('p')
            block.appendChild(p);
            p.textContent = inp.value
        }
    } catch (error) {
        alert(error.message)
    }
})