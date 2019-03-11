<template>
  <div id="app">
    <toast></toast>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">User Management</a>
    </nav>
    <div class="container pt-4">
      <div class="row">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from "./components/Toast";

export default {
  name: "app",
  components: {
    Toast
  }
};
</script>

<style>
#app {
  background: #eee;
  height: 100vh;
}
.btn-round, .btn-round:hover {
  border-radius: 25px;
  border: 1px solid;
}
</style>
