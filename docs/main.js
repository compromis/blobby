import { createApp } from 'vue'
import App from './App.vue'

// Blobby components
import BCard from '../components/card/BCard.vue'
import BCardSection from '../components/card/BCardSection.vue'
import BCardList from '../components/card/BCardList.vue'
import BField from '../components/inputs/BField.vue'
import BInput from '../components/inputs/BInput.vue'
import BSelect from '../components/inputs/BSelect.vue'
import BPill from '../components/pill/BPill.vue'

const app = createApp(App)

// Global components
app.component('BCard', BCard)
app.component('BCardSection', BCardSection)
app.component('BCardList', BCardList)
app.component('BField', BField)
app.component('BInput', BInput)
app.component('BSelect', BSelect)
app.component('BPill', BPill)

app.mount('#app')
