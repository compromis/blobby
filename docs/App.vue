<script setup>
import CardDocs from './sections/CardDocs.vue'
import NavDocs from './sections/NavDocs.vue'
import InputDocs from './sections/InputDocs.vue'
import ButtonDocs from './sections/ButtonDocs.vue'
import PillDocs from './sections/PillDocs.vue'
import TabDocs from './sections/TabDocs.vue'
import BNav from '../components/nav/BNav.vue'
import BNavItem from '../components/nav/BNavItem.vue'
import CloseIcon from '../components/icons/CloseIcon.vue'
</script>

<template>
  <b-nav full-width>
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
        <nav-docs />
        <input-docs />
        <button-docs />
        <pill-docs />
        <tab-docs />
      </section>
    </main>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Concert+One&family=IBM+Plex+Mono&display=swap');
@import '../scss/blobby';

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
  padding: 0 2rem;
}

.docs {
  h3 {
    font-family: var(--bs-font-monospace);
  }

  &-cols {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin: 2rem 0;
  }

  &-col-preview {
    padding-top: 4rem;
  }
}

.sticky {
  position: sticky;
  top: $navbar-safe-area;
}
</style>
