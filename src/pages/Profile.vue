<template>
  <b-container fluid>
    <div class="profile">
      <h2>Hey there, I'm Gustavo.</h2>

      <b-img src="perfil.jpg" class="d-block mx-auto profile-pic" fluid rounded="circle"/>
      <div
        class="profile-description"
      >Backend Developer since 2016. Passionate about learning new, awesome things. I always do my best to write clean, testable, and well-designed code with high focus on performance and reliability.
        <p>Eventually, I throw myself on some infrastructure and frontend adventures. I have to say sometimes I fail accomplish them in the firs try, but I have always learned things from the mistakes made on the way.</p>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Profile"
};
</script>


<style lang="scss">
body {
  background-color: #ebebeb;
}

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