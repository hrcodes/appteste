<template>
  <dialog
    v-overlay="{ index : 0 }"
    :class="`modal ${classHide}`"
    :open="show" @overlayClicked="close()">
    <header class="title">
      <slot name="title" />
      <button class="title__close" @click="close()">
        x
      </button>
    </header>
    <main>
      <!-- tudo que vier dentro da tag do componente de quem chama
      aparece no lugar desse slot: -->
      <slot />
    </main>
    <footer class="bottom">
      <slot name="footer" />
    </footer>
  </dialog>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      classHide: '',
    };
  },

  methods: {
    close() {
      console.log(this);
      this.show = false;
      this.classHide = 'modal__hide';
    },
  },
};
</script>

<style lang='scss' scoped>
.modal {
  border-radius: 5px 30px;
  border-style: none;
  box-shadow: 0px 0px 15px #3e3e3e;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 50%;
  margin: 0;
  min-width: 600px;
  min-height: 600px;
  position: fixed;
  padding: 0px;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;

  &__hide {
    display: none;
  }
}

.title {
  align-items: center;
  border-bottom: 1px solid #cecece;
  color: #555555;
  display: flex;
  padding: 20px;

  &__close {
    background-color: #999999;
    border-style: none;
    border-radius: 100%;
    color: white;
    height: 22px;
    font-weight: bold;
    font-size: 15px;
    outline-style: none;
    width: 22px;
  }

  &__close:hover {
    background-color: #bababa;
    transition: 0.2s;
  }
}

h1 {
  font-size: 17pt;
  width: 96%;
}

.bottom {
  align-items: center;
  border-top: 1px solid #cecece;
  display: flex;
  padding: 20px;
  min-height: 55px;
}

.footer-description {
  color: #777;
  font-size: 10pt;
  font-style: italic;
  font-weight: normal;
}

</style>
