const doList = document.querySelector('#list');
const input = document.querySelector('input');

doList.addEventListener('click', (event) =>{
    if (event.target.className === 'del-img'){
        const elem = event.target.parentNode.parentNode;
        elem.remove();
        if (doList.children.length === 0){
            doList.className = '';
        }else{
            doList.children[0].className = 'task';
        }
        saveData();
    }
    if (event.target.className === 'checkbox'){
        const check = event.target;
        const parent = event.target.parentNode.parentNode;
        const p = parent.children[1].children[0]
        if (!check.checked){
            p.className = 'text';  
            check.removeAttribute('checked');
        }else {
            p.className = p.className + ' line-cross';
            check.setAttribute('checked', '1');
        }
        saveData();
    }
});

function loadData(){
    const tasks = document.getElementById('list');
    tasks.innerHTML = JSON.parse(localStorage.getItem('myTasks'));
    if (tasks.children.length !== 0) tasks.className = 'list';
}
loadData();