:::lead
**BsIcon** is small, and a lightweight component. It can be used inside almost any component. The SVG source 
for the icon comes from [Google Material Icons](https://material.io/resources/icons/?style=baseline).
:::


## Overview

Each of **BsIcon**'s name has alias. If the name is `ArrowBack` then its alias are: `arrow-back` and 
`arrow_back`. You can use its alias or its name as value for `icon` property. Following are list of 
available internal icons that you can use.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row text-center">
      <div v-for="name in iconLibs" 
           class="col-4 col-sm-3 col-xl-2 mb-4" 
           :key="name">
        <bs-icon :icon="name" size="32"></bs-icon>
        <div class="text-truncate">{{ name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
const iconLibs = [
    "Add",
    "Apps",
    "ArrowBack",
    "ArrowDropDown",
    "ArrowDropUp",
    "ArrowForward",
    "ArrowLeft",
    "ArrowRight",
    "BorderAll",
    "Calendar",
    "ChevronLeft",
    "ChevronRight",
    "Clear",
    "CreateFolder",
    "Dashboard",
    "Delete",
    "ExpandLess",
    "ExpandMore",
    "FirstPage",
    "Folder",
    "FolderOpen",
    "FolderShared",
    "FolderSpecial",
    "OutlineInfo",
    "LastPage",
    "MenuBars",
    "MoreHoriz",
    "MoreVert",
    "Reorder",
    "RotateLeft",
    "RotateRight",
    "ViewModule",
    "ZoomIn",
    "ZoomOut",
];

export default {
    data() {
        return {
            iconLibs
        }
    },
}
</script>

<style scoped>
.my-demo-wrapper {
  margin: 24px;
}
</style>
```
:::


## Icon Features

`<bs-icon>` has some basic features.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row justify-content-center">
      <div class="col-4 col-sm-3 col-xl-2">
        <h5>Rotation</h5>
        <bs-icon icon="folder-shared" size="36" rotation="90"></bs-icon>
        <bs-icon icon="folder-shared" size="36" rotation="180"></bs-icon>      
        <bs-icon icon="folder-shared" size="36" rotation="270"></bs-icon>      
      </div>
      <div class="col-4 col-sm-3 col-xl-2">
        <h5>Flip</h5>
        <bs-icon icon="folder-shared" size="36" flip="horizontal"></bs-icon>      
        <bs-icon icon="folder-shared" size="36" flip="vertical"></bs-icon>      
        <bs-icon icon="folder-shared" size="36" flip="both"></bs-icon>      
      </div>
      <div class="col-4 col-sm-3 col-xl-2">
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
          <span class="d-flex flex-row">
            <bs-icon icon="arrow-back" size="24"></bs-icon>
            Back        
          </span>
        </bs-button>
      </div>
      <div class="col-4 col-sm-3 col-xl-2">
        <bs-button color="blue">
          <span class="d-flex flex-row">
            Next        
            <bs-icon icon="arrow-forward" size="24"></bs-icon>
          </span>
        </bs-button>
      </div>
      <div class="col-4 col-sm-3 col-xl-2">
        <bs-button color="danger">
          <bs-icon icon="delete" size="24" class="d-flex"></bs-icon>
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
| flip     | `string` |  | Flip the icon, valid values are: `horizontal`, `vertical`, `both`. |
| height   | `Number` | `20` | The icon's height in pixel. |
| icon <bs-badge color="danger text-white">required</bs-badge> | `String` |  | The icon's name or alias. |
| pulse    | `Boolean`| `false` | Apply **pulse** animation to the icon. |
| rotation | `Number` |  | Rotate the icon, valid values are: `90`, `180`, `270`. |
| size     | `Number` |  | Shorcut to create equal height and width. |
| spin     | `Boolean`| `false` | Apply **spin** animation to the icon. |
| width    | `Number` | `20` | The icon's width in pixel. |

</div>


<script src="./script/icon.js"></script>

<style scoped>
.icon-box-56 {
  height: 56px;
  width: 56px;
}
</style>
