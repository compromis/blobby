<script setup>
import { ref, reactive } from 'vue'
import BInputGroup from '../../components/inputs/BInputGroup.vue'
import BRadio from '../../components/inputs/BRadio.vue'
import BRadioGroup from '../../components/inputs/BRadioGroup.vue'

const input = reactive({
  name: 'name',
  label: 'Label',
  variant: 'default',
  value: '',
  block: true,
  size: 'md',
  noLabel: false,
  labelOnTop: false,
  focusDark: false
})

const select = reactive({
  name: 'name',
  label: 'Label',
  variant: 'default',
  block: true,
  size: 'md',
  noLabel: false,
  labelOnTop: false,
  focusDark: false
})

const selectValue = ref('')

const inputGroup = reactive({
  title: 'Dades personals',
  first_name: '',
  last_name: '',
  email: ''
})

const radio = reactive({
  name: 'number',
  card: true,
  disabled: false,
  focusDark: false
})

const radioValue = ref('two')

const radioGroup = reactive({
  title: 'Grup',
  titleHidden: false
})
</script>

<template>
  <h2>Inputs</h2>
  <div class="docs-cols">
    <div class="docs-col-schema">
      <h3>&lt;b-input&gt;</h3>
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
              <td>variant</td>
              <td>String</td>
              <td><code>default</code></td>
              <td><code>default</code>, <code>float</code></td>
              <td>Tipus d'input</td>
              <td>
                <b-select v-model="input.variant" size="sm">
                  <option>default</option>
                  <option>float</option>
                </b-select>
              </td>
            </tr>
            <tr>
              <td>name</td>
              <td>String</td>
              <td></td>
              <td></td>
              <td>Nom de l'input</td>
              <td>
                <b-input v-model="input.name" type="text" size="sm" />
              </td>
            </tr>
            <tr>
              <td>label</td>
              <td>String</td>
              <td></td>
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
              <td>Label del input <b-pill variant="muted" size="sm">default-only</b-pill></td>
              <td>
                <b-select v-model="input.size" size="sm">
                  <option>sm</option>
                  <option>md</option>
                  <option>lg</option>
                </b-select>
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
              <td>Força que la label estiga sempre dalt <b-pill variant="muted" size="sm">float-only</b-pill></td>
              <td>
                <input v-model="input.labelOnTop" type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>focus-dark</td>
              <td>Bool</td>
              <td><code>false</code></td>
              <td></td>
              <td>Canvia el color del contorn de l'estat focus a negre <b-pill variant="muted" size="sm">float-only</b-pill></td>
              <td>
                <input v-model="input.focusDark" type="checkbox">
              </td>
            </tr>
            <tr>
              <td>span</td>
              <td>Number, Object</td>
              <td><code>4</code></td>
              <td><code>1-4</code></td>
              <td>Columnes que ocupa dins d'un <code>b-input-group</code> <b-pill variant="muted" size="sm">group-only</b-pill></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </b-card>
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
      <h3 class="mt-5">&lt;b-select&gt;</h3>
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
            <td>variant</td>
            <td>String</td>
            <td><code>default</code></td>
            <td><code>default</code>, <code>float</code></td>
            <td>Tipus d'input</td>
            <td>
              <b-select v-model="select.variant" size="sm">
                <option>default</option>
                <option>float</option>
              </b-select>
            </td>
          </tr>
          <tr>
            <td>name</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td>Nom de l'input</td>
            <td>
              <b-input v-model="select.name" type="text" size="sm" />
            </td>
          </tr>
          <tr>
            <td>label</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td>Label de l'input</td>
            <td>
              <b-input v-model="select.label" type="text" size="sm" />
            </td>
          </tr>
          <tr>
            <td>size</td>
            <td>String</td>
            <td><code>md</code></td>
            <td><code>sm</code>, <code>md</code>, <code>lg</code></td>
            <td>Label del input <b-pill variant="muted" size="sm">default-only</b-pill></td>
            <td>
              <b-select v-model="select.size" size="sm">
                <option>sm</option>
                <option>md</option>
                <option>lg</option>
              </b-select>
            </td>
          </tr>
          <tr>
            <td>error</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td>Error de l'input</td>
            <td>
              <b-input v-model="select.error" type="text" size="sm" />
            </td>
          </tr>
          <tr>
            <td>block</td>
            <td>Bool</td>
            <td><code>true</code></td>
            <td></td>
            <td>Si l'input té width 100%</td>
            <td>
              <input v-model="select.block" value="true" type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>no-label</td>
            <td>Bool</td>
            <td><code>false</code></td>
            <td></td>
            <td>Amaga la label</td>
            <td>
              <input v-model="select.noLabel" type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>label-on-top</td>
            <td>Bool</td>
            <td><code>false</code></td>
            <td></td>
            <td>Força que la label estiga sempre dalt <b-pill variant="muted" size="sm">float-only</b-pill></td>
            <td>
              <input v-model="select.labelOnTop" type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>focusDark</td>
            <td>Bool</td>
            <td><code>false</code></td>
            <td></td>
            <td>Canvia el color del contorn de l'estat focus a negre <b-pill variant="muted" size="sm">float-only</b-pill></td>
            <td>
              <input v-model="select.focusDark" type="checkbox">
            </td>
          </tr>
          <tr>
            <td>span</td>
            <td>Number, Object</td>
            <td><code>4</code></td>
            <td><code>1-4</code></td>
            <td>Columnes que ocupa dins d'un <code>b-input-group</code> <b-pill variant="muted" size="sm">group-only</b-pill></td>
            <td></td>
          </tr>
        </tbody>
        </table>
      </b-card>
    </div>
    <div class="docs-col-preview">
      <div class="sticky">
        <b-select v-model="selectValue" v-bind="select">
          <option value="one">Option 1</option>
          <option value="two">Option 2</option>
        </b-select>

        <div class="my-4">Value is {{ selectValue }}</div>
      </div>
    </div>
  </div>

  <div class="docs-cols">
    <div class="docs-col-schema">
      <h3>&lt;b-input-group&gt;</h3>
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
      </b-card>
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

  <div class="docs-cols">
    <div class="docs-col-schema">
      <h3>&lt;b-radio&gt;</h3>
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
              <td>name</td>
              <td>String</td>
              <td><b-pill variant="muted" size="sm">Required</b-pill></td>
              <td></td>
              <td>Nom de l'input</td>
              <td>
                <b-input v-model="radio.name" type="text" size="sm" />
              </td>
            </tr>
            <tr>
              <td>value</td>
              <td>String</td>
              <td><b-pill variant="muted" size="sm">Required</b-pill></td>
              <td></td>
              <td>Vaue de l'input</td>
              <td></td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>Bool</td>
              <td><code>false</code></td>
              <td></td>
              <td>Self-explanatory</td>
              <td><input v-model="radio.disabled" type="checkbox"></td>
            </tr>
            <tr>
              <td>focusDark</td>
              <td>Bool</td>
              <td><code>false</code></td>
              <td></td>
              <td>Canvia el color del contorn de l'estat focus a negre</td>
              <td>
                <input v-model="radio.focusDark" type="checkbox">
              </td>
            </tr>
            <tr>
              <td>card</td>
              <td>Bool, Object</td>
              <td><code>false</code></td>
              <td></td>
              <td>Si és una card. Opcionalment es poden passar les props de la <code>&lt;b-card&gt;</code> com a object</td>
              <td><input v-model="radio.card" type="checkbox" value="true" /></td>
            </tr>
          </tbody>
        </table>
      </b-card>

      <h3 class="mt-5">&lt;b-radio-group&gt;</h3>
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
              <td>title</td>
              <td>String</td>
              <td></td>
              <td></td>
              <td>Títol del grup</td>
              <td>
                <b-input v-model="radioGroup.title" type="text" size="sm" />
              </td>
            </tr>
            <tr>
              <td>title-hidden</td>
              <td>Bool</td>
              <td><code>false</code></td>
              <td></td>
              <td>Amaga el titol</td>
              <td>
                <input v-model="radioGroup.titleHidden" type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
      </b-card>
    </div>
    <div class="docs-col-preview">
      <div class="sticky">
        <b-radio-group v-bind="radioGroup">
          <b-radio v-model="radioValue" value="one" v-bind="radio">One</b-radio>
          <b-radio v-model="radioValue" value="two" v-bind="radio">Two</b-radio>
          <b-radio v-model="radioValue" value="three" v-bind="radio">Three</b-radio>
        </b-radio-group>
      </div>
    </div>
    </div>
</template>

<style lang="scss" scoped>

</style>