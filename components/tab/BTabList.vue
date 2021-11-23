<template>
  <nav :class="['tab-list', `tab-list-${variant}`, `tab-list-${size}`, {'tab-list-focus-dark' : focusDark}]">
    <slot />
  </nav>
</template>

<script>
  export default {
    props: {
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
    }
  }
</script>
