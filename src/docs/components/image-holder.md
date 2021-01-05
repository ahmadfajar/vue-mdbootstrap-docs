:::lead
**BsImageHolder** is a lightweight component which is primarily used to create SVG shape to visualize 
image placeholder.
:::


## Examples

### Rectangle Example

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-6 col-lg-3 mb-3">
        <bs-image-holder place-holder="Placeholder Text"></bs-image-holder>
      </div>
      <div class="col-6 col-lg-3 mb-3">
        <bs-image-holder 
          bg-color="#1976d2" 
          place-holder="BgColor: #1976d2" 
          x-pos="26%"></bs-image-holder>
      </div>
      <div class="col-6 col-lg-3 mb-3">
        <bs-image-holder 
          bg-color="#006064" 
          place-holder="BgColor: #006064" 
          x-pos="26%" 
          rounded>
        </bs-image-holder>
      </div>
      <div class="col-6 col-lg-3 mb-3">
        <bs-image-holder 
          bg-color="#f57f17" 
          text-color="#ffffff"
          place-holder="BgColor: #f57f17" 
          x-pos="26%" 
          rounded>
        </bs-image-holder>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  margin: 24px 24px 60px;
}
</style>
```
:::


### Non Rectangle Example

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-6 col-lg-3 mb-3">
        <bs-image-holder 
          size="200px" 
          bg-color="#8e24aa" 
          place-holder="BgColor: #8e24aa" 
          x-pos="20%" 
          circle 
          center>
        </bs-image-holder>
      </div>
      <div class="col-6 col-lg-3 mb-3">
        <bs-image-holder 
          bg-color="#1565c0" 
          place-holder="BgColor: #1565c0" 
          height="200px" 
          x-pos="26%" 
          circle 
          center>
        </bs-image-holder>
      </div>
      <div class="col-6 col-lg-3 mb-3">
        <bs-image-holder 
          bg-color="#d32f2f" 
          place-holder="BgColor: #d32f2f" 
          width="150" 
          x-pos="12%" 
          circle 
          center>
        </bs-image-holder>
      </div>
      <div class="col-6 col-lg-3 mb-3">
        <bs-image-holder 
          bg-color="#f57f17" 
          text-color="#ffffff"
          place-holder="BgColor: #f57f17" 
          x-pos="26%" 
          circle>
        </bs-image-holder>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  margin: 24px 24px 60px;
}
</style>
```
:::

:::warning
Some property is not responsive. Use it with care.
:::


## Component Reference

### Properties

<div class="cmp-property">

| Property     | Type        | Default  | Description |
|--------------|-------------|----------|-------------|
| bg-color     | `String`    | `'#868e96'` | Component background color, must be in html hex coloring number. |
| center       | `Boolean`   | `false`  | Centers the created component horizontally and vertically inside element container |
| circle       | `Boolean`   | `false`  | Create SVG with **circle** shape. |
| height       | `Number`/`String` |    | The component height. Numbers get converted to pixel values. Any other value must include the units (such as `px`, `em`, `rem`, `%`). |
| place-holder | `String`    |          | The text to display inside created SVG. |
| rounded      | `Boolean`   | `false`  | Create avatar with **rounded** shape. If `circle` and `rounded` are not set, then avatar shape will become `square`. |
| size         | `Number`/`String` |    | Shortcut to create ImageHolder with equal height and width. |
| text-color   | `String`    | `'#dee2e6'`  | Text color, must be in html hex coloring number. |
| width        | `Number`/`String` | `'100%'` | The component width. Numbers get converted to pixel values. Any other value must include the units (such as `px`, `em`, `rem`, `%`). |
| x-pos        | `Number`/`String` |          | Text placement at x position. |
| y-pos        | `Number`/`String` |          | Text placement at x position. |

</div>
