<template lang='pug'>
.column.column-menu.is-one-quarter-tablet.is-one-quarter-desktop.is-one-fifth-widescreen.is-one-fifth-fullhd
  aside.menu

    p.menu-label Game Clients
    .client-container
      .client-link.is-first
        .level.is-mobile.game-logo.is-spio
          a.level-item.is-marginless(href='https://client.starpeace.io') STAR
          a.level-item.logo-item(href='https://client.starpeace.io')
            img.starpeace-logo
          a.level-item.is-marginless(href='https://client.starpeace.io') PEACE
        .level.is-mobile.game-notes
          a.level-left(href='https://client.starpeace.io') {{ client_version }}
          a.level-right.release-notes(href='https://client.starpeace.io/release')
            span.is-hidden-tablet-only
              | Release
              |
            | Notes

      .client-link
        a.background-link(href='http://www.starpeaceonline.com/')
        .level.game-logo.is-spo
          a.level-item(href='http://www.starpeaceonline.com/')
        .level.game-notes
          a.level-left(href='http://www.starpeaceonline.com/support.asp') Windows Client

    p.menu-label Basic Strategy
    ul.menu-list
      li
        a(:class="category == 'strategy.overview' ? 'is-active' : ''", href="/strategy/overview") Overview
      li
        a(:class="category == 'strategy.economy' ? 'is-active' : ''", href="/strategy/economy") Economy
      li
        a(:class="category == 'strategy.information' ? 'is-active' : ''", href="/strategy/information") Information is Power
      li
        a(:class="category == 'strategy.organization' ? 'is-active' : ''", href="/strategy/organization") Company Organization
      li
        a(:class="category == 'strategy.makingmoney' ? 'is-active' : ''", href="/strategy/makingmoney") Making Money
      li
        a(:class="category == 'strategy.upgrades' ? 'is-active' : ''", href="/strategy/upgrades") Facility Upgrades
      li
        a(:class="category == 'strategy.research' ? 'is-active' : ''", href="/strategy/research") Licensing and Research
      li
        a(:class="category == 'strategy.supplychain' ? 'is-active' : ''", href="/strategy/supplychain") Clients and Suppliers
      li
        a(:class="category == 'strategy.prestige' ? 'is-active' : ''", href="/strategy/prestige") Prestige
      li
        a(:class="category == 'strategy.rhythm' ? 'is-active' : ''", href="/strategy/rhythm") Rhythm
      li
        a(:class="category == 'strategy.othertycoons' ? 'is-active' : ''", href="/strategy/othertycoons") Other Tycoons
      li
        a(:class="category == 'strategy.rules' ? 'is-active' : ''", href="/strategy/rules") Rules of Conduct

      p.menu-label Tutorials
      li
        a(:class="category == 'tutorial.starting' ? 'is-active' : ''", href="/tutorial/starting") Getting Started
      li
        a(:class="category == 'tutorial.commerce' ? 'is-active' : ''", href="/tutorial/commerce") Company Commerce
      li
        a(:class="category == 'tutorial.creation' ? 'is-active' : ''", href="/tutorial/creation") Company Creation
      li
        a(:class="category == 'tutorial.companyhq' ? 'is-active' : ''", href="/tutorial/companyhq") Construct Company Headquarters
      li
        a(:class="category == 'tutorial.firststore' ? 'is-active' : ''", href="/tutorial/firststore") Construct First Store
      li
        a(:class="category == 'tutorial.office' ? 'is-active' : ''", href="/tutorial/office") Offices
      li
        a(:class="category == 'tutorial.industry' ? 'is-active' : ''", href="/tutorial/industry") Industries
      li
        a(:class="category == 'tutorial.warehouse' ? 'is-active' : ''", href="/tutorial/warehouse") Warehouses
      li
        a(:class="category == 'tutorial.publicfacility' ? 'is-active' : ''", href="/tutorial/publicfacility") Public Facilities
      li
        a(:class="category == 'tutorial.politics' ? 'is-active' : ''", href="/tutorial/politics") Politics
      li
        a(:class="category == 'tutorial.levels' ? 'is-active' : ''", href="/tutorial/levels") Levels

      p.menu-label Tips
      li
        a(:class="category == 'tips.largecompany' ? 'is-active' : ''", href="/tips/largecompany") Managing Large Companies

      p.menu-label FAQs
      li
        a(:class="category == 'faq.goals' ? 'is-active' : ''", href="/faq/goals") Goals
      li
        a(:class="category == 'faq.history' ? 'is-active' : ''", href="/faq/history") History
      li
        a(:class="category == 'faq.earlygame' ? 'is-active' : ''", href="/faq/earlygame") Early-game Strategy
      li
        a(:class="category == 'faq.buildings' ? 'is-active' : ''", href="/faq/buildings") Buildings
      li
        a(:class="category == 'faq.research' ? 'is-active' : ''", href="/faq/research") Research
      li
        a(:class="category == 'faq.stores' ? 'is-active' : ''", href="/faq/stores") Stores and Supplies
      li
        a(:class="category == 'faq.zones' ? 'is-active' : ''", href="/faq/zones") Zones
      li
        a(:class="category == 'faq.money' ? 'is-active' : ''", href="/faq/money") Money
      li
        a(:class="category == 'faq.unorthodox' ? 'is-active' : ''", href="/faq/unorthodox") Unorthodox Buildings

      p.menu-label STARPEACE Project
      li
        a(:class="{'is-active': category == 'reference.project'}" href="/reference/project") Information
      li
        a(href="https://github.com/starpeace-project" target='_blank') Github
      li
        a(:class="{'is-active': category == 'reference.api.multiverse'}" href="/reference/api/multiverse") Multiverse API
      li
        a(:class="{'is-active': category == 'reference.building.financials'}" href="/reference/building/financials") Building Financials

