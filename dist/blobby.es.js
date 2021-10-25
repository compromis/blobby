import { openBlock, createBlock, resolveDynamicComponent, normalizeClass, withCtx, createElementVNode, renderSlot, createElementBlock, createCommentVNode } from "vue";
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main = {
  props: {
    type: {
      type: String,
      default: "solid",
      validator: (value) => ["solid", "gradient", "outline"].indexOf(value) !== -1
    },
    variant: {
      type: String,
      default: "default",
      validator: (value) => ["default", "inverted", "primary", "secondary"].indexOf(value) !== -1
    },
    size: {
      type: String,
      default: "md",
      validator: (value) => ["sm", "md", "lg"].indexOf(value) !== -1
    },
    glowy: {
      type: Boolean,
      default: true
    },
    image: {
      type: String,
      default: ""
    },
    to: {
      type: String,
      default: ""
    },
    href: {
      type: String,
      default: ""
    },
    as: {
      type: String,
      default: ""
    },
    padding: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    typeClasses() {
      const types = {
        solid: {
          base: "shadow overflow-hidden",
          variants: {
            default: "bg-white",
            inverted: "bg-dark"
          }
        },
        outline: {
          base: "border overflow-hidden",
          variants: {
            default: "text-muted border-gray",
            inverted: "text-white border-white"
          }
        },
        gradient: {
          base: "bg-gradient glowy-card text-white",
          variants: {
            primary: "gradient-primary",
            secondary: "gradient-secondary"
          }
        }
      };
      return [types[this.type].base, types[this.type].variants[this.variant]];
    },
    roundedClass() {
      const sizes = {
        sm: "-sm",
        md: "",
        lg: "-lg"
      };
      return "rounded" + sizes[this.size];
    },
    tag() {
      if (this.to) {
        return "nuxt-link";
      }
      if (this.href) {
        return "a";
      }
      if (this.as) {
        return this.as;
      }
      return "div";
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "overlay-background"
};
const _hoisted_2 = ["src"];
const _hoisted_3 = {
  key: 1,
  class: "glowy-ghost"
};
const _hoisted_4 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($options.tag), {
    class: normalizeClass([
      "card",
      ...$options.typeClasses,
      $options.roundedClass,
      {
        "overlay-gradient": !!$props.image,
        "card-padded": $props.padding
      }
    ])
  }, {
    default: withCtx(() => [
      createElementVNode("div", {
        class: normalizeClass(["card-content", { "overlay-content": !!$props.image }])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2),
      $props.image ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("img", {
          src: $props.image,
          alt: ""
        }, null, 8, _hoisted_2)
      ])) : createCommentVNode("", true),
      $props.type === "gradient" && $props.glowy ? (openBlock(), createElementBlock("div", _hoisted_3, [
        $props.image ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: $props.image,
          alt: "",
          class: "glowy-image"
        }, null, 8, _hoisted_4)) : createCommentVNode("", true)
      ])) : createCommentVNode("", true)
    ]),
    _: 3
  }, 8, ["class"]);
}
var BCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { BCard };
