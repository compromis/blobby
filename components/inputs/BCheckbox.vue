<template>
  <div :class="['form-check', isSwitch && 'form-switch',`checkbox-${variant}`]">
    <label v-if="$slots.prepend" :for="'checkbox' + name + value" class="form-check-label prepend">
      <slot name="prepend" />
    </label>
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
    <label v-if="$slots.default" :for="'checkbox' + name + value" class="form-check-label append">
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

    variant: {
      type: String,
      default: 'default'
    },

    disabled: {
      type: Boolean,
      default: false
    },

    isSwitch: {
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
