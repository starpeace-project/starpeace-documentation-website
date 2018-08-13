<template lang='haml'>
  .column.column-main-body
    .documentation-body
      %h2 Unorthodox Buildings
      %a#unorthodox

    .documentation-body
      %h3 What do you mean by unorthodox buildings?
      %p
        There are some buildings in STARPEACE that have a unique way of 'behaving', a way that sets them apart from
        the other buildings belonging to the same category. The main reason for this is to provide a more realistic
        representation of the kind of function they satisfy. These buildings are: lumber mills, TV stations and
        antennas, movie studios and movie theaters, banks, mausoleums and magna research centers.

    .documentation-body
      %h3 How does a Lumber Mill work?
      %p
        Lumber mills are essentially farms producing woods. They have two separate cycles of production. In the first
        cycle, lasting from 6 to 7 months they grow the trees. In this period, they don't produce any lumber and you
        will see the trees slowly grow in facilities' image. The second period is when the trees are cut, lasting from
        six to seven months as well and this is when the facility actually produces lumber. When all the trees have
        been cut, it starts another growing cycle again. The facility is not affected by the seasons, so it will
        continue growing or cutting trees in the winter too. It's possible to upgrade it, but the only impact of that
        will be to shorten the second cycle, the one in which the trees are cut. Once the facility is built, it will
        start the first cycle right away, so to consistently produce lumber, the best solution is to build at least
        two of them, on alternate cycles and use a warehouse.

    .documentation-body
      %h3 How do TV Stations and Antennas work?
      %p
        The TV station makes money selling ads. The number of ads to be sold depends on the audience; that's where
        antennas come into play. Antennas 'collect' viewers depending on the city they're positioned in and on the
        parameters set by the stations. The more hours on air, the more viewers, however the higher the ad rate is,
        the fewer viewers there will be. Every station can have a maximum of 1 Antenna per town. The competition
        between different stations in the same town can be quite intense that's why it's important to use researches
        wisely.

    .documentation-body
      %h3 How do Movie Studios and Movie Theaters work?
      %p
        The movie business is a very expensive business, but it can be very rewarding if done properly. Movie studios
        produce films according to two parameters: budget and shoot time (how long it takes to film). The owner
        establishes the parameters and after the shoot the studio produces a movie with a certain grade of quality.
        This quality depends also on the availability of supplies and workers over the course of the entire production.
        After the movie is ready, the studio will license it to movie theaters. Movie theaters have a number of
        projection rooms, depending on the upgrades (levels). Every level is equivalent to one room, and every room can
        show one movie. In your supplies panel the number of studios (trade centers) you can only buy from is equal to
        the number of rooms in your theater (if your theatre has 10 rooms you will only buy from the first 10 suppliers).
        The viewing time of the movie depends on its quality. As more people see it and time passes, its quality
        decreases. After two years or when its quality is under 5%, whichever is longer, the movie cannot be licensed
        anymore. While the studio is licensing a movie, it can produce another one, so that when the first one's run is
        over, a new movie will be ready for theaters. The title of the movie can be specified by the owner of the studio
        or left blank. If no title is assigned, the server will randomly generate a title from an internal database.
        Setting the studio to automatically produce and license movies allows the owner to generate steady revenues
        without having to manually launch the movie production each time. Of course, in this case, the settings will
        always be the same and the title of subsequent movies will always be random.

    .documentation-body
      %h3 How do player's banks work?
      %p
        Banks only make money by lending it to other players. The owner sets the interest rate and number of annual
        payments necessary, then just waits for the cash to come back. Anybody can borrow money from banks, but
        banks will check the status of your business before making a loan to you. The maximum amount you can get depends
        on how much money you are generating per hour. One plus is that Banks don't care if you have outstanding loans
        from other banks, so you can accumulate various loans from different banks. Be careful though, payments (and
        especially interest!) can quickly become overwhelming.

    .documentation-body
      %h3 What are Mausoleums?
      %p
        Mausoleums are the legacy of transcended tycoons. Once you transcend, the only building left on the planet is the
        mausoleum, a place where you can inscribe your words of wisdom. The transcendence takes place exactly one year
        after you started construction on the mausoleum, or when it's completed, whichever takes longer. Mausoleums cannot
        be zoned out by mayors, the president or minister. Mausoleums will always remain on the planet, as a celebration of
        your excellence.

    .documentation-body
      %h3 How do magna research centers work?
      %p
        Magna research centers are the equivalent of a HQ for a magna company, with only one exception. However, you don't
        need to build it in order to start building magna facilities. You may want to build it when you want to start
        developing research or buy services for your magna buildings.

    .documentation-body
      %h3 This is it for 'unusual' buildings, or will new ones be introduced in the future?
      %p
        The STARPEACE universe is in constant evolution, so always expect new features. The development team will certainly
        come up with new unique facilities, try to improve realism or put a twist on something that already exists. An
        example of this is movie theaters, they used to be just like any other commercial building, but with the
        introduction of movie studios, the showing room system has been added.
</template>

<script lang='coffee'>
export default
  layout: 'documentation'
  category: 'faq.unorthodox'
</script>

<style lang='sass' scoped>
</style>
