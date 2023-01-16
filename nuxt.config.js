const fs = require('fs');
const _ = require('lodash');
const path = require('path');

const read_all_files_sync = function(dir, file_matcher) {
  return fs.readdirSync(dir).reduce(function(files, file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      return files.concat(read_all_files_sync(path.join(dir, file), file_matcher));
    }
    else {
      return files.concat(file_matcher(file) ? [path.join(dir, file)] : []);
    }
  }, []);
}

const parse_to_json = function(root_dir, whitelist_patterns, blacklist_patterns) {
  let file_matcher = function(file_path) {
    for (let pattern of blacklist_patterns) {
      if (file_path.endsWith(pattern)) return false;
    }
    for (let pattern of whitelist_patterns) {
      if (!file_path.endsWith(pattern)) return false;
    }
    return true;
  };

  return _.flatten(_.map(read_all_files_sync(root_dir, file_matcher), function(path) { return JSON.parse(fs.readFileSync(path)); }));
}


const is_development = process.env.NODE_ENV === 'development';

const building_definitions = parse_to_json(path.resolve('node_modules/@starpeace/starpeace-assets/assets/buildings'), ['.json'], ['-image.json', '-simulation.json']);
const building_simulation_definitions = parse_to_json(path.resolve('node_modules/@starpeace/starpeace-assets/assets/buildings'), ['-simulation.json'], []);
const company_seals = parse_to_json(path.resolve('node_modules/@starpeace/starpeace-assets/assets/seals'), ['.json'], []);
const industry_categories = parse_to_json(path.resolve('node_modules/@starpeace/starpeace-assets/assets/industry'), ['industry-categories.json'], []);
const industry_types = parse_to_json(path.resolve('node_modules/@starpeace/starpeace-assets/assets/industry'), ['industry-types.json'], []);
const inventions = parse_to_json(path.resolve('node_modules/@starpeace/starpeace-assets/assets/inventions'), ['.json'], []);
const levels = parse_to_json(path.resolve('node_modules/@starpeace/starpeace-assets/assets/industry'), ['levels.json'], []);
const resource_types = parse_to_json(path.resolve('node_modules/@starpeace/starpeace-assets/assets/industry'), ['resource-types.json'], []);
const resource_units = parse_to_json(path.resolve('node_modules/@starpeace/starpeace-assets/assets/industry'), ['resource-units.json'], []);


export default defineNuxtConfig({
  css: [
    'bulma',
    '@/assets/stylesheets/bulma-starpeace.sass'
  ],
  app: {
    buildAssetsDir: '/resources/',
    head: {
      title: 'Documentation - STARPEACE',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Documentation for STARPEACE multiplayer economic simulation' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', media: '(prefers-color-scheme:no-preference)'},
        { rel: 'icon', type: 'image/x-icon', href: '/favicon-dark.ico', media: '(prefers-color-scheme:dark)' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon-light.ico', media: '(prefers-color-scheme:light)' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans|Varela+Round' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      sendAnalytics: !is_development,
      BUILDING_DEFINITIONS: building_definitions,
      BUILDING_SIMULATION_DEFINITIONS: building_simulation_definitions,
      COMPANY_SEALS: company_seals,
      INDUSTRY_CATEGORIES: industry_categories,
      INDUSTRY_TYPES: industry_types,
      INVENTIONS: inventions,
      LEVELS: levels,
      RESOURCE_TYPES: resource_types,
      RESOURCE_UNITS: resource_units
    }
  },
  render: {
    resourceHints: false
  },
  generate: {
    fallback: false
  },
  telemetry: false,
  static: {
    prefix: false
  },
  build: {
    loaders: {
      sass: {
        implementation: require('sass')
      }
    },
    standalone: true
  },
  buildModules: ['@nuxt/typescript-build']
})
