let tasks = []
function AddTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();
    if (!text) return;

    tasks.push({text, completed: false});
    input.value = '';
    renderTasks();
}
function toggleTask(index){
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}
function deleteTask(index){
    tasks.splice(index, 1);
    renderTasks();
}


function renderTasks() {
const list = document.getElementById('taskList');
list.innerHTML = '';

tasks.forEach((task, index) => {
        list.innerHTML += `
        <div class="task">
            <div>
            <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${index})"> 
            <span class="task-text ${task.completed ? 'completed' : ''}">${task.text}</span>
            </div>
            <button class="delete-btn" onclick="deleteTask(${index})">×</button>
        </div>
        `;
    });

    const remaining = tasks.filter(t => !t.completed).length;
    document.getElementById('remaining').innerText = `Your remaining todos: ${remaining}`;
    }
