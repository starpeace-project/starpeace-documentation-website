<template lang='pug'>
.column.column-main-body
  .documentation-body
    h2 Company Creation
    a#creation

  .documentation-body.is-starpeace
    p.
      For purpose of the tutorial you will need to create a company using the Mariko Seal. The rationale behind this is
      to build markets and with Mariko you can build markets from the start, without researching a specific technology
      for it. PGI will also let you build markets, but they are more expensive than Mariko. The reason for building a
      market instead of a small store is that markets sell four products from one location; this will provide you with
      four opportunities to make a profit.

  .documentation-body
    h3 Creating a new Company
    p.
      Follow the steps below to create a company using the Mariko seal.
    .content
      ol
        li Click on the Profile button and on the Curriculum button.
    p.
      This will load the Curriculum page, giving you detailed information about your game character: your current level,
      rankings, total money and Prestige. This page will also allow you to upgrade to the next level when you're ready
      and provides you a good overview of your company. It also displays menu buttons on the right of the screen to
      access more information about your company.
    .content
      ol(start=2)
        li When you are done reviewing the Curriculum page click on the Companies button.
    p.
      The Companies page lists all the companies you have created so far and lets you create a new one.
    .content
      ol(start=3)
        li When the company screen loads click the Create new button.
    p.
      This will take you to the page from where you can create a new company. It will list all the Seals and when you
      select one of the seals it will display information about the selected Seal.
    .content
      ol(start=4)
        li Select the Mariko seal.
        li Type in your company name.
    p.
      If you use a common word throughout all of your companies' names it will make it easier for other players to find
      your companies. Some examples are ABC Mariko, ABC Heavy Industry and ABC Profit Central. By having ABC common to
      all the company names someone could do a wildcard search for ABC* and find all of your companies. That is just
      something to keep in mind when you come up with a naming style for your companies.
    .content
      ol(start=6)
        li Click the Ok button at the bottom of the screen.
    p.
      This will bring you back to the main map screen, and you will be controlling your new Mariko Company. Now you are
      ready to build your first building.
</template>

<script>
export default {
  category: 'tutorial.creation'
}
</script>
