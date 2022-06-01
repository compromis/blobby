<template>
  <component
    :is="component"
    v-bind="componentAttrs"
    :class="[
      'radio-field',
      'form-check',
      'radio-' + variant,
      {
        'selected': isSelected,
        'disabled': disabled,
        'focus-dark-within' : focusDark && !!card
      }
    ]">
    <input
      :id="name + value"
      v-model="selected"
      type="radio"
      :name="name"
      :value="value"
      :disabled="disabled"
      :class="['radio-input', 'form-check-input', { 'visually-hidden': !!card }]"
    >
    <slot></slot>
  </component>
</template>

<script>
  import BCard from '../card/BCard.vue'

  export default {
    components: {
      BCard
    },

    props: {
      name: {
        type: String,
        required: true
      },
      value: {
        type: String,
        default: null
      },
      modelValue: {
        type: String,
        required: true
      },
      variant: {
        type: String,
        default: 'default'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      focusDark: {
        type: Boolean,
        default: false,
      },
      card: {
        type: [Boolean, Object],
        default: false
      }
    },

    emits: ['update:modelValue'],

    computed: {
      selected: {
        get () {
          return this.modelValue
        },

        set (value) {
          this.$emit('update:modelValue', value)
        }
      },

      isSelected () {
        return this.modelValue === this.value
      },

      component () {
        return this.card ? 'b-card' : 'label'
      },

      componentAttrs () {
        if (this.component === 'label') {
          return {
            for: this.name + this.value
          }
        }

        const cardProps = typeof this.card === 'object' ? this.card : null

        return {
          as: 'label',
          for: this.name + this.value,
          padded: true,
          ...cardProps
        }
      }
    }
  }
</script>
