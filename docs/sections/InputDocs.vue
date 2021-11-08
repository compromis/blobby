<script setup>
import { reactive } from 'vue'
import BInput from '../../components/inputs/BInput.vue'
import BInputGroup from '../../components/inputs/BInputGroup.vue'

const input = reactive({
  name: 'name',
  label: 'Label',
  variant: 'default',
  value: '',
  block: true,
  size: 'md',
  noLabel: false,
  labelOnTop: false
})

const inputGroup = reactive({
  title: 'Dades personals',
  first_name: '',
  last_name: '',
  email: ''
})
</script>

<template>
  <h2>Inputs</h2>
  <div class="docs-cols">
    <div class="docs-col-schema">
      <h3>&lt;b-input&gt;</h3>
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
            <td><code>default</code>, <code>float</code></td>
            <td>Tipus d'input</td>
            <td>
              <select v-model="input.variant">
                <option>default</option>
                <option>float</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>name</td>
            <td>String</td>
            <td><span class="badge bg-gray">Required</span></td>
            <td></td>
            <td>Nom de l'input</td>
            <td>
              <b-input v-model="input.name" type="text" size="sm" />
            </td>
          </tr>
          <tr>
            <td>label</td>
            <td>String</td>
            <td><span class="badge bg-gray">Required</span></td>
            <td></td>
            <td>Label de l'input</td>
            <td>
              <b-input v-model="input.label" type="text" size="sm" />
            </td>
          </tr>
          <tr>
            <td>size</td>
            <td>String</td>
            <td><code>md</code></td>
            <td><code>sm</code>, <code>md</code>, <code>lg</code></td>
            <td>Label del input <span class="badge bg-gray">default-only</span></td>
            <td>
              <select v-model="input.size">
                <option>sm</option>
                <option>md</option>
                <option>lg</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>error</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td>Error de l'input</td>
            <td>
              <b-input v-model="input.error" type="text" size="sm" />
            </td>
          </tr>
          <tr>
            <td>block</td>
            <td>Bool</td>
            <td><code>true</code></td>
            <td></td>
            <td>Si l'input té width 100%</td>
            <td>
              <input v-model="input.block" value="true" type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>no-label</td>
            <td>Bool</td>
            <td><code>false</code></td>
            <td></td>
            <td>Amaga la label</td>
            <td>
              <input v-model="input.noLabel" type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>label-on-top</td>
            <td>Bool</td>
            <td><code>false</code></td>
            <td></td>
            <td>Força que la label estiga sempre dalt <span class="badge bg-gray">float-only</span></td>
            <td>
              <input v-model="input.labelOnTop" type="checkbox" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="docs-col-preview">
      <div class="sticky">
        <b-input
          v-model="input.value"
          v-bind="input" />
        <div class="my-4">Value is: {{ input.value }}</div>
      </div>
    </div>
  </div>

  <div class="docs-cols">
    <div class="docs-col-schema">
      <h3>&lt;b-input-group&gt;</h3>
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
            <td>title</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td>Títol del grup</td>
            <td>
              <b-input v-model="inputGroup.title" type="text" size="sm" />
            </td>
          </tr>
          <tr>
            <td>card</td>
            <td>Object</td>
            <td></td>
            <td></td>
            <td>Props de la <code>&lt;b-card&gt;</code></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="docs-col-preview">
      <div class="sticky">
        <b-input-group :title="inputGroup.title">
          <b-input
            v-model="inputGroup.first_name"
            variant="float"
            label="Nom"
            name="first_name"
            span="2" />
          <b-input
            v-model="inputGroup.last_name"
            variant="float"
            label="Cognoms"
            name="last_name"
            span="2" />
          <b-input
            v-model="inputGroup.email"
            type="email"
            variant="float"
            label="E-mail"
            name="email"
            span="4" />
        </b-input-group>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>