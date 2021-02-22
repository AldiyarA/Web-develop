function addContent(){
    let input = document.getElementById('input').value;
    document.getElementById('input').value = '';
    if (input.trim() === ''){
        return;
    }
    const list = document.getElementById('list');
    const newTask = document.createElement('div');
    newTask.className = 'task';
    const chBox = document.createElement('div');
    chBox.className = 'checkbox-box';
    const check = document.createElement('input');
    check.type = 'checkbox';
    check.className = 'checkbox';
    const content = document.createElement('div');
    content.className = 'content';
    const text = document.createElement('p');
    text.className = 'text';
    const del = document.createElement('div')
    del.className = 'delete';
    const img = document.createElement('img');
    img.src = 'static/images/del.png';
    img.className = 'del-img';
    del.appendChild(img);
    text.appendChild(document.createTextNode(input));
    content.appendChild(text);
    chBox.appendChild(check);
    newTask.appendChild(chBox);
    newTask.appendChild(content);
    newTask.append(del);
    list.appendChild(newTask);
    list.className = 'list';
    if (list.children.length !== 1){
        newTask.className = list.children[1].className + ' task-with-border';
    }
    saveData();
}

function saveData(){
    const tasks = document.getElementById('list');
    localStorage.setItem('myTasks', JSON.stringify(tasks.innerHTML));
}