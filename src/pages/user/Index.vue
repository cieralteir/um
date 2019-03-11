<template>
  <div class="col-md-12">
    <h4 class="mb-4">
      USER MANAGEMENT
      <button class="btn btn-info btn-round float-md-right" @click="create">ADD USER <i class="fa fa-plus ml-1"></i></button>
    </h4>
    <user-list :users="users" @edit="edit" @remove="onRemove"></user-list>
    <modal-confirm text="Are you sure you want to delete this user?" @confirm="remove" @close="confirm = false" v-if="confirm"></modal-confirm>
  </div>
</template>

<script>
import UserList from "../../components/user/UserList";
import ModalConfirm from "../../components/modal/ModalConfirm";

export default {
  components: {
    UserList,
    ModalConfirm
  },
  data: () => ({
    confirm: false,
    toRemove: null
  }),
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
    },
    onRemove(id) {
      this.toRemove = id;
      this.confirm = true;
    },
    remove() {
      this.$store.commit("remove", this.toRemove);
      this.toRemove = null;
      this.confirm = false;
      this.$store.commit("toast", "User has been removed.");
    }
  }
};
</script>
