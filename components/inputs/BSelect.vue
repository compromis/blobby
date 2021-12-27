<template>
  <div
    :class="[
      'input-field',
      'select-field',
      `input-${variant}`,
      `input-${size}`,
      `input-border-${border}`,
      spanClass,
      {
        'input-has-errors': hasErrors,
        'input-has-value': hasValue || labelOnTop
      }
    ]">
    <label :for="name" :class="['input-label', 'text-sm', { 'visually-hidden': noLabel }]">
      {{ label }}
    </label>
    <div class="select-with-chevron">
      <select
        :id="name"
        ref="input"
        :name="name"
        :value="modelValue"
        v-bind="$attrs"
        :class="['input', 'select', { 'w-100': block, 'focus-primary': !focusDark && variant === 'float', 'focus-dark' : focusDark && variant === 'float' }]"
        :aria-describedby="error ? name + 'Errors' : null"
        @change="$emit('update:modelValue', $event.target.value)"
        @focus="focused = true"
        @blur="focused = false"
      >
        <slot />
      </select>
      <down-icon class="select-icon" />
    </div>
    <div v-if="hasErrors" :id="name + 'Errors'" class="field-errors mt-1 text-sm">
      {{ error }}
    </div>
  </div>
</template>

<script>
  import DownIcon from '../icons/DownIcon.vue'

  export default {
    components: {
      DownIcon
    },
  
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
