<script setup>
</script>

<template>
  <h2>Nav</h2>
  <div class="docs-cols">
    <div class="docs-col-schema">
      <h3>&lt;b-nav&gt;</h3>
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
              <td>collapse-at</td>
              <td>String</td>
              <td><code>lg</code></td>
              <td><code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code></td>
              <td>Breakpoint per amagar el menú</td>
              <td></td>
            </tr>
            <tr>
              <td>full-width</td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td></td>
              <td>Fa que l'amplària de la nav siga el 100%</td>
              <td></td>
            </tr>
            <tr>
              <td>menu-title</td>
              <td>String</td>
              <td><code>Menú principal</code></td>
              <td></td>
              <td>ARIA Title per al menú</td>
              <td></td>
            </tr>
            <tr>
              <td>Main slot</td>
              <td>Slot</td>
              <td></td>
              <td></td>
              <td>Items del menu en <code>b-nav-item</code></td>
              <td></td>
            </tr>
            <tr>
              <td>#logo-prepend</td>
              <td>Slot</td>
              <td></td>
              <td></td>
              <td>Contingut a afegir abans del logo</td>
              <td></td>
            </tr>
            <tr>
              <td>#logo-append</td>
              <td>Slot</td>
              <td></td>
              <td></td>
              <td>Text a afegir després del logo</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </b-card>
    </div>
    <div class="docs-col-preview">
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
