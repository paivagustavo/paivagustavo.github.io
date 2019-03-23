<template>
  <v-container fluid id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </v-container>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "home",
  components: {
    Header,
    Footer
  }
};
</script>


<style>
html {
  overflow-y: auto;
}

body {
  background-color: #ebebeb;
  padding-top: 100px;
}

#app {
  font-family: Roboto, sans-serif;
}
</style>
