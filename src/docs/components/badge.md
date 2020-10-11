:::lead
**BsBadge** is small, and a lightweight component. It can be used for adaptive tagging such as 
adding context to just about any content.
:::


## Overview

**BsBadge** can scale to match the size of the immediate parent element by using relative font sizing.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <h2>Example heading <bs-badge>New</bs-badge></h2>
    <h3>Example heading <bs-badge>New</bs-badge></h3>
    <h4>Example heading <bs-badge>New</bs-badge></h4>
    <h5>Example heading <bs-badge>New</bs-badge></h5>
    <h6>Example heading <bs-badge>New</bs-badge></h6>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  margin: 24px;
}
</style>
```
:::

**BsBadge** can be used as part of links or buttons to provide a counter (or similar flag).

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-button color="primary">
      Notifications 
      <bs-badge variant="light" class="ml-2">9</bs-badge>
    </bs-button>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  margin: 24px;
}
</style>
```
:::


## Contextual variations

Add any of the following variants via the `variant` property to change the appearance of a `<bs-badge>`: 
`primary`, `secondary`, `success`, `warning`, `danger`, `info`, `light`, `dark`. If no variant specified 
the `color` property will be used.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-badge variant="primary">Primary</bs-badge>
    <bs-badge variant="secondary">Secondary</bs-badge>
    <bs-badge variant="success">Success</bs-badge>
    <bs-badge variant="danger">Danger</bs-badge>
    <bs-badge variant="warning">Warning</bs-badge>
    <bs-badge variant="info">Info</bs-badge>
    <bs-badge variant="light">Light</bs-badge>
    <bs-badge variant="dark">Dark</bs-badge>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  margin: 24px;
}
</style>
```
:::

If you wish to use different variation, you can change its appearance by explicitly define the value 
of `color` property. All color variants can be used as badge background and text color.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-badge color="primary-color-dark text-white">primary-color-dark</bs-badge>
    <bs-badge color="default-color-dark text-white">default-color-dark</bs-badge>
    <bs-badge color="elegant-color text-white">elegant-color</bs-badge>
    <bs-badge color="stylish-color text-white">stylish-color</bs-badge>
    <bs-badge color="unique-color text-white">unique-color</bs-badge>
    <bs-badge color="red text-white">red</bs-badge>
    <bs-badge color="pink text-white">pink</bs-badge>
    <bs-badge color="purple text-white">purple</bs-badge>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  margin: 24px;
}
</style>
```
:::


## Badge Style

### Pill Style

Set `<bs-badge>` property `type=pill` to make badges more rounded with a larger border-radius and
additional horizontal padding.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-badge type="pill" variant="primary">Primary</bs-badge>
    <bs-badge type="pill" variant="secondary">Secondary</bs-badge>
    <bs-badge type="pill" variant="success">Success</bs-badge>
    <bs-badge type="pill" variant="danger">Danger</bs-badge>
    <bs-badge type="pill" variant="warning">Warning</bs-badge>
    <bs-badge type="pill" variant="info">Info</bs-badge>
    <bs-badge type="pill" variant="light">Light</bs-badge>
    <bs-badge type="pill" variant="dark">Dark</bs-badge>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  margin: 24px;
}
</style>
```
:::

### Label Style

Set `<bs-badge>` property `type=label` to make badges little larger than normal with a slight larger 
border-radius and additional horizontal padding. 

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-badge type="label" variant="primary">Primary</bs-badge>
    <bs-badge type="label" variant="secondary">Secondary</bs-badge>
    <bs-badge type="label" variant="success">Success</bs-badge>
    <bs-badge type="label" variant="danger">Danger</bs-badge>
    <bs-badge type="label" variant="warning">Warning</bs-badge>
    <bs-badge type="label" variant="info">Info</bs-badge>
    <bs-badge type="label" variant="light">Light</bs-badge>
    <bs-badge type="label" variant="dark">Dark</bs-badge>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  margin: 24px;
}
</style>
```
:::


## Actionable Badges

Quickly provide actionable badges with hover and focus states by specifying the `tag` and `href` property.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-badge tag="a" variant="primary" href="#/components/badge">Primary</bs-badge>
    <bs-badge tag="a" variant="secondary" href="#/components/badge">Secondary</bs-badge>
    <bs-badge tag="a" variant="success" href="#/components/badge">Success</bs-badge>
    <bs-badge tag="a" variant="danger" href="#/components/badge">Danger</bs-badge>
    <bs-badge tag="a" variant="warning" href="#/components/badge">Warning</bs-badge>
    <bs-badge tag="a" variant="info" href="#/components/badge">Info</bs-badge>
    <bs-badge tag="a" variant="light" href="#/components/badge">Light</bs-badge>
    <bs-badge tag="a" variant="dark" href="#/components/badge">Dark</bs-badge>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  margin: 24px;
}
</style>
```
:::


## Component Reference

### Properties

<div class="cmp-property">

| Property | Type     | Default  | Description |
|----------|----------|----------|-------------|
| color    | `String` | `'default-color text-white'` | The badge color appearance. See [Reference - Color Variants](#/reference/colors) for more information. |
| tag      | `String` | `'span'` | The html tag is used to render the badge. |
| type     | `String` |   | Create badge with `pill` or `label` style. |
| variant  | `String` |   | Create contextual badge with [Bootstrap theme color](https://getbootstrap.com/docs/4.5/components/badge/#contextual-variations). |

</div>


### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| default | Main content |

</div>

<style scoped>
.my-demo-wrapper > .badge {
  margin-right: .5rem;
}
</style>