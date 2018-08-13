<template lang='haml'>
  .column.column-main-body
    .documentation-body
      %h2 Prestige
      %a#prestige

    .documentation-body.is-starpeace
      %p
        Prestige is a very important part of STARPEACE gameplay. Your company Prestige is an indication of your
        importance and influence in the game world. For example, the more Prestige you have, the more people will
        be inclined to come and work for you. In politics Prestige plays a fundamental role. In order to be
        eligible to run for Mayor you need 200 Prestige points, for President you need 1000. The outcome of the
        election is also partly decided by how many points you have.

    .documentation-body
      %h3 How do you obtain prestige?
      %p
        There are many things that can raise or lower your Prestige. When you want to build something, click on the
        More info button, it provides you with all the specifics about buildings and you might see something like
        +10 Prestige Points. However, not all buildings add to your Prestige. Factories and stores don't add much;
        other public facilities like schools, hospitals, fire or police stations add much more. Some of buildings
        are affordable and add to your Prestige, anywhere from 10 to 20 points each, which often provides good
        value. To get a great amount of Prestige fast, you can build Monuments, but they are very expensive!
      %p
        Another way of raising your Prestige is to do research. There are certain technological advances that can
        boost your Prestige score, but will usually cost you either in quality or efficiency.
      %p
        Such an example would be when you are researching residential buildings. When you look at the points it
        brings you, you will notice that some buildings increase points and some lower them.
      %p
        Leveling also gives you Prestige. Refer to the Level page for the detailed breakdown. If you decide to go
        in the Beyond Legend levels, you will notice that your Prestige will receive a decisive boost.
      %p
        Being elected Mayor or President enables you to gain Prestige as well, but be careful: if you get kicked
        out you will lose it, with interest!

    .documentation-body
      %h3 How can you lose prestige?
      %p
        Every time you get rid of a source of your Prestige, you will lose it. Demolishing a building that gave you
        Prestige will make you lose that Prestige, the same goes for selling a Research that granted you some.
      %p
        Going bankrupt or resetting will make you lose 100 Prestige points as well, but only if you are not Apprentice.
      %p
        Being kicked out of office or having a terrible record after a term as Mayor or President is a guaranteed way
        to lose Prestige. So if you are planning to run for Mayor, be ready to face the consequences of your actions.
      %p
        Losing a Beyond Legend level results in a loss of 1.5 times more Prestige than originally gained: plan carefully!
</template>

<script lang='coffee'>
export default
  layout: 'documentation'
  category: 'strategy.prestige'
</script>

<style lang='sass' scoped>
</style>
