<template>
  <div class="nav-network">
    <div class="row">
      <h2>
        <a href="https://compromis.net" class="link-muted-to-black">compromís.net</a>
      </h2>
    </div>
    <div class="row">
      <div class="col-md-6 col-xl-3">
        <h3>Partits</h3>
        <ul class="nav-network-list pill-list logos">
          <li>
            <a href="https://mes.compromis.net" class="pill">
              <mes-logo mono />
              <span class="visually-hidden">Més</span>
            </a>
          </li>
          <li>
            <a href="https://iniciativa.compromis.net" class="pill">
              <iniciativa-logo mono />
              <span class="visually-hidden">Iniciativa</span>
            </a>
          </li>
          <li>
            <a href="https://verds.compromis.net" class="pill">
              <verds-logo mono />
              <span class="visually-hidden">Verds-Equo</span>
            </a>
          </li>
        </ul>

        <h3>Joventuts</h3>
        <ul class="nav-network-list pill-list">
          <li>
            <a href="https://jovespv.org/" class="pill">
              Joves PV
            </a>
          </li>
          <li>
            <a href="https://jovesambiniciativa.compromis.net/" class="pill">
              Joves amb Iniciativa
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/jovesverdsqpv" target="_blank" rel="noopener" class="pill">
              Joves Verds-Equo
            </a>
          </li>
        </ul>
      </div>
      <div class="col-md-6 col-xl-3">
        <h3>Institucions</h3>
        <ul class="nav-network-list pill-list">
          <li>
            <a href="https://corts.compromis.net" class="pill">
              Corts Valencianes
            </a>
          </li>
          <li>
            <a href="https://congres.compromis.net" class="pill">
              Congrés
            </a>
          </li>
          <li>
            <a href="https://senat.compromis.net" class="pill">
              Senat
            </a>
          </li>
          <li>
            <a href="https://dipval.compromis.net" class="pill">
              Diputació de València
            </a>
          </li>
          <li>
            <a href="https://dipalc.compromis.net" class="pill">
              Diputació d'Alacant
            </a>
          </li>
          <li>
            <a href="https://dipcas.compromis.net" class="pill">
              Diputació de Castelló
            </a>
          </li>
          <li>
            <a href="https://fvmp.compromis.net" class="pill">
              FVMP
            </a>
          </li>
        </ul>

        <h3>Membres</h3>
        <ul class="nav-network-list pill-list">
          <li>
            <a href="https://sumat.compromis.net" class="pill">
              Suma't a Compromís
            </a>
          </li>
          <li>
            <a href="https://espai.compromis.net" class="pill">
              Espai Compromís
            </a>
          </li>
        </ul>
      </div>
      <div class="col-xl-6">
        <h3>Compromís al teu municipi</h3>
        <b-nav-locals />
      </div>
    </div>
  </div>
</template>

<script>
  import MesLogo from '../logos/MesLogo.vue'
  import IniciativaLogo from '../logos/IniciativaLogo.vue'
  import VerdsLogo from '../logos/VerdsLogo.vue'
  import BNavLocals from './BNavLocals.vue'

  export default {
    components: {
      MesLogo,
      IniciativaLogo,
      VerdsLogo,
      BNavLocals
    }
  }
</script>

<style lang="scss" scoped>

</style>