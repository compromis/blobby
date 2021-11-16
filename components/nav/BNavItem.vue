<template>
  <li class="nav-menu-item">
    <component :is="tag" :to="to" :href="href" v-bind="$attrs">
      <component :is="icon" v-if="icon" class="nav-menu-item-icon" />
      <slot></slot>
      <back-icon v-if="$slots.submenu && !noChev" class="nav-menu-item-chev" />
    </component>
    <ul v-if="$slots.submenu" class="nav-submenu">
      <slot name="submenu" />
    </ul>
  </li>
</template>

<script>
  import BackIcon from '../icons/BackIcon.vue'

  export default {
    components: {
      BackIcon
    },
    props: {
      to: {
        type: String,
        default: ''
      },
      href: {
        type: String,
        default: ''
      },
      icon: {
        type: [Object, Function],
        default: () => null
      },
      noChev: {
        type: Boolean,
        default: false
      }
    },

    computed: {
      tag () {
        return this.to ? 'nuxt-link' : 'a'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>