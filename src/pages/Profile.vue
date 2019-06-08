<template>
  <v-container fluid>
    <div class="profile">
      <v-layout row justify-center>
        <h2>Hey there, I'm Gustavo.</h2>
      </v-layout>

      <v-layout row justify-center class="profile-pic">
        <v-avatar size="256">
          <v-img src="perfil.jpg"/>
        </v-avatar>
      </v-layout>
      <v-layout row justify-center>
        <div class="profile-description">
          Former Backend Software Engineer turned to Site Reliability Engineer.
          <p>Passionate about learning new things.</p>
          <p>Writing clean code and keep everything reliable with a touch of observability because you never know when things are going to break.</p>
        </div>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Profile"
};
</script>


<style lang="scss">
.profile {
  line-height: 1.2;
  font-size: calc(10px + 1vmin);
  margin: auto;
  max-width: 80%;
  text-align: center;
}

.profile-pic {
  margin: 5vh 0;
}

.profile-description {
  display: inline-block;
}

@media only screen and (min-width: 1170px) {
  .profile-description {
    width: 50%;
  }
}
</style>