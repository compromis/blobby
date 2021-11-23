<template>
  <button :class="['tab', { selected }]">
    <slot />
  </button>
</template>

<script>
  export default {
    props: {
      selected: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
