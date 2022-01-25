<template>
  <nav :class="['tab-list tab-list-default', `tab-list-${size}`, {'tab-list-focus-dark' : focusDark}, {'tab-list-muted' : muted}, {'tab-list-outline' : outline}]">
    <slot />
  </nav>
</template>

<script>
  export default {
    props: {
      outline: {
        type: Boolean,
        default: false
      },
      muted: {
        type: Boolean,
        default: false
      },
      focusDark: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'md'
      }
    }
  }
</script>
