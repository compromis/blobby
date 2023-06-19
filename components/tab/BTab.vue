<template>
  <component :is="tag" :to="to" :href="href || to" :class="['tab', { selected }]" @click="$emit('click')">
    <slot />
  </component>
</template>

<script>
  export default {
    props: {
      to: {
        type: String,
        default: null
      },
      href: {
        type: String,
        default: null
      },
      as: {
        type: String,
        default: 'button'
      },
      selected: {
        type: Boolean,
        default: true
      }
    },

    emits: ['click'],

    computed: {
      tag () {
        if (this.to) {
          return resolveComponent('NuxtLink')
        }

        if (this.href) {
          return 'a'
        }

        return this.as
      },
    }
  }
</script>
