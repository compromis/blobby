<script setup>
import CardDocs from './sections/CardDocs.vue'
import BNav from '../components/nav/BNav.vue'
import BNavItem from '../components/nav/BNavItem.vue'
import CloseIcon from '../components/nav/CloseIcon.vue'
</script>

<template>
  <b-nav>
    <b-nav-item href="/hello" :icon="CloseIcon">
      Item 1
      <template #submenu>
        <b-nav-item href="/hello2" :icon="CloseIcon">
          Subitem 1
        </b-nav-item>
        <b-nav-item href="/hello2">
          Subitem 2
        </b-nav-item>
      </template>
    </b-nav-item>
    <b-nav-item href="/hello">
      Item 2
    </b-nav-item>
    <b-nav-item href="/hello">
      Item 3
    </b-nav-item>
    <b-nav-item href="/hello">
      Item 3
    </b-nav-item>
    <b-nav-item href="/hello">
      Item 3
    </b-nav-item>

    <template #logo-append>
      <a href="/">Logo alt</a>
    </template>
  </b-nav>
  <div class="container-fluid">
    <header class="header my-4">
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
@import url('https://fonts.googleapis.com/css2?family=Concert+One&family=IBM+Plex+Mono&display=swap');
@import '../scss/blobby';
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
    font-weight: 500;
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
  top: $navbar-safe-area;
}
</style>
