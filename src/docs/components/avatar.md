:::lead
**BsAvatar** is a component which are typically used to display a user profile as a picture, icon, or 
short text. The **BsAvatar** component provides several properties for customizing its appearance such 
as size and roundness.
:::


## Overview

`<bs-avatar>` is a lightweight component, which render inline by default, so that are vertically 
centered beside any adjoining plain text. It also can be used as children of other components.

:::demo
```html
<template>
  <div class="my-demo-wrapper d-flex justify-content-center">
    <bs-avatar class="m-2" img-src="http://vue-mdbootstrap.fajarconsultant.com/img/kitty-1.jpg" circle></bs-avatar>
    <bs-avatar class="bg-teal text-white m-2" icon="bs-folder-shared" circle></bs-avatar>
    <bs-avatar class="bg-deep-orange darken-3 text-white m-2" icon="user-friends" circle></bs-avatar>
    <bs-avatar class="bg-grey-600 darken-3 text-white m-2"
               style="font-size: 150%" text="BS" circle></bs-avatar>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  margin: 24px;
}
</style>
```
:::

## Shape Style

:::demo
```html
<template>
  <div class="my-demo-wrapper d-flex justify-content-center">
    <bs-avatar class="m-2 bg-teal" img-src="http://vue-mdbootstrap.fajarconsultant.com/img/kitty-1.jpg" circle></bs-avatar>
    <bs-avatar class="bg-teal text-white m-2" icon="bs-folder-shared" rounded></bs-avatar>
    <bs-avatar class="bg-deep-orange darken-3 text-white m-2" icon="user-friends"></bs-avatar>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  margin: 24px;
}
</style>
```
:::


## Sizing

By default, `<bs-avatar>` is sized to `48px`. You can change the size of the `<bs-avatar>` by changing 
the size property explicitly. Numbers get converted to pixel values. Any other value must include 
the units (such as `px`, `em`, or `rem`). You can also create an avatar with different height and 
width by explicitly define its size property as `object`, such as `{height: 40, width: 56}`.

:::demo
```html
<template>
  <div class="my-demo-wrapper d-flex justify-content-center">
    <bs-avatar class="bg-deep-orange darken-3 text-white m-2"
               size="40" icon="user" circle></bs-avatar>
    <bs-avatar class="bg-purple darken-3 text-white m-2"
               style="font-size: 170%" size="3rem" icon="user" circle></bs-avatar>
    <bs-avatar class="bg-indigo darken-3 text-white m-2" icon="user"
               :size="{height: 40, width: 56}" circle></bs-avatar>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  margin: 24px;
}
</style>
```
:::


## Use Inside ListTile

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="mx-auto" style="max-width: 500px">
      <bs-list-view class="border rounded-lg">
        <bs-list-tile>
          <bs-list-tile-leading size="42">
            <bs-avatar img-src="http://vue-mdbootstrap.fajarconsultant.com/img/kitty-2.jpg" size="40" circle></bs-avatar>
          </bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Avatar using external image</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <bs-badge>22</bs-badge>
          </bs-list-tile-action>
        </bs-list-tile>
        <bs-divider></bs-divider>
        <bs-list-tile>
          <bs-list-tile-leading size="42">
            <bs-avatar class="bg-teal text-white" size="40"
                       icon="bs-folder-shared" circle></bs-avatar>
          </bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Avatar using icon listed on Icon examples</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <bs-badge>8</bs-badge>
          </bs-list-tile-action>
        </bs-list-tile>
        <bs-divider></bs-divider>
        <bs-list-tile>
          <bs-list-tile-leading size="42">
            <bs-avatar class="bg-deep-orange darken-3 text-white" 
                       size="40" icon="user-friends" circle></bs-avatar>
          </bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Avatar using icon listed on FontAwesome</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <bs-badge>15</bs-badge>
          </bs-list-tile-action>
        </bs-list-tile>
        <bs-divider></bs-divider>
        <bs-list-tile>
          <bs-list-tile-leading size="42">
            <bs-avatar class="bg-grey-600 text-white" size="40"
                       text="BS" circle></bs-avatar>
          </bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>This avatar created using Text</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <bs-badge>5</bs-badge>
          </bs-list-tile-action>
        </bs-list-tile>
      </bs-list-view>
    </div>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  margin-top: 24px;
}
</style>
```
:::


## Component Reference

### Properties

<div class="cmp-property">

| Property      | Type        | Default  | Description |
|---------------|-------------|----------|-------------|
| center        | `Boolean`   | `false`  | Centers the icon, image or text horizontally and vertically. |
| circle        | `Boolean`   | `false`  | Create avatar with **circle** shape. |
| icon          | `String`    |          | The icon to display as avatar. Use prefix `bs-` to use internal icon, otherwise use valid [FontAwesome Icon](https://fontawesome.com/icons?d=gallery&s=solid&m=free) name. |
| icon-flip     | `String`    |  | Flip the icon, valid values are: `horizontal`, `vertical`, `both`. |
| icon-pulse    | `Boolean`   | `false`  | Apply **pulse** animation to the icon. |
| icon-rotation | `Number`    |          | Rotate the icon, valid values are: `90`, `180`, `270`. |
| icon-spin     | `Boolean`   | `false`  | Apply **spin** animation to the icon. |
| img-src       | `String`    |          | Set the image location or image url to display as avatar |
| rounded       | `Boolean`   | `false`  | Create avatar with **rounded** shape. If `circle` and `rounded` are not set, then avatar shape will become `square`. |
| size          | `Number`/`String`/`Object` | `48` | The avatar size |
| text          | `String`    |          | The text to display inside the component. Use short text (1 to 3 characters) to properly display it. The text will be transformed to uppercase. |

</div>
