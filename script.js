document.getElementById('todo-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const taskText = document.getElementById('new-task').value;
    if (taskText.trim() === '') return;

    const listItem = document.createElement('li');
    const completedButton = document.createElement('button');
    completedButton.textContent = 'Completed';
    completedButton.className = 'completed-btn';
    completedButton.onclick = function () {
        listItem.style.animation = "fadeOut 0.3s ease forwards";
        setTimeout(() => listItem.remove(), 300);
        updateTaskCounter(-1);
    };

    listItem.textContent = taskText;
    listItem.appendChild(completedButton);

    document.getElementById('todo-list').appendChild(listItem);
    document.getElementById('new-task').value = '';
    updateTaskCounter(1);
});

function updateTaskCounter(change) {
    const counter = document.querySelector('.task-counter');
    let currentCount = parseInt(counter.textContent);
    currentCount += change;
    counter.textContent = currentCount;
}


