:::lead
**BsButtonToggleField** is a group of buttons with toggle capabilities, validation and 
is treated like a form field. It is primarily used to visualize choices with different 
approach. 
:::


## Overview

**BsButtonToggleField** component mimics the HTML5 `<input>` element. This means that you 
can add attributes like `required`, `readonly`, or `disabled` and it will react to them to 
give the best experience. You can also use `v-model` directive to create two-way data bindings 
on the `value` property. This is useful to control or maintain the `value` property.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card-content type="subtitle" class="mb-4">
      What are you drinking?
    </bs-card-content>
    <div class="form-group">
      <bs-button-toggle-field 
        v-model="selectedDrink" 
        :items="drinks">
        <label class="col-md-3 col-xl-2 col-form-label">
          Normal State
        </label>
      </bs-button-toggle-field>
    </div>
    <div class="form-group">
      <bs-button-toggle-field 
        v-model="selectedDrink" 
        :items="drinks" 
        color="indigo"
        readonly>
        <label class="col-md-3 col-xl-2 col-form-label">
          Readonly State
        </label>
      </bs-button-toggle-field>
    </div>
    <div class="form-group">
      <bs-button-toggle-field 
        v-model="selectedDrink" 
        :items="drinks"
        disabled>
        <label class="col-md-3 col-xl-2 col-form-label">
          Disabled State
        </label>
      </bs-button-toggle-field>
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


## Multiple Selection

**BsButtonToggleField** also support multiple selection mode. Use and define the 
`multiple` property explicitly to enable multiple selection mode.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card-content type="subtitle" class="mb-4">
      What is your favorites drink?
    </bs-card-content>
    <div class="form-group">
      <bs-button-toggle-field 
        v-model="favoriteDrinks" 
        :items="drinks" 
        color="info" 
        multiple>
        <label class="col-md-3 col-xl-2 col-form-label">
          My favorites are
        </label>
      </bs-button-toggle-field>
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
      favoriteDrinks: [],
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

**BsButtonToggleField** comes with four predefined styles. Other than *default* style,
example below, shows you how to enable *Raised style*, *Outlined style* or *Flat style*.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card-content type="subtitle" class="mb-4">
      How is the weather today?
    </bs-card-content>
    <div class="form-group">
      <bs-button-toggle-field 
        v-model="selectedWeather" 
        :items="weathers" 
        color="primary" 
        raised>
        <label class="col-md-3 col-xl-2 col-form-label">
          Raised style
        </label>
      </bs-button-toggle-field>
    </div>
    <div class="form-group">
      <bs-button-toggle-field 
        v-model="selectedWeather" 
        :items="weathers" 
        color="indigo" 
        outlined>
        <label class="col-md-3 col-xl-2 col-form-label">
          Outlined style
        </label>
      </bs-button-toggle-field>
    </div>
    <div class="form-group">
      <bs-button-toggle-field 
        v-model="selectedWeather" 
        :items="weathers" 
        color="red" 
        flat>
        <label class="col-md-3 col-xl-2 col-form-label">
          Flat style
        </label>
      </bs-button-toggle-field>
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


## Help Text

The `help-text` property on `<bs-button-toggle-field>` adds the provided string beneath the 
*Toggle Field*. And using `persistent-help-text` keeps the help text visible when the 
*Toggle Field* is not focused.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card-content type="subtitle" class="mb-4">
      Persistent help text
    </bs-card-content>
    <div class="form-group">
      <bs-button-toggle-field 
        v-model="todayWheather" 
        :items="weathers" 
        color="primary" 
        help-text="Select a wheather for today">
        <label class="col-md-3 col-xl-2 col-form-label">
          Wheather Today
        </label>
      </bs-button-toggle-field>
    </div>
    <bs-card-content type="subtitle" class="my-4">
      Non-persistent help text
    </bs-card-content>
    <div class="form-group">
      <bs-button-toggle-field 
        v-model="favoriteDrink" 
        :items="drinks"
        :persistent-help-text="false" 
        color="primary" 
        help-text="Select one of the options above as your favorite drink">
        <label class="col-md-3 col-xl-2 col-form-label">
          Favorite Drink
        </label>
      </bs-button-toggle-field>
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
      favoriteDrink: null,
      todayWheather: null,
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


## Used With Other Input Controls

`<bs-button-toggle-field>` its main purpose is to be used as a form element. Example below, 
shows you how to mixed `<bs-button-toggle-field>` with another form elements.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div style="max-width: 700px">
      <div class="form-group">
        <bs-text-field>
          <label class="col-md-3 col-form-label">
            Your Name
          </label>
        </bs-text-field>
      </div>
      <div class="form-group">
        <bs-button-toggle-field 
          v-model="favoriteDrink1" 
          :items="drinks" 
          color="primary">
          <label class="col-md-3 col-form-label">
            Favorite Drink
          </label>
        </bs-button-toggle-field>
      </div>
      <div class="form-group">
        <bs-radio-group 
          v-model="occupation" 
          :items="occupations" 
          :columns="1" 
          color="primary">
          <label class="col-md-3 col-form-label">
            Your Occupation
          </label>
        </bs-radio-group>
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
      occupations: [
        {value: 1, label: 'Computer and IT'},
        {value: 2, label: 'Scientists and Research'},
        {value: 3, label: 'Consultant'},
        {value: 4, label: 'Other'},
      ],
      occupation: null,
      favoriteDrink1: null,
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
| external-validator   | `Object` |    | Sets external validator plugin to be used when validate the field value. See [Reference - Form Validation](#/reference/form-validation), to learn how to implement the validation.  |
| flat     | `Boolean` | `false`  | Create button toggle with flat style or not. |
| help-text     | `String`  |          | The help text to display below the field component. |
| icon-position | `String`  | `'left'` | Place icon at `left` (before text) or at `right` (after text). |
| id       | `String`  |    | The component ID. |
| items    | `Object[]` |   | Collection of button properties. **[1]** |
| multiple | `Boolean` | `false` | Allow multiple selection or not. The default is single selection. |
| name     | `String`  |   | The `<input>` element name. |
| outlined | `Boolean` | `false` | Create button toggle with outlined style or not. |
| persistent-help-text | `Boolean` | `true` | Keeps help text visible when the component is not focused. |
| raised   | `Boolean` | `false` | Create button toggle with raised style or not. |
| readonly | `Boolean` | `false`  | The default `<input>` element state. |
| required | `Boolean` | `false`  | When placed inside `<form>`, the item must be selected, before submitted. |
| size     | `String`  |   | Create buttons with predefined size, valid values are: `xs`, `sm`, `lg`. |
| toggle-color | `String`  |   | Button color when selected. Any of [MDBootstrap colors](#/reference/colors) variant can be used. |
| value <bs-badge color="unique text-white">v-model</bs-badge> | `String`/`Number`/`Boolean`/`Array`  |   | Value monitored by `v-model` that represents the selected value. |

</div>

#### Items Properties

**[1]** Items are collection of button configurations and have properties as described below:

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

| Name    | Argument Type     | Description |
|---------|-------------------|-------------|
| change | `String`/`Number`/`Boolean`/`Array` | Triggers when a button or item is selected. |

</div>


### Slots

<div class="cmp-property">

| Name     | Description  |
|----------|--------------|
| default  | Contents for field label. |
| helpText | Contents for custom help text. |

</div>

<script src="./script/toggle-field.js"></script>
