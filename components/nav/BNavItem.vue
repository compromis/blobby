<template>
  <li class="nav-menu-item">
    <component :is="tag" :to="to" :href="href" v-bind="$attrs">
      <component :is="icon" v-if="icon" class="nav-menu-item-icon" />
      <slot></slot>
    </component>
    <ul v-if="$slots.submenu" class="nav-submenu">
      <slot name="submenu" />
    </ul>
  </li>
</template>

<script>
  export default {
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
      }
    },

    computed: {
      tag () {
        return this.to ? 'nuxt-router' : 'a'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>