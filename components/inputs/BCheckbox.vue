<template>
  <div :class="['form-check', isSwitch && 'form-switch', dark && 'checkbox-dark']">
    <input
      :id="'checkbox' + name + value"
      v-model="checked"
      class="form-check-input"
      type="checkbox"
      :role="isSwitch ? 'switch' : null"
      :value="value"
      :disabled="disabled"
      :required="required"
    >
    <label :for="'checkbox' + name + value" class="form-check-label">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: null
    },

    modelValue: {
      type: Boolean,
      default: false
    },

    value: {
      type: String,
      default: 'true'
    },

    disabled: {
      type: Boolean,
      default: false
    },

    isSwitch: {
      type: Boolean,
      default: false
    },

    dark: {
      type: Boolean,
      default: false
    },

    required: {
      type: Boolean,
      default: false
    }
  },

  emits: ['update:modelValue'],

  computed: {
    checked: {
      get () {
        return this.modelValue
      },

      set (value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>
