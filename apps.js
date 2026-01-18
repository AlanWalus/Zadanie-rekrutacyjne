// Inicjalizacja zmiennych
//Dodawanie zadania
function addTaskF() {
    
 const input = document.getElementById("task");
 const taskContent = input.value;
    if (taskContent.trim() === "") return;
    addTask(taskContent);
    input.value = "";
    renderTask();
 }
 //Wyświetlanie tekstu
    function renderTask() {
        const filterSelect = document.getElementById("filter").value;
        const tableBody = document.getElementById("taskTable");
        const tasksToShow = getTasks(filterSelect);

        tableBody.innerHTML = "";


        tasksToShow.forEach(task => {
            const row = document.createElement("tr");
            row.classList.add(`status-${task.status}`);

            row.innerHTML = `
                <td>${task.id}</td>
                <td>${task.text}</td>
                <td>${task.status}</td>
                <td> <button id onclick="changeStatus(${task.id}, 'Trwające')">Trwające</button>
                     <button id onclick="changeStatus(${task.id}, 'Zakończone')">Zakończone</button> 
                </td>`;
            tableBody.appendChild(row);
        });
    }
//Zmiana statusu zadania
    function changeStatus(id, status) {
        updateTaskStatus(id, status);
        renderTask();
    }   

