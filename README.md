
# starpeace-website-documentation

[![Build Status](https://travis-ci.org/starpeace-project/starpeace-website-documentation.svg)](https://travis-ci.org/starpeace-project/starpeace-website-documentation)

Documentation website for [STARPEACE](https://docs.starpeace.io), including game client instructions, rules and overview of gameplay, and game history and lore.

## Security Vulnerabilities

If you discover a security vulnerability within this website, please send an e-mail to security@starpeace.io or open a [GitHub issue](https://github.com/starpeace-project/starpeace-website-documentation/issues). All security vulnerabilities will be promptly addressed.

## Development

Local development can be accomplished in a few commands. The following build-time dependencies must be installed:

* [Node.js](https://nodejs.org/en/) javascript runtime and [npm](https://www.npmjs.com/get-npm) package manager
* [Grunt](https://gruntjs.com/) task manager

Retrieve copy of repository and navigate to root:

```
$ git clone https://github.com/starpeace-project/starpeace-website-documentation.git
$ cd starpeace-website-documentation
```

Install starpeace-website-documentation dependencies:

```
$ npm install
```

Build repository with npm command defined in package.json:

```
$ npm run generate
```

Local development with nuxt and interactive build can be started with a single command:

```
$ npm run dev
```

## Build and Deployment

After building repository, website is compiled into static resources within the ```/dist/``` folder. These resources should be served as static assets from web application and can be cached if desired.

## License

Repository is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
