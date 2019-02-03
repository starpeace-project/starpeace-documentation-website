<template lang='pug'>
  .column.column-main-body
    .documentation-body
      h2 Warehouses
      a#warehouse

    .documentation-body.is-starpeace
      p.
        Effective logistical control is critical to the success of any company. If you think about your company as a
        whole, it's essentially based on selling products to a customer. The customer can be consumers, your factories,
        your stores, and other tycoon's factories and stores. So it's important to know, at a glance, if you have enough
        products in stock to sell to your customers. This is where warehouses come in; they provide you with a simple way
        to check your supply status. Basically it's as simple as this: if your warehouse is filling up or staying full
        you have enough supplies. If your warehouse is empty or running short then you need more supplies. Before you
        build a warehouse, your company should be making a profit, have at least one factory, and have about $60,000,000.
        If you meet those criteria you can continue with this section and build a warehouse.

    .documentation-body
      h3 Operating Modes
      p.
        In your factories you have noticed the options to sell only sell to yourself, allies, and everyone. Warehouses
        have those options plus they come in two types with two different modes of operation: import, and export
        warehouse.
      p.
        b Import Warehouse:&nbsp;
        You build an import warehouse when you need supplies from other players. Another way to think of import warehouse
        is to think of it as supply warehouse. You are buying supplies from other players. You can connect an import
        warehouse to an export warehouse. An import warehouse is red in color.
      p.
        b Export Warehouse:&nbsp;
        An export warehouse can be used to sell your extra products to other players. You can connect the export
        warehouse to an import warehouse. An export warehouse is red in color.

    .documentation-body
      h3 Building a Warehouse
      p.
        A warehouse is a large industrial building so it will need to be near your factories. An important point to
        consider is that you don't need a license to build warehouses. They are always available in your Build menu.
      .content
        ol
          li Click the Build button on the navigation bar.
          li Click the Industry button.
          li Click on the Import Warehouse text link.
      p.
        You will build an import warehouse to sell the products made by your appliance factory to your store.
      .content
        ol(start=4)
          li Click the Build Now button.
          li Move the mouse over the map until the warehouse turns green then click on the button.
          li Click on the warehouse so that it is selected.
          li Click the Home button on the Build page.
          li Click the Build button to close the build page.

    .documentation-body
      h3 Inspecting your Warehouse
      p.
        When your warehouse has finished building use this section to guide you through setting up your warehouse.
      .content
        ol
          li Right click on the warehouse.
          li Click on the General tab in the Inspection panel.
      p.
        This is where you set the operating and sales mode and select which product your warehouse will sell. There are
        some buttons to connect or remove the warehouse from all of your stores and factories.
      .content
        ol(start=3)
          li Check the Household Appliances box.
          li Click Sell to all Stores.
      p.
        This will connect all of your stores to the warehouse and they will now start buying appliances from the
        warehouse instead of the factory.
      .content
        ol(start=5)
          li Click on the Connect button.
          li Move the target cursor to one of your factories and click.
      p.
        This will connect your factory to the warehouse and it will now sell its products to the warehouse.
      .content
        ol(start=7)
          li
            | You can press the
            span.tag.is-light esc
            | key to cancel the connect operation.
          li Click on the Supplies Tab.
      p.
        This also is where you hire suppliers for your warehouse. You click on the Hire button and it takes you to the
        search screen. You can select from warehouses and factories on the search screen. It's a good idea to have other
        suppliers lined up, even if you have your producing your own products, just in case your factory stop producing
        for any reason. To avoid buying at too high price, set the max price on the left of the panel.
      .content
        ol(start=9)
          li Click on the Clients tab.
      p.
        This is where you set the price for products you are selling in your warehouse. Pricing in a warehouse is, like
        everything else, affected by who is buying what. As a general guide, if you are producing and selling the product
        to yourself go for a 5 to 10% mark up over your factory price, if you are selling it to everyone try to get a 10
        to 20% mark up.
      p.
        This is where you can also add clients to your list. When you click on the Offer button it will take you to the
        search page. You can choose to sell to stores, warehouses, and factories.
      .content
        ol(start=10)
          li Click on the Inspect button to close the Inspection window.
          li Look at the green ticker.
      p.
        This will scroll by and show you the quantity of each item in the warehouse. You can stop the scrolling by
        clicking inside the ticker bar; you can then drag the information by holding your left mouse button down and
        moving your mouse prompt inside the ticker bar. In this manner you can drag the information to any spot you wish
        to read.
      .content
        ol(start=13)
          li Click on the green ticker to stop the scrolling.
          li Drag the green ticker so the Appliance information is displayed.
      p.
        This is a quick way for you to see if your warehouse is filling or emptying. Look at the number of appliances
        stored in your warehouse; it will change in a couple of seconds. If the number goes up your warehouse is filling.
        This means that you have enough production capacity to match your current demand. You could also try and offer
        your products to more clients. If the number goes down then your warehouse is emptying, meaning you don't have
        enough production capacity to match your current demand. You should check your factory and verify that it's at
        100% production: if that's the case and your warehouse is still emptying you can think about building another
        factory to meet demand.

    .documentation-body
      h3 Summary of Warehouses
      p.
        That covers all the basics you need to know to build a warehouse. They help manage your company's logistics. When
        someone builds a factory or a store they automatically connect to warehouses so you need to make sure that you
        set your purchase and sell prices, otherwise your warehouse will end up costing you a lot of money. Some general
        tips for warehouses are listed below.
      .content
        ol
          li You do not need a license to build warehouses.
          li Warehouses need to be built on industrial yellow zoned land, if the land has been zoned.
          li Check the green ticker to see if your warehouse is filling or emptying.
          li Build your warehouses out by your factories, this will make them easier to find.
</template>

<script lang='coffee'>
export default
  layout: 'documentation'
  category: 'tutorial.warehouse'
</script>

<style lang='sass' scoped>
</style>
