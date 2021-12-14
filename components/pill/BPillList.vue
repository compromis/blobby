<template>
  <ul class="pill-list">
    <slot />
  </ul>
</template>

<script>
  export default {
    props: {
      isList: {
        type: Boolean,
        default: true
      },
    },
  }
</script>
