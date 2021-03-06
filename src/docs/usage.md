::: lead
**Vue MDBootstrap** can be used to built Single Page Application by using module 
bundler or built common web page by using the resources from the CDN.
:::

## Using Module Bundlers

If you are building Single Page Application and using module bundlers like 
[Webpack](https://webpack.js.org), [Vue Cli](https://cli.vuejs.org) or
[Symfony Encore](https://symfony.com/doc/current/frontend/encore/installation.html), 
you may prefer to directly include the package into your project. To get started, 
use `yarn` or `npm` to get the latest version of *Vue.js*, and *Vue MDBootstrap*.

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
version of the resource from [unpkg.com/vue-mdbootstrap](https://unpkg.com/vue-mdbootstrap) 
and use the js and css files on your html `<head>` section on the page to get started. 

Code below is an example how to load and initialize the components.

```html
<link rel="stylesheet" href="https://unpkg.com/bootstrap@4.5.2/dist/css/bootstrap.min.css" crossorigin="anonymous">
<link rel="stylesheet" href="https://unpkg.com/vue-mdbootstrap/dist/vue-mdb.min.css" crossorigin="anonymous">
<script src="https://unpkg.com/vue@2.6.14/dist/vue.min.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/vue-mdbootstrap/dist/vue-mdb.min.js" crossorigin="anonymous"></script>
```

If you are using `BsGrid`, `BsTreeGrid`, `BsModel`, `BsStore`, `BsTreeStore` and/or 
need to perform HTTP Request, you can use example code below in your javascript to 
initialize MDBootstrap Axios plugin.

```js
Vue.use(VueMdb.AxiosPlugin, {baseURL: "http://localhost/<api-url>"});
```

Now, you can use any of **Vue MDBootstrap** components in your html page.

**Notes**: 

- [FontAwesomeIcon](https://fontawesome.com/icons?d=gallery&s=solid&m=free) and 
  [Moment.js](https://momentjs.com/) already bundled except **Moment.js localization**.
- All plugins and classes placed under **VueMdb** namespace. Please refer to 
  [documentation](/#/reference). 


## Start coding

Now you have implemented **Vue MDBootstrap** to your project, and it’s time to write your 
code. Please refer to each component’s [documentation](/#/components) to learn how to use them.
