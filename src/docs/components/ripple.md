:::lead
**BsRipple** is small and lightweight component which is used to show ripple animation 
when `click` or `touch` event occured.
:::


## Overview

`<bs-ripple>` can be placed inside almost any element or component. Numerous components use 
`<bs-ripple>` internally, such as **BsButton**, **BsTab**, **BsListTile**, **BsListNavItem**. 
Example below, shows you basic usage of `<bs-ripple>`.

:::demo
```html
<template>
  <div class="my-demo-wrapper d-flex justify-content-center">
    <bs-ripple 
      class="d-flex justify-content-center align-items-center bg-white border rounded mr-3" 
      style="max-width:150px; height:150px">
      <b>Click Me</b>
    </bs-ripple> 
    <bs-ripple 
      class="d-flex justify-content-center align-items-center bg-primary text-white border rounded mr-3" 
      style="max-width:150px; height:150px">
      <b>Click Me</b>
    </bs-ripple> 
    <bs-ripple 
      class="d-flex justify-content-center align-items-center bg-success text-white border rounded" 
      style="max-width:150px; height:150px">
      <b>Click Me</b>
    </bs-ripple>      
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

| Property | Type      | Default | Description |
|----------|-----------|---------|-------------|
| active   | `Boolean` | `false` | Ripple animation state. |
| centered | `Boolean` | `false` | Start animation from center or not. If `true` then animation always start from center, otherwise animation will start from mouse click or touch position. |
| disabled | `Boolean` | `false` | Enable or disable *Ripple* component. |
| tag      | `String`  | `'div'` | Html tag used to render the component. |

</div>


### Events

<div class="cmp-property">

| Name   | Argument Type | Description |
|--------|---------------|-------------|
| update:active | `Boolean` | Fires when `click` or `touch` event occured on a non-disabled *Ripple* component. |

</div>


### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| default | Main content |

</div>
