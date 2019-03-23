<template>
  <b-container fluid>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </b-container>
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
body {
  background-color: #ebebeb;
  padding-top: 100px;
}

#app {
  font-family: "Open Sans", sans-serif;
  position: relative;
  margin: 0;
}
</style>
