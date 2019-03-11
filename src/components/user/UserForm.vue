<template>
    <div class="user-form">
      <h4 class="mb-4">{{ title }}</h4>
      <form @submit.prevent="submit">
        <div class="form-row mb-3">
          <div class="col-md-6 mb-3">
            <label>NAME</label>
            <input
              type="text"
              class="form-control"
              name="name"
              v-validate="'required'"
              v-model="form.name"
            >
            <span class="error">{{ errors.first('name') }}</span>
          </div>
          <div class="col-md-6 mb-3">
            <label>ADDRESS</label>
            <input
              type="text"
              class="form-control"
              name="address"
              v-validate="'required'"
              v-model="form.address"
            >
            <span class="error">{{ errors.first('address') }}</span>
          </div>
          <div class="col-md-6 mb-3">
            <label>CONTACT NUMBER</label>
            <input
              type="text"
              class="form-control"
              name="contact number"
              v-validate="'required'"
              v-model="form.contactNumber"
            >
            <span class="error">{{ errors.first('contact number') }}</span>
          </div>
          <div class="col-md-6 mb-3">
            <label>EMAIL</label>
            <input
              type="email"
              class="form-control"
              name="email"
              v-validate="'required|email'"
              v-model="form.email"
            >
            <span class="error">{{ errors.first('email') }}</span>
          </div>
          <div class="col-md-6 mb-3">
            <label>BIRTHDAY</label>
            <!-- <input
              type="date"
              class="form-control"
              name="birthday"
              v-validate="'required'"
              v-model="form.birthday"
            > -->
            <flat-pickr
              v-model="form.birthday"
              class="form-control"
              name="birthday"
              v-validate="'required'"
            ></flat-pickr>
            <span class="error">{{ errors.first('birthday') }}</span>
          </div>
        </div>
        <div class="float-right">
          <button class="btn btn-link" @click.prevent="cancel">
            <i class="fa fa-caret-left"></i>
            GO BACK
          </button>
          <button type="submit" class="btn btn-primary btn-round" @click.prevent="submit">
            <i class="fa fa-check"></i>
            {{ submitText }}
          </button>
        </div>
      </form>
    </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  props: {
    user: {
      type: Object
    },
    title: {
      type: String,
      default: "CREATE USER"
    },
    submitText: {
      type: String,
      default: "CREATE"
    }
  },
  components: {
    flatPickr
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
    },
    cancel() {
      this.$emit("cancel");
    }
  }
};
</script>

<style scoped>
.user-form {
  border: none;
}
.user-form input {
  border-top: none;
  border-right: none;
  border-left: none;
  border-radius: 0px;
}
.user-form input:focus {
  box-shadow: none;
  border-bottom: 1px solid;
}
.user-form input[readonly] {
  background: transparent;
}
.user-form .error {
  font-size: 13px;
  color: #f44336;
}
.user-form label {
  font-size: 13px;
  color: #795548;
}
</style>
