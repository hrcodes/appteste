<template>
  <form class="api">
    <!-- v-model é só para twoWayBind -->
    <input v-model="inputTask" type="search" class="api__buttons" />
    <button type="button" class="api__buttons" @click="search()">
      Criar
    </button>
    <button type="button" class="api__buttons" @click="del()">
      Cancelar
    </button>
  </form>
</template>
