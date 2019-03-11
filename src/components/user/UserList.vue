<template>
  <div class="row">
    <div class="col-sm-6 col-md-4 mb-3" v-for="user in users" :key="user.id">
      <div class="card user-card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-4">
              <img src="https://immedilet-invest.com/wp-content/uploads/2016/01/user-placeholder.jpg" class="logo img-fluid">
            </div>
            <div class="col-md-8 text-left">
              <span class="font-weight-bold">{{ user.name }}</span>
              <br>
              <span class="text-muted">{{ user.email }}</span>
              <br>
              <p>{{ user.contactNumber }}</p>
            </div>
          </div>
          <div class="btn-group btn-actions">
            <button class="btn btn-sm btn-light" @click="remove(user)"><i class="fa fa-times"></i></button>
            <button class="btn btn-sm btn-light" @click="edit(user)"><i class="fa fa-pencil"></i></button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12" v-if="!users.length">
      <div class="card user-card">
        <div class="card-body text-left">
          No Users found.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    edit(user) {
      this.$emit("edit", user);
    },
    remove(user) {
      this.$store.commit("remove", user.id);
      this.$store.commit("toast", "User has been removed.");
    }
  }
};
</script>

<style scoped>
.user-card {
  border: none;
  box-shadow: 2px 2px 5px #aaa;
}
.user-card .card-body {
  text-align: center;
}
.user-card .logo {
  max-height: 100px;
}
.user-card .btn-actions {
  position: absolute;
  top: 10px;
  right: 10px;
}
.user-card .btn-actions .btn {
  color: #555;
  background: none;
  border: none;
}
</style>