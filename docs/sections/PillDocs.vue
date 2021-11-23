<script setup>
import { reactive } from 'vue'
import BPill from '../../components/pill/BPill.vue'
import BPillList from '../../components/pill/BPillList.vue'

const pill = reactive({
  variant: 'default',
  focusDark: false,
  to: '',
  href: '',
  as: '',
  size: 'md'
})
</script>

<template>
  <h2>Pills</h2>
  <div class="docs-cols">
    <div class="docs-col-schema">
      <h3>&lt;b-pill-list&gt;</h3>
      <p>Contenidor d'un grup de pills.</p>
      <h3>&lt;b-pill&gt;</h3>
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
            <td>variant</td>
            <td>String</td>
            <td><code>default</code></td>
            <td><code>default</code>, <code>to-primary</code>, <code>to-secondary</code></td>
            <td>Variant de la pastilla</td>
            <td>
              <select v-model="pill.variant">
                <option>default</option>
                <option>to-primary</option>
                <option>to-secondary</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>size</td>
            <td>String</td>
            <td><code>md</code></td>
            <td><code>sm</code>, <code>md</code>, <code>lg</code></td>
            <td>Tamany de la pastilla</td>
            <td>
              <select v-model="pill.size">
                <option>sm</option>
                <option>md</option>
                <option>lg</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>focusDark</td>
            <td>Bool</td>
            <td><code>false</code></td>
            <td></td>
            <td>Canvia el color del contorn de l'estat focus a negre</td>
            <td>
              <input v-model="pill.focusDark" type="checkbox">
            </td>
          </tr>
          <tr>
            <td>to</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td>Enllaç <code>&lt;nuxt-link&gt;</code></td>
            <td>
              <input v-model="pill.to" type="text" checked>
            </td>
          </tr>
          <tr>
            <td>href</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td>Enllaç <code>&lt;a&gt;</code></td>
            <td>
              <input v-model="pill.href" type="text" checked>
            </td>
          </tr>
          <tr>
            <td>as</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td>Tag HTML</td>
            <td>
              <input v-model="pill.as" type="text" checked>
            </td>
          </tr>
          </tbody>
      </table>
    </div>
    <div class="docs-col-preview">
      <div class="sticky">
        <b-pill-list>
          <b-pill
            v-bind="pill"
            class="mb-4">
            Pill 1
          </b-pill>
          <b-pill
            v-bind="pill"
            class="mb-4">
            Pill 2
          </b-pill>
          <b-pill
            v-bind="pill"
            class="mb-4">
            Pill 3
          </b-pill>
        </b-pill-list>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
