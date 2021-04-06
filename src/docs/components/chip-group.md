:::lead
**BsChipGroup** extends the **BsChip** component by providing groupable functionality. 
It is used for creating groups of selections using chips.
:::

*Available since Vue MDBootstrap `v1.2.0`*


## Overview

**BsChipGroup** is a collection of **BsChip**. Rather than create multiple `<bs-chip>`, 
it’s better to create single `<bs-chip-group>`. **BsChipGroup** provides **select**
functionality, which will come in handy when working with more chips. The `items` property 
is used as data source to create the chips.

:::demo
```html
<template>
  <div class="my-demo-wrapper chip-demo1 mx-auto">
    <bs-chip-group v-model="selectedChips1" :items="chipItems1"></bs-chip-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedChips1: null,
      chipItems1: [
        {text: 'Arts'},
        {text: 'Creative Writers'},
        {text: 'Drawers'},
        {text: 'Foods'},
        {text: 'Shopping'},
        {text: 'Tech'},
        {text: 'Vacation'},
      ],
    }
  }
}
</script>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Multi Rows 

Use `column` property to wrap chip items if the total width of chip items exceeds the
container's width.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
        <bs-card shadow>
          <bs-card-body>
            <bs-chip-group 
              v-model="selectedChips2" 
              :items="chipItems2" 
              active-class="bg-rgba-purple-slight text-secondary-color-dark" 
              column></bs-chip-group>
          </bs-card-body>
        </bs-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedChips2: null,
      chipItems2: [
        {text: 'Arts'},
        {text: 'Creative Writers'},
        {text: 'Drawers'},
        {text: 'Foods'},
        {text: 'Home'},
        {text: 'Shopping'},
        {text: 'Tech'},
        {text: 'Vacation'},
        {text: 'Work'},
      ],
    }
  }
}
</script>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Multiple Selection

By default **BsChipGroup** works in single selection mode. Use `multiple` property to
enable multiple selection mode.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
        <bs-card shadow>
          <bs-card-body>
            <bs-chip-group 
              v-model="selectedMultiple" 
              :items="chipItems2" 
              active-class="bg-rgba-purple-slight text-secondary-color-dark" 
              column 
              multiple></bs-chip-group>
          </bs-card-body>
        </bs-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedMultiple: [],
      chipItems2: [
        {text: 'Arts'},
        {text: 'Creative Writers'},
        {text: 'Drawers'},
        {text: 'Foods'},
        {text: 'Home'},
        {text: 'Shopping'},
        {text: 'Tech'},
        {text: 'Vacation'},
        {text: 'Work'},
      ],
    }
  }
}
</script>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Filter Chips

Filter chips use tags or descriptive words to filter content. It creates an alternative 
visual style that communicates to the user that the chip is selected. They are a good 
alternative to toggle buttons or checkboxes. Use `checked-icon` property to enable this
feature. Additionally, you can use `active-color` or `active-class` property to change
the appearance of the selected chips.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
        <bs-card shadow>
          <bs-card-body>
            <h4>Choose amenities</h4>
            <bs-chip-group 
              v-model="selectedAmenities" 
              :items="amenities" 
              checked-icon 
              column 
              outlined></bs-chip-group>
          </bs-card-body>
          <bs-divider></bs-divider>
          <bs-card-body>
            <h4>Choose neighborhoods</h4>
            <bs-chip-group 
              v-model="selectedNeighborhoods" 
              :items="neighborhoods" 
              active-color="secondary-color" 
              checked-icon 
              column 
              outlined></bs-chip-group>
          </bs-card-body>
        </bs-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedAmenities: null,
      selectedNeighborhoods: null,
      amenities: [
        {text: 'Elevator'},
        {text: 'Washer / Dryer'},
        {text: 'Fireplace'},
        {text: 'Wheelchair access'},
        {text: 'Dogs ok'},
        {text: 'Cats ok'},
      ],
      neighborhoods: [
        {text: 'Snowy Rock Place'},
        {text: 'Honeylane Circle'},
        {text: 'Donna Drive'},
        {text: 'Elaine Street'},
        {text: 'Court Street'},
        {text: 'Kennedy Park'},
      ],
    }
  }
}
</script>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Sliding Pages

Sliding Pages is used when the total width of chip items exceed the container's width, 
but still wants to keep it within a single row. When enabled, it creates a visual style
like slide carousel. *Left and right arrows button* is provided as a navigation functionality.
They can be used to navigate to the previous/next page. This feature can be enabled
using the `slider-arrows` property explicitly.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
        <bs-card class="py-3 px-1" shadow>
          <bs-chip-group 
            v-model="selectedChips3" 
            :items="chipItems2" 
            active-class="bg-rgba-purple-slight text-secondary-color-dark" 
            multiple 
            slider-arrows></bs-chip-group>
        </bs-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedChips3: null,
      chipItems2: [
        {text: 'Arts'},
        {text: 'Creative Writers'},
        {text: 'Drawers'},
        {text: 'Foods'},
        {text: 'Home'},
        {text: 'Shopping'},
        {text: 'Tech'},
        {text: 'Vacation'},
        {text: 'Work'},
      ],
    }
  }
}
</script>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Component Reference

### Properties

<div class="cmp-property">

| Property     | Type      | Default  | Description |
|--------------|-----------|----------|-------------|
| active-class | `String`  |  | Custom css class to apply when the Chip is in **active/selected** state. See [Reference - Color Variants](#/reference/colors) for more information. |
| active-color | `String`  |  | Predefine color appearance when the Chip is in **active/selected** state. Any of [MDBootstrap colors](#/reference/colors) or [Material colors](#/reference/colors) variant can be used. |
| arrows-color | `String`  | `'secondary'` | Slider button color appearance. Any of [MDBootstrap colors](#/reference/colors) or [Material colors](#/reference/colors) variant can be used. |
| checked-icon | `Boolean` | `false`  | Show checked icon when the Chip is selected. |
| color        | `String`  | `'light-grey'` | Chip color appearance. Any of [MDBootstrap colors](#/reference/colors) or [Material colors](#/reference/colors) variant can be used. |
| column       | `Boolean` | `false`  | Enable multi rows if total width of items exceeds the container's width. |
| img-circle   | `Boolean` | `true` | Create Chip's avatar with **circle** shape. |
| img-padding  | `Boolean` | `true` | Adjust Chip's avatar size to match the Chip height by eliminating the margin around the avatar. |
| items <bs-badge variant="danger">required</bs-badge> | `Object[]` |  | Collection of chip items. **[1]** |
| label        | `Boolean` | `false` | Remove circle edges. |
| multiple     | `Boolean` | `false` | Allow multiple selection or not. |
| outlined     | `Boolean` | `false` | Create Chip with outlined style or not. |
| size         | `String`  |   | Create Chip with predefined size, valid values are: `sm` (small), `lg` (large). |
| slider-arrows | `Boolean` | `false` | Show slider's button or not. |
| value <bs-badge color="unique text-white">v-model</bs-badge> | `Array`/`String`/`Number` | `true` | Value monitored by `v-model` for the selected items. |

</div>
<br>

**[1]** `items` is a collection of object to create a chip, valid properties are:

<div class="cmp-property">

| Property   | Type      |  Description |
|------------|-----------|--------------|
| disabled    | `Boolean` | The Chip component state, if `true` will prevent selection of the Chip. |
| dismissible | `Boolean` | When set, display the close (`x`) button to dismiss/hide the Chip. |
| faStyles    | `Object`  | Adjust FontAwesome Icon size with css rules like `font-size` or `height` and `width`. |
| href        | `String`  | Render the chip as `<a>` element and define its `href` property and apply styles to the `<a>` element. |
| icon        | `String`  | The icon to display within the Chip. Use prefix `bs-` to use internal icon, otherwise use valid [FontAwesome Icon](https://fontawesome.com/icons?d=gallery&s=solid&m=free) name. |
| iconFlip    | `String`  | Flip the icon, valid values are: `horizontal`, `vertical`, `both`. |
| iconPulse   | `Boolean` | Apply **pulse** animation to the icon. |
| iconRotation | `Number`  | Rotate the icon, valid values are: `90`, `180`, `270`. |
| iconSpin     | `Boolean` | Apply **spin** animation to the icon. |
| imgSrc       | `String`  | Enable avatar and set the image location url. |
| text <bs-badge variant="danger">required</bs-badge> | `String` | The Chip label or text. |

</div>


### Events

<div class="cmp-property">

| Name       | Argument Type | Description |
|------------|---------------|-------------|
| change     | `Array`/`String`/`Number` | Triggers when selected items is changed. |
| item-close | `Object` | Triggers when close (`x`) button is clicked or a chip has been dismissed. |

</div>


<script src="./script/chip-group.js"></script>

<style lang="scss">
  .chip-demo1 {
    max-width: 100% !important;
    
    @media (min-width: 800px) {
      width: 620px !important;
    }
  }
</style>