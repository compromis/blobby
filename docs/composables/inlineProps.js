import { computed } from 'vue'

function toKebabCase(string) {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

export default function (values) {
  const defaults = JSON.parse(JSON.stringify(values))
  return computed(() => {
    let props = ''
    Object.entries(values).forEach(([prop, value]) => {
      if (defaults[prop] == value) {
        return
      }

      switch(typeof defaults[prop]) {
        case 'boolean':
          props +=` ${toKebabCase(prop)}`
          break
        case 'string':
          props += ` ${toKebabCase(prop)}="${value}"`
          break
        default:
          props += ` :${toKebabCase(prop)}="${value}"`
          break
      }
    })
    return props
  })
}
