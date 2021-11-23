<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :class="[
      'button',
      `button-${variant}`,
      `text-${size}`,
      `button-${size}`,
      `button-${type}`,
      { 'button-has-shadow' : hasShadow },
      { 'button-focus-dark' : focusDark },
      { 'w-100 d-block': block }
    ]">
    <span><slot /></span>
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
      type: {
        type: String,
        default: 'solid'
      },
      variant: {
        type: String,
        default: 'primary'
      },
      size: {
        type: String,
        default: 'md'
      },
      block: {
        type: Boolean,
        default: false
      },
      hasShadow: {
        type: Boolean,
        default: false,
      },
      focusDark: {
        type: Boolean,
        default: false,
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

        return 'button'
      }
    }
  }
</script>
