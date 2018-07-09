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
  -webkit-touch-callout: none
  -webkit-user-select: none
  -khtml-user-select: none
  -moz-user-select: none
  -ms-user-select: none
  user-select: none

a
  font-weight: bold
  text-decoration: none

h1
  font-family: 'Varela Round', sans-serif
  letter-spacing: .5rem
  text-shadow: 0 0 2rem rgba(0, 0, 0, .7)

h2
  font-family: 'Varela Round', sans-serif
  font-size: 2rem

h3
  font-family: 'Varela Round', sans-serif
  font-size: 1.5rem
  text-shadow: 0 0 .25rem rgba(0, 0, 0, .2)


/* handle auto-generated vue transition classes */
.fade-enter-active
  transition: opacity .5s
.fade-leave-active
  transition: opacity .5s
.fade-enter
  opacity: 0
.fade-leave-to
  opacity: 0

.fade-in-enter-active
  transition: opacity .5s
.fade-in-enter
  opacity: 0
.fade-in-leave-to
  opacity: 0

/* cloak to keep DOM elements hidden until vue ready */
[v-cloak]
  display: none

#application-container
  display: grid
  grid-template-columns: auto
  grid-template-rows: 4rem auto 11rem

  @media screen and (max-width: 768px)
    display: inline-block

    #common-header
      display: inline-block
      width: 100%

  #application-body
    grid-column-start: 1
    grid-column-end: 2
    grid-row-start: 2
    grid-row-end: 2
    margin: 0

</style>
