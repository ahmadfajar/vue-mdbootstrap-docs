::: lead
**Vue MdBootstrap** is a collection of **Vue.js** components and built according to 
the <a href="https://material.io/design" target="_blank">Google Material Design</a> specs.
**Vue MdBootstrap** is based on the world's most popular framework - *Vue.js* and utilize
*Bootstrap v4* css framework for building responsive, mobile-first sites.
:::

## Requirements

- [Vue.js](https://vuejs.org/) `v2.6` is required, `v2.6.11` is recommended
- [Bootstrap](https://getbootstrap.com/) `v4.4.1` is required, `v4.5.2` is recommended
- [vue-router](https://www.npmjs.com/package/vue-router) `v3.x` is optional, and is required for building 
  Single Page Application (SPA) using NPM 
- [vuex](https://www.npmjs.com/package/vuex) `v3.x` is optional, and is required for building 
  Single Page Application (SPA) using NPM 
- [vuelidate](https://www.npmjs.com/package/vuelidate) is optional, and is required for building 
  Single Page Application (SPA) using NPM 
  
## Documentation Sections

The online documentation consists of the following sections:

- [Components](#/components) - Vue.js visual component library documentation
- [Directives](#/directives) - Vue.js custom directive documentation
- [Data Models](#/models) - Non visual component library documentation
- [Reference](#/reference) - Additional resources documentation

## Additional Information

Before getting started with **Vue MdBootstrap**, you should have general familiarity with Vue functionality
and Bootstrap v4 CSS. If you are unfamiliar with Vue and/or Bootstrap, some good starting points would be:

- [Vue Guide](https://vuejs.org/v2/guide/)
- [Vue API](https://vuejs.org/v2/api/)
- [Bootstrap v4 documentation](https://getbootstrap.com/)
- [Vue loader scoped CSS](https://vue-loader.vuejs.org/guide/scoped-css.html) if using scoped
  styles in SFC (Single File Component) `.vue` files
  
## Important HTML globals

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
