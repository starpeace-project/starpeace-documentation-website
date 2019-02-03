<template lang='pug'>
  .column.column-main-body
    .documentation-body
      h2 Licensing and Research
      a#research

    .documentation-body
      h3 IFEL and Seals
      p.
        You may not be familiar with the story behind STARPEACE. This is not important now. For the time being,
        you only need to know that there is a very powerful organization called IFEL (International Foundation
        for the Extraterrestrial Life). The IFEL controls the economy of the human colonies, which are the
        worlds where you will invest your money.
      p.
        When you build a factory your company doesn't invent it from scratch. It actually gets a blueprint from
        someone else, usually a huge corporation from Earth that has gotten a permit from the IFEL to sell their
        blueprints. These permits are called Seals.
      p.
        There are four main Seal holders: PGI, Mariko, Moab and Dissidents. You can think of them as competing
        factions, just like the different races found in other strategy games. Each Seal holder has its advantages
        and drawbacks.
      p.
        When you create a new company, you choose the Seal holder that will supply the technology. You can have
        several companies, each using a different Seal, but you cannot make a single company use multiple Seals.

    .documentation-body
      h3 Researching
      p.
        Although the Seal holder you associate with already has a blueprint for practically everything, your
        company doesn't know how to deal with this technology until you learn it.
      p.
        Let's say you discover there is a demand for chemicals, and you want to build a chemical plant. Since the
        employees from your company need to know how to operate it, your company needs to research that topic.
      p.
        Research takes place in the Company Headquarters, which are buildings specialized in controlling your
        companies. There, you will request that your employees research what you want to know, in this case:
        i how to build a Chemical Plant
      p.
        Your employees will take some time and use resources to complete the research. If you have enough employees
        and they are well paid, this process should go smoothly. Once they have finished, you actually get the
        option that allows you to build the chemical plant.
      p.
        Some researches have that function; they will enable you to build a new building. Other researches will
        make these buildings work better.
      p.
        The technology tree in STARPEACE has more than 600 different topics you can research. And this list keeps
        growing every day. You will soon discover that the wise use of your research will be the key to your
        success in the game.
      p.
        The first thing you should know is that having all the researches for a company is a bad idea. That means
        you cannot blindly incorporate every technology available to your company as you get the money. Why?
      p
        |Some technologies cancel-out other technologies. For instance, if you research
        i Anti-radiation paint
        .
          for your real estate, it will increase the resistance your buildings' resistance to pollution, but it will
          decrease their esthetic appeal. Then, if you research something to boost beauty, you'll need to select
          something that won't make the buildings susceptible to pollution, otherwise you'll end up back to square
          one, except for the fact that the research money is gone.
      p.
        This principle will lead your companies toward specialization, which is a good thing. For instance, it's
        important you decide the social class you want to target your products to. If you plan to sell or produce
        for low class customers, than you have to realize that they cannot afford a high price, so it's up to you
        to research production that is efficient and cheap, even if that means losing quality. It's common for more
        developed investors to have two different companies producing the same thing. However, each company is
        targeting a different market: one for rich customers, therefore the product is high quality and expensive
        and for the working class, low quality but cheap. It's also important to note that once you research a
        technology item, all the buildings in your company that can reap the benefits of it, will.
      p.
        Researches can be sold back to the Seal holder. In this event you will get all the money back.

    .documentation-body
      h3 Licenses
      p.
        You need a license from the IFEL in order to do business in some areas of the economy. For instance, each
        industry type must be licensed. Commerce and real estate, on the other hand, do not require a license.
      p.
        Licenses are necessary in order to protect the small fish from the big fish, and to ultimately foster trade
        amongst players. Licenses are always granted, provided you can pay the price.
      p.
        The price of a new license is dependent on the number of licenses you already own, with the price growing
        exponentially. Your first license will be free, the second one will cost 2 million, the third one 4 million,
        the fourth one 8 million and so on. At this rate, your 14th license would cost you 16 billion.
      p.
        Licenses are automatically purchased when your research enables you to build a building that requires a
        license. In that case the license cost will appear beside the research cost.
      p.
        As with researches, licenses can be returned for a full refund.
</template>

<script lang='coffee'>
export default
  layout: 'documentation'
  category: 'strategy.research'
</script>

<style lang='sass' scoped>
</style>
