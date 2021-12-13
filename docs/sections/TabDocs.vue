<script setup>
import { ref, reactive } from 'vue'
import BTab from '../../components/tab/BTab.vue'
import BTabList from '../../components/tab/BTabList.vue'

const tabList = reactive({
  variant: 'default',
  focusDark: false,
  size: 'md',
  muted: false
})

const tabItem = reactive({
  to: '',
  href: '',
  as: 'button',
})

const selectedTab = ref(1)
</script>

<template>
  <h2>Tabs</h2>
  <div class="docs-cols">
    <div class="docs-col-schema">
      <h3>&lt;b-tab-list&gt;</h3>
      <p>Contenidor d'un grup de tabs.</p>
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
              <td><code>default</code>, <code>outline</code></td>
              <td>Variant de la pastilla</td>
              <td>
                <b-select v-model="tabList.variant" size="sm">
                  <option>default</option>
                  <option>outline</option>
                </b-select>
              </td>
            </tr>
            <tr>
              <td>muted</td>
              <td>Bool</td>
              <td><code>false</code></td>
              <td></td>
              <td>Pastilla muted</td>
              <td>
                <input v-model="tabList.muted" type="checkbox">
              </td>
            </tr>
            <tr>
              <td>size</td>
              <td>String</td>
              <td><code>md</code></td>
              <td><code>sm</code>, <code>md</code>, <code>lg</code></td>
              <td>Tamany de la pastilla</td>
              <td>
                <b-select v-model="tabList.size" size="sm">
                  <option>sm</option>
                  <option>md</option>
                  <option>lg</option>
                </b-select>
              </td>
            </tr>
            <tr>
              <td>focusDark</td>
              <td>Bool</td>
              <td><code>false</code></td>
              <td></td>
              <td>Canvia el color del contorn de l'estat focus a negre</td>
              <td>
                <input v-model="tabList.focusDark" type="checkbox">
              </td>
            </tr>
            </tbody>
        </table>
      </b-card>

      <h3>&lt;b-tab&gt;</h3>
      <p>Item individual dins d'un grup de tabs</p>
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
              <td>to</td>
              <td>String</td>
              <td></td>
              <td></td>
              <td>Enllaç <code>&lt;nuxt-link&gt;</code></td>
              <td>
                <b-input v-model="tabItem.to" type="text" size="sm" />
              </td>
            </tr>
            <tr>
              <td>href</td>
              <td>String</td>
              <td></td>
              <td></td>
              <td>Enllaç <code>&lt;a&gt;</code></td>
              <td>
                <b-input v-model="tabItem.href" type="text" size="sm" />
              </td>
            </tr>
            <tr>
              <td>as</td>
              <td>String</td>
              <td><code>button</code></td>
              <td></td>
              <td>Tag HTML</td>
              <td>
                <b-input v-model="tabItem.as" type="text" size="sm" />
              </td>
            </tr>
            <tr>
              <td>selected</td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td></td>
              <td>Tab seleccionada si o no</td>
              <td>
                <input type="checkbox" disabled>
              </td>
            </tr>
          </tbody>
        </table>
      </b-card>
    </div>
    <div class="docs-col-preview">
      <div class="sticky">
        <b-tab-list v-bind="tabList">
          <b-tab
            class="mb-4"
            v-bind="tabItem"
            :selected="selectedTab === 1"
            @click="selectedTab = 1">
            Tab 1
          </b-tab>
          <b-tab
            class="mb-4"
            v-bind="tabItem"
            :selected="selectedTab === 2"
            @click="selectedTab = 2">
            Tab 2
          </b-tab>
          <b-tab
            class="mb-4"
            v-bind="tabItem"
            :selected="selectedTab === 3"
            @click="selectedTab = 3">
            Tab 3
          </b-tab>
        </b-tab-list>
        <div>
          Selected tab is: {{selectedTab}}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
