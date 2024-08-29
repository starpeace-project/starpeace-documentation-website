<template lang='pug'>
.column.column-main-body
  .card
    header.card-header
      p.card-header-title.is-size-4 Building Financials

    .filters-container
      nav.navbar
        .navbar-menu
          .navbar-start
            .navbar-item.has-dropdown.is-hoverable
              a.navbar-link Category
              .navbar-dropdown
                a.navbar-item(@click.stop.prevent="toggle_filter_category('all')") All
                a.navbar-item(@click.stop.prevent="toggle_filter_category('none')") None
                hr.navbar-divider
                a.navbar-item(
                  v-for='category in sorted_industry_categories',
                  @click.stop.prevent="toggle_filter_category(category.id)",
                  :class="selected_industry_categories_by_id[category.id] ? 'is-active' : ''"
                ) {{category.label.english}}

            .navbar-item.has-dropdown.is-hoverable
              a.navbar-link Industry
              .navbar-dropdown
                a.navbar-item(@click.stop.prevent="toggle_filter_industry_type('all')") All
                a.navbar-item(@click.stop.prevent="toggle_filter_industry_type('none')") None
                hr.navbar-divider
                a.navbar-item(
                  v-for='industry_type in sorted_industry_types',
                  @click.stop.prevent="toggle_filter_industry_type(industry_type.id)",
                  :class="selected_industry_types_by_id[industry_type.id] ? 'is-active' : ''"
                ) {{industry_type.label.english}}

            .navbar-item.has-dropdown.is-hoverable
              a.navbar-link Seal
              .navbar-dropdown
                a.navbar-item(@click.stop.prevent="toggle_filter_seal('all')") All
                a.navbar-item(@click.stop.prevent="toggle_filter_seal('none')") None
                hr.navbar-divider
                a.navbar-item(
                  v-for='seal in sorted_company_seals',
                  @click.stop.prevent="toggle_filter_seal(seal.id)",
                  :class="selected_company_seals_by_id[seal.id] ? 'is-active' : ''"
                ) {{seal.nameShort}}

            .navbar-item.has-dropdown.is-hoverable
              a.navbar-link Level
              .navbar-dropdown
                a.navbar-item(@click.stop.prevent="toggle_filter_level('all')") All
                a.navbar-item(@click.stop.prevent="toggle_filter_level('none')") None
                hr.navbar-divider
                a.navbar-item(
                  v-for='level in sorted_levels',
                  @click.stop.prevent="toggle_filter_level(level.id)",
                  :class="selected_levels_by_id[level.id] ? 'is-active' : ''"
                ) {{level.label.english}}

    .card-content.main-card
      resource-type(
        :resource_types_by_id='resource_types_by_id',
        :resource_units_by_id='resource_units_by_id',
        :resource_price_cost_adjustment_by_id='resource_price_cost_adjustment_by_id',
        :resource_price_sale_adjustment_by_id='resource_price_sale_adjustment_by_id'
      )

      financial-industry(
        :building_definitions_by_id='building_definitions_by_id',
        :company_seals_by_id='company_seals_by_id',
        :levels_by_id='levels_by_id',
        :inventions_by_id='inventions_by_id',
        :industry_categories_by_id='industry_categories_by_id',
        :industry_types_by_id='industry_types_by_id',
        :resource_types_by_id='resource_types_by_id',
        :resource_units_by_id='resource_units_by_id',
        :selected_industry_categories_by_id='selected_industry_categories_by_id',
        :selected_industry_types_by_id='selected_industry_types_by_id',
        :selected_company_seals_by_id='selected_company_seals_by_id',
        :selected_levels_by_id='selected_levels_by_id',
        :max_levels_by_id='max_levels_by_id',
        :resource_price_cost_adjustment_by_id='resource_price_cost_adjustment_by_id',
        :resource_price_sale_adjustment_by_id='resource_price_sale_adjustment_by_id',
        :demand_by_id_type='demand_by_id_type',
        :building_simulation_definitions='building_simulation_definitions'
      )

</template>

<script>
import _ from 'lodash';
import {
  BuildingDefinition,
  CompanySeal,
  IndustryCategory,
  IndustryType,
  InventionDefinition,
  Level,
  ResourceType,
  ResourceUnit,
  SimulationDefinitionParser
} from '@starpeace/starpeace-assets-types';

import FinancialsIndustryComponent from '~/components/reference/building/financials-industry';
import ResourceTypeComponent from '~/components/reference/building/resource-type';

const demand_for_resource = (resource_type) => {
  if (resource_type == 'AUTOMOBILE') return 10;
  if (resource_type == 'FUNERAL_SERVICE') return 5;
  return 100;
};

