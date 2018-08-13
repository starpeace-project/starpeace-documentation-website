<template lang='haml'>
  .column.column-main-body
    .documentation-body
      %h2 Politics
      %a#politics

    .documentation-body
      %h3 Becoming a Mayor
      %p
        Your prestige plays an important role in your bid for the mayor's seat. To even be eligible to run for mayor, you
        must have at least 200 Prestige Points.
      %p
        As soon as you accumulate 200 Prestige Points, you can announce your candidacy for mayor. The next thing you need
        to do is select the city where you would like to become mayor. Naturally, it's a good idea to select the town
        where much of your business is concentrated, because there's absolutely no point in being the mayor of a town
        that you've never even been to. If you have taken the earlier advice of building in a small town, you have done
        well; this is where it comes in handy to have an established base of players whose companies have many links to
        yours, even if some are competitors.
      %p
        Once you've decided on the town, locate its Town Hall by clicking on Go Town Hall button on the navigation bar.
        The map will automatically center on the Town Hall. Select it and click on Inspect and then click on Visit the
        politics page. You will be taken to a screen where you will be able to see the current mayor and the other
        candidates, if any. If you feel that you have a good chance at being elected, submit your candidacy and you will
        be added to the list. To submit your candidacy, you have to fill out a page of promises, where you undertake to
        improve different things in the city, like fire and police stations, health services, etc. In each case, you
        supply a target percentage, 100% being perfect, for each of the areas of public concern that you will be in
        charge of once you become mayor. The election's results will, in part, depend on your promises.
      %p
        After your campaign has been launched, it's time to look for votes. Every Investor that has business in the Town
        can cast a vote in the Votes page of the Inspect Panel for the Town Hall. To be eligible they have to have had at
        least one facility paying Income tax, not Land tax, in the year before they cast the vote in. That means one
        facility that actually turned a profit.
      %p
        The winner is the candidate with the most points at the end of the previous term. The points are calculated with
        a simple formula: the rating of the campaign plus 5 points for each vote. The rating of the campaign is
        calculated by adding the number of Prestige points of the candidate divided by 20, for a maximum of 50 points,
        plus the average of % he or she promised in his campaign divided by two. As you can see, there's no need to
        accumulate Prestige over 1000, because you will always get 50 points.

    .documentation-body
      %h3 Being the Mayor
      %p
        Once you win the election, you must keep the town you're running organized. Remember the promises you made before
        the election? Now you're going to have to keep those promises, or at least try your best if you want a chance at
        another term.
      %p
        You will notice that the Mayor option on the build page is now accessible. With this option, you will have the
        power to zone the town. As explained in the zoning section, only the mayor can decide what goes where.
      %p
        When you're just a normal investor, you can't destroy a road unless you built it. As a mayor, you have the
        privilege to destroy any road and of course, build more. You can also go to the town hall, and change taxes,
        as well as set the minimum wage for this particular town. Finally, a mayor can only build residential buildings
        and public facilities, the rest will be taken care of with your normal character or account. The rest is up to
        you to decide, establish good relations with the rest of the people in the game, keep your word, and you'll be
        sure to win again when the next election comes around!

    .documentation-body
      %h3 Becoming President
      %p
        The election for President works pretty much in the same way as the one for Mayor, except you need 1000 Prestige
        to run for it. Every player with an Investor Visa has a vote, no matter if they have facilities actually
        profiting. The President has to appoint Ministers has part of his or her campaign. He or she can appoint any
        Investor in the world with at least 100 Prestige Points. He or she cannot appoint the same person in two
        ministries or himself as a Minister. He or she can appoint a Mayor though.

    .documentation-body
      %h3 Being the President
      %p
        The President has a controlling power. As the President, your job is supervising the Mayors. You can zone all
        over the world, to fix problems created by a crazy or simply not very dedicated Mayor. You can appoint a Mayor
        to a city that has none, and he or she can transfer money to Mayors to help them. Your relationship with the
        Ministers is very close. You decide a budget for them, every year you assign a sum of the money in the
        Presidential account to every Minister, that can use it to build facilities relate to their Ministry. At any
        time you can shuffle the Cabinet, firing or appointing Ministers without having to explain.
      %p
        Remember though, you are a President no a Dictator. Before starting planet-altering measures or rezoning, you
        should consult with the players of the planet, or you risk an all out war against you.

    .documentation-body
      %h3 Becoming Minister
      %p
        The only way to become a Minister is to be appointed by the President. When a candidate launches a Presidential
        campaign he or she has to provide the names of their Ministers, if he or she is elected. If a Minister resigns
        while the President is still in power, he or she can appoint someone to replace them. So, if you want to become
        Minister, you should lobby with the President or a strong potential presidential candidate.

    .documentation-body
      %h3 Being a Minister
      %p
        Depending on what Minister Office you are appointed to, you have different zoning powers. For example, the
        Minister of Housing will be able to only zone using the three shades of green. However, as a Minister you will
        always be able to unzone an area.
      %p
        Every Minister is assigned a yearly budget by the President. The Ministers and the President share from the same
        pool of funds, so any money left over at the end of the year is just put back in the President’s account and the
        Minister will receive it in the next year’s budget. Minister's Companies can only build facilities that are
        related to their Ministry.
      %p
        Ministers should work with the President to ensure that any of the Planet’s needs, not fulfilled by players, are
        taken care of. Please note: Ministers are not supposed to steal business from other players.
</template>

<script lang='coffee'>
export default
  layout: 'documentation'
  category: 'tutorial.politics'
</script>

<style lang='sass' scoped>
</style>
