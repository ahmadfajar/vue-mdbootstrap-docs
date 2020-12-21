:::lead
**BsTooltip** is a component which is useful for conveying information when a user 
hovers over an element.
:::


## Overview

The Tooltip component can be wrapped on almost any element.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-md text-center">
        <bs-tooltip content="I am a tooltip">
          <bs-button color="indigo">Button</bs-button>
        </bs-tooltip>
      </div>
      <div class="col-md">
        <bs-tooltip content="I am a tooltip">
          <bs-icon icon="folder" size="28" class="text-amber"></bs-icon>
        </bs-tooltip>
      </div>
      <div class="col-md text-center">
        <bs-tooltip content="I am a tooltip">
          <span>This text has a tooltip</span>
        </bs-tooltip>
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

:::info
The Tooltip component can also be used using directive `v-tooltip`, see 
[documentation](#/directives/tooltip) how to use the `v-tooltip` directive.
:::


## Display Placement

A tooltip can be aligned to any of the four sides of the activator element.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-md text-center">
        <bs-tooltip content="Tooltip on top side" placement="top">
          <bs-button color="indigo">Top</bs-button>
        </bs-tooltip>
      </div>
      <div class="col-md text-center">
        <bs-tooltip content="Tooltip on bottom side" placement="bottom">
          <bs-button color="indigo">Bottom</bs-button>
        </bs-tooltip>
      </div>
      <div class="col-md text-center">
        <bs-tooltip content="Tooltip on left side" placement="left">
          <bs-button color="indigo">Left</bs-button>
        </bs-tooltip>
      </div>
      <div class="col-md text-center">
        <bs-tooltip content="Tooltip on right side" placement="right">
          <bs-button color="indigo">Right</bs-button>
        </bs-tooltip>
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

| Property  | Type      | Default  | Description |
|-----------|-----------|----------|-------------|
| content   | `string`  |          | The tooltip content. |
| disabled  | `Boolean` | `false`  | Put the component into disable state. |
| max-width | `Number`/`String` |  | The tooltip maximum width. |
| placement | `String`  | `'bottom'` | The tooltip display placement. |
| width     | `Number`/`String`|   | The tooltip width. |

</div>

