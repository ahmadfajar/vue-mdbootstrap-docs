:::lead
**BsSwitch** is a component which allows user to select an option. These components must be used 
with the `v-model` to maintain the component state.
:::

## Overview

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-switch v-model="switch1">
      Enable power meter
    </bs-switch>
    <p class="mt-3">Value: <b>{{ switch1 }}</b></p>
  </div>
</template>

<script>
export default {
    data: () => ({
        switch1: false,
    }),
}
</script>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Styling

### Color

Any color variant from [MdBootstrap colors](#/reference/colors) can be applied to the `<bs-switch>`.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-switch v-model="switch1" color="purple">
      Enable power meter
    </bs-switch>
    <p class="mt-3">Value: <b>{{ switch1 }}</b></p>
  </div>
</template>

<script>
export default {
    data: () => ({
        switch1: false,
    }),
}
</script>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


### Label Position

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div style="max-width: 600px">
      <div class="form-group row">
        <label for="fullname" class="col-md-4 col-form-label">Full Name</label>      
        <div class="col-md-8">
          <input type="text" class="form-control" id="fullname">
        </div>  
      </div>
      <div class="form-group">
        <bs-switch v-model="switch2" 
                   color="primary" 
                   label-position="left" 
                   label-class="col-md-4">
          Strong Password
        </bs-switch>
      </div>    
    </div>
  </div>
</template>

<script>
export default {
    data: () => ({
        switch2: false,
    }),
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

| Property    | Type      | Default | Description |
|-------------|-----------|---------|-------------|
| checked <bs-badge color="unique text-white">v-model</bs-badge> | `Boolean`/`String`/`Number`/`Object` | | The value monitored by `v-model` to maintain checked state. |
| color       | `String`  | `'default'` | Applies one of the [MdBootstrap colors](#/reference/colors) variants to the component. |
| disabled    | `Boolean` | `false` | Enable/disable the component and the `<input>` element. |
| false-value | `Boolean` | `false` | Sets value for falsy state. |
| id          | `String`  |  | Sets the `<input>` element `ID` attribute. By default this property is auto generates. |
| label-class | `String`/`Array` |  | Additional css class for the text label. |
| label-position | `String` | `'right'` | The switch text label position, valid values are: `left`, `right`. |
| name        | `String`/`Number`   |  | Sets the `<input>` element `name` attribute. |
| readonly    | `Boolean` | `false` | Put the component in readonly state and sets the `<input>` element `readonly` attribute. |
| required    | `Boolean` | `false` | Sets the `<input>` element `required` attribute. |
| true-value  | `Boolean` | `true`  | Sets value for truthy state. |
| value       | `Boolean`/`String`/`Number`/`Object` |  | The `<input>` element `value` attribute. |

</div>


### Events

<div class="cmp-property">

| Name   | Argument Type | Description |
|--------|---------------|-------------|
| change | `Boolean`/`String`/`Number`/`Object` | Used to update component state of `checked` property. |

</div>

### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| default | Contents for switch text label. |

</div>


<script src="./script/switch.js"></script>
