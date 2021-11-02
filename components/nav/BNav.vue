<template>
  <nav :class="['nav', { 'nav-scrolled': scrolled, 'nav-expanded': expanded }]">
    <div class="container">
      <div class="nav-card d-flex bg-white rounded-xs shadow">
        <slot name="logo">
          <div class="nav-logo">
            <div v-if="$slots['logo-prepend']" class="nav-logo-prepend">
              <slot name="logo-prepend"></slot>
            </div>
            <a href="https://compromis.net" class="nav-logo-compromis">
              <compromis-logo />
              <span class="visually-hidden">
                Compromís
              </span>
            </a>
            <div v-if="$slots['logo-append']" class="nav-logo-append">
              <slot name="logo-append"></slot>
            </div>
            
          </div>
        </slot>

        <ul :aria-title="menuTitle" :class="['nav-menu', 'd-none', `d-${collapseAt}-flex`]">
          <slot></slot>
        </ul>

        <div class="nav-toggle">
          <button id="nav-toggler" :aria-expanded="expanded ? 'true' : 'false'" @click="expanded = !expanded">
            <hamburger-icon v-if="!expanded" />
            <close-icon v-else />
            <span class="visually-hidden">Xarxa de webs de Compromís</span>
          </button>
        </div>
        <div class="nav-drawer d-none">
          <ul :aria-title="menuTitle" class="nav-menu-mobile">
            <slot></slot>
          </ul>
          <b-nav-network />
        </div>
      </div>
    </div>
  </nav>
  <div class="nav-padding" />
</template>

<script>
  import BNavNetwork from './BNavNetwork.vue'
  import CompromisLogo from '../logo/CompromisLogo.vue'
  import HamburgerIcon from './HamburgerIcon.vue'
  import CloseIcon from './CloseIcon.vue'

  export default {
    components: {
      BNavNetwork,
      HamburgerIcon,
      CloseIcon,
      CompromisLogo
    },

    props: {
      collapseAt: {
        type: String,
        default: 'lg'
      },
      menuTitle: {
        type: String,
        default: 'Menú principal'
      }
    },

    data () {
      return {
        scrolled: false,
        expanded: false
      }
    },

    mounted () {
      window.addEventListener('scroll', this.onScroll)
    },

    methods: {
      onScroll () {
        const { scrollY } = window
        this.scrolled = scrollY > 24
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>