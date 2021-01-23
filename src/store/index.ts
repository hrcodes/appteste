import { Task } from '@/models/tasks';
import {
  getTasks,
  getTask,
  createTask,
  delTask,
} from '@/services/api';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // variáveis globais
    tasks: new Array<Task>(),
  },
  mutations: {
    // a forma de alterar essas variáveis
    setTasks(state, tasks: Array<Task>) {
      state.tasks = tasks;
    },
    appendTasks(state, task: Task) {
      state.tasks.push(task);
    },
  },
  actions: {
    // orquestrar as mutações
    // geralmente se muda estados quando retornam dados de uma API
    // por isso a gente criaria uma action pra chamar no retorno dos dados da API
    // Essa action já vai rodar a mutation, que vai atualizar nosso store
    getTasks({ commit }) {
      getTasks() // usgin axios
        .then((data) => {
          commit('setTasks', data);
        });
    },

    getTaskBySearch({ commit }, value) {
      getTask(value)
        .then((data) => {
          commit('setTasks', [data]); // [ cria um array automatico ]
        })
        .catch((data) => {
          console.log(data);
          commit('setTasks', []);
        });
    },

    // como passar params?  FILHO DA MAE É FORA DO { }
    createTask({ commit }, newTask: Task) {
      createTask(newTask)
        .then((id) => {
          const task = { ...newTask, id };
          commit('appendTasks', task);

          // commit mataria o resto do array pq task é só o novo objeto
          // commit('setTasks', task);

          // esse da erro pq esta tentando fazer de fora da mutation
          // this.state.tasks.push(task);
        });
    },

    deleteTask({ commit }, id) {
      delTask(id)
        .then((data) => {
          commit('setTasks', data);
        });
    },
  },
  // modules: {
  // },
});
