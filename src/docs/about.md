::: lead
**Vue MDBootstrap** is a collection of **Vue.js** components and built according to 
the <a href="https://material.io/design" target="_blank">Google Material Design</a> specs.
**Vue MDBootstrap** is based on the world's most popular framework - *Vue.js* and utilize
*Bootstrap v4* css framework for building responsive, mobile-first sites.
:::


## Requirements

- <a href="https://vuejs.org/" target="_blank">Vue.js</a> `v2.6` is required, `v2.6.12` is recommended
- <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a> `v4.5` is required, `v4.5.2` is recommended
- <a href="https://www.npmjs.com/package/vue-router" target="_blank">vue-router</a> `v3.x` is optional, and is required for building 
  Single Page Application (SPA) using NPM 
- <a href="https://www.npmjs.com/package/vuex" target="_blank">vuex</a> `v3.x` is optional, and is required for building 
  Single Page Application (SPA) using NPM 
- <a href="https://www.npmjs.com/package/vuelidate" target="_blank">vuelidate</a> is optional, and is required for building 
  Single Page Application (SPA) using NPM 
  

## Documentation Sections

The online documentation consists of the following sections:

- [Components](#/components) - Vue.js visual component library documentation
- [Directives](#/directives) - Vue.js custom directive documentation
- [Data Models](#/models) - Non visual component library documentation
- [Reference](#/reference) - Additional resources documentation


## Additional Information

Before getting started with **Vue MDBootstrap**, you should have general familiarity with Vue functionality
and Bootstrap v4 CSS. If you are unfamiliar with Vue and/or Bootstrap, some good starting points would be:

- <a href="https://vuejs.org/v2/guide/" target="_blank">Vue Guide</a> 
- <a href="https://vuejs.org/v2/api/" target="_blank">Vue API</a> 
- <a href="https://getbootstrap.com/docs/4.5/getting-started/introduction/" target="_blank">Bootstrap v4 documentation</a> 
- <a href="https://vue-loader.vuejs.org/guide/scoped-css.html" target="_blank">Vue loader scoped CSS</a> if using scoped
  styles in SFC (Single File Component) `.vue` files

  
## Important HTML Globals

Bootstrap v4 CSS employs a handful of important global styles and settings that you'll need
to be aware of when using it, all of which are almost exclusively geared towards
the normalization of cross browser styles. Refer to the following sub-sections for details.

### HTML5 doctype

Bootstrap requires the use of the `HTML5` doctype. Without it, you _may_ see some funky incomplete
styling, but including it shouldn't cause any considerable hiccups.

```html
<!doctype html>
<html lang="en">
  ...
</html>
```

### Responsive meta tag

Bootstrap developed for mobile first, a strategy in which code optimized for mobile devices
first and then scale the components as necessary using CSS media queries. To ensure proper rendering
and touch zooming for all devices, **add the responsive viewport meta** tag to your `<head>`.

```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

## Browser Support

Modern browsers and Internet Explorer 10+.
