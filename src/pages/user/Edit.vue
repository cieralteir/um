<template>
  <div class="col-md-12">
    <h4 class="mb-3">
      {{ user.name }}
      <button class="btn btn-light btn-round btn-sm float-right" @click="cancel"><i class="fa fa-caret-left"></i> Back</button>
    </h4>
    <user-form :user="user" submit-text="Update" @submit="onSubmit"></user-form>
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
    cancel() {
      this.$router.replace({ name: "user.index" });
    },
    onSubmit(user) {
      // call update api here
      // else
      this.$store.commit("update", { id: this.id, user });
      this.$store.commit("toast", "User has been updated.");
      this.$router.replace({ name: "user.index" });
    }
  }
};
</script>
