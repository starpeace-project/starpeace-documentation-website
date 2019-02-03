<template lang='pug'>
  .column.column-main-body
    .documentation-body
      h2 Economy
      a#economy

    .documentation-body.is-starpeace
      p.
        The economy in STARPEACE is extremely realistic, just like in real life, everything is connected.
        Every action you perform will start a series of reactions, and often the ultimate consequences are hard
        to predict.
      p.
        People inhabit houses in cites. A fraction of them will have jobs. Workers get paid for the work they do,
        producing finished goods as well as extracting raw materials that are used to produce other goods and
        materials. These workers will use the money they earn to buy goods at stores and supermarkets.
      p.
        As simple as it appears, this cycle is very delicate. It is up to investors like you to make it work. The
        economy has to be carefully balanced and expanded otherwise the world might suffer adverse consequences.

    .documentation-body
      h3 Population
      p.
        Population is the key to understanding the economy. There are three social classes in STARPEACE: high,
        middle and low. The table below contains some notes for each class:

      table.table
        tr
          th Topic
          th High Class
          th Middle Class
          th Low Class
        tr
          td IFEL stipulated salary
          td $50/h
          td $20/h
          td $5/h
        tr
          td Unemployment
          td Won't move to the city without a job offer.
          td Will move to prosperous and secure cities even without a job offer.
          td Will move to the city without a job offer, unless life is too expensive and unemployment high.
        tr
          td High demand goods
          td Cars, Restaurants, Fresh Food, High-quality clothing, Household Appliances.
          td Household appliances, Movies, Food, Clothing, Pharmaceutics.
          td Processed Food, Bars, Clothing.
        tr
          td Pricing and quality of goods
          td Tend to ignore price if quality is high.
          td They try to find the best quality/price ratio.
          td Will choose lower prices. Quality is not a concern.
        tr
          td Real Estate
          td.
            Prefer beauty and privacy of the area, as well as maintenance and low crime levels.
          td.
            Prefer vicinity of commerce, although low class individuals found in commercial zones disturb them.
            Demand low crime and pollution levels, and usually look for low rent prices and nice maintenance
            levels.
          td.
            Will prefer best price, as long as the pollution and crime are not too high. Other factors
            like the beauty of the area and the proximity of commerce are welcome as well.
        tr
          td Jobs
          td(colspan=3)
            All classes behave in the same way: they will pick the jobs with the higher salaries, though could
            choose to earn less to work for a highly prestigious company. Residents can work anywhere in town:
            distance between workplace and residence has little weight in employment decision.
        tr
          td Crime
          td They almost don't generate crime.
          td They generate low levels of crime.
          td They generate crime if the social conditions are not favorable.

    .documentation-body
      h3 Quality and efficiency
      p.
        In STARPEACE just like in real life-goods can have different quality levels. This is expressed in the game
        as a percentage. This means a 3% quality car can barely move, and a 100% car is the best car available,
        given the technology present in that world.
      p.
        Efficiency is also expressed as a percentage. It is a measure of how much of the required raw materials are
        employed in the production process. For instance, 200% efficiency means the factory is actually only using
        half of the raw materials it normally would use to create the same product.

    .documentation-body
      h3 Factories
      p.
        Factories have supplies and they create production. They also need workers. Some factories process raw
        materials for other factories; others produce the goods that are sold in stores. Owning factories is simple
        enough, but to make them profitable is a little more complicated: you have to secure clients for your products.

    .documentation-body
      h3 Commerce
      p.
        Commerce facilities sell what factories produce. A store can offer several types of goods, as well as a
        particular service. A food store requires the same supplies as a restaurant does, but they provide completely
        different services.</p>
      p.
        Commerce is a great area for newbies due to the low cost of the buildings, but it can get tricky. Commerce is
        very sensitive to location, as well as the price and quality of the goods being sold. Since you need to lure
        customers, you have to be aware of what the population you are targeting likes and how much they are willing
        to pay for it.

    .documentation-body
      h3 Warehouses
      p.
        Warehouses store goods and raw materials. They are critical, in order to manage through the winter months,
        when farms cannot produce. Several industries rely on what is stored in them.
      p.
        Warehouses also play a key role in organizing your company. This topic is introduced later in the manual.

    .documentation-body
      h3 Civic buildings
      p.
        These are facilities that do not generate a profit, but they do provide very important services to the
        population: hospitals, schools, police and fire stations fall under this group. They are usually run by
        Mayors or Ministers, or by players with a political interest.

    .documentation-body
      h3 Real Estate
      p.
        Real Estate buildings are where people live. Investors like you build them, and then people move into them
        and will pay rent. This is another great area for newbies. Just like in commerce, you will be dealing directly
        with the population, so you will need to be familiar with what they want and the way they behave.
      p.
        You can also build offices. When the population has enough money, they may want to start their own independent
        businesses, like divorce lawyers, dentists etc. These small businesses will rent office space from you.
</template>

<script lang='coffee'>
export default
  layout: 'documentation'
  category: 'strategy.economy'
</script>

<style lang='sass' scoped>
</style>
