<template>
  <v-container class="skillset" fluid justify-center>
    <v-layout row>
      <v-flex xs12>
        <h1 class="skill-set-header">Things I know and like to work with :)</h1>
      </v-flex>
    </v-layout>

    <v-layout row>
      <Skill
        imageUrl="http://www.stickpng.com/assets/images/58480a44cef1014c0b5e4917.png"
        title="Kubernetes"
        description="Experience using Kubernetes to deploy applications. Usage of
                  deployments with probes to give zero downtime upgrades.
                  Helm to deploy several third party applications."
      />

      <Skill
        imageUrl="https://cdn-images-1.medium.com/max/1200/1*Ry69aqzJ_CJQly2p6BL3Qw.png"
        title="Microservices"
        description="Experience designing and implemeting fine grained
                  microservices applications with Spring Cloud, Consul and Spring Cloud Gateway."
      />

      <Skill
        imageUrl="https://storage.googleapis.com/gweb-cloudblog-publish/images/f4xvje.max-200x200.PNG"
        title="Google Cloud Platform"
        description="Used several Google Products to deploy and mantain several applications. This includes: GKE, Cloud Functions, Cloud Storage, Cloud DNS, Stackdriver and others."
      />

      <Skill
        imageUrl="https://dwglogo.com/wp-content/uploads/2017/12/MongoDB_logo_01.png"
        title="MongoDB"
        description="More than two years of constant usage of Mongo. From simplem finds and updates to advanced aggregations pipeline."
      />
    </v-layout>

    <v-layout row justify-center>
      <v-flex class="skill-set-footer">
        <h5>I have to say that I love to play with new, shiny things that has been getting some attention recently, specially from the open source community.</h5>

        <h5>If you are reading this and know any cutting-edge technologies on the field of Distributed System, Microservices, Containers and so on that are not in the list above, please introduce me to it. I will be in forever debt with You if it becomes my next favourite thing :)</h5>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Skill from "../components/Skill";

export default {
  name: "Skills",
  components: {
    Skill
  },
  computed: {
    binding() {
      const binding = {};

      if (!this.$vuetify.breakpoint.mdAndUp) binding.column = true;

      return binding;
    }
  }
};
</script>

<style>
body {
  background-color: #f8f9fa;
}

.container.skillset {
  border-radius: 0.25rem;
  max-width: 70%;
}

.skill-set-header {
  margin-bottom: 30px;
  text-align: center;
}

.skill-set-footer {
  margin-top: 30px;
  text-align: center;
  max-width: 800px;
}
</style>
