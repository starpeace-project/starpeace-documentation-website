<template lang='pug'>
.column.column-main-body
  #welcome-banner.documentation-body.is-starpeace
    p.
      Welcome to the STARPEACE Project community!
    p
      | Please explore
      |
      a(href="https://github.com/starpeace-project" target='_blank') Github repositories
      |
      | or join
      |
      a(href='https://discord.gg/TF9Bmsj' target='_blank') Discord channel
      |
      | if you'd like to get involved

</template>

<script>
export default {
  category: 'reference.project'
}
</script>

<style lang='sass' scoped>
$sp-primary: #6ea192
$sp-primary-bg: #395950
$sp-dark-bg: #2a453f

#welcome-banner
  font-size: 1.4rem
  margin-bottom: 1.5rem

  a
    color: lighten($sp-primary, 15%)

    &:hover
      color: lighten($sp-primary, 25%)

    &:active,
    &.is-active
      color: #000
</style>
