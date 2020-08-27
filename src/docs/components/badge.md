:::lead
**BsBadge** is small, and a lightweight component. It can be used for adaptive taggging such as adding context 
to just about any content.
:::


## Overview

**BsBadge** can scale to match the size of the immediate parent element by using relative font sizing.

:::demo
```html
<div class="my-demo-wrapper">
    <h2>Example heading <bs-badge>New</bs-badge></h2>
    <h3>Example heading <bs-badge>New</bs-badge></h3>
    <h4>Example heading <bs-badge>New</bs-badge></h4>
    <h5>Example heading <bs-badge>New</bs-badge></h5>
    <h6>Example heading <bs-badge>New</bs-badge></h6>
</div>
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
<div class="my-demo-wrapper">
    <bs-button color="primary">
      Notifications 
      <bs-badge variant="light" class="ml-2">9</bs-badge>
    </bs-button>
</div>
<style scoped>
.my-demo-wrapper {
  margin: 24px;
}
</style>
```
:::


## Contextual variations

Add any of the following variants via the variant property to change the appearance of a `<bs-badge>`: 
`primary`, `secondary`, `success`, `warning`, `danger`, `info`, `light`, `dark`. If no variant specified 
default will be used.

:::demo
```html
<div class="my-demo-wrapper">
    <bs-badge class="mr-1" variant="primary">Primary</bs-badge>
    <bs-badge class="mr-1" variant="secondary">Secondary</bs-badge>
    <bs-badge class="mr-1" variant="success">Success</bs-badge>
    <bs-badge class="mr-1" variant="danger">Danger</bs-badge>
    <bs-badge class="mr-1" variant="warning">Warning</bs-badge>
    <bs-badge class="mr-1" variant="info">Info</bs-badge>
    <bs-badge class="mr-1" variant="light">Light</bs-badge>
    <bs-badge variant="dark">Dark</bs-badge>
</div>
<style scoped>
.my-demo-wrapper {
  margin: 24px;
}
</style>
```
:::

If you wish to use different variation, you can change its appeareance by explicitly define the value 
of `color` property. All color variants can be used as badge background and text color.

:::demo
```html
<div class="my-demo-wrapper">
    <bs-badge class="mr-1" color="primary-color-dark text-white">primary-color-dark</bs-badge>
    <bs-badge class="mr-1" color="default-color-dark text-white">default-color-dark</bs-badge>
    <bs-badge class="mr-1" color="elegant-color text-white">elegant-color</bs-badge>
    <bs-badge class="mr-1" color="stylish-color text-white">stylish-color</bs-badge>
    <bs-badge class="mr-1" color="unique-color text-white">unique-color</bs-badge>
    <bs-badge class="mr-1" color="red text-white">red</bs-badge>
    <bs-badge class="mr-1" color="pink text-white">pink</bs-badge>
    <bs-badge color="purple text-white">purple</bs-badge>
</div>
<style scoped>
.my-demo-wrapper {
  margin: 24px;
}
</style>
```
:::


## Badge Style

#### Pill Style

Set `<bs-badge>` property `type=pill` to make badges more rounded with a larger border-radius and
additional horizontal padding.

:::demo
```html
<div class="my-demo-wrapper">
    <bs-badge class="mr-1" type="pill" variant="primary">Primary</bs-badge>
    <bs-badge class="mr-1" type="pill" variant="secondary">Secondary</bs-badge>
    <bs-badge class="mr-1" type="pill" variant="success">Success</bs-badge>
    <bs-badge class="mr-1" type="pill" variant="danger">Danger</bs-badge>
    <bs-badge class="mr-1" type="pill" variant="warning">Warning</bs-badge>
    <bs-badge class="mr-1" type="pill" variant="info">Info</bs-badge>
    <bs-badge class="mr-1" type="pill" variant="light">Light</bs-badge>
    <bs-badge type="pill" variant="dark">Dark</bs-badge>
</div>
<style scoped>
.my-demo-wrapper {
  margin: 24px;
}
</style>
```
:::

#### Label Style

Set `<bs-badge>` property `type=label` to make badges little larger than normal with a slight larger 
border-radius and additional horizontal padding. 

:::demo
```html
<div class="my-demo-wrapper">
    <bs-badge class="mr-1" type="label" variant="primary">Primary</bs-badge>
    <bs-badge class="mr-1" type="label" variant="secondary">Secondary</bs-badge>
    <bs-badge class="mr-1" type="label" variant="success">Success</bs-badge>
    <bs-badge class="mr-1" type="label" variant="danger">Danger</bs-badge>
    <bs-badge class="mr-1" type="label" variant="warning">Warning</bs-badge>
    <bs-badge class="mr-1" type="label" variant="info">Info</bs-badge>
    <bs-badge class="mr-1" type="label" variant="light">Light</bs-badge>
    <bs-badge type="label" variant="dark">Dark</bs-badge>
</div>
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
<div class="my-demo-wrapper">
    <bs-badge class="mr-1" tag="a" variant="primary" href="#/components/badge">Primary</bs-badge>
    <bs-badge class="mr-1" tag="a" variant="secondary" href="#/components/badge">Secondary</bs-badge>
    <bs-badge class="mr-1" tag="a" variant="success" href="#/components/badge">Success</bs-badge>
    <bs-badge class="mr-1" tag="a" variant="danger" href="#/components/badge">Danger</bs-badge>
    <bs-badge class="mr-1" tag="a" variant="warning" href="#/components/badge">Warning</bs-badge>
    <bs-badge class="mr-1" tag="a" variant="info" href="#/components/badge">Info</bs-badge>
    <bs-badge class="mr-1" tag="a" variant="light" href="#/components/badge">Light</bs-badge>
    <bs-badge tag="a" variant="dark" href="#/components/badge">Dark</bs-badge>
</div>
<style scoped>
.my-demo-wrapper {
  margin: 24px;
}
</style>
```
:::


## Component Reference

#### Properties

<div class="cmp-property">

| Property | Type     | Default  | Description |
|----------|----------|----------|-------------|
| color    | `String` | `'default-color text-white'` | Change component color appearance. See [Reference - Color Variants](#/reference/colors) for more information. |
| tag      | `String` | `'span'` | Html tag use to render the component. |
| type     | `String` |   | Change badge shape appearance, as `pill` or `label`. |
| variant  | `String` |   | Change the component appearance, with Bootstrap style. |

</div>

