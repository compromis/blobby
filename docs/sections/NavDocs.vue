<script setup>
import { reactive, computed} from 'vue'
import inlineProps from '../composables/inlineProps.js'

const nav = reactive({
  collapseAt: 'lg',
  fullWidth: false,
  menuTitle: 'Menú principal',
})

const navSlots = reactive({
  logoPrepend: '',
  logoAppend: ''
})

const navProps = inlineProps(nav)

const logoAppendSlot = computed(() => {
  let templates = ''
  if (navSlots.logoPrepend) {
    templates += `

  <template #logoPrepend>${navSlots.logoPrepend}</template>`
    }

  if (navSlots.logoAppend) {
    templates += `

  <template #logoAppend>${navSlots.logoAppend}</template>`
    }

  return templates
})
</script>

<template>
  <h2>Nav</h2>
  <div class="docs-cols">
    <div class="docs-col-schema">
      <h3>&lt;b-nav&gt;</h3>
      <b-card type="outline" size="sm" overflow-hidden>
        <table class="table tint-alternate-rows vertical-divisions">
          <colgroup>
            <col width="15%" />
            <col width="10%" />
            <col width="10%" />
            <col width="20%" />
            <col width="20%" />
            <col width="225" />
          </colgroup>
          <thead>
            <tr>
              <th>nom</th>
              <th>tipus</th>
              <th>defecte</th>
              <th>valors</th>
              <th>descripció</th>
              <th>play</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>collapse-at</td>
              <td>String</td>
              <td><code>lg</code></td>
              <td><code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code></td>
              <td>Breakpoint per amagar el menú</td>
              <td>
                <b-select v-model="nav.collapseAt" size="sm">
                  <option>sm</option>
                  <option>md</option>
                  <option>lg</option>
                  <option>xl</option>
                </b-select>
              </td>
            </tr>
            <tr>
              <td>full-width</td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td></td>
              <td>Fa que l'amplària de la nav siga el 100%</td>
              <td>
                <input v-model="nav.fullWidth" type="checkbox">
              </td>
            </tr>
            <tr>
              <td>menu-title</td>
              <td>String</td>
              <td><code>Menú principal</code></td>
              <td></td>
              <td>ARIA Title per al menú</td>
              <td>
                <b-input v-model="nav.menuTitle" type="text" size="sm" />
              </td>
            </tr>
            <tr>
              <td>Main slot</td>
              <td>Slot</td>
              <td></td>
              <td></td>
              <td>Items del menu en <code>b-nav-item</code></td>
              <td></td>
            </tr>
            <tr>
              <td>#logo-prepend</td>
              <td>Slot</td>
              <td></td>
              <td></td>
              <td>Contingut a afegir abans del logo</td>
              <td>
                <b-input v-model="navSlots.logoPrepend" type="text" size="sm" />
              </td>
            </tr>
            <tr>
              <td>#logo-append</td>
              <td>Slot</td>
              <td></td>
              <td></td>
              <td>Text a afegir després del logo</td>
              <td>
                <b-input v-model="navSlots.logoAppend" type="text" size="sm" />
              </td>
            </tr>
          </tbody>
        </table>
      </b-card>
    </div>
    <div class="docs-col-preview">
      <snippet :properties="[nav, navSlots]">{{`<b-nav${navProps}>
  <template #submenu>
    <b-nav-item to="/">Enllaç</b-nav-item>
    <b-nav-item to="/">Enllaç 2</b-nav-item>
  </template>${logoAppendSlot}
</b-card>`}}</snippet>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
