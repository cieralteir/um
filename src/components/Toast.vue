<template>
  <div class="toast" v-show="toast.show">
    <div
      :class="`alert alert-${toast.type === 'success' ? 'primary' : 'danger'}`"
      role="alert"
    >{{ toast.message }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    toast() {
      return this.$store.state.toast;
    }
  }
};
</script>

<style scoped>
.toast {
  position: absolute;
  position: fixed;
  top: 20px;
  right: 20px;
  max-width: 250px;
  z-index: 1;
}
</style>
