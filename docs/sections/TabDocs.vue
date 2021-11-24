<script setup>
import { reactive } from 'vue'
import BTab from '../../components/tab/BTab.vue'
import BTabList from '../../components/tab/BTabList.vue'

const tab = reactive({
  variant: 'default',
  focusDark: false,
  to: '',
  href: '',
  as: '',
  size: 'md'
})

const tabItem = reactive({
  selected: false,
  selectedTab: 1,
})
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
                <b-select v-model="tab.variant" size="sm">
                  <option>default</option>
                  <option>outline</option>
                </b-select>
              </td>
            </tr>
            <tr>
              <td>size</td>
              <td>String</td>
              <td><code>md</code></td>
              <td><code>sm</code>, <code>md</code>, <code>lg</code></td>
              <td>Tamany de la pastilla</td>
              <td>
                <b-select v-model="tab.size" size="sm">
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
                <input v-model="tab.focusDark" type="checkbox">
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
        <b-tab-list v-bind="tab">
          <b-tab
            class="mb-4"
            :selected="tabItem.selectedTab === 1"
            @click="tabItem.selectedTab = 1">
            Tab 1
          </b-tab>
          <b-tab
            class="mb-4"
            :selected="tabItem.selectedTab === 2"
            @click="tabItem.selectedTab = 2">
            Tab 2
          </b-tab>
          <b-tab
            class="mb-4"
            :selected="tabItem.selectedTab === 3"
            @click="tabItem.selectedTab = 3">
            Tab 3
          </b-tab>
        </b-tab-list>
        <div>
          Selected tab is: {{tabItem.selectedTab}}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
