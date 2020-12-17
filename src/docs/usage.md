::: lead
**Vue MDBootstrap** can be used to built Single Page Application by using module 
bundler or built common web page by using the resources from the CDN.
:::

## Using Module Bundlers

If you are building Single Page Application and using module bundlers like 
<a href="https://webpack.js.org/" target="_blank">Webpack</a>, 
<a href="https://cli.vuejs.org/" target="_blank">Vue Cli</a> or 
<a href="https://symfony.com/doc/current/frontend/encore/installation.html" 
target="_blank">Symfony Encore</a>, you may prefer to directly include the package 
into your project. To get started, use `yarn` or `npm` to get the latest version of 
Vue.js, and Vue MDBootstrap.

```bash
# With npm
npm install vue vue-mdbootstrap --save
npm install node-sass --save-dev

# With yarn
yarn add vue vue-mdbootstrap
yarn add node-sass --dev
```

Then, register Vue MDBootstrap in your app entry point.

```js
// main.js
import Vue from "vue";
import VueMdb, { AxiosPlugin } from "vue-mdbootstrap";

// Default requirement
Vue.use(VueMdb);
// Optionally, install the MDBootstrap Axios plugin plugin
// only requires if using BsGrid, BsTreeGrid, BsModel, BsStore, BsTreeStore or needs to perform HTTP Request
Vue.use(AxiosPlugin);
```

Now, you are ready to go. You can use any of **Vue MDBootstrap** components without 
using `import` statement again. Please note, these components still need css from 
**Bootstrap4** css framework. 


## Using CDN

If you aren't building Single Page Application and not using module bundlers, and 
your goals is building common web page to display on the web browser, grab the 
supplied **css** and **js** from the **dist** folder. Or you can get the latest 
version of the resource from <a href="https://unpkg.com/vue-mdbootstrap" 
target="_blank">unpkg.com/vue-mdbootstrap</a> and use the js and css files on your 
html `<head>` section on the page to get started. 

Code below is an example how to load and initialize the components.

```html
<link rel="stylesheet" href="https://unpkg.com/bootstrap@4.5.2/dist/css/bootstrap.min.css" crossorigin="anonymous">
<link rel="stylesheet" href="https://unpkg.com/vue-mdbootstrap/dist/vue-mdb.css" crossorigin="anonymous">
<script src="https://unpkg.com/vue-mdbootstrap/dist/vue-mdb.bundle.js" crossorigin="anonymous"></script>
```

If you are using `BsGrid`, `BsTreeGrid`, `BsModel`, `BsStore`, `BsTreeStore` and/or 
need to perform HTTP Request, you can use example code below in your javascript to 
initialize MDBootstrap Axios plugin.

```js
Vue.use(AxiosPlugin, {baseURL: "http://localhost/<api-url>"});
```

Now, you can use any of **Vue MDBootstrap** components in your html page.


## Start coding

Now you have implemented **Vue MDBootstrap** to your project, and it’s time to write your 
code. Please refer to each component’s documentation to learn how to use them.
