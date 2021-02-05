:::lead
**BsIcon** is small, and a lightweight component. It can be used inside almost any component. The SVG source 
for the icon comes from [Google Material Icons](https://material.io/resources/icons/?style=baseline).
:::


## Overview

Each of **BsIcon**'s name has alias. If the name is `ArrowBack` then its alias are: `arrow-back` and 
`arrow_back`. You can use either its alias or its name as value for `icon` property. Following are 
list of available internal icons that you can use.

<IconLibs></IconLibs>


## Icon Features

`<bs-icon>` has some basic features.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row justify-content-center">
      <div class="col-4 col-sm-3 col-xl-2 text-center">
        <h5>Rotation</h5>
        <bs-icon icon="folder-shared" size="36" rotation="90"></bs-icon>
        <bs-icon icon="folder-shared" size="36" rotation="180"></bs-icon>      
        <bs-icon icon="folder-shared" size="36" rotation="270"></bs-icon>      
      </div>
      <div class="col-4 col-sm-3 col-xl-2 text-center">
        <h5>Flip</h5>
        <bs-icon icon="folder-shared" size="36" flip="horizontal"></bs-icon>      
        <bs-icon icon="folder-shared" size="36" flip="vertical"></bs-icon>      
        <bs-icon icon="folder-shared" size="36" flip="both"></bs-icon>      
      </div>
      <div class="col-4 col-sm-3 col-xl-2 text-center">
        <h5>Animation</h5>
        <bs-icon icon="rotate-right" size="36" spin></bs-icon>      
        <bs-icon icon="rotate-right" size="36" pulse></bs-icon>      
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  margin: 24px;
}
</style>
```
:::


## Icon Styles

`<bs-icon>` can be styles with css class or inline style.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row justify-content-center">
      <div class="col-4 col-sm-3 col-xl-2 d-flex justify-content-center">
        <bs-icon icon="folder" size="28" class="text-amber"></bs-icon>
      </div>
      <div class="col-4 col-sm-3 col-xl-2 d-flex justify-content-center">
        <bs-icon icon="folder-shared" size="48" class="text-blue"></bs-icon>
      </div>
      <div class="col-4 col-sm-3 col-xl-2">
        <div class="bg-dark-blue d-flex justify-content-center mx-auto icon-box-56">
          <bs-icon icon="folder-shared" size="36" class="text-white"></bs-icon>      
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  margin: 24px;

  .icon-box-56 {
    height: 56px;
    width: 56px;
  }

}
</style>
```
:::


## Use Inside Button

`<bs-icon>` can also be used inside other component.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row justify-content-center">
      <div class="col-4 col-sm-3 col-xl-2">
        <bs-button color="blue">
          <div class="d-flex">
            <bs-icon icon="arrow-back" size="24"></bs-icon>
            <span class="pl-2">Back</span>
          </div>
        </bs-button>
      </div>
      <div class="col-4 col-sm-3 col-xl-2">
        <bs-button color="blue">
          <div class="d-flex">
            <span class="pr-2">Next</span>
            <bs-icon icon="arrow-forward" size="24"></bs-icon>
          </div>
        </bs-button>
      </div>
      <div class="col-4 col-sm-3 col-xl-2">
        <bs-button color="danger">
          <bs-icon icon="delete" size="24"></bs-icon>
          Delete
        </bs-button>
      </div>
    </div>
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
| flip     | `string` |  | Flip the icon, valid values are: `horizontal`, `vertical`, `both`. <bs-badge>v1.1.0</bs-badge> |
| height   | `Number` | `20` | The icon's height in pixel. |
| icon <bs-badge variant="danger">required</bs-badge> | `String` |  | The icon's name or alias. |
| pulse    | `Boolean`| `false` | Apply **pulse** animation to the icon. <bs-badge>v1.1.0</bs-badge> |
| rotation | `Number` |  | Rotate the icon, valid values are: `90`, `180`, `270`. <bs-badge>v1.1.0</bs-badge> |
| size     | `Number` |  | Shortcut to create equal height and width. |
| spin     | `Boolean`| `false` | Apply **spin** animation to the icon. <bs-badge>v1.1.0</bs-badge> |
| width    | `Number` | `20` | The icon's width in pixel. |

</div>


<style scoped>
.icon-box-56 {
  height: 56px;
  width: 56px;
}
</style>
