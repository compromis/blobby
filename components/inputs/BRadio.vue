<template>
  <component
    :is="component"
    v-bind="componentAttrs"
    :class="[
      'radio-field',
      'form-check',
      { 'selected': isSelected },
      { 'disabled': disabled }
    ]">
    <input
      :id="name + value"
      type="radio"
      :name="name"
      :value="value"
      :checked="isSelected"
      :disabled="disabled"
      :class="['radio-input', 'form-check-input', { 'visually-hidden': !!card }]"
      @change="onChange"
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
        required: true
      },
      modelValue: {
        type: String,
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      card: {
        type: [Boolean, Object],
        default: false
      }
    },

    emits: ['update:modelValue'],

    computed: {
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
    },
  
    methods: {
      onChange (event) {
        this.$emit('update:modelValue', event.target.value)
      }
    }
  }
</script>
