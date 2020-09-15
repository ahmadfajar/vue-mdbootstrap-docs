:::lead
**BsCheckbox** is a component which allows user to select an option. These components must be used 
with the `v-model` to maintain the component state.
:::

## Overview

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-checkbox value="accepted" v-model="checkbox1">
      I accept the terms and use
    </bs-checkbox>
    <p class="mt-3">Value: <b>{{ checkbox1 }}</b></p>
  </div>
</template>

<script>
export default {
    data() {
      return {
        checkbox1: null,
      }
    },
}
</script>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Checkbox Group

**BsCheckboxGroup** is a collection of **BsCheckbox**. Rather than create multiple `<bs-checkbox>`, 
it's better to create single `<bs-checkbox-group>`. `<bs-checkbox-group>` is well integrated with 
bootstrap css class `form-group` and can be integrated with external validator such as 
[vuelidate](https://www.npmjs.com/package/vuelidate). 

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-checkbox-group v-model="selectedFavoriteColors" :items="favoriteColors">
      <label class="col-12">Standalone Checkbox Group</label>
    </bs-checkbox-group>
    <bs-divider class="mt-3"></bs-divider>
    <div class="form-group">
      <bs-checkbox-group v-model="selectedFavoriteFruits" :items="favoriteFruits">
        <label class="col-md-3 col-lg-2 col-form-label">With form-group</label>
      </bs-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        selectedFavoriteColors: [],
        selectedFavoriteFruits: [],
        favoriteColors: [
            {value: 'red', label: 'Red'},
            {value: 'green', label: 'Green'},
            {value: 'blue', label: 'Blue'},
            {value: 'purple', label: 'Purple'},
        ],
        favoriteFruits: [
            {value: 'Orange', label: 'Orange'},
            {value: 'Apple', label: 'Apple'},
            {value: 'Pineapple', label: 'Pineapple'},
            {value: 'Grape', label: 'Grape'},
        ],
      }
    },
}
</script>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::

:::info
By default `<bs-checkbox-group>` property will be treated as `<bs-checkbox>` property. You can 
override this behaviour by explicitly define the `property:value` via items object property.
:::

### Multi Column

With **BsCheckboxGroup**, collection of `<bs-checkbox>` can be arranged in multi-columns. When the 
number of `<bs-checkbox>` exceed the number of maximum columns, then the remaining `<bs-checkbox>` 
will be placed on the next row.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-checkbox-group v-model="selectedItems" :items="dummyItems" :columns="3">
        <label class="col-md-2 col-form-label">Multi Column</label>
      </bs-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        selectedItems: [],
        dummyItems: [
            {value: 1, label: 'Item 1'},
            {value: 2, label: 'Item 2'},
            {value: 3, label: 'Item 3'},
            {value: 4, label: 'Item 4'},
            {value: 5, label: 'Item 5'},
            {value: 6, label: 'Item 6'},
        ],
      }
    },
}
</script>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::

:::warning
Multi columns are closely tied to the bootstrap class `col-lg- *`. Which means if the media query
matches `@media (min-width: 992px)`, it will be displayed correctly. And if the media query 
matches `@media (min-width: 768px)`, it will be served in two columns only.
:::


## Color Style

Any color variant from [MdBootstrap colors](#/reference/colors) can be applied to the `<bs-checkbox-group>`
and `<bs-checkbox>`. You can make each `<bs-checkbox>` have different color or applied default color
to the `<bs-checkbox-group>`. 

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-checkbox-group v-model="selectedFruits" :items="favoriteFruits" color="primary">
        <label class="col-md-3 col-lg-2 col-form-label">Single color</label>
      </bs-checkbox-group>
    </div>
    <div class="form-group">
      <bs-checkbox-group v-model="selectedColors" :items="colorsItems">
        <label class="col-md-3 col-lg-2 col-form-label">Different Color</label>
      </bs-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        selectedColors: [],
        selectedFruits: [],
        colorsItems: [
            {value: 'red', label: 'Red', color: 'red'},
            {value: 'green', label: 'Green', color: 'green'},
            {value: 'blue', label: 'Blue', color: 'blue'},
            {value: 'purple', label: 'Purple', color: 'purple'},
        ],
        favoriteFruits: [
            {value: 'Orange', label: 'Orange'},
            {value: 'Apple', label: 'Apple'},
            {value: 'Pineapple', label: 'Pineapple'},
            {value: 'Grape', label: 'Grape'},
        ],
      }
    },
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

