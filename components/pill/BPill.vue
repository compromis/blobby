<template>
  <component :is="wrapper" class="badge-wrapper">
    <component :is="tag" ref="link" :to="to" :href="href || to" :class="['pill', `pill-${variant}`, `pill-${size}`, {'pill-focus-dark' : focusDark}]">
      <slot />
    </component>
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
      variant: {
        type: String,
        default: 'default'
      },
      focusDark: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'md'
      },
      as: {
        type: String,
        default: 'span'
      }
    },

    computed: {
      tag () {
        if (this.to) {
          return resolveComponent('NuxtLink')
        }

        if (this.href) {
          return 'a'
        }

        return this.as
      },

      wrapper () {
        return 'isList' in this.$parent ? 'li' : 'span'
      }
    }
  }
</script>
