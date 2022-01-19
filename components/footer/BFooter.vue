<template>
  <footer :class="['footer', `footer-${variant}`]">
    <a href="https://compromis.net" target="_blank" rel="noopener" class="footer-logo d-block link-muted-to-black mb-3">
      <compromis-logo mono />
      <span class="visually-hidden">Compromís</span>
    </a>
    <p v-if="campaign" class="footer-text">
      <strong>{{ campaign }}</strong> és una campanya de <strong><a href="https://compromis.net" target="_blank" rel="noopener" class="link-muted-to-black">Compromís</a></strong>
    </p>
    <p class="footer-text">
      <email-icon />
      <a href="mailto:info@compromis.net">info@compromis.net</a>
      <phone-icon />
      <a href="tel:+34963826606">96 382 66 06</a>
      <map-marker-icon />
      <a href="https://compromis.net/info/contacta">
        <address>Plaça del Pilar, 1 - 46001 València</address>
      </a>
    </p>
    <ul class="footer-social">
      <li class="footer-social-facebook">
        <a href="https://facebook.com/coaliciocompromis" title="Facebook" target="_blank" rel="noopener">
          <facebook-icon />
        </a>
      </li>
      <li class="footer-social-twitter">
        <a href="https://twitter.com/compromis" title="Twitter" target="_blank" rel="noopener">
          <twitter-icon />
        </a>
      </li>
      <li class="footer-social-instagram">
        <a href="https://instagram.com/compromis" title="Instagram" target="_blank" rel="noopener">
          <instagram-icon />
        </a>
      </li>
      <li class="footer-social-youtube">
        <a href="https://youtube.com/coaliciocompromis" title="Youtube" target="_blank" rel="noopener">
          <youtube-icon />
        </a>
      </li>
      <li class="footer-social-telegram">
        <a href="https://t.me/compromis" title="Telegram" target="_blank" rel="noopener">
          <telegram-icon />
        </a>
      </li>
      <li class="footer-social-tiktok">
        <a href="https://tiktok.com/@compromis_net" title="TikTok" target="_blank" rel="noopener">
          <tiktok-icon />
        </a>
      </li>
      <li class="footer-social-twitch">
        <a href="https://twitch.tv/compromis_net" title="Twitch" target="_blank" rel="noopener">
          <twitch-icon />
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
  import CompromisLogo from '../logos/CompromisLogo.vue'
  import FacebookIcon from '../icons/FacebookIcon.vue'
  import TwitterIcon from '../icons/TwitterIcon.vue'
  import InstagramIcon from '../icons/InstagramIcon.vue'
  import YoutubeIcon from '../icons/YoutubeIcon.vue'
  import TiktokIcon from '../icons/TiktokIcon.vue'
  import TelegramIcon from '../icons/TelegramIcon.vue'
  import TwitchIcon from '../icons/TwitchIcon.vue'
  import EmailIcon from '../icons/EmailIcon.vue'
  import PhoneIcon from '../icons/PhoneIcon.vue'
  import MapMarkerIcon from '../icons/MapMarkerIcon.vue'

  export default {
    components: {
      CompromisLogo,
      FacebookIcon,
      TwitterIcon,
      InstagramIcon,
      YoutubeIcon,
      TiktokIcon,
      TelegramIcon,
      TwitchIcon,
      EmailIcon,
      PhoneIcon,
      MapMarkerIcon
    },

    props: {
      campaign: {
        type: String,
        default: ''
      },

      variant: {
        type: String,
        default: 'muted'
      }
    }
  }
</script>
