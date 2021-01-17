<template>
  <dialog v-overlay="{ index : 0 }" :open="show" @overlayClicked="close()">
    <header>
      <slot name="title" />
      <button>
        X
      </button>
    </header>
    <main>
      <!-- tudo que vier dentro da tag do componente de quem chama
      aparece no lugar desse slot: -->
      <slot />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </dialog>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },

  methods: {
    close() {
      this.show = false;
    },
  },
};
</script>

<style scoped>
dialog {
  z-index: 1;
  position: fixed;
  top: 50%;
  left: 50%;
  margin: 0;
  min-width: 600px;
  min-height: 600px;
  transform: translateX(-50%) translateY(-50%);
}
</style>
