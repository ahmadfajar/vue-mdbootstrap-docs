:::lead
**BsAvatar** is a component which are typically used to display a user profile as a picture, icon, or short text. 
**BsAvatar** provides several properties for customizing its appearance such as size and roundness.
:::


## Overview

**BsAvatar** is a lightweight component, which render inline by default, so that are vertically 
centered beside any adjoining plain text. It also can be used as children of other components.

#### Basic Examples

:::demo
```html
<div class="my-demo-wrapper d-flex justify-content-center">
    <bs-avatar class="m-2" img-src="img/kitty-1.jpg" circle></bs-avatar>
    <bs-avatar class="bg-teal text-white m-2" icon="bs-folder-shared" circle></bs-avatar>
    <bs-avatar class="bg-deep-orange darken-3 text-white m-2" icon="user-friends" circle></bs-avatar>
    <bs-avatar class="bg-grey-600 darken-3 text-white m-2"
               style="font-size: 150%" text="BS" circle></bs-avatar>
</div>
<style scoped>
.my-demo-wrapper {
  margin: 24px;
}
</style>
```
:::


#### Use Inside ListTile

:::demo
```html
<div class="my-demo-wrapper border rounded-lg">
  <bs-list-view class="rounded-lg">
    <bs-list-tile>
      <bs-list-tile-leading size="42">
        <bs-avatar img-src="img/kitty-2.jpg" size="40" circle></bs-avatar>
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
        <bs-avatar class="bg-deep-orange darken-3 text-white" size="40"
                   icon="user-friends" circle></bs-avatar>
      </bs-list-tile-leading>
      <bs-list-tile-content>
        <bs-list-tile-title>Avatar using icon listed on FontAwesome website</bs-list-tile-title>
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
<style scoped>
.my-demo-wrapper {
  margin: 24px;
}
</style>
```
:::

## Sizing

By default, `<bs-avatar>` is sized to `48px`. You can change the size of the `<bs-avatar>` by changing 
the size property explicitly. Numbers get converted to pixel values. Any other value must include the units 
(such as `px`, `em`, or `rem`). You can also create an avatar with different height and width by explicitly
define its size property as `object`, such as `{height: 40, width: 56}`.

:::demo
```html
<div class="my-demo-wrapper d-flex justify-content-center">
    <bs-avatar class="bg-deep-orange darken-3 text-white m-2"
               size="40" icon="user" circle></bs-avatar>
    <bs-avatar class="bg-purple darken-3 text-white m-2"
               style="font-size: 170%" size="3rem" icon="user" circle></bs-avatar>
    <bs-avatar class="bg-indigo darken-3 text-white m-2" icon="user"
               :size="{height: 40, width: 56}" circle></bs-avatar>
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

| Property      | Type        | Default  | Description |
|---------------|-------------|----------|-------------|
| center        | `Boolean`   | `false`  | Centers the icon, image or text horizontally and vertically |
| circle        | `Boolean`   | `false`  | Applies component shape |
| rounded       | `Boolean`   | `false`  | Applies component shape. If `circle` and `rounded` are not set, then avatar shape will become `square`. |
| img-src       | `String`    |          | The image location or image url |
| icon          | `String`    |          | The icon to display inside component. Use prefix `bs-` to use internal icon, otherwise use valid [FontAwesome Icon](https://fontawesome.com/icons?d=gallery&s=solid&m=free) name. |
| icon-rotation | `Number`    |          | If using FontAwesome icon, it will set the icon rotation. Valid values are: `90`, `180`, `270`. See [vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome) for more information. |
| icon-spin     | `Boolean`   | `false`  | If using FontAwesome icon, it will set the icon is spinned or not. See [vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome) for more information. |
| icon-pulse    | `Boolean`   | `false`  | If using FontAwesome icon, it will set the icon is spinned or not. See [vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome) for more information. |
| size          | `Number`/`String`/`Object` | `48` | Change the component size |
| text          | `String`    |          | The text to display inside the component. Use short text (1 to 3 characters) to properly display it. The text will be transformed to uppercase. |

</div>
