<template lang='haml'>
%no-ssr
  #application{'v-bind:class':'application_css_class', 'v-cloak':true}
    %sp-header

    .columns
      %sp-menu{'v-bind:category':'category'}
      .column.column-main-body
        .documentation-body.is-starpeace
          %a#overview
          %p
            You’ve just received 100 million dollars from the IFEL to colonize a new world. This is a lot of money, if
            you only spent it on personal items, like food, clothes or a trip to the Moon. However, in this case, you
            need to invest this money and make it grow.

          %p
            You need to understand that planning is key—random spending will get you nowhere fast. While 100 million
            dollars may seem like a lot, keep in mind that a single large factory could cost you 80 million dollars, and
            then there are the technologies you need to research that can cost up to 1 billion dollars to develop.

          %p
            So how do you become a bizillionaire? This section of the website will provide you with a basic plan for
            success. Check out the various links or perform a search. However, never underestimate your fellow players;
            they are often the best source for information.
</template>

<script lang='coffee'>
import Header from '~/components/header-panel.vue'
import Menu from '~/components/menu-panel.vue'

export default
  components:
    'sp-header': Header
    'sp-menu': Menu

  data: ->
    category: 'strategy.overview'

  computed:
    application_css_class: -> []
</script>

<style lang='sass' scoped>
.documentation-body
  p
    &:not(:last-child)
      margin-bottom: 1rem
</style>
