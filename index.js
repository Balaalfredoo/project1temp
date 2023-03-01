AOS.init();
const border2 = document.querySelector('.border2');
const border1 = document.querySelector('.border1');


border2.addEventListener('click', (e) => {
    const bound = border2.getBoundingClientRect();
    const top = bound.top;
    const left = bound.left;
    const ey = e.clientY;
    const ex = e.clientX;
    const random = Math.random() * 360;
    const randint = Math.floor(random) + 10;
    console.log(randint);

    const newelement = document.createElement('div');
    newelement.setAttribute('class', 'selectcircle');
    newelement.style.left = `${ex - left}px`;
    newelement.style.top = `${ey - top}px`;
    newelement.style.background = `hsl(${randint},100%,50%)`;
    newelement.style.boxShadow = `2px 2px 20px 4px hsl(${randint},100%,50%)`;
    border2.appendChild(newelement);

    setTimeout(() => {
        border2.removeChild(newelement);
    }, 3000)
})


border1.addEventListener('click', (e) => {
    const bound = border1.getBoundingClientRect();
    const top = bound.top;
    const left = bound.left;
    const ey = e.clientY;
    const ex = e.clientX;
    const random = Math.random() * 360;
    const randint = Math.floor(random) + 10;
    console.log(randint);

    const newelement = document.createElement('div');

    newelement.setAttribute('class', 'selectcircle');
    newelement.style.left = `${ex - left}px`;
    newelement.style.top = `${ey - top}px`;
    newelement.style.background = `hsl(${randint},100%,50%)`;
    newelement.style.boxShadow = `2px 2px 20px 4px hsl(${randint},100%,50%)`;
    border1.appendChild(newelement);

    setTimeout(() => {
        border1.removeChild(newelement);
    }, 3000)
})