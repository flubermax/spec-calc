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
  font-size: 24px;
  font-weight: bold;
  background-color: #fff;
  border: 1px solid gray;
  box-shadow: 0 0 5px 1px rgba(#000, 0.3);
  padding: 20px;
  transform: translate(-50%, -50%);
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s linear;
  &.active {
    visibility: visible;
    opacity: 1;
  }
}

@media (max-width: 700px) {
  .notice {
    font-size: 18px;
  }
}
</style>