### BsCheckbox - `<bs-checkbox>`

#### Properties
 
<div class="cmp-property">

| Property    | Type      | Default   | Description |
|-------------|-----------|-----------|-------------|
| checked <bs-badge color="unique text-white">v-model</bs-badge> | `Boolean`/`String`/`Number`/`Object` | | The checkbox value monitored by `v-model` to maintain checked state. |
| color       | `String`  | `'default'` | Applies one of the [MdBootstrap colors](#/reference/colors) variants to the component. |
| disabled    | `Boolean` | `false`   | Enable/disable the component and the `<input>` element. |
| false-value | `Boolean` | `false`   | Sets value for falsy state. |
| id          | `String`  |  | Sets the `<input>` element `ID` attribute. By default this property is auto generates. |
| indeterminate | `Boolean` | `false` | Sets an indeterminate state for the checkbox. |
| name        | `String`/`Number`   |  | Sets the `<input>` element `name` attribute. |
| readonly    | `Boolean` | `false` | Put the component in readonly state and sets the `<input>` element `readonly` attribute. |
| required    | `Boolean` | `false` | Sets the `<input>` element `required` attribute. |
| true-value  | `Boolean` | `true`  | Sets value for truthy state. |
| value       | `Boolean`/`String`/`Number`/`Object` |  | The `<input>` element `value` attribute. |

</div>

#### Events

<div class="cmp-property">

| Name   | Argument Type | Description |
|--------|---------------|-------------|
| change | `Boolean`/`String`/`Number`/`Object` | Used to update component state of `checked` property. |

</div>

#### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| default | Contents for checkbox label. |

</div>


### BsCheckboxGroup - `<bs-checkbox-group>`

#### Properties
 
<div class="cmp-property">

| Property | Type      | Default | Description |
|----------|-----------|---------|-------------|
| color       | `String`  | `'default'` | Sets default color to be applied. Any of the [MdBootstrap colors](#/reference/colors) variants can be applied to the component. |
| columns     | `Number`  |  | Sets the maximum number of columns to display the checkbox. When the number of items exceed the number of columns, then the remaining items will be displayed on the next row. |
| disabled    | `Boolean` | `false`   | Sets default disabled state. |
| external-validator | `Object` |  | The external validator plugin to be used to validate the field value. |
| help-text   | `String`  |  | The help text to display below the field component. |
| indeterminate | `Boolean` | `false` | Sets default indeterminate state for the checkbox. |
| items       | `Object[]` |  | The collection of `<bs-radio>` property-value. |
| name        | `String`/`Number` |  | Sets default `<input>` element `name` attribute. |
| persistent-help-text | `Boolean` | `false` | Show persistent help text or not. |
| readonly    | `Boolean` | `false` | Sets default readonly state. |
| required    | `Boolean` | `false` | Sets default `<input>` element `required` attribute. |
| value <bs-badge color="unique text-white">v-model</bs-badge> | `Array` |  | The value monitored by `v-model` to maintain checked state. |

</div>

#### Events

<div class="cmp-property">

| Name   | Argument Type | Description |
|--------|---------------|-------------|
| change | `Array` | Used to update component state of `value` property. |

</div>

#### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| default | Contents for checkbox-group's label. |
| helptext | Contents for checkbox-group's help text. Use this slot if you want to customize the help text. |

</div>


<script src="./script/checkbox.js"></script>
