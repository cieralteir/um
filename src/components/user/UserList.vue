<template>
  <div class="row">
    <div class="col-sm-6 col-md-4 mb-3" v-for="user in users" :key="user.id">
      <div class="card user-card">
        <div class="card-body">
          <div class="row" @mouseover="onMouseOver(user.id)" @mouseout="onMouseOut(user.id)">
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
            <div class="overlay" v-show="hovering[user.id]">
              <button class="btn btn-sm btn-link btn-edit" @click="edit(user)"><i class="fa fa-pencil fa-lg"></i></button>
            </div>
          </div>
          <button class="btn btn-sm btn-danger btn-remove" @click="remove(user.id)"><i class="fa fa-times"></i></button>
        </div>
      </div>
    </div>
    <div class="col-lg-12" v-if="!users.length">
        <p class="lead">No Users found.</p>
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
  data: () => ({
    hovering: [] // Can also create another component for user card so they can each have a local hovering data
  }),
  methods: {
    edit(user) {
      this.$emit("edit", user);
    },
    remove(id) {
      this.$emit("remove", id);
    },
    onMouseOver(id) {
      this.$set(this.hovering, id, true);
    },
    onMouseOut(id) {
      this.$set(this.hovering, id, false);
    }
  }
};
</script>

<style scoped>
.user-card .card-body {
  text-align: center;
}
.user-card .logo {
  max-height: 100px;
}
.user-card .overlay {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.user-card .overlay .btn-edit {
  position: relative;
  top: 35%;
  color: #fefefe;
}
.user-card .btn-remove {
  position: absolute;
  top: 0;
  right: 10px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
}
</style>
