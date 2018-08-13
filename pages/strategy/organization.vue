<template lang='haml'>
  .column.column-main-body
    .documentation-body
      %h2 Company Organization
      %a#organization

    .documentation-body.is-starpeace
      %p
        It is crucial to know how to grow a company. Some players tend to go big too soon, and end up bankrupt.
        Others remain small for too long and end up watching other players who joined the world after them
        taking the lead.
      %p
        In the following pages we will give you some basic company management concepts in STARPEACE. The
        practical details of how these concepts are implemented, and the steps you must follow to apply
        them are omitted for the sake of simplicity. For a more detailed explanation about these procedures
        check the Tutorials chapter.

    .documentation-body
      %h3 Seals
      %p
        In order to start investing your money, you need to create a Company. A Company will license all its
        technology from a Seal Company. Seal Companies are not run by players. There are four main Seal
        Companies: PGI, Mariko, Dissidents and Moab.
      %p
        When you create a company, you must choose the Seal you want to associate with. This will determine
        what you will be able to build, the technologies that will be available to you, and how your buildings
        will look and perform. Making good use of each Seal's advantages while minimizing their inherent
        drawbacks is a fine art.

    .documentation-body
      %h3 World Population
      %p
        Firstly, we recommend that you join a world that is already populated. A population of around 300,000
        inhabitants isn't usually too dense or sparse. Why worlds with some development are better than new
        worlds? In worlds were there are already significant investments, it is more likely to find market
        niches. New worlds are usually economically immature, so they are in a stage where they still need to
        attract inhabitants, and this is something you may not want to deal with when you are new at the game.
      %p
        So let's imagine you found the right world and you created your first company there. Since this section
        is not a tutorial, we will skip steps like building company headquarters and making the initial research.

    .documentation-body
      %h3 Commerce Strategy
      %p
        There are hundreds of ways you could structure a company. Here we will introduce you to one. This one is
        based on commerce, and usually allows you to later grow your company with reasonable speed and security.
      %p
        There is a natural tendency for more established players to overlook some opportunities in the commerce
        sector. You will find these opportunities by inspecting the Town Hall. Once you have found which commerce
        areas you could exploit, you will proceed to build commerce outlets.
      %p
        Every time you build a store, it will automatically try to buy supplies from all the warehouses in the
        world. The simulated people who work at your company's headquarters will decide from which warehouse to
        buy, based on price and transportation costs. This means that at the beginning your company will comprise
        only the stores and the headquarters.
      %p
        This represents the first stage of the company; if drawn, its structure would resemble:
      %p
        %img{src:'~/assets/images/strategy.organization.01.gif'}

      %p
        Your company could go really far following this scheme. However, this configuration has a major flaw: In
        the event there is a lack of supplies, you would have to add more warehouses to the list of potential
        suppliers for all your stores. This is not particularly difficult since there is a button in the interface
        of warehouses that will do that, but it's identifying the source of the problem that could prove difficult
        when so many relationships are involved.
      %p
        What could you do to perfect this? Build your own warehouse. Then you would connect your stores strictly
        to your warehouse, and make the warehouse buy from all the other warehouses. Since it will be a warehouse
        that will bring goods into your company, it would operate as an import warehouse. Now you only have to
        check the status of the warehouse to detect any problems. From that single point, you will be able to know
        the exact quality and price of the goods your stores are selling.
      %p
        The following scheme depicts the new configuration:
      %p
        %img{src:'~/assets/images/strategy.organization.02.gif'}
      %p
        This would be the second stage in your company's growth. There is a hidden benefit to this scheme. In the
        same way there are Import Warehouses, there are Export Warehouses. Players with lots of factories will
        usually build Export Warehouses to concentrate their sales to other players. Whenever a new Export Warehouse
        is built, it will connect automatically to all the Import Warehouses in the vicinity. As a result, the list
        of potential suppliers at your Import Warehouse will get updated automatically.
      %p
        So let's say you consider yourself big enough to stop selling other people's production and start your own
        production line. That would lead you to the last configuration we will introduce here.
      %p
        The major business change is that you will have factories now. How to proceed with them? Well, factories are
        similar to stores in the sense they need supplies, ideally supplied by your Import Warehouse as well.
      %p
        What to do with the production? You could make the factories supply the stores directly, but that would be a
        step backwards. You simply could make the factories sell their production to your Warehouse, like the
        following scheme shows. In this configuration, your stores would continue working as if nothing had changed,
        except that now most of the supplies would actually come from within your company.
      %p
        %img{src:'~/assets/images/strategy.organization.03.gif'}
      %p
        This solution has a problem, though. Should the Factory create any surplus, that is, production your stores
        cannot sell, you won't have a way of selling it to other players. You could simply make the Factory sell to
        other players' warehouses, but this would be like losing another opportunity to keep things in order. The
        solution is to build another warehouse, this time an Export Warehouse. All your factories would sell to this
        warehouse as well.
      %p
        %img{src:'~/assets/images/strategy.organization.04.gif'}
      %p
        At this point your company has achieved a very good degree of independence from the world, in the sense that
        only the Import and Export Warehouses have relationships with outside the company. From this point on it is
        extremely easy to add new factories or stores. Moreover, you can easily identify events like variations in
        the demand of the goods you produced just by inspecting the warehouses. If your warehouses are getting full,
        then demand for your production has dropped. Empty warehouses could mean it's time to raise the price of your
        products/goods, or that there is something wrong with your factories.
      %p
        The schemes shown above are only the beginning. As we said before, there are hundreds of ways to organize
        companies, and when alliances between players are involved, the number of schemes multiplies ten-fold.
</template>

<script lang='coffee'>
export default
  layout: 'documentation'
  category: 'strategy.organization'
</script>

<style lang='sass' scoped>
</style>
