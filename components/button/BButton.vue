<template>
  <component
    :is="tag"
    :to="to || null"
    :href="href || to || null"
    :class="[
      'button',
      `button-${variant}`,
      `text-${size}`,
      `button-${size}`,
      `button-${type}`,
      {
        'button-has-shadow' : shadow,
        'focus-dark' : focusDark,
        'w-100 d-block': block
      }
    ]"
    @click="$emit('click')">
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
      outline: {
        type: Boolean,
        default: false
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
      shadow: {
        type: Boolean,
        default: false,
      },
      focusDark: {
        type: Boolean,
        default: false,
      }
    },

    emits: ['click'],

    computed: {
      type () {
        return this.outline ? 'outline' : 'solid'
      },

      tag () {
        if (this.to) {
          return resolveComponent('NuxtLink')
        }

        if (this.href) {
          return 'a'
        }

        return 'button'
      }
    }
  }
</script>
