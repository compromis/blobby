<template>
  <div :class="['card-padded', { 'border-top': borderTop, 'border-bottom': borderBottom, 'border-left': borderLeft, 'border-right': borderRight }]">
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
    borderBottom: {
      type: Boolean,
      default: false
    },
    borderRight: {
      type: Boolean,
      default: false
    },
    borderLeft: {
      type: Boolean,
      default: false
    }
  }
}
</script>
