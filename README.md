
# starpeace-documentation-website

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Documentation website for [STARPEACE](https://docs.starpeace.io), including game client instructions, rules and overview of gameplay, and game history and lore.

## Security Vulnerabilities

If you discover a security vulnerability within this website, please send an e-mail to security@starpeace.io. All security vulnerabilities will be promptly addressed.

## Development

Local development can be accomplished in a few commands. The following build-time dependencies must be installed:

* [Node.js](https://nodejs.org/en/) javascript runtime and [npm](https://www.npmjs.com/get-npm) package manager

Retrieve copy of repository and navigate to root:

```
$ git clone https://github.com/starpeace-project/starpeace-documentation-website.git
$ cd starpeace-documentation-website
```

Install starpeace-documentation-website dependencies:

```
$ npm install
```

Build repository with npm command defined in package.json:

```
$ npm run generate
$ npm run generate-api-docs
```

Local development with nuxt and interactive build can be started with a single command:

```
$ npm run dev
```

## Build and Deployment

After building repository, website is compiled into static resources within the ```/dist/``` folder. These resources should be served as static assets from web application and can be cached if desired.

### docs.starpeace.io

Repository is currently deployed to and hosted with AWS S3. Changes pushed to repository will activate webhook to AWS CodePipeline, triggering automatic rebuild and deployment of website resources.

## License

All content of starpeace-documentation-website is licensed under the [Creative Commons Attribution 4.0 license](https://creativecommons.org/licenses/by/4.0), and the underlying source code used to format and display that content is licensed under the [MIT license](https://opensource.org/licenses/mit-license.php).
