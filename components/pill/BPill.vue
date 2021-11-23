<template>
  <li>
    <component :is="tag" :to="to" :href="href" :class="['pill', `pill-${variant}`, `pill-${size}`, {'pill-focus-dark' : focusDark}]">
      <slot />
    </component>
  </li>
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

        return 'span'
      }
    }
  }
</script>
