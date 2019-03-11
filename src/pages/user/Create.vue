<template>
  <div class="col-md-12">
    <h4 class="mb-3">
      New User
      <button class="btn btn-light btn-round btn-sm float-right" @click="cancel"><i class="fa fa-caret-left"></i> Back</button>
    </h4>
    <user-form @submit="onSubmit"></user-form>
  </div>
</template>

<script>
import UserForm from "../../components/user/UserForm";

export default {
  components: {
    UserForm
  },
  methods: {
    cancel() {
      this.$router.replace({ name: "user.index" });
    },
    onSubmit(user) {
      // call store api here
      // else
      user.id = Math.floor(Math.random() * 100); // temporary

      this.$store.commit("create", user);
      this.$store.commit("toast", "User has been created.");
      this.$router.replace({ name: "user.index" });
    }
  }
};
</script>
