<template>
  <snippet-code :key="ref">
    <slot />
  </snippet-code>
</template>

<script>
import SnippetCode from './SnippetCode.vue'

  export default {
    components: {
      SnippetCode
    },

    props: {
      properties: {
        type: Object,
        required: true
      }
    },

    data () {
      return {
        ref: 'snippet1'
      }
    },

    watch: {
      properties: {
        handler () {
          this.ref = Math.random()
        },
        deep: true
      }
    }
  }
</script>

