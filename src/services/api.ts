import { Task } from '@/models/tasks';
import axios from 'axios';

const request = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 1000,
});

request.interceptors.response.use(
  (config) => config, // success
  (error) => {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    throw error; // explode o erro
  },
);

request.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers.authorization = `Basic ${localStorage.getItem('token')}`;
    return config;
  }, // success
);

function getTasks() {
  return request.get<Array<Task>>('/tasks')
    .then((r) => r.data);
}

function getTask(id: string) {
  return request.get<Task>(`/tasks/${id}`)
    .then((r) => r.data);
}

function delTask(id: string) {
  return request.delete<Array<Task>>(`/tasks/${id}`)
    .then((r) => r.data);
}

function createTask(task: Task) {
  return request.post<string>('/tasks/', task)
    .then((r) => r.data);
}

export {
  getTasks,
  getTask,
  delTask,
  createTask,
};

// Nativo no js
// fetch('https://api-node.codermarcos.repl.co/tasks')
//   .then((response) => response.json())
//   .then((banana) => { this.dataApi = banana; })
//   .catch((error) => { console.log(error); });
