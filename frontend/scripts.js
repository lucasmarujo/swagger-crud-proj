async function addTask() {
    const taskInput = document.getElementById('taskInput');
    const response = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: taskInput.value })
    });
    taskInput.value = '';
    loadTasks();
}

async function loadTasks() {
    const response = await fetch('http://localhost:5000/tasks');
    const tasks = await response.json();
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.title;
        taskList.appendChild(li);
    });
}

window.onload = loadTasks;