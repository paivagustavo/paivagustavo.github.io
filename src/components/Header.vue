<template>
  <v-card flat>
    <v-toolbar fixed id="nav-header">
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn flat to="/">Home</v-btn>
        <v-btn flat to="/skills">Skills</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
#nav-header {
  background-color: #f8f9fa;
}
</style>
