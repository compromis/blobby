<template>
  <ul class="badge-list">
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
