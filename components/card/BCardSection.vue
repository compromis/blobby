<template>
  <div :class="['card-padded', { 'border-top': borderTop, 'border-bottom': borderBottom }]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BCardSection',

  props: {
    borderTop: {
      type: Boolean,
      default: false
    },
    borderBottom:{
      type: Boolean,
      default: false
    }
  }
}
</script>
