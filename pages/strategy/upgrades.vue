<template lang='pug'>
.column.column-main-body
  .documentation-body
    h2 Facility Upgrades
    a#upgrades

  .documentation-body.is-starpeace
    p.
      Upgrading buildings is a key feature of the game. Given the standardized look and architecture of the
      buildings available to tycoons in the STARPEACE worlds, the IFEL has decided to carry urban planning
      one step further. When you build a new facility, it comes with plenty of empty space, in order to be
      able to increase its performance when needed.
    p.
      Whenever one of your facilities is performing to its maximum potential and there is still customer
      demand, a question will arise: should I upgrade or build a new facility? Almost all facilities in the
      game are upgradeable, and in the majority of the cases, it's better to upgrade than to construct.

  .documentation-body
    h3 Performance
    p.
      Upgrading a building doubles its performance. This is effectively the same as building a new facility
      next to the existing.

  .documentation-body
    h3 Cost and Taxes
    p.
      Upgrading is generally cheaper than constructing another facility. Upgrading also won't increase your
      land tax, which based on the number of squares your facilities occupy on the map.

  .documentation-body
    h3 Construction Force
    p.
      Upgrading a facility takes half the Construction Force as to build a new identical facility. Moreover,
      when you build a new facility, you have to engage a Construction Force, the cost of which can vary
      enormously depending on the supplier. Instead, upgrading entails the automatic engaging of the
      Construction Forces at the price set by Trade Centers. Construction time is halved, and the facility
      can continue to operate while the upgrade is being worked on.

    p.
      Notice that upgrading a building will multiply the needs of the facility too: a level 10 factory will
      employ 10 times the workforce and require 10 times the service hours.

  .documentation-body
    h3 Maximum Levels
    .content
      | Each facility type has a different maximum upgrade level:
      ul
        li Factories and other industrial buildings can be upgraded 100 levels
        li Stores and commercial buildings can be upgraded 20 levels
        li Residential and office properties can be upgraded 20 levels
        li Civics and city-services facilities can be upgraded 20 levels
        li Headquarters can be upgraded 5 levels

  .documentation-body
    h3 Commercial Buildings
    p.
      Each upgrade level of commercial buildings attracts more customers, increasing the desirability of
      that outlet. At the same time, each upgrade level also increases store costs, leading to increased waste
      with lower efficiencies.

  .documentation-body
    h3 Civics Facilities
    p.
      Upgrades to civic buildings like hospitals, fire stations and police stations increase both facility
      geographic map coverage as well as maximum volume of residents serviced.

  .documentation-body
    h3 Headquarters
    p.
      Headquarters can be upgraded too, if needed, up to 5 times. Note that HQ hire more people as your company
      grows. At a certain point, though, it will stop hiring, that is when you have to upgrade it. After the
      fifth time, the only solution is to build another one, but that will be needed only when your company
      is really big.

  .documentation-body
    h3 Micromanagement
    p.
      Upgrading existing facilities instead of new construction will ultimately save lot of time and effort
      in company micromanagement, as it's more work to manage 10 factories instead of one factory that's 10
      times bigger.

  .documentation-body
    h3 Limitations
    p.
      There are some cases in which building a new facility is more efficient than upgrading, including effective
      facility geographic coverage.
    p.
      Some facilities provide their services only up to a certain distance in squares. Instead of upgrading a
      facility, it could be more effective to build another one far from it. Another example effective example of
      location is with stores. People generally go to outlets closer to their house, unless the price or quality
      is significantly different. STARPEACE inhabitants are no different, if a particular type of commerce is
      missing from an area it could make better business sense to build a store there, rather than upgrading one
      further away.
</template>

<script>
export default {
  category: 'strategy.upgrades'
}
</script>