export default {
  category: 'reference.building.financials',

  components: {
    'financial-industry': FinancialsIndustryComponent,
    'resource-type': ResourceTypeComponent
  },

  data () {
    const building_definitions = _.map(this.$config.public.BUILDING_DEFINITIONS, BuildingDefinition.fromJson);
    const building_simulation_definitions = _.map(this.$config.public.BUILDING_SIMULATION_DEFINITIONS, SimulationDefinitionParser.fromJson);
    const company_seals = _.map(this.$config.public.COMPANY_SEALS, CompanySeal.fromJson);
    const industry_categories = _.map(this.$config.public.INDUSTRY_CATEGORIES, IndustryCategory.fromJson);
    const industry_types = _.map(this.$config.public.INDUSTRY_TYPES, IndustryType.fromJson);
    const inventions = _.map(this.$config.public.INVENTIONS, InventionDefinition.fromJson);
    const levels = _.map(this.$config.public.LEVELS, Level.fromJson);
    const resource_types = _.map(this.$config.public.RESOURCE_TYPES, ResourceType.fromJson);
    const resource_units = _.map(this.$config.public.RESOURCE_UNITS, ResourceUnit.fromJson);

    return {
      building_definitions,
      building_simulation_definitions,
      company_seals,
      industry_categories,
      industry_types,
      inventions,
      levels,
      resource_types,
      resource_units,

      selected_industry_categories_by_id: _.fromPairs(_.map(industry_categories, (category) => [category.id, true])),
      selected_industry_types_by_id: _.fromPairs(_.map(industry_types, (type) => [type.id, true])),
      selected_company_seals_by_id: _.fromPairs(_.map(company_seals, (seal) => [seal.id, true])),
      selected_levels_by_id: _.fromPairs(_.map(levels, (level) => [level.id, true])),

      max_levels_by_id: _.fromPairs(_.map(building_simulation_definitions, (definition) => [definition.id, definition.maxLevel ?? 1])),
      demand_by_id_type:  _.fromPairs(_.compact(_.flatMap(building_simulation_definitions, (definition) => {
        if (definition.type != 'STORE') return null;
        return _.flatMap(definition.products, (product) => {
          return _.map(product.outputs, (output) => [`${definition.id}-${output.resourceId}`, demand_for_resource(output.resourceId)]);
        });
      }))),
      resource_price_cost_adjustment_by_id: _.fromPairs(_.map(resource_types, (type) => [type.id, (type.id == 'EXECUTIVE' || type.id == 'PROFESSIONAL' || type.id == 'WORKER' ? 100 : 200)])),
      resource_price_sale_adjustment_by_id: _.fromPairs(_.map(resource_types, (type) => [type.id, (type.id == 'EXECUTIVE' || type.id == 'PROFESSIONAL' || type.id == 'WORKER' ? 200 : 400)]))
    };
  },


  computed: {
    building_definitions_by_id () { return _.keyBy(this.building_definitions, 'id'); },
    company_seals_by_id () { return _.keyBy(this.company_seals, 'id'); },
    levels_by_id () { return _.keyBy(this.levels, 'id'); },
    inventions_by_id () { return _.keyBy(this.inventions, 'id'); },
    industry_categories_by_id () { return _.keyBy(this.industry_categories, 'id'); },
    industry_types_by_id () { return _.keyBy(this.industry_types, 'id'); },
    resource_types_by_id () { return _.keyBy(this.resource_types, 'id'); },
    resource_units_by_id () { return _.keyBy(this.resource_units, 'id'); },

    sorted_industry_categories () { return _.sortBy(this.industry_categories, (category) => category.label.english); },
    sorted_industry_types () { return _.sortBy(this.industry_types, (type) => type.label.english); },
    sorted_company_seals () { return _.sortBy(this.company_seals, (seal) => seal.nameShort); },
    sorted_levels () { return _.sortBy(this.levels, (seal) => seal.level); }
  },

  methods: {
    toggle_filter_category (category_id) {
      if (category_id == 'all' || category_id == 'none') {
        for (let key of Object.keys(this.selected_industry_categories_by_id)) {
          this.selected_industry_categories_by_id[key] = category_id == 'all';
        }
      }
      else {
        this.selected_industry_categories_by_id[category_id] = !this.selected_industry_categories_by_id[category_id];
      }
    },
    toggle_filter_industry_type (industry_type) {
      if (industry_type == 'all' || industry_type == 'none') {
        for (let key of Object.keys(this.selected_industry_types_by_id)) {
          this.selected_industry_types_by_id[key] = industry_type == 'all';
        }
      }
      else {
        this.selected_industry_types_by_id[industry_type] = !this.selected_industry_types_by_id[industry_type];
      }
    },
    toggle_filter_seal (seal_id) {
      if (seal_id == 'all' || seal_id == 'none') {
        for (let key of Object.keys(this.selected_company_seals_by_id)) {
          this.selected_company_seals_by_id[key] = seal_id == 'all';
        }
      }
      else {
        this.selected_company_seals_by_id[seal_id] = !this.selected_company_seals_by_id[seal_id];
      }
    },
    toggle_filter_level (level_id) {
      if (level_id == 'all' || level_id == 'none') {
        for (let key of Object.keys(this.selected_levels_by_id)) {
          this.selected_levels_by_id[key] = level_id == 'all';
        }
      }
      else {
        this.selected_levels_by_id[level_id] = !this.selected_levels_by_id[level_id];
      }
    }
  }
}
</script>

<style lang='sass' scoped>
$sp-primary: #6ea192
$sp-primary-bg: #395950

.filters-container
  border-bottom: 1px solid #ddd
  margin-bottom: 1rem
  margin-top: 2px
  padding: 0 1rem

  .navbar-dropdown
    background-color: #FFF

    > .navbar-item
      &:not(.is-active)
        border-left: 1px solid $sp-primary
        border-right: 1px solid $sp-primary

  .navbar-divider
    margin: .25rem 0

  .navbar-item
    &.is-active
      background-color: $sp-primary !important
      color: #FFF

    &:hover
      background-color: darken($sp-primary, 5%) !important

.main-card
  padding-top: 0
</style>
