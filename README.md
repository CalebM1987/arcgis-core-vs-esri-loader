# arcgis-core-vs-esri-loader

This repository is meant to show different methods of loading the [ArcGIS JavaScript API](https://developers.arcgis.com/javascript/latest/) and the pros and cons of each method.

The two methods are:

* [esri-loader](https://github.com/Esri/esri-loader)
* [@arcgis/core](https://www.npmjs.com/package/@arcgis/core)

> note: The `@arcgis/core` method is showin in the [master branch](https://github.com/CalebM1987/arcgis-core-vs-esri-loader/tree/master), and `esri-loader` is shown in the [esri-loader branch](https://github.com/CalebM1987/arcgis-core-vs-esri-loader/tree/esri-loader).  The builds will go into separate directories based on which branch is currently in use.


## `esri-loader`

The `esri-loader` is a nice light weight library that will lazy load any ArcGIS JS API modules by inserting `<script>` tags that make CDN calls to load the necessary modules.  

Pros:

* tiny library
* light weight usage of API
* faster loading due to smaller bundle and usage of cached [CDN](https://www.globaldots.com/content-delivery-network-explained) 

Cons:

* must use AMD loader, which requires using [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or [async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await) to load modules and work with them.

## `@arcgis/core`

With the release of the ArcGIS JavaScript API 4.18, I was very exicted to hear that we were finally getting [ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) so we could install and import the API with ease.  However, my excitement quickly turned to disappointment when I ran a build and saw the bundle sizes. 

> note: at this time (3/17/2021, ArcGIS JS API 4.18) this package is still in beta and hopefully will address the lack of tree shaking.

Pros: 

* easy to install via npm or yarn
* can load modules with `import` statments

Cons:

* absolutely massive bundles, does not yet appear to support [tree shaking](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking)
* must include esri assets in a `public` folder (also quite large)
* slower load time

## The Demo Application

To use the `esri-loader` version of the demo, make sure to switch the [branch](https://github.com/CalebM1987/arcgis-core-vs-esri-loader/tree/esri-loader):

```
git fetch -all

git checkout esri-loader
```

the `@arcgis/core` version is contained in the [master branch](https://github.com/CalebM1987/arcgis-core-vs-esri-loader/tree/esri-loader).


The demo app is a small [Vue.js](https://vuejs.org/) (version 3.x) written in TypeScript that only loads the following 3 modules:

* [esri/conifg](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html): set the esri configuration options (developer token in this case)
* [esri/Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html): the esri Map
* [esri/MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html): the esri MapView

## Performance Comparisons

### Output Bundle Info (JavaScript files only):

`esri-loader`:

* size: `108 KB` (111,129 bytes)
* number of files: 2

![esri-loader-bundle-explorer](/images/esri-loader-bundle-explorer.png)

And the full build:

![esri-loader-fullbuild-explorer](/images/esri-loader-fullbuild-explorer.png)

`@arcgis/core`:

* size: `10.3 MB` (10,897,588 bytes)
* number of files: 168


![arcgis-core-bundle-explorer](/images/arcgis-core-bundle-explorer.png)

And the full build:

> note: this build also includes `22.2 MB` of esri assets (3,448 files)

![arcgis-core-fullbuild-explorer](/images/arcgis-core-fullbuild-explorer.png)

In this case, the `esri-loader` is the clear winner in my opinion.  Is it just me or does ~`10 MB` sound like a lot for only using **THREE** modules.  In fact, I'd argue that anything over `5 MB` is probably very inefficient or unnecessarily large.

> note: There are ways to slim down the bundled files, but this requires using the [arcgis-webpack-plugin](https://github.com/Esri/arcgis-webpack-plugin) and this repo is setup to show both libraries out of the box to demonstrate the lack of tree shaking in the beta (4.18) release of `@arcgis/core`.

#### Why does bundle size matter?

Simply put, load time. See this quote from Strangeloop Networks referenced in [this article](https://betterprogramming.pub/reducing-js-bundle-size-58dc39c10f9c):

![load time](/images/load-time-quote.PNG)

Also the amount of content being loaded may not matter for desktop applications, but it definitely makes a difference for mobile devices. Mobile devices most often do not have the same compute power and many users have data limitations on their cellular plans.

**bottom line, I believe this is an unacceptable bundle size for our tiny application where we are only using three modules.**

### Lighthouse Results

Both the `esri-loader` and `@arcgis/core` both scored very low in Lighthouse Perfomance.  I know loading the ArcGIS JavaScript API can always lead to poor performance due to the initial paint.  This can be improved by displaying something immediately while the map is loading such as splash screen, but there is definitely a noticable difference in speed of using the `esri-loader` vs `@arcgis/core` due to the upfront cost of loading all the extra bundles.


| Build Type     | Desktop Speed Index | Desktop Performance Score  | Mobile Speed Index | Mobile Performance Score  |
|----------------|:-------------------:|:--------------------------:|:------------------:|:-------------------------:|
| `esri-loader`  |        3.8 s        |             21             |       18.6 s       |             6             |
| `@arcgis/core` |        9.4 s        |             10             |       44.6 s       |             6             |


> note: it is important to point out I am not doing any sort of optimizations with either method and in a real app, I would probably use a splash screen to immediately present the end user with some content.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
