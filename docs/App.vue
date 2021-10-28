<script setup>
import CompromisLogo from '../components/CompromisLogo.vue'
import CardDocs from './sections/CardDocs.vue'

</script>

<template>
  <div class="container-fluid">
    <header class="header my-4">
      <compromis-logo text="Web" class="logo" />
      <h1>blobby</h1>
    </header>

    <main class="docs">
      <section>
        <card-docs />
      </section>
    </main>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Concert+One&family=IBM+Plex+Mono&display=swap');@import '../scss/blobby';
@import 'bootstrap/scss/type';
@import 'bootstrap/scss/tables';
@import 'bootstrap/scss/badge';

:root {
  --bs-font-monospace: 'IBM Plex Mono', monospace;
}

.header {
  .logo {
    height: 2rem;
  }

  h1 {
    font-family: 'Concert One', sans-serif;
    font-size: 7rem;
    margin: 3rem 0;
    letter-spacing: -0.02em;
  }
}

.container-fluid {
  padding: 3rem;
}

.docs {
  h3 {
    font-family: var(--bs-font-monospace);
  }

  &-cols {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
}

.sticky {
  position: sticky;
  top: 1rem;
}
</style>
