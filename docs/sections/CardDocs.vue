<script setup>
import { reactive } from 'vue'
import inlineProps from '../composables/inlineProps.js'
import BDropdown from '../../components/dropdown/BDropdown.vue'
import BButton from '../../components/button/BButton.vue'

const card = reactive({
  variant: 'default',
  size: 'md',
  shadow: true,
  padded: false,
  overflowHidden: false,
  rises: false,
  image: 'https://source.unsplash.com/random',
  to: '',
  href: '',
  as: '',
  color: ''
})

const cardSection = reactive({
  borderTop: false,
  borderBottom: false,
  borderLeft: false,
  borderRight: false
})

const cardList = reactive({
  padded: true,
  divisions: true,
  blockLinks: false,
  menu: false,
  as: 'ul'
})

const cardProps = inlineProps(card)
const cardSectionProps = inlineProps(cardSection)
const cardListProps = inlineProps(cardList)
</script>

<template>
  <h2>Card</h2>
  <div class="docs-cols">
    <div class="docs-col-schema">
      <h3>&lt;b-card&gt;</h3>
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
              <th width="225">play</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>variant</td>
              <td>String</td>
              <td><code>default</code></td>
              <td><code>default</code>, <code>inverted</code>, <code>primary</code> <span class="text-muted">(gradient)</span>, <code>secondary</code> <span class="text-muted">(gradient)</span></td>
              <td>Variant de la targeta</td>
              <td>
                <b-select v-model="card.variant" size="sm">
                  <option>default</option>
                  <option>gradient</option>
                  <option>outline</option>
                  <option>custom-color</option>
                </b-select>
              </td>
            </tr>
            <tr>
              <td>size</td>
              <td>String</td>
              <td><code>md</code></td>
              <td><code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code></td>
              <td>Tamany de la targeta</td>
              <td>
                <b-select v-model="card.size" size="sm">
                  <option>sm</option>
                  <option>md</option>
                  <option>lg</option>
                  <option>xl</option>
                </b-select>
              </td>
            </tr>
            <tr>
              <td>shadow</td>
              <td>Bool</td>
              <td><code>false</code></td>
              <td></td>
              <td>la targeta té shadow/glow</td>
              <td>
                <input v-model="card.shadow" type="checkbox">
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
              <td>Imatge de fons <b-badge variant="supermuted" size="sm">Gradient</b-badge> <b-badge variant="supermuted" size="sm">Solid</b-badge></td>
              <td>
                <b-input v-model="card.image" type="text" size="sm" />
              </td>
            </tr>
            <tr>
              <td>color</td>
              <td>String</td>
              <td></td>
              <td></td>
              <td>Color</td>
              <td>
                <b-input v-model="card.color" type="text" size="sm" />
              </td>
            </tr>
            <tr>
              <td>to</td>
              <td>String</td>
              <td></td>
              <td></td>
              <td>Enllaç <code>&lt;nuxt-link&gt;</code></td>
              <td>
                <b-input v-model="card.to" type="text" size="sm" checked />
              </td>
            </tr>
            <tr>
              <td>href</td>
              <td>String</td>
              <td></td>
              <td></td>
              <td>Enllaç <code>&lt;a&gt;</code></td>
              <td>
                <b-input v-model="card.href" type="text" checked size="sm" />
              </td>
            </tr>
            <tr>
              <td>as</td>
              <td>String</td>
              <td></td>
              <td></td>
              <td>Tag HTML</td>
              <td>
                <b-input v-model="card.as" type="text" checked size="sm" />
              </td>
            </tr>
            <tr>
              <td>rises</td>
              <td>Bool</td>
              <td><code>false</code></td>
              <td></td>
              <td>Efecte on hover <b-badge variant="supermuted" size="sm">Shadow-only</b-badge></td>
              <td>
                <input v-model="card.rises" type="checkbox">
              </td>
            </tr>
          </tbody>
        </table>
      </b-card>

      <h3>&lt;b-card-section&gt;</h3>
      <p>Secció amb padding de la card</p>
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
              <td>border-top</td>
              <td>Bool</td>
              <td><code>false</code></td>
              <td></td>
              <td>Borde superior</td>
              <td>
                <input v-model="cardSection.borderTop" type="checkbox">
              </td>
            </tr>
            <tr>
              <td>border-bottom</td>
              <td>Bool</td>
              <td><code>false</code></td>
              <td></td>
              <td>Borde inferior</td>
              <td>
                <input v-model="cardSection.borderBottom" type="checkbox">
              </td>
            </tr>
            <tr>
              <td>border-left</td>
              <td>Bool</td>
              <td><code>false</code></td>
              <td></td>
              <td>Borde esquerra</td>
              <td>
                <input v-model="cardSection.borderLeft" type="checkbox">
              </td>
            </tr>
            <tr>
              <td>border-right</td>
              <td>Bool</td>
              <td><code>false</code></td>
              <td></td>
              <td>Borde dreta</td>
              <td>
                <input v-model="cardSection.borderRight" type="checkbox">
              </td>
            </tr>
          </tbody>
        </table>
      </b-card>

      <h3>&lt;b-card-list&gt;</h3>
      <p>Wrapper per a llistes. Afegeix nice smart borders per dalt i/o per baix.</p>
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
              <td>divisions</td>
              <td>Bool</td>
              <td><code>true</code></td>
              <td></td>
              <td>Si la card té línies divisories</td>
              <td>
                <input v-model="cardList.divisions" type="checkbox">
              </td>
            </tr>
            <tr>
              <td>block-links</td>
              <td>Bool</td>
              <td><code>false</code></td>
              <td></td>
              <td>Si la llista té block links</td>
              <td>
                <input v-model="cardList.blockLinks" type="checkbox">
              </td>
            </tr>
            <tr>
              <td>menu</td>
              <td>Bool</td>
              <td><code>false</code></td>
              <td></td>
              <td>Shortcut per a block-links, divisions false i padded false</td>
              <td>
                <input v-model="cardList.menu" type="checkbox">
              </td>
            </tr>
            <tr>
              <td>as</td>
              <td>String</td>
              <td><code>ul</code></td>
              <td></td>
              <td>Tag HTML</td>
              <td>
                <b-input v-model="cardList.as" type="text" checked size="sm" />
              </td>
            </tr>
          </tbody>
        </table>
      </b-card>
    </div>
    <div class="docs-col-preview">
      <div class="sticky">
        <b-card v-bind="card" class="mb-4">
          <b-card-section v-bind="cardSection">
            <h2>Title</h2>
          </b-card-section>
          <img v-if="card.type != 'gradient'" style="height: 200px; object-fit: cover" :src="card.image">
          <b-card-section v-bind="cardSection">
            Hello
          </b-card-section>
          <b-card-list v-bind="cardList">
            <li><a href="sads">I'm item one</a></li>
            <li><a href="sads">I'm item two</a></li>
          </b-card-list>
        </b-card>

        <snippet :properties="[card, cardSection, cardList]">{{`<bb-card${cardProps}>
  <b-card-section${cardSectionProps}>
    <h2>Title</h2>
  </b-card-section>
  <b-card-section${cardSectionProps}>
    Hello
  </b-card-section>
  <b-card-list${cardListProps}>
    <li><a href="sads">I'm item one</a></li>
    <li><a href="sads">I'm item two</a></li>
  </b-card-list>
</b-card>`}}</snippet>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>
