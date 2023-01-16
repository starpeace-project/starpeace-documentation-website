<template lang='pug'>
.column.column-main-body
  .documentation-body
    h2 Clients and Suppliers
    a#supplychain

  .documentation-body.is-starpeace
    p.
      There is a lot of trading going on in the STARPEACE worlds. In order to make it simple, contracts are not
      used in the game. If you want one of your stores to buy products from a specific player's warehouse, you
      need only include that warehouse in your store's List of suppliers. Along with a list of suppliers,
      factories and warehouses also have a list of clients.
    p.
      Having a certain facility listed as a supplier doesn't oblige that facility to supply you. It is only an
      indication of your desire to buy production from that facility if it is needed and there is enough
      production available.
    p.
      The game will automatically buy from the best supplier in the list. The choice is always based on price,
      which includes transportation costs. If it unable to get all the supplies necessary from the 'best buy'
      supplier in the list, then it will try to buy from the second best, and so on.
    p.
      Having your facilities well supplied is as important as having enough customers. So how do you get those
      lists started? We list several ways below.

  .documentation-body
    h3 Warehouse Supplier
    p
      | When a new facility is built, the game will automatically list all the warehouses set in Export mode as suppliers. See
      a(href='/strategy/organization') Company Organization
      |
      | for more information.
    p.
      Client initial supplier lists are not modified in this manner.

  .documentation-body
    h3 Initial suppliers
    p.
      This is an option some advanced players can't live without. After a new facility is built, and after the
      procedure described above is completed, the new facility will automatically be connected to your initial
      suppliers list. You can manage the Initial Suppliers for each company and industry in your Profile Page.
    p.
      Unless decided otherwise, all your factories and warehouses are added as initial suppliers on construction,
      enabling automatic connection of all your facilities to one another.

  .documentation-body
    h3 Connect Button
    p.
      Every facility with a supplier list will display a Connect button when inspected. When you click on
      connect, the mouse cursor will turn into a bulls-eye. Move the cursor over the building you want to start
      trading with (a factory or a warehouse) and click on it again. Then the game will connect both buildings.
      For example, if you connected a food store and a food warehouse, the warehouse will appear in the food
      store's supplier's list.
    p.
      Once both buildings' supply and client lists have been modified, you will receive a brief report detailing
      the result of this action.

  .documentation-body
    h3 Sell to All buttons
    p Factories and warehouses display the following buttons in the Inspect panel:
    .content
      ol
        li
          b Sell to all Stores:
          | It will connect the inspected facility to all the stores you own, and it will add it to your Initial Suppliers list.
        li
          b Sell to all Factories:
          | It will connect the inspected facility to all the factories you own, and it will add it to your Initial Suppliers list.
        li
          b Sell to all Warehouses:
          | It will connect the inspected facility to all the warehouses you own, and it will add it to your Initial Suppliers list.

  .documentation-body
    h3 Client or Supply Search
    p.
      In STARPEACE all merchants are registered in a sort of global directory. You can search for suppliers in the same manner you would search Yahoo for something.
    p.
      Let's say you built a new food warehouse, and you need suppliers for it. Do the following:
    .content
      ol
        li.
          Select your food warehouse on the map and inspect it.
        li.
          Go to the Suppliers Tab. You will see the supplier list there.
        li
          | Click on the
          i Hire
          |
          | button. The Supplies Search Page will appear, now you can set the options you want in order to narrow your search. Press the
          i Search
          |
          | button, a list of results will appear.

          p
            i.
              Note: this list is ranked according to Price, from cheapest to most expensive. Therefore, the supplier with the best price will be listed first.
        li
          | Select the suppliers you want and click on
          i Buy from selected suppliers
    p
      .
        As it will be explained later, every building has a Trade setting. It allows the owner to decide with whom
        that building can trade. It could be with anyone, allies only (see the Strategy section for explanation) or
        same company only. In the first list, obtained after pressing the
      i Search
      | button, all the buildings that sell the product will appear, regardless of their trade setting.
    p
      | When you click
      i Buy from selected suppliers
      .
        only the ones with the correct settings will appear in the list on the Inspect panel. If only
        a few or none make the cut to your actual suppliers list, it means you have to find another way
        to obtain what you need. If possible, producing it yourself could be an option, or it might be
        time for you to lobby other players and start an alliance in order to broaden your possible suppliers.
    p.
      The search for Clients works exactly in the same manner, but the list that result from the search
      is ranked according to distance from the building.
</template>

<script>
export default {
  category: 'strategy.supplychain'
}
</script>
