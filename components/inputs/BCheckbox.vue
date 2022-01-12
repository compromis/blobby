<template>
  <div class="form-check">
    <input
      :id="'checkbox' + name"
      v-model="checked"
      class="form-check-input"
      type="checkbox"
      :value="value"
      :checked="checked"
    >
    <label :for="'checkbox' + name" class="form-check-label">
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
