export default class ApiService {
    static get domain_uri() {
        return 'http://127.0.0.1:5000/';
    }

    static getTodos() {
        return fetch(this.domain_uri + 'todos', {method: "GET"})
            .then((response) => response.json())
            .then((json) => json.todos.map((todo) => {
                let new_todo = todo;
                new_todo.done = todo.done === 'true';
                return new_todo;
            }))
            .catch((error) => {console.log(error)});
    }

    static updateTodos() {
        return fetch(this.domain_uri + 'todos', {method: "PATCH"})
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((error) => {console.log(error)});
    }

    static addTodo(todo_description) {
        let data = new FormData();
        data.append('done', false);
        data.append('description', todo_description);
        return fetch(this.domain_uri + 'todo', {
            method: "POST",
            body: data
            })
            .then((response) => response.json())
            .then((json) => {console.log(json)})
            .catch((error) => {console.log(error)});
    }

    static deleteTodo(id) {
        let data = new FormData();
        data.append('id', id);
        return fetch(this.domain_uri + 'todo', {
            method: "DELETE",
            body: data
            })
            .then((response) => response.json())
            .then((json) => {console.log(json)})
            .catch((error) => {console.log(error)});
    }

    static updateTodo(id, new_status) {
        let data = new FormData();
        data.append('id', id);
        data.append('done', new_status);
        return fetch(this.domain_uri + 'todo', {
            method: "PATCH",
            body: data
            })
            .then((response) => response.json())
            .then((json) => {console.log(json)})
            .catch((error) => {console.log(error)});
    }
}