import axios from 'axios';

export const FETCH_TODOS = 'FETCH_TODOS';
export const UPDATE_TODOS = 'UPDATE_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
const ROOT_URL = 'http://localhost:5000';

export function fetchTodos() {
    const request = axios.get(`${ROOT_URL}/todos`);
    return {
        type: FETCH_TODOS,
        payload: request
    };
}

export function updateTodos() {
    const request = axios.patch(`${ROOT_URL}/todos`);
    return {
        type: UPDATE_TODOS,
        payload: request
    };
}

export function addTodo(todo) {
    const request = axios.post(`${ROOT_URL}/todo`, todo);
    return {
        type: ADD_TODO,
        payload: request
    };
}

export function updateTodo(todo) {
    const request = axios.patch(`${ROOT_URL}/todo`, {
        id: todo.id,
        done: todo.done
    });
    return {
        type: UPDATE_TODO,
        payload: request
    };
}

export function deleteTodo(id) {
    const request = axios.delete(`${ROOT_URL}/todo`, {params: {id: id}});
    return {
        type: DELETE_TODO,
        payload: id
    };
}