:::lead
The `v-tooltip` directive is useful for conveying information when a user hovers over an element.
:::


## Overview

Use the `v-tooltip` directive on any element or component where you would like a tooltip to appear.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-md text-center">
        <bs-button 
          v-tooltip="'I am a tooltip'" 
          color="indigo">
          Button
        </bs-button>
      </div>
      <div class="col-md">
        <bs-icon 
          v-tooltip="'I am a tooltip'" 
          icon="folder" 
          size="28" 
          class="text-amber" />
      </div>
      <div class="col-md text-center">
        <span v-tooltip="'I am a tooltip'">This text has a tooltip</span>
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


## Display Placement

A tooltip can be aligned to any of the four sides of the activator element.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-md text-center">
        <bs-button 
          v-tooltip="{content: 'Tooltip on top side', placement: 'top'}" 
          color="indigo">
          Top
        </bs-button>
      </div>
      <div class="col-md text-center">
        <bs-button 
          v-tooltip="{content: 'Tooltip on bottom side', placement: 'bottom'}" 
          color="indigo">
          Bottom
        </bs-button>
      </div>
      <div class="col-md text-center">
        <bs-button 
          v-tooltip="{content: 'Tooltip on left side', placement: 'left'}" 
          color="indigo">
          Left
        </bs-button>
      </div>
      <div class="col-md text-center">
        <bs-button 
          v-tooltip="{content: 'Tooltip on right side', placement: 'right'}" 
          color="indigo">
          Right
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
