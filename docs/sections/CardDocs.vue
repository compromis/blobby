<script setup>
import { reactive } from 'vue'
import BCard from '../../components/BCard.vue'
import BCardSection from '../../components/BCardSection.vue'
import BCardList from '../../components/BCardList.vue'

const card = reactive({
  type: 'shadow',
  variant: 'default',
  size: 'md',
  glowy: true,
  padded: false,
  overflowHidden: false,
  rises: false,
  image: 'https://source.unsplash.com/random',
  to: '',
  href: '',
  as: ''
})

const cardList = reactive({
  padded: true,
  as: 'ul'
})
</script>

<template>
  <h2>Card</h2>
  <div class="docs-cols">
    <div class="docs-col-schema">
      <h3>&lt;b-card&gt;</h3>
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
            <td><code>shadow</code></td>
            <td><code>shadow</code>, <code>solid</code>, <code>outline</code>, <code>gradient</code></td>
            <td>Tipus de targeta</td>
            <td>
              <select v-model="card.type">
                <option>shadow</option>
                <option>solid</option>
                <option>outline</option>
                <option>gradient</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>variant</td>
            <td>String</td>
            <td><code>default</code></td>
            <td><code>default</code>, <code>inverted</code>, <code>primary</code> <span class="text-muted">(gradient)</span>, <code>secondary</code> <span class="text-muted">(gradient)</span></td>
            <td>Variant de la targeta</td>
            <td>
              <select v-model="card.variant">
                <option>default</option>
                <option>inverted</option>
                <option>primary</option>
                <option>secondary</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>size</td>
            <td>String</td>
            <td><code>md</code></td>
            <td><code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code></td>
            <td>Tamany de la targeta</td>
            <td>
              <select v-model="card.size">
                <option>sm</option>
                <option>md</option>
                <option>lg</option>
                <option>xl</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>glowy</td>
            <td>Bool</td>
            <td><code>false</code></td>
            <td></td>
            <td>Targeta degradat glowy <span class="badge bg-gray">Gradient-only</span></td>
            <td>
              <input v-model="card.glowy" type="checkbox">
            </td>
          </tr>
          <tr>
            <td>padded</td>
            <td>Bool</td>
            <td><code>false</code></td>
            <td></td>
            <td>Si la card té padding</td>
            <td>
              <input v-model="card.padded" type="checkbox">
            </td>
          </tr>
          <tr>
            <td>overflow-hidden</td>
            <td>Bool</td>
            <td><code>false</code></td>
            <td></td>
            <td>Self-explanatory</td>
            <td>
              <input v-model="card.overflowHidden" type="checkbox" checked>
            </td>
          </tr>
          <tr>
            <td>image</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td>Imatge de fons <span class="badge bg-gray">Gradient</span> <span class="badge bg-gray">Solid</span></td>
            <td>
              <input v-model="card.image" type="text" checked>
            </td>
          </tr>
          <tr>
            <td>to</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td>Enllaç <code>&lt;nuxt-link&gt;</code></td>
            <td>
              <input v-model="card.to" type="text" checked>
            </td>
          </tr>
          <tr>
            <td>href</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td>Enllaç <code>&lt;a&gt;</code></td>
            <td>
              <input v-model="card.href" type="text" checked>
            </td>
          </tr>
          <tr>
            <td>as</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td>Tag HTML</td>
            <td>
              <input v-model="card.as" type="text" checked>
            </td>
          </tr>
          <tr>
            <td>rises</td>
            <td>Bool</td>
            <td><code>false</code></td>
            <td></td>
            <td>Efecte on hover <span class="badge bg-gray">Shadow-only</span></td>
            <td>
              <input v-model="card.rises" type="checkbox">
            </td>
          </tr>
        </tbody>
      </table>

      <h3>&lt;b-card-section&gt;</h3>
      <p>Secció amb padding de la card</p>

      <h3>&lt;b-card-list&gt;</h3>
      <p>Wrapper per a llistes. Afegeix nice smart borders per dalt i/o per baix.</p>
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
            <td>padded</td>
            <td>Bool</td>
            <td><code>true</code></td>
            <td></td>
            <td>Si la card té padding</td>
            <td>
              <input v-model="cardList.padded" type="checkbox">
            </td>
          </tr>
          <tr>
            <td>as</td>
            <td>String</td>
            <td><code>ul</code></td>
            <td></td>
            <td>Tag HTML</td>
            <td>
              <input v-model="cardList.as" type="text" checked>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="docs-col-preview">
      <div class="sticky">
        <b-card
          :type="card.type"
          :variant="card.variant"
          :size="card.size"
          :glowy="card.glowy"
          :padded="card.padded"
          :overflow-hidden="card.overflowHidden"
          :image="card.image"
          :to="card.to"
          :href="card.href"
          :as="card.as"
          :rises="card.rises"
          class="mb-4">
          <b-card-section>
            <h2 class="m-0">Title</h2>
          </b-card-section>
          <img v-if="card.type != 'gradient'" style="height: 200px; object-fit: cover" :src="card.image">
          <b-card-section>
            Hello
          </b-card-section>
          <b-card-list :padded="cardList.padded" :as="as" class="border-top">
            <li>I'm item one</li>
            <li>I'm item two</li>
          </b-card-list>
        </b-card>
      </div>
    </div>
  </div>i
</template>

<style lang="scss">

</style>
