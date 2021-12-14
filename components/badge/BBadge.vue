<template>
  <component :is="wrapper" class="badge-wrapper">
    <component :is="as" :class="['badge', `badge-${variant}`, `badge-${size}`, `badge-${type}`]">
      <span><slot /></span>
    </component>
  </component>
</template>

<script>
  export default {
    props: {
      outline: {
        type: Boolean,
        default: false
      },
      variant: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'md'
      },
      as: {
        type: String,
        default: 'span'
      }
    },

    computed: {
      wrapper () {
        return 'isList' in this.$parent ? 'li' : 'span'
      },

      type () {
        return this.outline ? 'outline' : 'solid'
      },
    }
  }
</script>
