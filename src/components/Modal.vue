<template>
  <div class="modal">asd</div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(#000, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  &-body {
    background-color: #fff;
    border: 1px solid gray;
    border-radius: 10px;
    box-shadow: 0 0 2px gray;
    transition: all 0.15s linear;
    padding: 20px;
  }
  &.active {
  }
}
</style>
