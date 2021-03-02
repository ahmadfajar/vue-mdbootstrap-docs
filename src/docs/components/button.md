:::lead
**BsButton** is a component for actions in form, dialog, and more. Includes support for 
a handful of color variations, sizes, states, and more.
:::


## Overview

`<bs-button>` uses [Boostrap v4 CSS](https://getbootstrap.com/docs/4.5/components/buttons/) 
classes internally, and made some modifications to meet the *Material Design specifications*.

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <bs-button>button</bs-button>
    <bs-button color="primary">primary</bs-button>
    <bs-button color="secondary">secondary</bs-button>
    <bs-button color="success">success</bs-button>
    <bs-button color="danger">danger</bs-button>
    <bs-button color="warning">warning</bs-button>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
  
  .btn {
    margin-bottom: 16px;
    margin-right: 8px;
  }
}
</style>
```
:::


## Element Type

The `<bs-button>` component by default renders a `<button>` element. However, you can also render an 
`<a>` element by providing `href` attribute value. You can also change the button's `type` attribute
with specific value, such as `button`, `submit`, or `reset`.

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <bs-button type="button">button</bs-button>
    <bs-button type="submit" color="primary">submit</bs-button>
    <bs-button type="reset" color="secondary">reset</bs-button>
    <bs-button href="#/components/button" color="dark-blue">button link</bs-button>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
  
  .btn {
    margin-bottom: 16px;
    margin-right: 8px;
  }
}
</style>
```
:::


## Button Styles

The `<bs-button>` component comes with seven predefined styles: *Default*, *Raised*, *Outlined*, *Flat*, 
*Rounded*, *Pill* and *Transparent* style. Other than *Default* style, example below will shows you how 
to enable another styles.

### Raised style

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <bs-button raised>button</bs-button>
    <bs-button color="primary" raised>primary</bs-button>
    <bs-button color="secondary" raised>secondary</bs-button>
    <bs-button color="success" raised>success</bs-button>
    <bs-button color="danger" raised>danger</bs-button>
    <bs-button color="warning" raised>warning</bs-button>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
  
  .btn {
    margin-bottom: 16px;
    margin-right: 8px;
  }
}
</style>
```
:::

### Outlined style

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <bs-button outlined>button</bs-button>
    <bs-button color="primary" outlined>primary</bs-button>
    <bs-button color="secondary" outlined>secondary</bs-button>
    <bs-button color="success" outlined>success</bs-button>
    <bs-button color="danger" outlined>danger</bs-button>
    <bs-button color="warning" outlined>warning</bs-button>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
  
  .btn {
    margin-bottom: 16px;
    margin-right: 8px;
  }
}
</style>
```
:::

### Flat style

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <bs-button flat>button</bs-button>
    <bs-button color="primary" flat>primary</bs-button>
    <bs-button color="secondary" flat>secondary</bs-button>
    <bs-button color="success" flat>success</bs-button>
    <bs-button color="danger" flat>danger</bs-button>
    <bs-button color="warning" flat>warning</bs-button>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
  
  .btn {
    margin-bottom: 16px;
    margin-right: 8px;
  }
}
</style>
```
:::

### Rounded style

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <bs-button rounded>button</bs-button>
    <bs-button color="primary" rounded>primary</bs-button>
    <bs-button color="secondary" rounded>secondary</bs-button>
    <bs-button color="success" rounded>success</bs-button>
    <bs-button color="danger" rounded>danger</bs-button>
    <bs-button color="warning" rounded>warning</bs-button>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
  
  .btn {
    margin-bottom: 16px;
    margin-right: 8px;
  }
}
</style>
```
:::

*Available in Vue MDBootstrap since `v1.1.0`*

