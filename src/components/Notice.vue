<template>
  <div class="notice">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.notice {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #E4E4F0;
  border: 1px solid gray;
  border-radius: 10px;
  box-shadow: 0 0 10px 5px rgba(0,0,0, 0.1);
  transition: all 0.15s linear;
  padding: 20px;
  visibility: hidden;
  opacity: 0;
  &.active {
    visibility: visible;
    opacity: 1;
  }
}
</style>
