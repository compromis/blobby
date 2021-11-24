<template>
  <ul class="pill-list">
    <slot />
  </ul>
</template>

<script>
  export default {
    provide: {
      isItemInList: true
    }
  }
</script>

