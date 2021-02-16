const doList = document.querySelector('#list');
const input = document.querySelector('input');

doList.addEventListener('click', (event) =>{
    if (event.target.tagName === 'IMG'){
        const elem = event.target.parentNode.parentNode;
        elem.remove();
        if (doList.children.length === 0){
            doList.className = '';
        }else{
            doList.children[0].className = 'task';
        }
        saveData();
    }
    if (event.target.tagName === 'INPUT'){
        const isChecked = event.target.checked;
        const parent = event.target.parentNode.parentNode;
        const p = parent.children[1].children[0]
        if (!isChecked){
            p.className = 'text';  
            // p.style.textDecoration = 'none';
        }else {
            p.className = p.className + ' line-cross';
            // p.style.textDecoration = 'line-through';
        }
        saveData();
    }
}
)