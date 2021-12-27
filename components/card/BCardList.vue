<template>
  <component :is="as" :class="[
    'card-list',
    'list-reset', {
      'card-list-padded': padded && !blockLinks && !menu,
      'card-list-divisions': divisions && !menu,
      'card-list-with-block-links': blockLinks || menu
    }
  ]">
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
    },
    divisions: {
      type: Boolean,
      default: true
    },
    blockLinks: {
      type: Boolean,
      default: false
    },
    menu: {
      type: Boolean,
      default: false
    }
  }
}
</script>