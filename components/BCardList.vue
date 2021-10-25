<template>
  <component :is="as" :class="['card-list', 'list-reset', { 'card-list-padded': padding }]">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    as: {
      type: String,
      default: 'div'
    },
    padding: {
      type: Boolean,
      default: false
    }
  }
}
</script>