// moduł obsługujący operacje na liście zadań

let tasks = [];
let idNumber = 0;

let taskStatus = "Nowe";

//dodawanie zadania do listy
function addTask(taskContent) {
    const newTask = {
        id: idNumber = idNumber + 1,
        text: taskContent,
        status: taskStatus
    };
    tasks.push(newTask);
}
//pobieranie zadań z listy na podstawie filtra
function getTasks(filterSelect) {
    if (filterSelect === "wszystkie") return tasks;
    return tasks.filter(task => task.status === filterSelect);
}
//aktualizacja statusu zadania
function updateTaskStatus(id, status) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.status = status;
    }
}


