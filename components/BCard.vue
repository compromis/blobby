<template>
  <component :style="{ backgroundImage }" :is="tag" :class="['p-3', ...typeClasses, roundedClass]">
    <div :class="{ 'text-overlay': !!image }">
      <slot />
    </div>
    <div class="glowy-ghost" v-if="type === 'gradient'" />
  </component>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'solid',
      validator: (value) => ['solid', 'gradient', 'outline'].indexOf(value) !== -1
    },
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'inverted', 'orange', 'green'].indexOf(value) !== -1
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].indexOf(value) !== -1
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
    }
  },

  computed: {
    typeClasses () {
      const types = {
        solid: {
          base: 'shadow',
          variants: {
            default: 'bg-white',
            inverted: 'bg-dark'
          }
        },
        outline: {
          base: 'border',
          variants: {
            default: 'text-muted border-gray',
            inverted: 'text-white border-white'
          }
        },
        gradient: {
          base: 'bg-gradient glowy-card text-white',
          variants: {
            orange: 'gradient-orange',
            green: 'gradient-green'
          }
        }
      }

      return [types[this.type].base, types[this.type].variants[this.variant]]
    },

    roundedClass () {
      const sizes = {
        sm: '-sm',
        md: '',
        lg: '-lg'
      }

      return 'rounded' + sizes[this.size]
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

    backgroundImage () {
      return `url(${this.image})`
    }
  }
}
</script>
