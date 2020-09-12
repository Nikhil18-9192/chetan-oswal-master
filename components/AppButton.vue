<template>
  <div id="menubtn" @click="$store.commit('TOGGLE_MENU_STATE')">
    <div class="hamburger-menu" :class="[{ animate: $store.state.menu }]"></div>
  </div>
</template>

<script>
export default {
  name: 'MenuButton',
  components: {},
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scopped>
$bar-width: 30px;
$bar-height: 2px;
$bar-spacing: 8px;
#menubtn {
  width: 52px;
  height: 52px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;
  padding: 4px;
  background: #fafafa;
  cursor: pointer;
  transition: 0.3s ease all;
  border: 0.5px solid transparent;
  border-radius: 50%;

  position: absolute;
right: 15px;
top: 90px;
  @include for-phone-only {
    width: 48px;
    height: 48px;
    padding: 0;
    border: none;
  }
  &:hover {
    border-color: rgba(0, 0, 0, 0.171);
  }
  .hamburger-menu,
  .hamburger-menu:after,
  .hamburger-menu:before {
    width: $bar-width;
    height: $bar-height;
  }
  .hamburger-menu {
    position: relative;
    // transform: translateY($bar-spacing);
    background: rgb(0, 0, 0);
    transition: all 0ms 100ms;
    @include for-phone-only {
      transform-origin: center;
      transform: scale(0.6);
    }
    &.animate {
      background: rgba(255, 255, 255, 0);
    }
  }
  .hamburger-menu:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: $bar-spacing;
    background: rgb(0, 0, 0);
    transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
      transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  .hamburger-menu:after {
    content: '';
    position: absolute;
    left: 0;
    top: $bar-spacing;
    background: rgb(0, 0, 0);
    transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
      transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  .hamburger-menu.animate:after {
    top: 0;
    transform: rotate(45deg);
    transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1),
      transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  .hamburger-menu.animate:before {
    bottom: 0;
    transform: rotate(-45deg);
    transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1),
      transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }
}
</style>
