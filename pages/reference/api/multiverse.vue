<template lang='pug'>
.column.column-main-body
  .card
    .card-content.api-content(v-html='api_html')
</template>

<script>
export default {
  category: 'reference.api.multiverse',

  data () {
    return {
      api_html: ''
    };
  },

  created () {
    const request = new XMLHttpRequest();
    request.open("GET", '/api-docs/multiverse/index.html');
    request.send();
    request.onreadystatechange = (e) => {
      this.api_html = request.responseText;
    };
  }
}
</script>

<style lang='sass'>
.api-content
  font-size: 1rem
  color: #444

  h1
    font-size: 1.75rem

    &:not(:first-child)
      margin-top: 2rem

    &:first-child
      margin-bottom: 1rem

  h2
    font-size: 1.5rem
    margin-top: 2rem

  h3
    font-size: 1.25rem
    font-weight: bold
    margin-top: 1.5rem

  h4
    margin-top: 1rem

  hr
    height: 1px
    border: 0
    color: #ddd
    background-color: #ddd

  .app-desc
    clear: both
    font-size: 1.15rem

  .param-name
    width: 100%

  .license-info
    margin-top: 1rem

  ol
    margin-left: 2.5rem
    margin-top: .5rem

  .model
    border: 1px solid #ddd
    margin: 0
    margin-top: 1rem
    padding-top: 1rem
    padding-left: 1rem

    h3
      margin: 0

  .method-notes
    margin: 10px 0 20px 0
    font-size: .9rem
    color: #555

  pre
    padding: 10px
    margin-bottom: 2px

    &.method-get
      background-color: #0f6ab4

    &.method-post
      background-color: #10a54a

    &.method-put
      background-color: #c5862b

    &.method-patch
      background-color: #b0ba27

    &.method-delete
      background-color: #a41e22


    &.example
      background-color: #f3f3f3
      padding: 10px
      border: 1px solid #ddd

  .http-method
    text-transform: uppercase

  .huge
    color: #fff

  code
    white-space: pre

  .nickname
    font-weight: bold

  .method-path
    background-color: #0f6ab4
    font-size: 1.5em
    margin-top: 1rem

  .up
    float: right

  a
    &.up
      color: #fff
      font-size: 1.25rem
      padding: .5rem

  .method-summary
    margin-top: .5rem

  .parameter
    width: 500px

  .param
    width: 500px
    padding: 0
    font-weight: bold

  .param-desc
    width: 700px
    padding: 0
    color: #777

  .param-type
    font-style: italic

  .param-enum-header
    width: 700px
    padding: 0 0 0 60px
    color: #777
    font-weight: bold

  .param-enum
    width: 700px
    padding: 0 0 0 80px
    color: #777
    font-style: italic

  .field-label
    padding: 0
    margin-bottom: .5rem
    text-align: left
    clear: both

  .field-items
    padding: 0 0 15px 0
    margin-bottom: 15px

  .return-type
    clear: both
    padding-bottom: 10px

  .param-header
    font-weight: bold

  .method-tags
    text-align: right

  .method-tag
    background: none repeat scroll 0% 0% #24A600
    border-radius: 3px
    padding: 2px 10px
    margin: 2px
    color: #FFF
    display: inline-block
    text-decoration: none


</style>
