<template>
  <component :is="tag" :to="to" :href="href" :class="['button', `button-${variant}`, `button-${size}`]">
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
      variant: {
        type: String,
        default: 'primary'
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

        return 'button'
      }
    }
  }
</script>
