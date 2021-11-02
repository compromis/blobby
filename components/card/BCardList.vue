<template>
  <component :is="as" :class="['card-list', 'list-reset', { 'card-list-padded': padded }]">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BCardList',

  props: {
    as: {
      type: String,
      default: 'ul'
    },
    padded: {
      type: Boolean,
      default: true
    }
  }
}
</script>