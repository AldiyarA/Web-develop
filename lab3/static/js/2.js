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
        const isChecked = event.target.checked;
        const parent = event.target.parentNode.parentNode;
        const p = parent.children[1].children[0]
        if (!isChecked){
            p.className = 'text';  
        }else {
            p.className = p.className + ' line-cross';
        }
        saveData();
    }
});

function loadData(){
    const tasks = document.getElementById('list');
    const s = JSON.parse(localStorage.getItem('myTasks'));
    tasks.innerHTML = s;
    if (tasks.children.length !== 0){
        tasks.className = 'list';
    }
    for (let x of tasks.children){
        if (x === undefined) continue;
        try{
            if (x.children[1].children[0].className === 'text line-cross'){
                x.children[0].children[0].checked = true;
            }
        }finally{}
    }
}
loadData();