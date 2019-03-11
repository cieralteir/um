<template>
  <div class="modal show modal-confirm">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          {{ text }}
          <hr>
          <div class="float-right">
            <button type="button" class="btn btn-link" @click="close">CLOSE</button>
            <button type="button" class="btn btn-primary btn-round" @click="confirm">
              <i class="fa fa-check"></i>
              CONFIRM
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  methods: {
    confirm() {
      this.$emit("confirm");
    },
    close() {
      this.$emit("close");
    }
  }
}
</script>

<style>
.modal-confirm {
  display: block;
  background: rgba(0, 0, 0, 0.5);
}
</style>
