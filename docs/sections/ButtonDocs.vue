<script setup>
import { reactive, ref } from 'vue'
import inlineProps from '../composables/inlineProps.js'
import BButton from '../../components/button/BButton.vue'

const button = reactive({
  outline: false,
  variant: 'default',
  size: 'md',
  block: false,
  hasShadow: false,
  focusDark: false,
  disabled: false,
  to: '',
  href: '',
  as: ''
})

const previewBg = ref('#fff')

const buttonProps = inlineProps(button)
</script>

<template>
  <h2>Button</h2>
  <div class="docs-cols">
    <div class="docs-col-schema">
      <h3>&lt;b-button&gt;</h3>
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
              <td><code>default</code>, <code>inverted</code>, <code>muted</code>, <code>primary</code> <span class="text-muted">(gradient)</span>, <code>secondary</code> <span class="text-muted">(gradient)</span></td>
              <td>Variant del botó</td>
              <td>
                <b-select v-model="button.variant" size="sm">
                  <option>default</option>
                  <option>inverted</option>
                  <option>muted</option>
                  <option>supermuted</option>
                  <option>primary</option>
                  <option>secondary</option>
                </b-select>
              </td>
            </tr>
            <tr>
              <td>outline</td>
              <td>Bool</td>
              <td><code>false</code></td>
              <td></td>
              <td>Si el botó és solid o outline</td>
              <td>
                <input v-model="button.outline" type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>size</td>
              <td>String</td>
              <td><code>md</code></td>
              <td><code>sm</code>, <code>md</code>, <code>lg</code></td>
              <td>Tamany de la targeta</td>
              <td>
                <b-select v-model="button.size" size="sm">
                  <option>sm</option>
                  <option>md</option>
                  <option>lg</option>
                  <option>xl</option>
                </b-select>
              </td>
            </tr>
            <tr>
              <td>block</td>
              <td>Bool</td>
              <td><code>false</code></td>
              <td></td>
              <td>Si el botó el full width</td>
              <td>
                <input v-model="button.block" type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>hasShadow</td>
              <td>Bool</td>
              <td><code>false</code></td>
              <td></td>
              <td>Activa o desactiva la sombra del botó</td>
              <td>
                <input v-model="button.hasShadow" type="checkbox">
              </td>
            </tr>
            <tr>
              <td>focusDark</td>
              <td>Bool</td>
              <td><code>false</code></td>
              <td></td>
              <td>Canvia el color del contorn de l'estat focus a negre</td>
              <td>
                <input v-model="button.focusDark" type="checkbox">
              </td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>Bool</td>
              <td><code>false</code></td>
              <td></td>
              <td>Desactiva el botó</td>
              <td>
                <input v-model="button.disabled" type="checkbox">
              </td>
            </tr>
            <tr>
              <td>to</td>
              <td>String</td>
              <td></td>
              <td></td>
              <td>Enllaç <code>&lt;nuxt-link&gt;</code></td>
              <td>
                <b-input v-model="button.to" type="text" size="sm" />
              </td>
            </tr>
            <tr>
              <td>href</td>
              <td>String</td>
              <td></td>
              <td></td>
              <td>Enllaç <code>&lt;a&gt;</code></td>
              <td>
                <b-input v-model="button.href" type="text" size="sm" />
              </td>
            </tr>
            <tr>
              <td>as</td>
              <td>String</td>
              <td></td>
              <td></td>
              <td>Tag HTML</td>
              <td>
                <b-input v-model="button.as" type="text" size="sm" />
              </td>
            </tr>
            </tbody>
        </table>
      </b-card>
    </div>
    <div class="docs-col-preview">
      <div class="sticky">
        <b-card overflow-hidden>
          <b-card-section border-bottom>
            <input v-model="previewBg" type="color">
          </b-card-section>
          <b-card-section :style="{ backgroundColor: previewBg }">
            <b-button
              v-bind="button">
              Anar ->
            </b-button>
          </b-card-section>
        </b-card>
        <snippet :properties="button">{{`<b-button${buttonProps}>
  Anar ->
</b-button>`}}</snippet>
      </div>
    </div>
  </div>
</template>
