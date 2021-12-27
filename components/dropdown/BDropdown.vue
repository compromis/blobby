<template>
  <div :class="['dropdown', { 'opens-on-click': opensOnClick, 'opens-on-hover': opensOnHover }]">
    <slot name="toggler" />
    <div class="dropdown-content">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      opens: {
        type: [Array, String],
        default: 'click'
      }
    },

    computed: {
      opensArray () {
        return Array.isArray(this.opens) ? this.opens : this.opens.split(',')
      },

      opensOnClick () {
        return this.opensArray.includes('click')
      },

      opensOnHover () {
        return this.opensArray.includes('hover')
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>