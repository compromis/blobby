<template>
  <div
    :class="[
      'input-field',
      'input-field-with-slot',
      spanClass,
      { 'input-has-errors': hasErrors }
    ]">
    <label :for="labelFor || null" :class="['input-label', 'text-sm']">
      {{ label }}
    </label>
    <slot />
    <div v-if="hasErrors" :id="name + 'Errors'" class="field-errors mt-1 text-sm">
      {{ error }}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      labelFor: {
        type: String,
        default: ''
      },
      label: {
        type: String,
        required: true
      },
      error: {
        type: String,
        default: ''
      },
      span: {
        type: [String, Number, Object],
        default: '4'
      }
    },

    computed: {
      hasErrors () {
        return this.error.length > 0
      },

      spanClass () {
        const { span } = this

        if (!span) return null

        if (typeof span === 'object') {
          return span
        }

        return `span-${span}`
      }
    }
  }
</script>
