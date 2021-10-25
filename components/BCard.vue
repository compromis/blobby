<template>
  <component :is="tag" :class="[
    'card',
    ...typeClasses,
    roundedClass,
    {
      'overlay-gradient': !!image,
      'card-padded': padding
    }
  ]">
    <div :class="['card-content', { 'overlay-content': !!image }]">
      <slot />
    </div>
    <div class="overlay-background" v-if="image">
      <img :src="image" alt="">
    </div>
    <div class="glowy-ghost" v-if="type === 'gradient' && glowy">
      <img :src="image" alt="" v-if="image" class="glowy-image">
    </div>
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
      validator: (value) => ['default', 'inverted', 'primary', 'secondary'].indexOf(value) !== -1
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].indexOf(value) !== -1
    },
    glowy: {
      type: Boolean,
      default: true
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
    padding: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    typeClasses () {
      const types = {
        solid: {
          base: 'shadow overflow-hidden',
          variants: {
            default: 'bg-white',
            inverted: 'bg-dark'
          }
        },
        outline: {
          base: 'border overflow-hidden',
          variants: {
            default: 'text-muted border-gray',
            inverted: 'text-white border-white'
          }
        },
        gradient: {
          base: 'bg-gradient glowy-card text-white',
          variants: {
            primary: 'gradient-primary',
            secondary: 'gradient-secondary'
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
    }
  }
}
</script>
