<template>
  <div class="card">
    <div class="card-body">
      <form @submit.prevent="submit">
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            name="name"
            v-validate="'required'"
            v-model="form.name"
          >
          <span class="error">{{ errors.first('name') }}</span>
        </div>
        <div class="form-group">
          <label>Address</label>
          <input
            type="text"
            class="form-control"
            placeholder="Address"
            name="address"
            v-validate="'required'"
            v-model="form.address"
          >
          <span class="error">{{ errors.first('address') }}</span>
        </div>
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label>Contact Number</label>
            <input
              type="text"
              class="form-control"
              placeholder="Contact Number"
              name="contact number"
              v-validate="'required'"
              v-model="form.contactNumber"
            >
            <span class="error">{{ errors.first('contact number') }}</span>
          </div>
          <div class="col-md-6 mb-3">
            <label>Email</label>
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              name="email"
              v-validate="'required|email'"
              v-model="form.email"
            >
            <span class="error">{{ errors.first('email') }}</span>
          </div>
          <div class="col-md-6 mb-3">
            <label>Birthday</label>
            <input
              type="date"
              class="form-control"
              placeholder="Birthday"
              name="birthday"
              v-validate="'required'"
              v-model="form.birthday"
            >
            <span class="error">{{ errors.first('birthday') }}</span>
          </div>
        </div>
        <hr>
        <button type="submit" class="btn btn-light btn-round float-right" @click.prevent="submit">
          <i class="fa fa-check"></i>
          {{ submitText }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object
    },
    submitText: {
      type: String,
      default: "Create"
    }
  },
  data: () => ({
    form: {
      name: "",
      address: "",
      contactNumber: "",
      email: "",
      birthday: ""
    }
  }),
  mounted() {
    if (this.user) {
      this.form = Object.assign({}, this.user);
    }
  },
  methods: {
    submit() {
      this.$validator.validate().then(result => {
        if (result) {
          this.$emit("submit", this.form);
        }
      });
    }
  }
};
</script>

<style scoped>
.error {
  font-size: 13px;
  color: red;
}
</style>
