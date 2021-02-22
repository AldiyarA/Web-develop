console.log(1);
const addB = document.querySelector('#add');
const d1 = document.querySelector('#d1');

function createDiv(){
    const dx = document.createElement('div');
    const b = document.createElement('button');
    const tx = document.createTextNode('remove');
    b.appendChild(tx);
    dx.appendChild(b);
    return dx;
}

addB.addEventListener('click', (event) => {
    event.preventDefault();
    const dx = createDiv();
    d1.appendChild(dx);
}
);