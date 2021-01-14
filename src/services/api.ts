import { Task } from '@/models/tasks';
import axios from 'axios';

const request = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 1000,
});

function getTasks() {
  return request.get<Array<Task>>('/tasks')
    .then((r) => r.data);
}

function getTask(id: string): Task {
  if (id) {
    return request.get<Array<Taks>>(`/tasks/${id}`)
      .catch((r) => console.log(`error while GET ${id}`))
      .then((r) => r.data) as Task;
  }

  return getTasks() as Task;
}

function delTask(id: string): Task {
  return request.delete<Array<Taks>>(`/tasks/${id}`)
    .catch((r) => console.log(`error while DELETE ${id}`))
    .then((r) => r.data);
}

function createTask(task: Task) {
  console.log(task);
  return request.post('/tasks/', task)
    .catch((r) => console.log(`error while POST ${task}`))
    .then((r) => r.data);
}

export {
  getTasks,
  getTask,
  delTask,
  createTask,
};
