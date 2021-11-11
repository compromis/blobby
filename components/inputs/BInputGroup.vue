<template>
  <fieldset class="input-card">
    <legend
      v-if="title || $slots.title"
      :class="[
        'input-card-legend',
        { 'visually-hidden': titleHidden }
      ]">
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

      titleHidden: {
        type: Boolean,
        default: false
      },

      card: {
        type: Object,
        default: () => null
      }
    }
  }
</script>
