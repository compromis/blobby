<template>
  <div
    :class="[
      'input-field',
      `input-${variant}`,
      `input-${size}`,
      `text-${size}`,
      `input-border-${border}`,
      spanClass,
      {
        'input-has-errors': hasErrors,
        'input-has-value': hasValue || labelOnTop
      }
    ]">
    <label :for="name" :class="['input-label lh-1', { 'text-sm': variant !== 'float', 'visually-hidden': noLabel }]">
      {{ label }}
    </label>
    <component :is="inputType"
      :id="name"
      ref="input"
      :name="name"
      :value="modelValue"
      v-bind="$attrs"
      :class="['input', { 'w-100': block, 'focus-dark': focusDark && variant === 'float', 'input-focus-dark': focusDark && variant !== 'float' }]"
      :aria-describedby="error ? name + 'Errors' : null"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="focused = true"
      @blur="focused = false"
    />
    <div v-if="hasErrors" :id="name + 'Errors'" class="field-errors mt-1 text-sm" v-html="error" />
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
        default: null
      },
      label: {
        type: String,
        default: null
      },
      noLabel: {
        type: Boolean,
        default: false
      },
      labelOnTop: {
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
      border: {
        type: String,
        default: 'default',
        validator: (value) => ['default', 'muted', 'supermuted', 'outline'].indexOf(value) !== -1
      },
      error: {
        type: String,
        default: ''
      },
      block: {
        type: Boolean,
        default: true
      },
      focusDark: {
        type: Boolean,
        default: false,
      },
      span: {
        type: [String, Number, Object],
        default: '4'
      }
    },

    emits: ['update:modelValue'],

    data () {
      return {
        focused: false
      }
    },

    computed: {
      inputType () {
        if (this.$attrs.type === 'textarea') {
          return 'textarea'
        }

        return 'input'
      },

      hasErrors () {
        return this.error.length > 0
      },

      hasValue () {
        return this.focused || !!this.modelValue
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
