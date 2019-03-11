<template>
  <div class="col-md-12">
    <user-form :user="user" :title="`${user.name}`" submit-text="UPDATE" @submit="onSubmit" @cancel="onCancel"></user-form>
  </div>
</template>

<script>
import UserForm from "../../components/user/UserForm";

export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  },
  components: {
    UserForm
  },
  methods: {
    onSubmit(user) {
      // call update api here
      // else
      this.$store.commit("update", { id: this.id, user });
      this.$store.commit("toast", "User has been updated.");
      this.$router.replace({ name: "user.index" });
    },
    onCancel() {
      this.$router.replace({ name: "user.index" });
    }
  }
};
</script>
