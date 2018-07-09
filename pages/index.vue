<template lang='haml'>
.column.column-main-body
  #welcome-banner.documentation-body.is-starpeace
    %p
      Welcome to the STARPEACE gameplay documentation and client user guide. Please let us know if you have any
      feedback within the STARPEACE Community!

  .columns.link-row
    .column
      .card
        .card-header
          .card-header-title Basic Strategy
        .card-content
          %p.subtitle.has-text-justified
            You can make your strategy as basic or complex as you wish. You can start up a few businesses and sit back
            while the money trickles in or you can find out how to build a powerful empire of thriving businesses that
            will skyrocket you to the top of the rankings. Look through the different links to the right to learn how
            to map out your strategy.
        %footer.card-footer
          %a.card-footer-item{href:'/strategy/overview'} Learn STARPEACE Strategy

    .column
      .card
        .card-header
          .card-header-title Tutorials
        .card-content
          %p.subtitle
            These step-by-step guides will help you navigate through this complex world. From the basics of getting
            started to learning how to set up your businesses, the links at the right will get you up and running in
            no time.
        %footer.card-footer
          %a.card-footer-item{href:'/tutorial/starting'} Follow Gameplay Tutorials

    .column
      .card
        .card-header
          .card-header-title  FAQs
        .card-content
          %p.subtitle
            We knew you'd have questions, so we've created a list of frequently asked questions in the links to the
            right. Find your answers fast so you can get back to earning the big bucks.
        %footer.card-footer
          %a.card-footer-item{href:'/faq/goals'} View Frequently Asked Questions

  .columns.link-row
    .column
      .card
        .card-header
          .card-header-title Tips
        .card-content
          %p.subtitle.has-text-justified
            The more successful companies you have, the more prestige points you will earn, and the higher you will
            rise in the rankings. Draw off these tips to help you organize your many businesses.
        %footer.card-footer
          %a.card-footer-item{href:'/tips/largecompany'} View STARPEACE Tips

    .column
      .card
        .card-header
          .card-header-title Community Forum
        .card-content
          %p.subtitle
            Join the community! Use the STARPEACE forums to meet new friends and meet key allies to help you advance,
            strike new partnerships and discuss your experience with the game, and share your ideas and stories plus
            any of your own tips learned along the way.
        %footer.card-footer
          %a.card-footer-item{href:'https://starpeaceproject.com/', target:'_blank'} Visit Community Forums

    .column
      .card
        .card-header
          .card-header-title Community Chatroom
        .card-content
          %p.subtitle
            We knew you'd have questions, so we've created a list of frequently asked questions in the links to the
            right. Find your answers fast so you can get back to earning the big bucks.
        %footer.card-footer
          %a.card-footer-item{href:'https://discord.gg/TF9Bmsj', target:'_blank'} Join Discord Channel

</template>

<script lang='coffee'>
export default
  layout: 'documentation'
  category: 'homepage'
</script>

<style lang='sass' scoped>
$sp-primary: #6ea192
$sp-primary-bg: #395950
$sp-dark-bg: #2a453f


#welcome-banner
  margin-bottom: 1.5rem

.card
  .card-header-title
    font-size: 1.6rem

  .card-content
    min-height: 10rem

.card-footer
  a
    color: darken($sp-primary, 15%)
    font-size: 1.4rem

    &:hover
      background-color: lighten($sp-primary, 30%)
      color: darken($sp-primary, 25%)

    &:active,
    &.is-active
      background-color: lighten($sp-primary, 10%)
      color: #000

</style>
