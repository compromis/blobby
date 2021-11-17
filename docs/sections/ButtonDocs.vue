<script setup>
import { reactive } from 'vue'
import BButton from '../../components/button/BButton.vue'

const button = reactive({
  type: 'solid',
  variant: 'default',
  size: 'md',
  to: '',
  href: '',
  as: ''
})
</script>

<template>
  <h2>Button</h2>
  <div class="docs-cols">
    <div class="docs-col-schema">
      <h3>&lt;b-button&gt;</h3>
      <table class="table">
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
            <td>type</td>
            <td>String</td>
            <td><code>solid</code></td>
            <td><code>solid</code>, <code>outline</code></td>
            <td>Tipus de botó</td>
            <td>
              <select v-model="button.type">
                <option>solid</option>
                <option>outline</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>variant</td>
            <td>String</td>
            <td><code>default</code></td>
            <td><code>default</code>, <code>inverted</code>, <code>muted</code>, <code>primary</code> <span class="text-muted">(gradient)</span>, <code>secondary</code> <span class="text-muted">(gradient)</span></td>
            <td>Variant del botó</td>
            <td>
              <select v-model="button.variant">
                <option>default</option>
                <option>inverted</option>
                <option>muted</option>
                <option>primary</option>
                <option>secondary</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>size</td>
            <td>String</td>
            <td><code>md</code></td>
            <td><code>sm</code>, <code>md</code>, <code>lg</code></td>
            <td>Tamany de la targeta</td>
            <td>
              <select v-model="button.size">
                <option>sm</option>
                <option>md</option>
                <option>lg</option>
                <option>xl</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>to</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td>Enllaç <code>&lt;nuxt-link&gt;</code></td>
            <td>
              <input v-model="button.to" type="text" checked>
            </td>
          </tr>
          <tr>
            <td>href</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td>Enllaç <code>&lt;a&gt;</code></td>
            <td>
              <input v-model="button.href" type="text" checked>
            </td>
          </tr>
          <tr>
            <td>as</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td>Tag HTML</td>
            <td>
              <input v-model="button.as" type="text" checked>
            </td>
          </tr>
          </tbody>
      </table>
    </div>
    <div class="docs-col-preview">
      <div class="sticky">
        <b-button
          :type="button.type"
          :variant="button.variant"
          :size="button.size"
          class="mb-4">
          Aasfdasf ->
        </b-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