### Pill style

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <bs-button pill>button</bs-button>
    <bs-button color="primary" pill>primary</bs-button>
    <bs-button color="secondary" pill>secondary</bs-button>
    <bs-button color="success" pill>success</bs-button>
    <bs-button color="danger" pill>danger</bs-button>
    <bs-button color="warning" pill>warning</bs-button>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
  
  .btn {
    margin-bottom: 16px;
    margin-right: 8px;
  }
}
</style>
```
:::

*Available in Vue MDBootstrap since `v1.1.0`*

### Transparent style

:::demo
```html
<template>
  <div class="my-demo-wrapper px-3">
    <div class="row text-center">
      <div class="col-6 col-lg-3 bg-indigo p-3">
        <bs-button transparent>button</bs-button>    
      </div>
      <div class="col-6 col-lg-3 bg-deep-purple p-3">
        <bs-button transparent>button</bs-button>
      </div>
      <div class="col-6 col-lg-3 bg-red p-3">
        <bs-button transparent>button</bs-button>
      </div>
      <div class="col-6 col-lg-3 bg-amber p-3">
        <bs-button transparent>button</bs-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  .btn {
    margin-bottom: 16px;
  }
}
</style>
```
:::

:::warning
If `transparent` property is `true` then `color` property will have no effect.
:::

### Combination style

Other than those seven styles above, some styles can be combine to create another effect. 
Example below will shows you how to do it.

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <bs-button 
      color="primary" 
      class="text-nowrap" 
      raised 
      rounded>
      raised rounded
    </bs-button>
    <bs-button 
      color="primary" 
      class="text-nowrap" 
      raised 
      outlined 
      rounded>
      outlined raised rounded
    </bs-button>
    <bs-button 
      color="primary" 
      class="text-nowrap" 
      outlined 
      rounded>
      outlined rounded
    </bs-button>
    <bs-button 
      color="primary" 
      class="text-nowrap" 
      flat 
      raised 
      rounded>
      flat raised rounded
    </bs-button>
    <bs-button 
      color="primary" 
      class="text-nowrap" 
      flat 
      rounded>
      flat rounded
    </bs-button>
    <bs-button 
      color="success" 
      class="text-nowrap" 
      raised 
      pill>
      raised pill
    </bs-button>
    <bs-button 
      color="success" 
      class="text-nowrap" 
      raised 
      outlined 
      pill>
      outlined raised pill
    </bs-button>
    <bs-button 
      color="success" 
      class="text-nowrap" 
      outlined 
      pill>
      outlined pill
    </bs-button>
    <bs-button 
      color="success" 
      class="text-nowrap" 
      flat 
      raised 
      pill>
      flat raised pill
    </bs-button>
    <bs-button 
      color="success" 
      class="text-nowrap" 
      flat 
      pill>
      flat pill
    </bs-button>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
  
  .btn {
    margin-bottom: 16px;
    margin-right: 8px;
  }
}
</style>
```
:::

:::warning
- `outlined` and `flat` property can't be combined, if both `true`, then `outlined` will take precedence.
- `pill` and `rounded` property can't be combined, if both `true`, then `pill` will take precedence.
:::


## Icon

