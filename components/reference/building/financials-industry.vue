<template lang='pug'>
.industry-section
  table.table.is-fullwidth.is-bordered.is-striped.is-hoverable.financials-table
    thead
      tr.labels-row
        th(colspan=6)
        th.has-text-right
          span.tooltip(data-tooltip='Capital Expenditure') CapEx
          |
          | / Construction
        th.has-text-right(colspan=4)
          span.tooltip(data-tooltip='Operational Expenditure') OpEx
          |
          | / Hourly
        th.has-text-right(colspan=2) Revenue / Hourly
        th.has-text-right(colspan=2) Monthly

      tr.labels-row
        th.sortable(v-for='header,index in columns()', v-on:click.prevent='toggle_sort_column(index)', :class="header.align ? 'has-text-' + header.align : ''", :colspan="header.span ? header.span : 1")
          .sort-icon(v-show='sorted_index == index')
            font-awesome-icon(:icon="['fas', 'angle-down']", v-show='sorted_direction == -1')
            font-awesome-icon(:icon="['fas', 'angle-up']", v-show='sorted_direction == 1')
          template(v-if="header.label == 'research'")
            font-awesome-icon(:icon="['fas', 'flask']")
          template(v-else-if='true')
            | {{header.label}}

    tbody
      template(v-for='financial in sorted_simulation_financials')
        tr.buiding-row(v-on:click.prevent='toggle_row(financial.id)', :class="selected_by_id[financial.id] ? 'is-selected' : ''")
          td {{industry_categories_by_id[building_definitions_by_id[financial.id].industryCategoryId].label.english}}
          td {{industry_types_by_id[building_definitions_by_id[financial.id].industryTypeId].label.english}}
          td {{company_seals_by_id[building_definitions_by_id[financial.id].sealId].nameShort}}
          td {{level_for_id(financial.id).label.english}}
          td.has-text-centered
            template(v-if="has_inventions(financial.id)")
              span.tooltip(:data-tooltip='inventions_label(financial.id)')
                font-awesome-icon(:icon="['fas', 'check']")
          td {{building_definitions_by_id[financial.id].name.english}}

          td.has-text-right ${{format_money(financial.capex)}}
          td.has-text-right ${{format_money(financial.opex_operations)}}
          td.has-text-right ${{format_money(financial.opex_labor)}}
          td.has-text-right ${{format_money(financial.opex_supplies)}}
          td.has-text-right ${{format_money(financial.opex)}}
          td.has-text-right ${{format_money(financial.income)}}
          td.has-text-right ${{format_money(financial.profit)}}
          td.has-text-right ${{format_money(financial.profit_month)}}
          td.has-text-right {{financial.profit <= 0 || financial.roi_month == Number.MAX_VALUE ? 'never' : financial.roi_month}}

        template(v-if="selected_by_id[financial.id] ? true : false")
          tr
            td.is-paddingless(colspan=15)
              .columns.is-paddingless.is-marginless

                .column.is-narrow(v-if="building_simulation_definitions_by_id[financial.id].constructionInputs.length")
                  .card.construction-card
                    header.card-header
                      p.card-header-title Construction Expenses
                      p.card-header-icon initial
                    table.table.is-fullwidth.is-borderless.construction-table
                      tbody
                        tr(v-for="input in building_simulation_definitions_by_id[financial.id].constructionInputs")
                          td {{resource_types_by_id[input.resourceId].labelPlural.english}}
                          td {{Math.ceil(input.quantity)}} {{resource_units_by_id[resource_types_by_id[input.resourceId].unitId].labelPlural.english}}
                          td.has-text-right ${{format_money(input.quantity * cost_price_of(input.resourceId))}}

                  .card.construction-card(v-if="building_simulation_definitions_by_id[financial.id].maxLevel > 1")
                    header.card-header
                      p.card-header-title Construction Expenses
                      p.card-header-icon upgrades
                    table.table.is-fullwidth.is-borderless.construction-table
                      tbody
                        tr
                          td(colspan=2)
                            input.slider.is-fullwidth.is-marginless(type='range', step='1', min='1', :max="building_simulation_definitions_by_id[financial.id].maxLevel", v-model='max_levels_by_id[financial.id]')
                          td
                            input.is-fullwidth(type='number', step='1', min='1', :max="building_simulation_definitions_by_id[financial.id].maxLevel", v-model='max_levels_by_id[financial.id]')
                        tr(v-for="input in building_simulation_definitions_by_id[financial.id].constructionInputs")
                          td {{resource_types_by_id[input.resourceId].labelPlural.english}}
                          td {{Math.ceil(quantity_for_upgrade(financial.id, input.resourceId, input.quantity))}} {{resource_units_by_id[resource_types_by_id[input.resourceId].unitId].labelPlural.english}}
                          td.has-text-right ${{format_money(quantity_for_upgrade(financial.id, input.resourceId, input.quantity) * cost_price_of(input.resourceId))}}


                template(v-if="building_simulation_definitions_by_id[financial.id].type == 'FACTORY'")
                  .column
                    .card(v-for='stage in building_simulation_definitions_by_id[financial.id].stages')
                      header.card-header
                        p.card-header-title Stage {{stage.index}}
                        p.card-header-icon
                          template(v-if='stage.duration == 1')
                            | 1 hour
                          template(v-else)
                            | {{stage.duration}} hours
                            template(v-if='stage.duration > 672')
                              |
                              | ({{stage.duration / 672}} months)
                            template(v-else-if='stage.duration == 672')
                              |
                              | (1 month)
                            template(v-else-if='stage.duration > 168')
                              |
                              | ({{stage.duration / 168}} weeks)
                            template(v-else-if='stage.duration == 168')
                              |
                              | (1 week)
                            template(v-else-if='stage.duration > 24')
                              |
                              | ({{stage.duration / 24}} days)
                            template(v-else-if='stage.duration == 24')
                              |
                              | (1 day)

                      .card-content.columns.is-paddingless.is-marginless
                        .column
                          .card
                            header.card-header
                              p.card-header-title Operations Expenses
                              p.card-header-icon per hour
                            template(v-if='!stage.operations.length')
                              .card-content.is-paddingless
                                .content.none-container none
                            template(v-else)
                              table.table.is-fullwidth.is-borderless
                                tbody
                                  tr(v-for="input in stage.operations")
                                    td {{resource_types_by_id[input.resourceId].labelPlural.english}}
                                    td {{format_quantity(input.maxVelocity)}} {{resource_units_by_id[resource_types_by_id[input.resourceId].unitId].labelPlural.english}}
                                    td.has-text-right ${{format_money(input.maxVelocity * cost_price_of(input.resourceId))}}

                        .column
                          .card
                            header.card-header
                              p.card-header-title Labor Expenses
                              p.card-header-icon per hour
                            template(v-if='!stage.labor.length')
                              .card-content.is-paddingless
                                .content.none-container none
                            template(v-else)
                              table.table.is-fullwidth.is-borderless
                                tbody
                                  tr(v-for="input in stage.labor")
                                    td {{resource_types_by_id[input.resourceId].labelPlural.english}}
                                    td {{format_quantity(input.maxVelocity)}} {{resource_units_by_id[resource_types_by_id[input.resourceId].unitId].labelPlural.english}}
                                    td.has-text-right ${{format_money(input.maxVelocity * cost_price_of(input.resourceId))}}

                        .column
                          .card
                            header.card-header
                              p.card-header-title Production Expenses
                              p.card-header-icon per hour
                            template(v-if='!stage.inputs.length')
                              .card-content.is-paddingless
                                .content.none-container none
                            template(v-else)
                              table.table.is-fullwidth.is-borderless
                                tbody
                                  tr(v-for="input in stage.inputs")
                                    td {{resource_types_by_id[input.resourceId].labelPlural.english}}
                                    td {{format_quantity(input.maxVelocity)}} {{resource_units_by_id[resource_types_by_id[input.resourceId].unitId].labelPlural.english}}
                                    td.has-text-right ${{format_money(input.maxVelocity * cost_price_of(input.resourceId))}}

                        .column
                          .card
                            header.card-header
                              p.card-header-title Production Revenue
                              p.card-header-icon per hour
                            template(v-if='!stage.outputs.length')
                              .card-content.is-paddingless
                                .content.none-container none
                            template(v-else)
                              table.table.is-fullwidth.is-borderless
                                tbody
                                  tr(v-for="input in stage.outputs")
                                    td {{resource_types_by_id[input.resourceId].labelPlural.english}}
                                    td {{format_quantity(input.maxVelocity)}} {{resource_units_by_id[resource_types_by_id[input.resourceId].unitId].labelPlural.english}}
                                    td.has-text-right ${{format_money(input.maxVelocity * sale_price_of(input.resourceId))}}

                template(v-if="building_simulation_definitions_by_id[financial.id].type == 'STORAGE'")
                  .column.is-narrow
                    .card
                      header.card-header
                        p.card-header-title Operations Expenses
                        p.card-header-icon per hour
                      template(v-if='!building_simulation_definitions_by_id[financial.id].operations || !building_simulation_definitions_by_id[financial.id].operations.length')
                        .card-content.is-paddingless
                          .content.none-container none
                      template(v-else)
                        table.table.is-fullwidth.is-borderless
                          tbody
                            tr(v-for="input in building_simulation_definitions_by_id[financial.id].operations")
                              td {{resource_types_by_id[input.resourceId].labelPlural.english}}
                              td {{format_quantity(input.maxVelocity)}} {{resource_units_by_id[resource_types_by_id[input.resourceId].unitId].labelPlural.english}}
                              td.has-text-right ${{format_money(input.maxVelocity * cost_price_of(input.resourceId))}}

                  .column.is-narrow
                    .card
                      header.card-header
                        p.card-header-title Labor Expenses
                        p.card-header-icon per hour
                      template(v-if='!building_simulation_definitions_by_id[financial.id].labor.length')
                        .card-content.is-paddingless
                          .content.none-container none
                      template(v-else)
                        table.table.is-fullwidth.is-borderless
                          tbody
                            tr(v-for="input in building_simulation_definitions_by_id[financial.id].labor")
                              td {{resource_types_by_id[input.resourceId].labelPlural.english}}
                              td {{format_quantity(input.maxVelocity)}} {{resource_units_by_id[resource_types_by_id[input.resourceId].unitId].labelPlural.english}}
                              td.has-text-right ${{format_money(input.maxVelocity * cost_price_of(input.resourceId))}}

                  .column
                    .card
                      header.card-header
                        p.card-header-title Storage
                      template(v-if='!building_simulation_definitions_by_id[financial.id].storage.length')
                        .card-content.is-paddingless
                          .content.none-container none
                      template(v-else)
                        table.table.is-fullwidth.is-borderless
                          tbody
                            tr(v-for="input in building_simulation_definitions_by_id[financial.id].storage")
                              td {{resource_types_by_id[input.resourceId].labelPlural.english}}
                              td {{input.max}} {{resource_units_by_id[resource_types_by_id[input.resourceId].unitId].labelPlural.english}}

                template(v-if="building_simulation_definitions_by_id[financial.id].type == 'STORE'")
                  .column.is-narrow
                    .card
                      header.card-header
                        p.card-header-title Operations Expenses
                        p.card-header-icon per hour
                      template(v-if='!building_simulation_definitions_by_id[financial.id].operations.length')
                        .card-content.is-paddingless
                          .content.none-container none
                      template(v-else)
                        table.table.is-fullwidth.is-borderless
                          tbody
                            tr(v-for="input in building_simulation_definitions_by_id[financial.id].operations")
                              td {{resource_types_by_id[input.resourceId].labelPlural.english}}
                              td {{format_quantity(input.maxVelocity)}} {{resource_units_by_id[resource_types_by_id[input.resourceId].unitId].labelPlural.english}}
                              td.has-text-right ${{format_money(input.maxVelocity * cost_price_of(input.resourceId))}}

                  .column.is-narrow
                    .card
                      header.card-header
                        p.card-header-title Labor Expenses
                        p.card-header-icon per hour
                      template(v-if='!building_simulation_definitions_by_id[financial.id].labor.length')
                        .card-content.is-paddingless
                          .content.none-container none
                      template(v-else)
                        table.table.is-fullwidth.is-borderless
                          tbody
                            tr(v-for="input in building_simulation_definitions_by_id[financial.id].labor")
                              td {{resource_types_by_id[input.resourceId].labelPlural.english}}
                              td {{format_quantity(input.maxVelocity)}} {{resource_units_by_id[resource_types_by_id[input.resourceId].unitId].labelPlural.english}}
                              td.has-text-right ${{format_money(input.maxVelocity * cost_price_of(input.resourceId))}}

                  .column
                    .card.products-card
                      header.card-header
                        p.card-header-title Products
                        p.card-header-icon per hour
                      .card-content.columns.is-paddingless.is-marginless(v-for="product in building_simulation_definitions_by_id[financial.id].products")
                        .column
                          .card
                            header.card-header
                              p.card-header-title Expenses
                            template(v-if='!product.inputs.length')
                              .card-content.is-paddingless
                                .content.none-container none
                            template(v-else)
                              table.table.is-fullwidth.is-borderless
                                tbody
                                  tr(v-for="input in product.inputs")
                                    td {{resource_types_by_id[input.resourceId].labelPlural.english}}
                                    td {{format_quantity(input.maxVelocity)}} {{resource_units_by_id[resource_types_by_id[input.resourceId].unitId].labelPlural.english}}
                                    td.has-text-right ${{format_money(input.maxVelocity * cost_price_of(input.resourceId))}}

                        .column
                          .card
                            header.card-header
                              p.card-header-title Revenue
                            template(v-if='!product.outputs.length')
                              .card-content.is-paddingless
                                .content.none-container none
                            template(v-else)
                              table.table.is-fullwidth.is-borderless
                                tbody
                                  template(v-for="input in product.outputs")
                                    tr
                                      td {{resource_types_by_id[input.resourceId].labelPlural.english}}
                                      td {{format_quantity(input.maxVelocity)}} {{resource_units_by_id[resource_types_by_id[input.resourceId].unitId].labelPlural.english}}
                                      td.has-text-right ${{format_money(input.maxVelocity * sale_price_of(input.resourceId))}}

