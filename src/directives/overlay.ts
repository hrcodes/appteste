let overlay: HTMLElement;
const Overlay: Vue.DirectiveOptions = {

  inserted(e, binding) {
    overlay = document.createElement('div');

    overlay.style.zIndex = (binding.value && binding.value.index) || 'auto';
    overlay.classList.add('overlay');
    overlay.addEventListener('click', () => {
      overlay.remove();
      e.dispatchEvent(new Event('overlayClicked'));
    });

    document.body.appendChild(overlay);
  },

  unbind() {
    overlay.remove();
  },
};

export default Overlay;
