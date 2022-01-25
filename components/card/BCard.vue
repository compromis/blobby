<template>
  <component
    :is="tag"
    :class="[
      'card',
      variantClass,
      roundedClass,
      paddingClass,
      gradientClass,
      {
        'shadow': shadow && variant === 'default',
        'card-overlay-gradient': isGlowable && (image || shadow),
        'overflow-hidden': overflowHidden,
        'card-rises': rises,
        'focus-dark': focusDark,
        'has-image': !!image
      }
    ]"
    :to="to || null"
    :href="href || to || null"
    :style="customColor"
    >
    <div :class="['card-content', { 'overlay-content': image || shadow }, ...computedContentClass]">
      <slot />
    </div>
    <div v-if="isGlowable" class="overlay-background">
      <img v-if="image" :src="image" alt="">
    </div>
    <div v-if="shadow && isGlowable" class="glowy-ghost">
      <img v-if="image" :src="image" alt="" class="glowy-image">
    </div>

  </component>
</template>

<script>
export default {
  name: 'BCard',

  props: {
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'gradient', 'outline', 'custom-color'].indexOf(value) !== -1
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].indexOf(value) !== -1
    },
    shadow: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    as: {
      type: String,
      default: ''
    },
    padded: {
      type: Boolean,
      default: false
    },
    overflowHidden: {
      type: Boolean,
      default: false
    },
    rises: {
      type: Boolean,
      default: false
    },
    contentClass: {
      type: [Array, String],
      default: () => []
    },
    focusDark: {
      type: Boolean,
      default: false
    },
  },

  computed: {
    variantClass () {
      const variants = {
        'default': 'bg-white',
        'outline': 'border text-muted border-outline',
        'gradient': 'bg-gradient card-glowy text-white',
        'custom-color': 'card-custom-color card-glowy',
      }

      return variants[this.variant]
    },

    roundedClass () {
      return 'rounded-' + this.size
    },

    paddingClass () {
      return this.padded ? `card-padded card-padded-${this.size}` : `card-padded-${this.size}`
    },

    isGlowable () {
      return ['gradient', 'custom-color'].includes(this.variant)
    },

    tag () {
      if (this.to) {
        return 'nuxt-link'
      }
      if (this.href) {
        return 'a'
      }
      if (this.as) {
        return this.as
      }
      return 'div'
    },

    computedContentClass () {
      if(typeof this.contentClass === 'string') {
        return [this.contentClass]
      }

      return this.contentClass
    },

    gradientClass () {
      return this.variant === 'gradient' && `gradient-${this.color || 'primary'}`
    },

    customColor () {
      const color = !this.color && this.variant === 'custom-color' ? 'gray-900' : this.color
      const customColor = color.startsWith('#') ? color : `var(--${color})`

      switch(this.variant) {
        case 'custom-color':
          return `--card-color: ${customColor}`
        case 'outline':
          return `--border-color: ${customColor}`
        default:
          return ''
      }
    }
  }
}
</script>
