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
