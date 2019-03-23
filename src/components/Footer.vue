<template>
  <v-footer fixed height="auto" class="footer">
    <v-spacer></v-spacer>

    <v-card class="footer" flat>
      <v-btn v-for="icon in icons" :key="icon.name" icon :href="icon.to" class="footer">
        <v-icon size="24px">{{ icon.name }}</v-icon>
      </v-btn>
    </v-card>
    <v-spacer></v-spacer>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [
      { name: "fab fa-linkedin", to: "https://github.com/paivagustavo" },
      { name: "fab fa-github", to: "https://github.com/paivagustavo" },
      { name: "fab fa-twitter", to: "https://twitter.com/paivagustavodev" },
      { name: "fa-envelope", to: "mailto:guustavo.paiva@gmail.com" }
    ]
  })
};
</script>

<style>
.v-footer.footer {
  background-color: #f8f9fa;
}

.footer.v-card {
  background-color: #f8f9fa;
}
</style>
