<template>
  <div class="col-md-12">
    <user-form @submit="onSubmit" @cancel="onCancel"></user-form>
  </div>
</template>

<script>
import UserForm from "../../components/user/UserForm";

export default {
  components: {
    UserForm
  },
  methods: {
    onSubmit(user) {
      // call store api here
      // else
      user.id = Math.floor(Math.random() * 100); // temporary

      this.$store.commit("create", user);
      this.$store.commit("toast", "User has been created.");
      this.$router.replace({ name: "user.index" });
    },
    onCancel() {
      this.$router.replace({ name: "user.index" });
    }
  }
};
</script>
