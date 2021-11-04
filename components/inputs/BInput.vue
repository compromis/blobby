<template>
  <div :class="['input-field', `input-${variant}`, `input-${size}`, { 'input-has-errors': hasErrors, 'input-has-value': hasValue }]">
    <label :for="name" :class="['input-label', 'text-sm', { 'visually-hidden': noLabel }]">
      {{ label }}
    </label>
    <input
      :id="name"
      ref="input"
      :name="name"
      :value="modelValue"
      v-bind="$attrs"
      :class="['input', { 'w-100': block }]"
      :aria-describedby="name + 'Errors'"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="focused = true"
      @blur="focused = false"
    />
    <div v-if="hasErrors" :id="name + 'Errors'" class="field-errors mt-1 text-sm">
      {{ error }}
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      modelValue: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      noLabel: {
        type: Boolean,
        default: false
      },
      variant: {
        type: String,
        default: 'default',
        validator: (value) => ['default', 'float'].indexOf(value) !== -1
      },
      size: {
        type: String,
        default: 'md',
        validator: (value) => ['sm', 'md', 'lg'].indexOf(value) !== -1
      },
      error: {
        type: String,
        default: ''
      },
      block: {
        type: Boolean,
        default: false
      }
    },

    emits: ['update:modelValue'],

    data () {
      return {
        focused: false
      }
    },

    computed: {
      hasErrors () {
        return this.error.length > 0
      },

      hasValue () {
        return this.focused || !!this.modelValue
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>