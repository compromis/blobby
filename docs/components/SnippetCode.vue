<template>
  <pre><code class="language-html"><slot /></code></pre>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

export default {
  mounted () {
    Prism.highlightAll();
  }
}
</script>
