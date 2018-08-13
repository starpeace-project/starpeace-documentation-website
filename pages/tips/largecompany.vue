<template lang='haml'>
  .column.column-main-body
    .documentation-body
      %h2 Managing Large Companies
      %a#largecompany

    .documentation-body.is-starpeace
      %p
        The information contained in this chapter should help you with the management and organization of your large
        companies. It might not seem that important right now, but when you have 300 or more buildings you will want
        some tips on managing. And, if you plan this carefully from the start, it will be that much easier for you.

    .documentation-body
      %h3 Multiple Companies
      %p.content
        You can have multiple companies, and since each seal offers some benefits, you can start a company with each of
        the seals to get all the benefits each seal has to offer. Some tips on running multiple companies:
        %ol
          %li
            If possible, have a common phrase or term in each of your company's names. This will make it easier for people
            to search for your companies. They will be able to find all your companies by simply doing a wild card search
            using the common part.
          %li
            Only build the headquarters you need. For example, if you start a company just to build a few stores, you
            probably want need the Headquarter. This will help you save on capital and operating expenses.
          %li
            Try to build all of your headquarters in the same general area on the map, this will make it easier to find
            and work with them. The same principal applies to your factories, build them all in the same general area.
          %li
            Only sell to one market with one quality level per company: if you want to sell to the high class then use
            the stores from one company for that purpose, building them close to the high class housing and setting them
            up with high quality supplies, etc; if you also want to sell to the low class, use stores from a different
            company for that. In this manner you can use the clone option more effectively and set your pricing very quickly.

    .documentation-body
      %h3 Favorites Menu
      %p.content
        The favorites menu can save you time when finding your key facilities. You do not need all of your facilities on
        the menu. Follow these hints to effectively use the quick link menu:
        %ol
          %li
            Only put your clone facilities on the menu. By 'clone facilities' we mean the ones you will use as a model
            for all the other settings. You should have one clone facility per type of building per company.
          %li
            The other type of building to add to the quick links menu would be a building you use as a locator on the
            map. For example you should build your headquarters in the same general area, so if you have a link to just
            one of your headquarters, it can be used for all of your headquarters.
          %li
            Rename the links on the menu so that they make sense to you. For example if you add your first mart of a
            company using the PGI Seal, the default will be Mart 1. If you rename it to HighQual Mart Clone, with just
            a glance at the link you will know what its market is (high class), and what type of store it is (Mart).
          %li
            The systems defaults every factory and headquarter that you build to the list, delete the ones that you do
            not need. Otherwise, your quick links list can get so large it won't be easy to use anymore. You can still
            find all of your buildings by using the spider menu.

    .documentation-body
      %h3 Clone Button
      %p
        The clone button copies the settings of one building to all the other buildings of the same type. These settings
        include: selling prices, min quality, max prices, lists of suppliers and clients. Check the settings you want to
        clone before clicking on the button. The other options are: This town only, This company only and Accept incoming
        settings. If you uncheck the Accept incoming settings box, then that building will not take the settings when you
        use the clone function. This is where building each related company in the same area comes in. If you build in the
        high class area with company one, and the low class area with company two, you can use the This company only check
        box to easily keep several different groups of buildings with the same settings going.

    .documentation-body
      %h3 Warehouses
      %p.content
        Warehouses can have several combinations, using the sales policy settings and the operating modes. One useful
        combination is listed below:
        %ol
          %li
            Import and Export loop. Build two warehouses of the same type, set one to Import mode and set the other to
            Export mode. Now connect both of them to each other by opening the inspection window and clicking on the
            Connect button on one of the warehouses. Now your factories will sell to the export warehouse, the export
            warehouse will sell to the import warehouse, and the import warehouse will sell to your stores and factories.
            The nice thing with a set up like this is that other players can connect to your export and buy your excess
            goods. And likewise, you can connect your import warehouse to other players' warehouses if you need more supplies.

    .documentation-body
      %h3 Spider Menu
      %p.content
        The spider menu is an important source of information in the game and you can use some of this information to
        help your company:
        %ol
          %li
            The Rankings button. If you want to see who is number one in any area, this is where you'll find it. Also
            you this is a good place to look at if you're thinking of going into a new area; you can check out everyone
            else's profits in that area.
          %li
            The People button. After you find out who is number one in an area use the People button to check their
            company out, you can even view their profit and loss page.
          %li
            The You button. This will provide you with a link to all of your buildings. This is why you don't need
            every building to be on your quick links menu.
          %li
            Towns button. Use this for quickly navigating to all the towns on the map. Click on the town's name to
            display an information screen about that town. Be sure to check out the Town Hall's commerce page before
            you start a new business there.
</template>

<script lang='coffee'>
export default
  layout: 'documentation'
  category: 'tips.largecompany'
</script>

<style lang='sass' scoped>
</style>
