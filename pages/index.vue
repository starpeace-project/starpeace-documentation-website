<template lang='haml'>
%no-ssr
  #application{'v-bind:class':'application_css_class', 'v-cloak':true}
    %sp-header

    .columns
      %sp-menu{'v-bind:category':'category'}
      .column.column-main-body

</template>

<script lang='coffee'>
import Header from '~/components/header-panel.vue'
import Menu from '~/components/menu-panel.vue'

export default
  components:
    'sp-header': Header
    'sp-menu': Menu

  data: ->
    category: 'homepage'

  computed:
    application_css_class: ->
      classes = []
      #classes.push('no-header')
      classes

</script>

<style lang='sass' scoped>
#application
  display: grid
  grid-template-columns: auto
  grid-template-rows: 4rem auto
  height: 100vh
  overflow-y: scroll

  > .columns
    margin: 0

</style>
