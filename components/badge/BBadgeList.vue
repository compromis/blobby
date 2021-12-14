<template>
  <ul class="badge-list">
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
