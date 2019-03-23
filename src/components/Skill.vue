<template>
  <v-flex lg6 md12>
    <v-card elevation="5" class="skill">
      <v-layout align-center row wrap>
        <v-avatar tile>
          <v-img :src="imageUrl" :alt="title" class="skill-logo"/>
        </v-avatar>
        <p class="subheading skill-name">{{ title }}</p>
      </v-layout>

      <v-layout align-center wrap>
        <v-flex lg11 md10 sm12 align-center>
          <p>{{ description}}</p>
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "Skill",
  props: {
    imageUrl: String,
    title: String,
    description: String
  }
};
</script>

<style>
.skill-name {
  margin: 0;
  padding-left: 10px;
}

.v-card.skill {
  padding: 10px;
  margin: 10px;
  color: #2f2f2f;
  background-color: #f8f9fa;
}
@media only screen and (min-width: 1170px) {
  .skill {
    height: 140px;
  }
}
</style>
