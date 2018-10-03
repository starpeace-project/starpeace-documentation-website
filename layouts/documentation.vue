<template lang='haml'>
%no-ssr
  #application-container{'v-cloak':true}
    %sp-header
    #application-body.columns
      %sp-menu{'v-bind:category':'category'}
      %nuxt
    %sp-footer
</template>

<script lang='coffee'>
import Header from '~/components/header-panel.vue'
import Menu from '~/components/menu-panel.vue'
import Footer from '~/components/footer-panel.vue'

export default
  components:
    'sp-header': Header
    'sp-menu': Menu
    'sp-footer': Footer

  computed:
    category: () -> @$route.matched.map((r) -> r.components.default.options?.category || r.components.default.category)[0]
</script>

<style lang='sass'>
html
  font-size: 12px
  overflow-y: scroll

body
  background: url('~/assets/images/background.jpg') top center repeat-y
  background-size: 100%
  box-sizing: border-box
  color: #000
  font-family: 'Open Sans', sans-serif
  font-size: 12px
  margin: 0
  padding: 0
</style>
