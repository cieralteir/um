<template>
  <div id="app">
    <toast></toast>
    <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">User Management</a>
    </nav> -->
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
  font-family: 'Raleway', sans-serif;
}
.btn-round {
  border-radius: 25px !important;
  padding-left: 20px !important;
  padding-right: 20px !important;
}
</style>
