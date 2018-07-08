<template lang='haml'>
%no-ssr
  .column.is-one-fifth.column-menu
    %aside.menu
      %p.level#client-links
        %a.level-left{href:'https://client.starpeace.io'} {{ client_version }}
        %a.level-right.release-notes{href:'https://client.starpeace.io/release'} Release Notes

      .field.has-addons.search-field
        .control.has-icons-left.is-expanded
          %input.input.is-medium{type:'text'}
          %span.icon.is-left
            %font-awesome-icon{':icon':"['fas', 'search']"}
        .control
          %a.button.is-primary.is-medium
            Search

      %p.menu-label
        Basic Strategy
      %ul.menu-list
        %li
          %a{':class':"category == 'strategy.overview' ? 'is-active' : ''", 'href':"/strategy/overview"} Overview
        %li
          %a{':class':"category == 'strategy.economy' ? 'is-active' : ''", 'href':"/strategy/economy"} Economy
        %li
          %a{':class':"category == 'strategy.information' ? 'is-active' : ''", 'href':"/strategy/information"} Information is Power
        %li
          %a{':class':"category == 'strategy.organization' ? 'is-active' : ''", 'href':"/strategy/organization"} Company Organization
        %li
          %a{':class':"category == 'strategy.makingmoney' ? 'is-active' : ''", 'href':"/strategy/makingmoney"} Making Money
        %li
          %a{':class':"category == 'strategy.upgrades' ? 'is-active' : ''", 'href':"/strategy/upgrades"} Facility Upgrades
        %li
          %a{':class':"category == 'strategy.research' ? 'is-active' : ''", 'href':"/strategy/research"} Licensing and Research
        %li
          %a{':class':"category == 'strategy.supplychain' ? 'is-active' : ''", 'href':"/strategy/supplychain"} Clients and Suppliers
        %li
          %a{':class':"category == 'strategy.prestige' ? 'is-active' : ''", 'href':"/strategy/prestige"} Prestige
        %li
          %a{':class':"category == 'strategy.rhythm' ? 'is-active' : ''", 'href':"/strategy/rhythm"} Rhythm
        %li
          %a{':class':"category == 'strategy.othertycoons' ? 'is-active' : ''", 'href':"/strategy/othertycoons"} Other Tycoons
        %li
          %a{':class':"category == 'strategy.rules' ? 'is-active' : ''", 'href':"/strategy/rules"} Rules of Conduct

        %p.menu-label
          Tutorials
        %li
          %a Getting Started
        %li
          %a Company Commerce
        %li
          %a Company Creation
        %li
          %a Construct First Store
        %li
          %a Construct Company HQ
        %li
          %a Offices
        %li
          %a Industries
        %li
          %a Warehouses
        %li
          %a Public Facilities
        %li
          %a Politics
        %li
          %a Levels

        %p.menu-label
          Tips
        %li
          %a{':class':"category == 'tips.largecompany' ? 'is-active' : ''", 'href':"/tips/largecompany"} Managing Large Companies

        %p.menu-label
          FAQs
        %li
          %a{':class':"category == 'faq.goals' ? 'is-active' : ''", 'href':"/faq/goals"} Goals
        %li
          %a{':class':"category == 'faq.history' ? 'is-active' : ''", 'href':"/faq/history"} History
        %li
          %a{':class':"category == 'faq.earlygame' ? 'is-active' : ''", 'href':"/faq/earlygame"} Early-game Strategy
        %li
          %a{':class':"category == 'faq.buildings' ? 'is-active' : ''", 'href':"/faq/buildings"} Buildings
        %li
          %a{':class':"category == 'faq.research' ? 'is-active' : ''", 'href':"/faq/research"} Research
        %li
          %a{':class':"category == 'faq.stores' ? 'is-active' : ''", 'href':"/faq/stores"} Stores and Supplies
        %li
          %a{':class':"category == 'faq.zones' ? 'is-active' : ''", 'href':"/faq/zones"} Zones
        %li
          %a{':class':"category == 'faq.money' ? 'is-active' : ''", 'href':"/faq/money"} Money
        %li
          %a{':class':"category == 'faq.unorthodox' ? 'is-active' : ''", 'href':"/faq/Unorthodox"} Unorthodox Buildings

</template>

<script lang='coffee'>
import request from 'superagent'

export default
  props:
    category: String

  data: ->
    client_version: 'Client Latest Version'

  created: ->
    request
      .get 'https://client.starpeace.io/assets/client-version.json'
      .set('accept', 'json')
      .end (error, response) => @client_version = "Client #{response.body.version}"
</script>

<style lang='sass' scoped>
$sp-primary: #6ea192
$sp-primary-bg: #395950

$sp-dark-bg: #2a453f

$sp-button-light-bg: #ffffbf

.column-menu
  background-color: #eee
  padding: 0
  padding-bottom: 1rem

  #client-links
    border: 1px solid lighten($sp-primary-bg, 15%)
    margin: 0 0 1.5rem

    &:hover
      background-color: lighten($sp-primary, 30%)

    .release-notes
      font-size: 1rem

    a
      padding: .5rem 1rem
      color: darken($sp-primary, 15%)

      &:hover
        color: darken($sp-primary, 25%)

      &:active,
      .is-active
        color: #000

  .search-field
    margin-bottom: 1.5rem

    .button
      &.is-primary
        background-color: lighten($sp-primary-bg, 15%)

      &:hover
        background-color: lighten($sp-primary-bg, 5%)

      &:active,
      &.is-active
        background-color: darken($sp-primary-bg, 5%)


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

</style>
