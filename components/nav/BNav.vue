<template>
  <nav :class="['nav', 'container', { 'nav-scrolled': scrolled, 'nav-expanded': expanded }]">
    <div class="nav-card bg-white rounded-xs shadow">
      <div class="nav-bar d-flex">
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

        <transition name="fade">
          <ul v-if="!expanded" :aria-title="menuTitle" :class="['nav-menu', 'nav-menu-abridged', 'd-none', `d-${collapseAt}-flex`]">
            <slot></slot>
          </ul>
        </transition>

        <div class="nav-toggle">
          <button id="nav-toggler" :aria-expanded="expanded ? 'true' : 'false'" aria-controls="nav-drawer" @click="expanded = !expanded">
            <hamburger-icon v-if="!expanded" />
            <close-icon v-else />
            <span class="visually-hidden">Xarxa de webs de Compromís</span>
          </button>
        </div>
      </div>
      <transition name="slide">
        <div v-if="expanded" id="nav-drawer" :aria-title="menuTitle" class="nav-drawer">
          <ul class="nav-menu-mobile">
            <slot></slot>
          </ul>
          <b-nav-network />
        </div>
      </transition>
    </div>
  </nav>
  <div class="nav-padding" />
  <transition name="fade">
    <div v-if="expanded" class="nav-backdrop" @click="expanded = false" />
  </transition>
</template>

<script>
  import BNavNetwork from './BNavNetwork.vue'
  import CompromisLogo from '../logos/CompromisLogo.vue'
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

    watch: {
      expanded (expanded) {
        const htmlElement = document.documentElement
        if (expanded) {
          htmlElement.classList.add('nav-open')
        } else {
          htmlElement.classList.remove('nav-open')
        }
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
