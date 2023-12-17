import _ from 'lodash';

export default class Financials {
  id: string = '';
  capex: number = 0;
  opex_labor: number = 0;
  opex_operations: number = 0;
  opex_supplies: number = 0;
  income: number = 0;

  constructor (id: string, capex: number, opex_labor: number, opex_operations: number, opex_supplies: number, income: number) {
    this.id = id;
    this.capex = capex;
    this.opex_labor = opex_labor;
    this.opex_operations = opex_operations;
    this.opex_supplies = opex_supplies;
    this.income = income;
  }

  get opex (): number {
    return this.opex_labor + this.opex_operations + this.opex_supplies;
  }
  get profit (): number {
    return this.income - this.opex;
  }
  get profit_month (): number {
    return this.profit * 30;
  }
  get roi_month (): number {
    return this.profit_month <= 0 ? Number.MAX_VALUE : Math.ceil(this.capex / this.profit_month);
  }

  static from_definition (resource_types_by_id, resource_units_by_id, level_by_id, resource_price_cost_adjustment_by_id, resource_price_sale_adjustment_by_id, definition): Financials {
    const cost_price_of = (id: string): number => (resource_types_by_id[id]?.price || 0) * ((resource_price_cost_adjustment_by_id[id] || 100) / 100);
    const sale_price_of = (id: string): number => (resource_types_by_id[id]?.price || 0) * ((resource_price_sale_adjustment_by_id[id] || 100) / 100);

    const full_level_adjustment = level_by_id[definition.id] ?? 1;
    const half_level_adjustment = 1 + ((level_by_id[definition.id] ?? 1) - 1) * .5;

    let capex = _.reduce(definition.constructionInputs, ((result: number, value: any): number => result + value.quantity * cost_price_of(value.resourceId) * half_level_adjustment), 0);
    let opex_labor = 0;
    let opex_operations = 0;
    let opex_supplies = 0;
    let income = 0;

    if (definition.type == 'FACTORY') {
      let total_duration = 1;
      opex_labor += _.reduce(definition.labor, ((result: number, value: any): number => result + value.maxVelocity * cost_price_of(value.resourceId) * full_level_adjustment), 0);
      opex_operations += _.reduce(definition.operations, ((result: number, value: any): number => result + value.maxVelocity * cost_price_of(value.resourceId) * half_level_adjustment), 0);
      opex_supplies += _.reduce(definition.inputs, ((result: number, value: any): number => result + value.maxVelocity * cost_price_of(value.resourceId) * full_level_adjustment), 0);
      income += _.reduce(definition.outputs, ((result: number, value: any): number => result + value.maxVelocity * sale_price_of(value.resourceId) * full_level_adjustment), 0);

      // for (let stage of (definition.stages ?? [])) {
      //   total_duration += stage.duration;
      //   opex_labor += _.reduce(stage.labor, ((result: number, value: any): number => result + value.maxVelocity * cost_price_of(value.resourceId) * full_level_adjustment), 0) * stage.duration;
      //   opex_operations += _.reduce(stage.operations, ((result: number, value: any): number => result + value.maxVelocity * cost_price_of(value.resourceId) * half_level_adjustment), 0) * stage.duration;
      //   opex_supplies += _.reduce(stage.inputs, ((result: number, value: any): number => result + value.maxVelocity * cost_price_of(value.resourceId) * full_level_adjustment), 0) * stage.duration;
      //   income += _.reduce(stage.outputs, ((result: number, value: any): number => result + value.maxVelocity * sale_price_of(value.resourceId) * full_level_adjustment), 0) * stage.duration;
      // }
      opex_labor = opex_labor / total_duration;
      opex_operations = opex_operations / total_duration;
      opex_supplies = opex_supplies / total_duration;
      income = income / total_duration;
    }
    else if (definition.type == 'STORAGE') {
      opex_labor = _.reduce(definition.labor, ((result: number, value: any): number => result + value.maxVelocity * cost_price_of(value.resourceId) * full_level_adjustment), 0);
      opex_operations = _.reduce(definition.operations, ((result: number, value: any): number => result + value.maxVelocity * cost_price_of(value.resourceId) * half_level_adjustment), 0);
      opex_supplies = 0;
      income = 0;
    }
    else if (definition.type == 'STORE') {
      opex_labor = _.reduce(definition.labor, ((result: number, value: any): number => result + value.maxVelocity * cost_price_of(value.resourceId) * full_level_adjustment), 0);
      opex_operations = _.reduce(definition.operations, ((result: number, value: any): number => result + value.maxVelocity * cost_price_of(value.resourceId) * half_level_adjustment), 0);

      for (let product of definition.products) {
        opex_supplies += _.reduce(product.inputs, ((result: number, value: any): number => result + value.maxVelocity * cost_price_of(value.resourceId) * full_level_adjustment), 0);
        income += _.reduce(product.outputs, ((result: number, value: any): number => result + value.maxVelocity * sale_price_of(value.resourceId) * full_level_adjustment), 0);
      }
    }

    return new Financials(definition.id, capex, opex_labor, opex_operations, opex_supplies, income);
  }

}
