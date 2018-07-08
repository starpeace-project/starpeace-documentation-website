<template lang='haml'>
%no-ssr
  #application{'v-bind:class':'application_css_class', 'v-cloak':true}
    %sp-header

    .columns
      %sp-menu{'v-bind:category':'category'}
      .column.column-main-body
        .documentation-body
          %a#rhythm


</template>

<script lang='coffee'>
import Header from '~/components/header-panel.vue'
import Menu from '~/components/menu-panel.vue'

export default
  components:
    'sp-header': Header
    'sp-menu': Menu

  data: ->
    category: 'strategy.rhythm'

  computed:
    application_css_class: -> []
</script>

<style lang='sass' scoped>
.documentation-body
  p
    &:not(:last-child)
      margin-bottom: 1rem
</style>
