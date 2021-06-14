:::lead
**BsRadio** is a component that allows user to select an option. These components must be used 
with the `v-model` to maintain the component state.
:::


## Basic Example

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div v-for="idx in 3" :key="'radio-' + idx">
        <bs-radio :value="idx" v-model="radio1">
          Radio {{ idx }}
        </bs-radio>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio1: 0,      
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


## Radio Group

**BsRadioGroup** is a collection of **BsRadio**. Rather than create multiple `<bs-radio>`, 
it's better to create single `<bs-radio-group>`. `<bs-radio-group>` is well integrated with 
bootstrap css class `form-group` and can be integrated with external validator such as 
[vuelidate](https://www.npmjs.com/package/vuelidate). 

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-radio-group v-model="selectedFavoriteColors" :items="favoriteColors">
      <label class="col-12">Standalone Radio Group</label>
    </bs-radio-group>
    <bs-divider class="my-3"></bs-divider>
    <div class="form-group">
      <bs-radio-group v-model="selectedFavoriteFruits" :items="favoriteFruits">
        <label class="col-md-3 col-lg-2 col-form-label">With form-group</label>
      </bs-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFavoriteColors: null,
      selectedFavoriteFruits: null,
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
By default `<bs-radio-group>` property will be treated as `<bs-radio>` property. You can 
override this behaviour by explicitly define the `property:value` via items object property.
:::

### Multi Column

With **BsRadioGroup**, collection of `<bs-radio>` can be arranged in multi-columns. When the 
number of `<bs-radio>` exceed the number of maximum columns, then the remaining `<bs-radio>` 
will be placed on the next row.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-radio-group v-model="selectedItems" :items="dummyItems" :columns="3">
        <label class="col-md-2 col-form-label">Multi Column</label>
      </bs-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItems: null,
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
Multi columns are closely tied to the bootstrap class `col-lg-*`. Which means if the media query
matches `@media (min-width: 992px)`, it will be displayed correctly. And if the media query 
matches `@media (min-width: 768px)`, it will be served in two columns only.
:::


## Color Style

Any color variant from [MDBootstrap colors](#/reference/colors) can be applied to the `<bs-radio-group>`
and `<bs-radio>`. You can make each `<bs-radio>` have different color or applied default color
to the `<bs-radio-group>`. 

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-radio-group v-model="selectedFruits" :items="favoriteFruits" color="primary">
        <label class="col-md-3 col-lg-2 col-form-label">Single color</label>
      </bs-radio-group>
    </div>
    <div class="form-group">
      <bs-radio-group v-model="selectedColors" :items="colorsItems">
        <label class="col-md-3 col-lg-2 col-form-label">Different Color</label>
      </bs-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedColors: null,
      selectedFruits: null,
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

### BsRadio - `<bs-radio>`

#### Properties
 
<div class="cmp-property">

| Property    | Type      | Default   | Description |
|-------------|-----------|-----------|-------------|
| checked <bs-badge color="unique text-white">v-model</bs-badge> | `Boolean`/`String`/`Number` | | The value monitored by `v-model` to maintain checked state. |
| color       | `String`  | `'default'` | Applies one of the [MDBootstrap colors](#/reference/colors) variants to the component. |
| disabled    | `Boolean` | `false`   | Enable/disable the radio component and the `<input>` element. |
| id          | `String`  |  | Sets the `<input>` element `ID` attribute. This property value is auto generates. |
| name        | `String`  |  | Sets the `<input>` element `name` attribute. |
| readonly    | `Boolean` | `false` | Put the component in readonly state and sets the `<input>` element `readonly` attribute. |
| required    | `Boolean` | `false` | Sets the `<input>` element `required` attribute. |
| value <bs-badge variant="danger">required</bs-badge> | `Boolean`/`String`/`Number` | `'on'` | The `<input>` element `value` attribute. |

</div>

#### Events

<div class="cmp-property">

| Name   | Argument Type | Description |
|--------|---------------|-------------|
| change | `Boolean`/`String`/`Number` | Used to update component state of `checked` property. |

</div>

#### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| default | Contents for radio label. |

</div>


### BsRadioGroup - `<bs-radio-group>`

#### Properties
 
<div class="cmp-property">

| Property | Type      | Default | Description |
|----------|-----------|---------|-------------|
| color       | `String`  | `'default'` | Sets default color to be applied. Any of the [MDBootstrap colors](#/reference/colors) variants can be applied to the component. |
| columns     | `Number`  |  | Sets the maximum number of columns to display the radio. When the number of items exceed the number of columns, then the remaining items will be displayed on the next row. |
| disabled    | `Boolean` | `false`   | Sets default disabled state. |
| external-validator | `Object` |  | The external validator plugin to be used when validate the field value. See [Reference - Form Validation](#/reference/form-validation), to learn how to implement the validation. |
| help-text   | `String`  |  | The help text to display below the field component. |
| items <bs-badge variant="danger">required</bs-badge> | `Object[]` |  | The collection of `<bs-checkbox>` property-value. |
| name        | `String` |  | Sets default `<input>` element `name` attribute. |
| persistent-help-text | `Boolean` | `true` | Keeps the help text visible when the radio group is not focused. |
| readonly    | `Boolean` | `false` | Sets default readonly state. |
| required    | `Boolean` | `false` | Sets default `<input>` element `required` attribute. |
| value <bs-badge color="unique text-white">v-model</bs-badge> | `Boolean`/`String`/`Number` |  | The value monitored by `v-model` to maintain checked state. |

</div>

#### Events

<div class="cmp-property">

| Name   | Argument Type | Description |
|--------|---------------|-------------|
| change | `Boolean`/`String`/`Number` | Used to update component state of `value` property. |

</div>

#### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| default | Contents for radio-group's label. |
| helpText | Contents for radio-group's help text. Use this slot if you want to customize the help text. |

</div>


<script src="./script/radio.js"></script>
