<template>
  <footer class="footer text-muted">
    <a href="https://compromis.net" target="_blank" rel="noopener" class="footer-logo d-block link-muted-to-black mb-3">
      <compromis-logo mono />
      <span class="visually-hidden">Compromís</span>
    </a>
    <p class="footer-text">
      <strong>{{ campaign }}</strong> és una campanya de <strong><a href="https://compromis.net" target="_blank" rel="noopener" class="link-muted-to-black">Compromís</a></strong>
    </p>
  </footer>
</template>

<script>
  import CompromisLogo from '../logos/CompromisLogo.vue'

  export default {
    components: {
      CompromisLogo
    },

    props: {
      campaign: {
        type: String,
        required: true
      }
    }
  }
</script>
