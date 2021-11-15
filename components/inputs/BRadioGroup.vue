<template>
  <fieldset class="radio-group">
    <legend
      v-if="title || $slots.title"
      :class="[
        'radio-group-legend',
        { 'visually-hidden': titleHidden }
      ]">
      {{ title }}
      <slot name="title" />
    </legend>
    <slot></slot>
  </fieldset>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },

      titleHidden: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
