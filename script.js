const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem('todos'));

if(todos) {
    todos.forEach(todo => {
        addTodo(todo);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodo();
})

function addTodo(todo) {

    let todoText = input.value;

    if(todo) {
        todoText = todo.text;    
    }

    if( todoText) {
        const todoEl = document.createElement('li');
        if(todo && todo.completed) {
            todoEl.classList.add("completed");
        }
        todoEl.innerText = todoText;

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
        })
        todoEl.addEventListener('contextmenu', e => {
            e.preventDefault();
            todoEl.remove();
        })
        todosUL.appendChild(todoEl);
        input.value = ""
        updateLS()
    }
}
function updateLS() {
    const notesEl = document.querySelectorAll('li');
    const notes = [];

    notesEl.forEach(noteEl => {
        notes.push({
            text: noteEl.innerText,
            completed: noteEl.classList.contains("completed")
        })
    })

    localStorage.setItem("notes", JSON.stringify(notes))
}