Icon can be used as `<bs-button>` content, and it also can be displayed with text. `<bs-button>` utilize
[vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome) component to display icon. You can use
any valid [FontAwesome Icon](https://fontawesome.com/icons?d=gallery&s=solid&m=free) name for the icon. 

:::demo
```html
<template>
  <div class="my-demo-wrapper px-3">
    <div class="row text-center">
      <div class="col-4 col-md-3 col-xl mb-3">
        <bs-button 
          mode="icon" 
          icon="ambulance" 
          icon-size="sm">
        </bs-button>
      </div>
      <div class="col-4 col-md-3 col-xl mb-3">
        <bs-button 
          mode="icon" 
          icon="ambulance">
        </bs-button>
      </div>
      <div class="col-4 col-md-3 col-xl mb-3">
        <bs-button 
          mode="icon" 
          icon="ambulance" 
          icon-size="lg">
        </bs-button>
      </div>
      <div class="col-4 col-md-3 col-xl mb-3">
        <bs-button 
          mode="icon" 
          icon="ambulance" 
          icon-size="lg" 
          icon-flip="horizontal">
        </bs-button>
      </div>
      <div class="col-4 col-md-3 col-xl mb-3">
        <bs-button 
          mode="icon" 
          icon="ambulance" 
          icon-size="lg" 
          icon-flip="vertical">
        </bs-button>
      </div>
      <div class="col-4 col-md-3 col-xl mb-3">
        <bs-button 
          mode="icon" 
          icon="ambulance" 
          icon-size="lg" 
          icon-flip="both">
        </bs-button>
      </div>
      <div class="col-4 col-md-3 col-xl mb-3">
        <bs-button 
          mode="icon" 
          icon="spinner" 
          icon-size="lg" 
          icon-spin>
        </bs-button>
      </div>
      <div class="col-4 col-md-3 col-xl mb-3">
        <bs-button 
          mode="icon" 
          icon="spinner" 
          icon-size="lg" 
          icon-pulse>
        </bs-button>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-12 col-sm-6 col-xl-3 mb-3">
        <bs-button 
          color="primary" 
          icon="ambulance" 
          icon-position="left">
          Icon Left
        </bs-button>
      </div>
      <div class="col-12 col-sm-6 col-xl-3 mb-3">
        <bs-button 
          color="primary" 
          icon="ambulance" 
          icon-position="right">
          Icon Right
        </bs-button>
      </div>
      <div class="col-12 col-sm-6 col-xl-3 mb-3">
        <bs-button 
          color="primary" 
          icon="ambulance" 
          icon-position="right" 
          icon-flip="horizontal">
          Flip Horizontal
        </bs-button>
      </div>
      <div class="col-12 col-sm-6 col-xl-3 mb-3">
        <bs-button 
          color="primary" 
          icon="ambulance" 
          icon-position="right" 
          icon-flip="vertical">
          Flip Vertical
        </bs-button>
      </div>
      <div class="col-12 col-sm-6 col-xl-3 mb-3">
        <bs-button 
          color="primary" 
          icon="ambulance" 
          icon-position="right" 
          icon-flip="both">
          Flip Both
        </bs-button>
      </div>
      <div class="col-12 col-sm-6 col-xl-3 mb-3">
        <bs-button 
          color="primary" 
          icon="ambulance" 
          icon-position="right" 
          icon-rotation="90">
          Rotate 90&deg;
        </bs-button>
      </div>
      <div class="col-12 col-sm-6 col-xl-3 mb-3">
        <bs-button 
          color="primary" 
          icon="ambulance" 
          icon-position="right" 
          icon-size="lg">
          Icon size LG
        </bs-button>
      </div>
      <div class="col-12 col-sm-6 col-xl-3 mb-3">
        <bs-button 
          color="primary" 
          icon="ambulance" 
          icon-position="right" 
          icon-size="2x">
          Icon size 2x
        </bs-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Sizing

`<bs-button>` can be set in different size: `xs` (extra-small), `sm` (small), or `lg` (large).

:::demo
```html
<template>
  <div class="my-demo-wrapper px-3">
    <div class="row text-center">
      <div class="col-6 col-xl mb-3">
        <bs-button color="blue" size="xs">Extra Small</bs-button>    
      </div>
      <div class="col-6 col-xl mb-3">
        <bs-button color="dark-blue" size="sm">Small</bs-button>    
      </div>
      <div class="col-6 col-xl mb-3">
        <bs-button color="red">Normal</bs-button>    
      </div>
      <div class="col-6 col-xl mb-3">
        <bs-button color="dark" size="lg">Large</bs-button>    
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Button Group

`<bs-button>` can be grouped as series of buttons on a single line called **button group** 
by utilizing [Bootstrap CSS](https://getbootstrap.com/docs/4.5/components/button-group/).

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row align-items-center">
      <div class="mb-3 col-12 col-sm text-center">
        <div class="btn-group" role="group" aria-label="Default Button Group">
          <bs-button color="blue-grey">Left</bs-button>
          <bs-button color="blue-grey">Middle</bs-button>
          <bs-button color="blue-grey">Right</bs-button>
        </div>
      </div>
      <div class="mb-3 col-12 col-sm text-center">
        <div class="btn-group" role="group" aria-label="Outlined Button Group">
          <bs-button color="primary" outlined>Left</bs-button>
          <bs-button color="primary" outlined>Middle</bs-button>
          <bs-button color="primary" outlined>Right</bs-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Button Toolbar

`<bs-button>` can also be combined as sets of button groups called **button toolbar**
by utilizing [Bootstrap CSS](https://getbootstrap.com/docs/4.5/components/button-group/#button-toolbar).

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="mb-3 col-12 col-xl">
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group mr-2" role="group" aria-label="First group">
            <bs-button color="blue-grey">1</bs-button>
            <bs-button color="blue-grey">2</bs-button>
            <bs-button color="blue-grey">3</bs-button>
          </div>
          <div class="btn-group mr-2" role="group" aria-label="Second group">
            <bs-button color="blue-grey">4</bs-button>
            <bs-button color="blue-grey">5</bs-button>
          </div>
          <div class="btn-group mr-2" role="group" aria-label="Third group">
            <bs-button color="blue-grey">6</bs-button>
          </div>
        </div>
      </div>
      <div class="mb-3 col-12 col-xl">
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group mr-2" role="group" aria-label="First group">
            <bs-button color="blue-grey" outlined>1</bs-button>
            <bs-button color="blue-grey" outlined>2</bs-button>
            <bs-button color="blue-grey" outlined>3</bs-button>
          </div>
          <div class="btn-group mr-2" role="group" aria-label="Second group">
            <bs-button color="blue-grey" outlined>4</bs-button>
            <bs-button color="blue-grey" outlined>5</bs-button>
          </div>
          <div class="btn-group mr-2" role="group" aria-label="Third group">
            <bs-button color="blue-grey" outlined>6</bs-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Component Reference

### Properties

<div class="cmp-property">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| active <bs-badge color="unique text-white">v-model</bs-badge> | `Boolean` | `false`  | The button component state. |
| block    | `Boolean` | `false`  | Create block level button or match button's width to the parent width. See [Bootstrap](https://getbootstrap.com/docs/4.5/components/buttons/#sizes) for more information. |
| color    | `String`  | `'default'` | Change component color appearance. Any of [MDBootstrap colors](#/reference/colors) or [Material colors](#/reference/colors) variant can be used. <bs-badge variant="warning">updated</bs-badge> |
| disabled | `Boolean` | `false`  | The `<button>` element state. |
| dropdown-toggle | `Boolean` | `false` | Render as `dropdown` button when used inside `<bs-menu>` component. |
| flat     | `Boolean` | `false`  | Create button with flat style or not. |
| href     | `String`  |      | Render as `<a>` element and define its `href` property and apply button styles to the `<a>` element. |
| icon     | `String`/`Array` |   | The icon to display inside component. Use any valid [FontAwesome Icon](https://fontawesome.com/icons?d=gallery&s=solid&m=free) name. |
| icon-fixed    | `Boolean` | `false`  | Render Fontawesome Icon with fixed width. |
| icon-flip     | `String`  |   | Flip the icon, valid values are: `horizontal`, `vertical`, `both`. |
| icon-position | `String`  | `'left'` | Place icon at `left` (before text) or at `right` (after text) |
| icon-pulse    | `Boolean` | `false` | Apply **pulse** animation to the icon. |
| icon-rotation | `Number`  |   | Rotate the icon, valid values are: `90`, `180`, `270`. |
| icon-size     | `String`  |   | Render the icon with predefined size, valid values are: `xs`, `sm`, `lg`, `1x`, `2x`, `3x`, `4x`, `5x`, `6x`, `7x`, `8x`, `9x`, `10x`. |
| icon-spin     | `Boolean` | `false` | Apply **spin** animation to the icon. |
| mode     | `String`  | `'default'` | Create specific button style, valid values are: `default`, `icon`, `floating` |
| outlined | `Boolean` | `false` | Create button with outlined style or not. |
| pill     | `Boolean` | `false` | Create button with rounded-pill style or not. <bs-badge>v1.1.0</bs-badge> |
| raised   | `Boolean` | `false` | Create button with raised style or not. |
| ripple-off | `Boolean` | `false` | Enabled or disabled ripple effect. |
| rounded  | `Boolean` | `false` | Create button with rounded style or not. <bs-badge>v1.1.0</bs-badge> |
| size     | `String`  |   | Create button with predefined size, valid values are: `xs`, `sm`, `lg`. |
| transparent | `Boolean`  | `false` | Create button with transparent style or not. |
| type     | `String`  | `'button'`  | The value to set to the button's `type` attribute. Valid values are: `button`, `submit`, `reset` |

</div>


### Events

<div class="cmp-property">

| Name   | Argument Type | Description |
|--------|---------------|-------------|
| click  | `MouseEvent` | Fires when a non-disabled button is clicked. |
| input  | `Boolean` | Used to update component state of `active` property. |

</div>


### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| default | Main content |

</div>


<style scoped>
.my-demo-wrapper > .btn {
  margin-bottom: 16px;
}
</style>
