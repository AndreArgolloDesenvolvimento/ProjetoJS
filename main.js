const taskButton = document.querySelector('button');
taskButton.addEventListener('mouseover',()=>{
    taskButton.innerHTML ='clique aqui';
});
taskButton.addEventListener('mouseout',()=>{
    taskButton.innerHTML = 'Adicionar Tarefa';
})


function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    const taskTime = document.getElementById('taskTime');
    const taskText = taskInput.value.trim();
    const dateValue = taskDate.value;
    const timeValue = taskTime.value;

    if (taskText === '' || dateValue === '' || timeValue === '') {
        alert('Preencha todos os campos (Tarefa, Data e hora para execução) !');
        return;
    }

    // Criação de uma nova linha na tabela
    const tableBody = document.querySelector('#tasksTable tbody');
    const row = document.createElement('tr');

    // <button class="complete" onclick="completeTask(this)">Concluir</button>

    row.innerHTML = `
        <td class="task-text">${taskText}</td>
        <td>${dateValue}</td>
        <td>${timeValue}</td>
        <td>
            <input type="checkbox" onclick="completeTask(this)"/>
            <button class="remove" onclick="removeTask(this)">Remover</button>
        </td>
    `;


    tableBody.appendChild(row);
    taskInput.value = ''; // Limpa o campo de input
    taskDate.value = ''; // Limpa o campo de data
    taskTime.value = ''; // Limpa o campo de hora
    
}

function removeTask(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

function completeTask(checkbox) {
    const taskCell = checkbox.parentElement.parentElement;
    taskCell.classList.toggle('completed');
}
