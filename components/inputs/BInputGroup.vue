<template>
  <fieldset class="input-group">
    <legend v-if="title || $slots.title" class="input-group-legend">
      {{ title }}
      <slot name="title" />
    </legend>
    <b-card v-bind="card" :overflow-hidden="!card ? true : null">
      <slot />
    </b-card>
  </fieldset>
</template>

<script>
  import BCard from '../card/BCard.vue';

  export default {
    components: {
      BCard,
    },

    props: {
      title: {
        type: String,
        default: ''
      },

      card: {
        type: Object,
        default: () => null
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>