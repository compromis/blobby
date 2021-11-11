<template>
  <fieldset class="radio-group">
    <legend v-if="title" class="visually-hidden">{{ title }}</legend>
    <slot></slot>
  </fieldset>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>