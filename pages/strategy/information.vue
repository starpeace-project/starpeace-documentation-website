<template lang='haml'>
.column.column-main-body
  .documentation-body
    %h2 Information is Power
    %a#information

  .documentation-body.is-starpeace
    %p
      The only way to succeed in the game is to make the right decisions. Creating a car production line could
      be a great or a terrible idea, all depending on the circumstances. You need information to find out and
      properly assess the viability of such a choice.
    %p
      STARPEACE will provide you with all the knowledge you need to play. As you become a more seasoned player,
      you will uncover new pieces of information and discover new applications for information you already know.
    %p
      All the buildings in the game can be selected. When you select a building, text will appear over the
      selection. This text usually contains the name of the building, the name of the company who built it and
      some indication on how the building is working.
    %p
      The green and orange tickers at the bottom will show additional information about the building. If the
      selected building belongs to you, the orange ticker will probably display a hint on how to make the
      building work better.
    %p
      Although the selection text and the tickers might be enough some of the time, you can use the INSPECT
      button to get all the information available for the selected building. Since most of the information
      available in the game is related to buildings, there are some key buildings you will be inspecting a lot.
    %p
      Below we list the most important buildings as sources of information for the game.

  .documentation-body
    %h3 Town Halls
    %p
      The most visited buildings in the entire game are Town Halls. A STARPEACE world is comprised of several
      towns. Each town has a Town Hall. There are several ways to find Town Halls; most of them are covered in
      the User Manual. By inspecting a Town Hall, you will find information like demand and coverage for public
      services and commerce, number of available jobs, salary information, number of vacant spaces in residential
      areas, as well as how the Mayor is performing according to the other players and public opinion.
    %p
      How this can help you? Imagine you just built a factory and you are having trouble finding enough employees.
      No matter how long you wait, there always seems to be a shortage of workers willing to join your venture.
      The Town Hall contains the answer to your problem. Once you inspect it, you may realize there are a rather
      large number of jobs that are not being filled in that town. Obviously, some other players are having the
      same staffing difficulty. The real estate section at the Town Hall reports no vacancies for low class
      dwellings, so the problem is actually a no-brainer. Workers (the type you need) are scarce because housing
      in the city for those workers is unavailable. You might even discover that investing in real estate could
      be a good idea.
    %p
      What if there had been plenty of vacancies in real estate? This would have been a worrying sign: enough
      places to live, but no one is moving in. Something like that could be due to multiple issues. After checking
      other parameters at the Town Hall, you might also discover that school and hospital coverage is very low, and
      citizens are also upset about the blatant lack of certain products (one of them, luckily, will be produced by
      your new factory).
    %p
      Contact the Mayor of the city (or his opposition) or any other powerful player with a stake, and ask them to
      build extra schools or hospitals. Once the new buildings are in place, this adverse situation will disappear.
      In the short term, you can do nothing but raise your salaries at the new plant.

  .documentation-body
    %h3 Warehouses
    %p
      Warehouses, even if they don't belong to you, will give you an idea of how things are running in the city or
      even the whole world.
    %p
      Imagine it is winter. During winter, farms in STARPEACE stop producing food, so the entire food industry and
      commerce has to rely on what has been stored. Now imagine that you select a warehouse and it says that is
      storing Fresh Food at 0%. What does that mean? It means that you could build a couple of farms and sell food
      to that warehouse, since next winter it will likely need products.
    %p
      By the same token, checking warehouses will show you which goods or raw materials have been overproduced. If
      you see a warehouse that is full of chemicals despite the fact that prices are rock bottom, it is a clear
      indication that the owner of the warehouse is having trouble selling his production to other players. It also
      means you can get almost free chemicals from him, and maybe you should consider starting a business
      relationship with him.

  .documentation-body
    %h3 Trade Centers
    %p
      Trade Centers are always located near the Town Hall. Each town has its own Trade Center. Investors who are
      still in levels Apprentice and Entrepreneur can make use of Trade Centers to import raw materials from outside
      the world. By inspecting the Trade Center, you can easily find out what is being imported, and thus discover
      what raw materials you could produce to replace these imports.

  .documentation-body
    %h3 Player Profile Page
    %p
      You access the profile page by clicking on the icon with the head in the toolbar. The profile page has several
      sections. Here, we will only introduce to the Profit/Loss section, which we believe is the most important.
    %p
      At the Profit/Loss page you will find a detailed record of the money flow in your account, just click the
      little brown button on the side of any one of the voices. The accounting is broken into several categories. It
      is possible, for instance, to know how much you spent in salaries at your supermarkets, and compare the
      current year values with the values of the last 12 years.
    %p
      Since each STARPEACE year lasts about 12 real life hours, you'll have 144 hours - that's six days - of detailed
      information to look at. That means you could be absent from the game for six days and still pinpoint what went
      wrong and when.
    %p
      The history graphs at the Profit/Loss page will also give you a good indication of how the changes you
      introduced in your companies are affecting it.

  .documentation-body
    %h3 People
    %p.content
      Tycoons (other players) will be the ultimate source of information. You can always ask questions like:
      %ul
        %li Why is your Warehouse not selling to me?
        %li Why is no one seemingly selling this kind of good?
        %li I have plenty of this; do you need some?
    %p
      As you play, you will make new friends (that is if you didn't bring your friends from the offline world). You
      and your friends will share knowledge regarding cities economic situation. Communicating and sharing
      information will be the earliest form of collaboration you will encounter in the game.

</template>

<script lang='coffee'>
export default
  layout: 'documentation'
  category: 'strategy.information'
</script>

<style lang='sass' scoped>
</style>