</template>

<script>
import _ from 'lodash';

import Financials from '~/plugins/starpeace/reference/building/financials';
import Utils from '~/plugins/starpeace/utils';

const COLUMNS = [
  {field:'category', label:'Category'},
  {field:'industry_type', label:'Industry'},
  {field:'seal', label:'Seal'},
  {field:'level', label:'Level'},
  {field:'research', label:'research', align:'centered'},
  {field:'name', label:'Name'},
  {field:'capex', label:'Total ($)', align:'right'},
  {field:'opex_operations', label:'Operations ($)', align:'right'},
  {field:'opex_labor', label:'Labor ($)', align:'right'},
  {field:'opex_supplies', label:'Supplies ($)', align:'right'},
  {field:'opex', label:'Total ($)', align:'right'},
  {field:'income', label:'Income ($)', align:'right'},
  {field:'profit', label:'Profit ($)', align:'right'},
  {field:'profit_month', label:'Profit ($)', align:'right'},
  {field:'roi_month', label:'ROI', align:'right'}
];

export default {
  props: {
    building_definitions_by_id: Object,
    company_seals_by_id: Object,
    inventions_by_id: Object,
    levels_by_id: Object,

    industry_categories_by_id: Object,
    industry_types_by_id: Object,

    max_levels_by_id: Object,
    demand_by_id_type: Object,

    resource_types_by_id: Object,
    resource_units_by_id: Object,
    resource_price_cost_adjustment_by_id: Object,
    resource_price_sale_adjustment_by_id: Object,

    selected_industry_categories_by_id: Object,
    selected_industry_types_by_id: Object,
    selected_company_seals_by_id: Object,
    selected_levels_by_id: Object,

    building_simulation_definitions: Array
  },

  data () {
    return {
      sorted_index: 13,
      sorted_direction: -1,
      selected_by_id: {}
    };
  },

  computed: {
    building_simulation_definitions_by_id () {
      return _.keyBy(this.building_simulation_definitions, 'id');
    },
    financials () {
      return _.map(this.building_simulation_definitions, (definition) =>
        Financials.from_definition(this.resource_types_by_id, this.resource_units_by_id, this.max_levels_by_id, this.resource_price_cost_adjustment_by_id, this.resource_price_sale_adjustment_by_id, definition)
      );
    },

    filtered_financials () {
      return _.filter(this.financials, (financial) => {
        const definition = this.building_definitions_by_id[financial.id];
        if (!this.selected_industry_categories_by_id[definition.industryCategoryId]) return false;
        if (!this.selected_industry_types_by_id[definition.industryTypeId]) return false;
        if (!this.selected_company_seals_by_id[definition.sealId]) return false;
        if (!this.selected_levels_by_id[this.level_for_id(financial.id).id]) return false;
        return true;
      });
    },
    sorted_simulation_financials () {
      const sort_by = []
      if (COLUMNS[this.sorted_index].field == 'category')
        sort_by.push((financial) => this.industry_categories_by_id[this.building_definitions_by_id[financial.id].industryCategoryId].label.english);
      else if (COLUMNS[this.sorted_index].field == 'industry_type')
        sort_by.push((financial) => this.industry_types_by_id[this.building_definitions_by_id[financial.id].industryTypeId].label.english);
      else if (COLUMNS[this.sorted_index].field == 'seal')
        sort_by.push((financial) => this.company_seals_by_id[this.building_definitions_by_id[financial.id]?.sealId].nameShort ?? 'unknown');
      else if (COLUMNS[this.sorted_index].field == 'level')
        sort_by.push((financial) => this.level_for_id(financial.id).level);
      else if (COLUMNS[this.sorted_index].field == 'name')
        sort_by.push((financial) => this.building_definitions_by_id[financial.id].name.english);
      else
        sort_by.push(COLUMNS[this.sorted_index].field);

      if (COLUMNS[this.sorted_index].field == 'roi_month')
        sort_by.push((financial) => -financial.profit_month);

      const sorted_financials = _.sortBy(this.filtered_financials, sort_by);
      return this.sorted_direction < 0 ? _.reverse(sorted_financials) : sorted_financials;
    }
  },

  methods: {
    columns () { return COLUMNS; },
    format_money (value) { return Utils.format_money(value); },
    format_quantity (quantity) { return parseFloat(quantity.toFixed(4)); },

    quantity_for_full_level (id, resource_type, quantity) {
      return (this.max_levels_by_id[id] ?? 1) * quantity * ((this.demand_by_id_type[`${id}-${resource_type}`] ?? 100) / 100);
    },
    quantity_for_half_level (id, resource_type, quantity) {
      return (1 + ((this.max_levels_by_id[id] ?? 1) - 1) * 0.5) * quantity * ((this.demand_by_id_type[`${id}-${resource_type}`] ?? 100) / 100);
    },
    quantity_for_upgrade (id, resource_type, quantity) {
      return this.quantity_for_half_level(id, resource_type, quantity) - quantity;
    },

    cost_price_of (resource_id) {
      return (this.resource_types_by_id[resource_id]?.price ?? 0) * ((this.resource_price_cost_adjustment_by_id[resource_id] ?? 100) / 100);
    },
    sale_price_of (resource_id) {
      return (this.resource_types_by_id[resource_id]?.price ?? 0) * ((this.resource_price_sale_adjustment_by_id[resource_id] ?? 100) / 100);
    },

    has_inventions (building_id) {
      return (this.building_definitions_by_id[building_id]?.required_invention_ids ?? []).length > 0;
    },
    inventions_label (building_id) {
      return _.compact(_.map(this.building_definitions_by_id[building_id]?.required_invention_ids, (id) => this.inventions_by_id[id]?.name?.english)).join(', ');
    },

    level_for_id (building_id) {
      let max_level = this.levels_by_id.APPRENTICE;
      for (let id of (this.building_definitions_by_id[building_id].required_invention_ids || [])) {
        const invention_level = this.inventions_by_id[id]?.properties?.level;
        if (invention_level && (this.levels_by_id[invention_level]?.level ?? -1) > max_level.level)
          max_level = this.levels_by_id[invention_level];
      }
      return max_level;
    },

    toggle_sort_column (column_index) {
      if (this.sorted_index == column_index)
        this.sorted_direction = this.sorted_direction * -1;
      else
        this.sorted_index = column_index;
    },
    toggle_row (definition_id) {
      this.selected_by_id[definition_id] = !this.selected_by_id[definition_id];
    }
  }
}
</script>

<style lang='sass' scoped>
.industry-section
  h4
    border-bottom: 1px solid #ccc
    cursor: pointer
    margin-bottom: .5rem

    .toggle-icon
      margin-right: .25rem
      width: 1.5rem

.financials-table
  thead
    th
      user-select: none

      .tooltip
        border-bottom: 1px dashed #777

      &.sortable
        cursor: pointer

        .sort-icon
          display: inline-block
          float: right

        &.has-text-right
          .sort-icon
            float: left

  tbody
    tr
      &.buiding-row
        &.is-selected
          cursor: zoom-out

        &:not(.is-selected)
          cursor: zoom-in

.construction-card
  &:not(:first-child)
    margin-top: .5rem

.construction-table,
.products-card
  td
    vertical-align: middle

    input
      &.is-fullwidth
        width: 100%

.none-container
  padding: 0.5em 0.75em

</style>