</template>

<script>
export default {
  props: {
    category: String
  },

  data () {
    return {
      client_version: 'WebGL Client Latest Version'
    };
  },

  created () {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://client.starpeace.io/assets/client-version.json', true);
    request.onload = () => {
      if (request.status >= 200 && request.status < 400)
        this.client_version = `WebGL Client ${JSON.parse(request.responseText).version}`;
    }
    request.send();
  }
}
</script>

<style lang='sass' scoped>
@import 'bulma/sass/utilities/_all'

$sp-primary: #6ea192
$sp-primary-bg: #395950

$sp-primary-light: lighten($sp-primary, 10%)
$sp-primary-extra-light: lighten($sp-primary, 30%)

.column-menu
  background-color: #eee
  min-width: 28rem
  padding: 0
  padding-bottom: 1rem

  .menu
    background-color: #fff
    font-size: 1.3rem
    padding: 1rem
    padding-top: 1rem

    .menu-label
      border-bottom: 1px solid opacify(lighten($sp-primary-bg, 5%), .8)
      padding-bottom: .75rem
      margin-bottom: .5rem

    li
      &:not(:first-child)
        margin-top: .25rem

      a
        &:hover
          background-color: lighten($sp-primary-bg, 50%)

        &:active,
        &.is-active
          background-color: lighten($sp-primary-bg, 35%)
          color: #fff

  .client-container
    min-height: 17rem

  .client-link
    background-color: lighten($sp-primary-extra-light, 15%)
    border: 1px solid lighten($sp-primary-bg, 15%)
    cursor: pointer
    margin: 0 0 1.5rem
    position: relative
    transition-duration: .25s
    transition-property: margin-left, margin-right, margin-top

    &:hover
      background-color: $sp-primary-extra-light
      border-radius: 3px
      box-shadow: 0 8px 8px rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .1)
      margin-left: -.5rem
      margin-right: -.5rem

      .is-spio
        -webkit-animation: VerticalBackgroundScroll 10s linear infinite
        -moz-animation: VerticalBackgroundScroll 10s linear infinite
        animation: VerticalBackgroundScroll 10s linear infinite

        a
          font-size: 2.75rem

          &.logo-item
            margin-right: .15rem

        img
          background-size: 2.45rem
          height: 2.45rem
          max-width: 2.45rem
          width: 2.45rem

      .is-spo
        a
          min-height: 5.5rem

    &:active,
    &.is-active
      background-color: $sp-primary-light

    &.is-first
      margin-bottom: .5rem

    a
      color: darken($sp-primary, 15%)
      display: inline-block

      &:hover
        color: darken($sp-primary, 25%)

      &:active,
      &.is-active
        color: #000

      &.release-notes
        float: right

    .background-link
      position: absolute
      height: 100%
      width: 100%

    .game-logo
      margin-bottom: 0

      &.is-spio
        background-size: cover
        background-image: url('~/assets/images/logo-starpeace-io.jpg')
        text-align: center

        a
          color: #FFF
          font-family: 'Varela Round', sans-serif
          font-size: 2.5rem
          letter-spacing: .5rem
          line-height: 4rem
          padding: .25rem .5rem
          text-shadow: 0 0 2rem rgba(0, 0, 0, .7)
          transition-duration: .25s
          transition-property: font-size

          &:first-child
            text-align: right

          &:last-child
            text-align: left

          &.logo-item
            margin: 0
            max-width: 2.6rem
            padding: 0 0 .1rem
            transition-property: margin-right

            +mobile
              padding-bottom: .2rem

        img
          background-size: 2.325rem
          display: block
          height: 2.325rem
          margin: 0
          max-width: 2.325rem
          width: 2.325rem
          transition-duration: .25s
          transition-property: background-size, height, max-width, width

      &.is-spo
        background-image: url('~/assets/images/logo-starpeace-online.jpg')
        background-repeat: no-repeat
        background-size: 100%

        a
          min-height: 5.25rem
          transition-duration: .25s
          transition-property: min-height
          width: 100%

          +mobile
            min-height: 4.8rem

    .game-notes
      font-size: 1rem

      a
        padding: .5rem 1rem .75rem


</style>
