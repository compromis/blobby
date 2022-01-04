<script setup>
import { reactive, computed } from 'vue'
import BBadgeList from '@/components/badge/BBadgeList.vue'
import BBadge from '@/components/badge/BBadge.vue'
import Snippet from '../components/Snippet.vue'

const badge = reactive({
  variant: 'default',
  outline: false,
  as: 'span',
  size: 'md'
})

const as = computed(() => {
  return badge.as != 'span' ? ` as="${badge.as}"` : ''
})
</script>

<template>
  <h2>Badges</h2>
  <div class="docs-cols">
    <div class="docs-col-schema">
      <h3>&lt;b-badge-list&gt;</h3>
      <p>Contenidor d'un grup de badges.</p>
    </div>
  </div>
  <div class="docs-cols">
    <div class="docs-col-schema">
      <h3>&lt;b-badge&gt;</h3>
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
              <td><code>default</code>, <code>inverted</code>, <code>muted</code>, <code>supermuted</code>, <code>primary</code>, <code>secondary</code>, <code>success</code>, <code>warning</code>, <code>danger</code>, <code>info</code></td>
              <td>Variant de la pastilla</td>
              <td>
                <b-select v-model="badge.variant" size="sm">
                  <option>default</option>
                  <option>inverted</option>
                  <option>muted</option>
                  <option>supermuted</option>
                  <option>primary</option>
                  <option>secondary</option>
                  <option>success</option>
                  <option>warning</option>
                  <option>danger</option>
                  <option>info</option>
                </b-select>
              </td>
            </tr>
            <tr>
              <td>outline</td>
              <td>Bool</td>
              <td><code>false</code></td>
              <td></td>
              <td>Si la badge és solid o outline</td>
              <td>
                <input v-model="badge.outline" type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>size</td>
              <td>String</td>
              <td><code>md</code></td>
              <td><code>sm</code>, <code>md</code>, <code>lg</code></td>
              <td>Tamany de la pastilla</td>
              <td>
                <b-select v-model="badge.size" size="sm">
                  <option>sm</option>
                  <option>md</option>
                  <option>lg</option>
                </b-select>
              </td>
            </tr>
            <tr>
              <td>as</td>
              <td>String</td>
              <td><code>span</code></td>
              <td></td>
              <td>Tag HTML</td>
              <td>
                <b-input v-model="badge.as" type="text" size="sm" />
              </td>
            </tr>
            </tbody>
        </table>
      </b-card>
    </div>
    <div class="docs-col-preview">
      <div class="sticky">
        <b-badge-list>
          <b-badge v-bind="badge">
            Badge 1
          </b-badge>
          <b-badge v-bind="badge">
            Badge 2
          </b-badge>
          <b-badge v-bind="badge">
            Badge 3
          </b-badge>
        </b-badge-list>
      </div>
      <snippet :properties="badge">{{`
<b-badge-list>
  <b-badge variant="${badge.variant}" size="${badge.size}"${as}${badge.outline ? ' outline' : ''}>
    Badge 1
  </b-badge>
  <b-badge variant="${badge.variant}">
    Badge 2
  </b-badge>
  <b-badge variant="${badge.variant}">
    Badge 3
  </b-badge>
</b-badge-list>
`}}
</snippet>
    </div>
  </div>
</template>
