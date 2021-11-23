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
        <b-pill-list class="nav-network-list logos">
            <b-pill href="https://mes.compromis.net"  variant="to-primary">
              <mes-logo mono />
              <span class="visually-hidden">Més</span>
            </b-pill>
            <b-pill href="https://iniciativa.compromis.net" variant="to-primary">
              <iniciativa-logo mono />
              <span class="visually-hidden">Iniciativa</span>
            </b-pill>
            <b-pill href="https://verds.compromis.net" variant="to-primary">
              <verds-logo mono />
              <span class="visually-hidden">Verds-Equo</span>
            </b-pill>
        </b-pill-list>

        <h3>Joventuts</h3>
        <b-pill-list class="nav-network-list">
          <b-pill href="https://jovespv.org/" variant="to-primary">
            Joves PV
          </b-pill>
          <b-pill href="https://jovesambiniciativa.compromis.net/" variant="to-primary">
            Joves amb Iniciativa
          </b-pill>
          <b-pill href="https://www.facebook.com/jovesverdsqpv" target="_blank" rel="noopener" variant="to-primary">
            Joves Verds-Equo
          </b-pill>
        </b-pill-list>
      </div>
      <div class="col-md-6 col-xl-3">
        <h3>Institucions</h3>
        <b-pill-list class="nav-network-list">
          <b-pill href="https://corts.compromis.net" variant="to-primary">
            Corts Valencianes
          </b-pill>
          <b-pill href="https://congres.compromis.net" variant="to-primary">
            Congrés
          </b-pill>
          <b-pill href="https://senat.compromis.net" variant="to-primary">
            Senat
          </b-pill>
          <b-pill href="https://dipval.compromis.net" variant="to-primary">
            Diputació de València
          </b-pill>
          <b-pill href="https://dipalc.compromis.net" variant="to-primary">
            Diputació d'Alacant
          </b-pill>
          <b-pill href="https://dipcas.compromis.net" variant="to-primary">
            Diputació de Castelló
          </b-pill>
          <b-pill href="https://fvmp.compromis.net" variant="to-primary">
            FVMP
          </b-pill>
        </b-pill-list>

        <h3>Membres</h3>
        <b-pill-list class="nav-network-list pill-list">
          <b-pill href="https://sumat.compromis.net" variant="to-primary">
            Suma't a Compromís
          </b-pill>
          <b-pill href="https://espai.compromis.net" variant="to-primary">
            Espai Compromís
          </b-pill>
        </b-pill-list>
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
  import BPill from '../pill/BPill.vue'
  import BPillList from '../pill/BPillList.vue'

  export default {
    components: {
      MesLogo,
      IniciativaLogo,
      VerdsLogo,
      BNavLocals,
      BPill,
      BPillList
    }
  }
</script>
