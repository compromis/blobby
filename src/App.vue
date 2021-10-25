<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import BCard from '../components/BCard.vue'
import BCardSection from '../components/BCardSection.vue'
import BCardList from '../components/BCardList.vue'
</script>

<template>
  <div class="container">
    <h2>&lt;b-card&gt;</h2>
    <b-card class="mb-4">
      <b-card-section>
        Hello
      </b-card-section>
      <img style="height: 100px" src="https://images.unsplash.com/photo-1635067907927-308f0ce72607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3132&q=80">
      <b-card-section>
        <h2>Title</h2>
      </b-card-section>
    </b-card>

    <b-card type="outline" class="mb-4">
      
      <b-card-list padding>
        <h2>Hello</h2>
        <b-card-section>
          Section 1
        </b-card-section>
        <b-card-section>
          Section 2
        </b-card-section>
      </b-card-list>
      <img src="https://images.unsplash.com/photo-1635067907927-308f0ce72607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3132&q=80">
    </b-card>

    <b-card type="gradient" variant="primary" padding image="https://images.unsplash.com/photo-1635067907927-308f0ce72607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3132&q=80">
      Gradient
    </b-card>
  </div>
</template>

<style lang="scss">
// @import '../scss/blobby';
</style>
