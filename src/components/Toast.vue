<template>
  <div class="toastr" v-show="toast.show">
    <div
      :class="`alert alert-${toast.type === 'success' ? 'primary' : 'danger'}`"
      role="alert"
    >
    <i :class="`fa fa-${toast.type === 'success' ? 'check' : 'times'}`"></i>
    {{ toast.message }}</div>
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
.toastr {
  position: absolute;
  position: fixed;
  bottom: 20px;
  right: 20px;
  max-width: 250px;
  z-index: 1;
}
</style>
