<template>
  <component :is="tag" :to="to || null" :href="href || null" :class="['tab', { selected }]">
    <slot />
  </component>
</template>

<script>
  export default {
    props: {
      to: {
        type: String,
        default: null
      },
      href: {
        type: String,
        default: null
      },
      as: {
        type: String,
        default: 'button'
      },
      selected: {
        type: Boolean,
        default: true
      }
    },

    computed: {
      tag () {
        if (this.to) {
          return 'nuxt-link'
        }

        if (this.href) {
          return 'a'
        }

        return this.as
    }
  }
  }
</script>
