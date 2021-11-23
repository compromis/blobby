<template>
  <div>
    <form class="search-form" @submit.prevent="filter">
      <b-input
        ref="municipality"
        name="municipi"
        label="Municipi"
        no-label
        type="search"
        class="search-field"
        autocomplete="off"
        placeholder="Escriu el teu municipi"
        :model-value="territorialText ? territorialText : filterValue"
        size="sm"
        @input="(e) => { territorialText = ''; filterValue = e.target.value; }"
      >
        <div v-if="!territorialText && !filterValue" class="search-icon" style="pointer-events: none;" aria-hidden="true">
          <search-icon />
        </div>
        <button v-else class="search-icon search-reset" @click="territorialText = ''; filterValue = ''; $refs.municipality.$refs.input.focus();">
          <back-icon /> <span class="visually-hidden">Neteja filtre</span>
        </button>
      </b-input>
      <input type="submit" name="municipality_filter" class="search-button visually-hidden-focusable" value="Filtra" />
    </form>
    <b-pill-list v-if="filteredResults.length > 0" class="nav-network-list mt-2">
      <b-pill v-if="territorialUrl" variant="to-primary" :href="territorialUrl">
        Web comarcal
      </b-pill>
      <template v-for="website in filteredResults">
        <b-pill v-if="website.hasOwnProperty('territori_id')" :key="website.id" variant="to-primary" :href="website.url ? website.url : `https://compromis.net/info/local/#/${website.ref}`">
          {{ website.name }}
        </b-pill>
        <b-pill v-else :key="website.id" variant="to-primary" href="#" @click.prevent="setTerritory(website)">
            {{ website.name }}
        </b-pill>
      </template>
    </b-pill-list>
    <div v-else-if="loading" class="mt-2 text-muted">
      Carregant...
    </div>
    <div v-else class="mt-2 text-muted">
      No hem trobat cap resultat :(
    </div>
  </div>
</template>

<script>
import BInput from '../inputs/BInput.vue'
import SearchIcon from '../icons/SearchIcon.vue'
import BackIcon from '../icons/BackIcon.vue'
import BPill from '../pill/BPill.vue'
import BPillList from '../pill/BPillList.vue'

export default {
  components: {
    BInput,
    BackIcon,
    SearchIcon,
    BPill,
    BPillList
  },

  data () {
    return {
      territorials: [],
      territorialText: '',
      territorialUrl: '',
      locals: [],
      filterValue: '',
      filteredResults: [],
      loading: true,
    };
  },
  watch: {
    filterValue (newVal) {
      if (newVal === '') {
        this.filteredResults = this.territorials;
        this.territorialUrl = ''
      } else {
        this.filter();
      }
    },
    territorialText (newVal) {
      if (newVal === '') {
        this.filteredResults = this.territorials;
        this.territorialUrl = ''
      }
    },
  },
  mounted () {
    this.fetchLocals();
  },
  methods: {
    fetchLocals () {
      this.loading = true;
      fetch('https://compromis.net/common/json_municipis.php?with_territorials=true')
        .then(response => { return response.json() })
        .then(data => {
          this.locals = data.locals;
          this.territorials = data.territorials;
          this.filteredResults = data.territorials;
          this.loading = false;
        });
    },
    filter () {
      this.filteredResults = this.locals.filter(local => local.name.toLowerCase().startsWith(this.filterValue.toLowerCase()));
    },
    setTerritory (website) {
      this.territorialText = website.name;
      this.territorialUrl = website.url;
      this.filteredResults = this.locals.filter(local => local.territori_id == website.id);
    },
  },
}
</script>
