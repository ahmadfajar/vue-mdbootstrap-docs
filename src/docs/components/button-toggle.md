:::lead
**BsButtonToggle** is a group of buttons with toggle capabilities. It is primarily used to visualize 
choices with different approach. 
:::


## Overview

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card-content type="subtitle" class="mb-4">
      What are you drinking?
    </bs-card-content>
    <div class="row mb-3">
      <label class="col-md-3 col-xl-2 col-form-label">
        Normal State
      </label>
      <div class="col-md">
        <bs-button-toggle v-model="selectedDrink" 
                          :items="drinks">
        </bs-button-toggle>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-md-3 col-xl-2 col-form-label">
        Readonly State
      </label>
      <div class="col-md">
        <bs-button-toggle v-model="selectedDrink" 
                          color="indigo" 
                          :items="drinks" 
                          readonly>
        </bs-button-toggle>
      </div>
    </div>
    <div class="row">
      <label class="col-md-3 col-xl-2 col-form-label">
        Disabled State
      </label>
      <div class="col-md">
        <bs-button-toggle v-model="selectedDrink" 
                          :items="drinks" 
                          disabled>
        </bs-button-toggle>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drinks: [{
        value: 'tea',
        label: 'Tea'
      }, {
        value: 'coffee',
        label: 'Coffee'
      }, {
        value: 'beer',
        label: 'Beer'
      }],
      selectedDrink: null,
    }
  }
}
</script>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Toggle Styles

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card-content type="subtitle" class="mb-4">
      How is the weather today?
    </bs-card-content>
    <div class="row mb-3">
      <label class="col-md-3 col-xl-2 col-form-label">
        Raised style
      </label>
      <div class="col-md">
        <bs-button-toggle v-model="selectedWeather" 
                          color="primary" 
                          :items="weathers" 
                          raised>
        </bs-button-toggle>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-md-3 col-xl-2 col-form-label">
        Outlined style
      </label>
      <div class="col-md">
        <bs-button-toggle v-model="selectedWeather" 
                          color="indigo" 
                          :items="weathers" 
                          outlined>
        </bs-button-toggle>
      </div>
    </div>
    <div class="row">
      <label class="col-md-3 col-xl-2 col-form-label">Flat style</label>
      <div class="col-md">
        <bs-button-toggle v-model="selectedWeather" 
                          color="red" 
                          :items="weathers" 
                          flat>
        </bs-button-toggle>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weathers: [{
        value: 'sunny',
        label: 'Sunny',
        icon: 'cloud-sun',
        iconSize: 'lg'
      }, {
        value: 'rain',
        label: 'Rain',
        icon: 'cloud-rain',
        iconSize: 'lg'
      }, {
        value: 'heavy-rain',
        label: 'Heavy Rain',
        icon: 'cloud-showers-heavy',
        iconSize: 'lg'
      }],
      selectedWeather: null
    }
  }
}
</script>

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

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| color    | `String`  | `'default'` | Default buttons color appearance. Any of [MDBootstrap colors](#/reference/colors) variant can be used. |
| disabled | `Boolean` | `false`  | The default `<input>` element state.  |
| flat     | `Boolean` | `false`  | Create button toggle with flat style or not. |
| icon-position | `String`  | `'left'` | Place icon at `left` (before text) or at `right` (after text). |
| id       | `String`  |    | The component ID. |
| items    | `Object[]` |   | Collection of button properties. **[1]** |
| multiple | `Boolean` | `false` | Allow multiple selection or not. The default is single selection. |
| name     | `String`  |   | The `<input>` element name. |
| outlined | `Boolean` | `false` | Create button toggle with outlined style or not. |
| raised   | `Boolean` | `false` | Create button toggle with raised style or not. |
| readonly | `Boolean` | `false`  | The default `<input>` element state. |
| required | `Boolean` | `false`  | When placed inside `<form>`, the item must be selected, before submitted. |
| size     | `String`  |   | Create buttons with predefined size, valid values are: `xs`, `sm`, `lg`. |
| toggle-color | `String`  |   | Button color when selected. Any of [MDBootstrap colors](#/reference/colors) variant can be used. |
| value <bs-badge color="unique text-white">v-model</bs-badge> | `String`/`Number`/`Boolean`/`Array`  |   | Value monitored by `v-model` that represents the selected value. |

</div>

#### Items Properties

**[1]** Items are collection of button objects and have properties as described below:

<div class="cmp-property">

| Property  | Type      | Description |
|-----------|-----------|-------------|
| value <bs-badge color="danger text-white">required</bs-badge> | `String`/`Number`/`Boolean`/`Array` | The item value. |
| label <bs-badge color="danger text-white">required</bs-badge> | `String`  | The item label.  |
| icon      | `String`  | The icon to display inside component. Use any valid [FontAwesome Icon](https://fontawesome.com/icons?d=gallery&s=solid&m=free) name. |
| iconSize  | `String`  | Render the icon with predefined size, valid values are: `xs`, `sm`, `lg`. |
| iconFixed | `Boolean` | Render Fontawesome Icon with fixed width. |
| iconFlip  | `Boolean` | Flip the icon, valid values are: `horizontal`, `vertical`, `both`. |
| iconPulse | `Boolean` | Apply **pulse** animation to the icon. |
| iconRotation | `Number` | Rotate the icon, valid values are: `90`, `180`, `270`. |
| iconSpin  | `Boolean` | Apply **spin** animation to the icon. |
| id        | `String`  | Item `<input>` element ID. |
| name      | `String`  | Item `<input>` element name. It is used when `multiple` is `true`. |
| disabled  | `Boolean` | Item `<input>` element state. |
| readonly  | `Boolean` | Item `<input>` element state. |

</div>

### Events

<div class="cmp-property">

| Name   | Argument Type | Description |
|--------|---------------|-------------|
| change | `String`/`Number`/`Boolean`/`Array` | Triggers when a button or item is selected. |

</div>


<script src="./script/button-toggle.js"></script>
