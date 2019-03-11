<template>
  <div class="col-md-12">
    <div class="row">
      <div class="col-lg-12">
        <button class="btn btn-light btn-round btn-sm float-right mb-3" @click="create"><i class="fa fa-plus"></i> Add</button>
      </div>
    </div>
    <user-list :users="users" @edit="edit"></user-list>
  </div>
</template>

<script>
import UserList from "../../components/user/UserList";

export default {
  components: {
    UserList
  },
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  methods: {
    create() {
      this.$router.push({ name: "user.create" });
    },
    edit(user) {
      this.$router.push({ name: "user.edit", params: { id: user.id, user } });
    }
  }
};
</script>
