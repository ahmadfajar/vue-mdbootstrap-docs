:::lead
**BsTextField** is a component which is used for collecting user provided information.
:::


## Overview

Use `v-model` directive to create two-way data bindings on the `value` property as in 
`v-model="password"`. This is useful to control or maintain the `value` property.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-text-field>
        <label class="col-md-3 col-xl-2 col-form-label">Text Field</label>
      </bs-text-field>
    </div>
    <div class="form-group">
      <bs-text-field type="password" v-model="password">
        <label class="col-md-3 col-xl-2 col-form-label">Password Field</label>
      </bs-text-field>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: null,
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
Do not use the `value` property when using `v-model`.
:::

## Browser Autocomplete

The `autocomplete` property gives you the option to enable the browser to predict user input.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-field autocomplete="name" floating-label>
            <label>Full Name</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-field autocomplete="email" floating-label>
            <label>Email</label>
          </bs-text-field>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::

### Datalist Support

Datalist is a native HTML tag `<datalist>` that contains a list of `<option>` tags. By assigning 
an **ID** to the datalist tag, the list can be references from a text field by defining the 
`datalist` property. This give text field the behavior of a combobox or auto-complete, allowing 
existing values to be chosen, or new values to be entered.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-text-field datalist="my-list">
        <label class="col-md-2 col-lg-1 col-form-label">Sizes</label>
      </bs-text-field>
      <datalist id="my-list">
        <option v-for="size in sizes">{{ size }}</option>
      </datalist>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizes: ['Small', 'Medium', 'Large', 'Extra Large'],
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
* Datalists work in conjunction with the browser's built in auto-complete, displaying datalist 
  options first, followed by auto-complete options.
* Datalists cannot be applied to input fields with type `password`, or `range`.
* Not all browsers fully support `<datalist>` and implementations can be buggy. It is recommended 
  that datalists be treated as an enhancement and not be relied upon at this time. Check 
  [Can I Use](https://caniuse.com/#feat=datalist) for full support details on all browsers.
:::


## Clearable

Define the `clear-button` property explicitly, so that the field value can be cleared easily.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-text-field clear-button>
        <label class="col-md-3 col-xl-2 col-form-label">Text Field</label>
      </bs-text-field>
    </div>
    <div class="form-group">
      <bs-text-field type="password" v-model="password" clear-button>
        <label class="col-md-3 col-xl-2 col-form-label">Password Field</label>
      </bs-text-field>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: null,
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


## Style Variants

**BsTextField** comes with four style variants.

### Default

When combined with `floating-label` by defining it explicitly, this style variant will follow the 
Google Material Design spec.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-field floating-label>
            <label>Field Label</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-field placeholder="Placeholder" floating-label>
            <label>Field Label</label>
          </bs-text-field>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


### Filled

When combined with `floating-label` by defining it explicitly, this style variant will follow the 
Google Material Design spec.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-field floating-label filled>
            <label>Field Label</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-field placeholder="Placeholder" floating-label filled>
            <label>Field Label</label>
          </bs-text-field>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


### Outlined

When combined with `floating-label` by defining it explicitly, this style variant will follow the 
Google Material Design spec.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-field floating-label outlined>
            <label>Field Label</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-field placeholder="Placeholder" floating-label outlined>
            <label>Field Label</label>
          </bs-text-field>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


### Flat

This style will remove the borders and create flat appearance. It is useful when combined with `readonly` 
property to create appearance like plain text.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-8">
        <div class="form-group">
          <bs-text-field v-model="flat1" flat>
            <label class="col-md-3 col-xl-2 col-form-label">Field Label</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="form-group">
          <bs-text-field v-model="flat2" flat floating-label readonly>
            <label>Field Label</label>
          </bs-text-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flat1: 'Quick example plain text',
      flat2: 'Quick example plain text',
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


## Help Text

The `help-text` property on `<bs-text-field>` adds the provided string beneath the text field.
Using `persistent-help-text` keeps the help text visible when the text field is not focused.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-field :persistent-help-text="false"
                         value="Grocery delivery" 
                         help-text="For example, flowers or used cars" 
                         floating-label>
            <label>Product or Service</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-field help-text="www.example.com/page" 
                         floating-label>
            <label>Your landing page</label>
          </bs-text-field>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-field :persistent-help-text="false"
                         value="Grocery delivery" 
                         help-text="For example, flowers or used cars" 
                         floating-label 
                         filled>
            <label>Product or Service</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-field help-text="www.example.com/page" 
                         floating-label 
                         filled>
            <label>Your landing page</label>
          </bs-text-field>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-field :persistent-help-text="false"
                         value="Grocery delivery" 
                         help-text="For example, flowers or used cars" 
                         floating-label 
                         outlined>
            <label>Product or Service</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-field help-text="www.example.com/page" 
                         floating-label 
                         outlined>
            <label>Your landing page</label>
          </bs-text-field>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Icons

You can add icons to the text field with `prepend-icon`, `prepend-icon-outer`, `append-icon` or 
`append-icon-outer` property.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-field prepend-icon="user" floating-label filled>
            <label>Prepend</label>
          </bs-text-field>
        </div>
        <div class="form-group">
          <bs-text-field prepend-icon-outer="user" floating-label filled>
            <label>Prepend Outer</label>
          </bs-text-field>
        </div>
        <div class="form-group">
          <bs-text-field append-icon="user" floating-label filled>
            <label>Append</label>
          </bs-text-field>
        </div>
        <div class="form-group">
          <bs-text-field append-icon-outer="user" floating-label filled>
            <label>Append Outer</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-field prepend-icon="user" floating-label outlined>
            <label>Prepend</label>
          </bs-text-field>
        </div>
        <div class="form-group">
          <bs-text-field prepend-icon-outer="user" floating-label outlined>
            <label>Prepend Outer</label>
          </bs-text-field>
        </div>
        <div class="form-group">
          <bs-text-field append-icon="user" floating-label outlined>
            <label>Append</label>
          </bs-text-field>
        </div>
        <div class="form-group">
          <bs-text-field append-icon-outer="user" floating-label outlined>
            <label>Append Outer</label>
          </bs-text-field>
        </div>
      </div>
    </div>
  </div>
</template>

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

| Property     | Type      | Default | Description |
|--------------|-----------|---------|-------------|
| append-icon  | `String`  |         | Sets icon to display on inner right side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| append-icon-outer | `String` |     | Sets icon to display on outer right side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| autocomplete | `Boolean`/`String` | `false` | Sets browsers **autocomplete** predictions on/off. |
| autofocus    | `Boolean` | `false` | Autofocus field when document is loaded. |
| clear-button | `Boolean` | `false` | Sets **auto show** the clear button. |
| datalist     | `String`  |         | Target `<datalist>` element **ID**. |
| disabled     | `Boolean` | `false` | Enable/disable the component and the `<input>` element. |
| external-validator | `Object` |    | Sets external validator plugin to be used when validate the field value. |
| filled       | `Boolean` | `false` | Create the component with **filled** appearance. See [Google Material Design](https://material.io/components/text-fields) spec. |
| flat         | `Boolean` | `false` | Create the component with **flat** appearance, and removes the borders. The component appearance will be styled like plain text. |
| floating-label | `Boolean` | `false` | Create the component with floating field label. See [Google Material Design](https://material.io/components/text-fields) spec. |
| help-text   | `String`  |          | The help text to display below the field component. |
| id          | `String`  |          | Sets `<input>` element `ID` attribute. This property value is auto generates. |
| maxlength   | `Number`/`String` |  | Sets `<input>` element maximum characters allowed. |
| minlength   | `Number`/`String` |  | Sets `<input>` element minimum characters allowed. |
| name        | `String`/`Number` |  | Sets `<input>` element `name` attribute. |
| outlined    | `Boolean` | `false`  | Create the component with **outlined** appearance. See [Google Material Design](https://material.io/components/text-fields) spec. |
| password-toggle | `Boolean` | `true` | Enable toggle password field. |
| persistent-help-text | `Boolean` | `true` | Keeps help text visible when the component is not focused. |
| placeholder  | `String`  |       | Sets the field placeholder. |
| prepend-icon | `String`  |       | Sets icon to display on inner left side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| prepend-icon-outer | `String` |  | Sets icon to display on outer left side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| readonly    | `Boolean` | `false` | Put the component in readonly state and sets the `<input>` element `readonly` attribute. |
| required    | `Boolean` | `false` | Sets `<input>` element `required` attribute. |
| type        | `String`  | `'text'`| Sets `<input>` element `type` attribute. Valid values are: `text`, `password`, `email`, `url`, `tel`, `range`. |
| value <bs-badge color="unique text-white">v-model</bs-badge> | `String`/`Number` |  | The value monitored by `v-model` to maintain field value. |

</div>


### Events

<div class="cmp-property">

| Name    | Argument Type     | Description |
|---------|-------------------|-------------|
| blur    | `FocusEvent`      | Triggers when cursor leave the `<input>` element. |
| change  | `String`/`Number` | Triggers when the `value` is changed. |
| focus   | `FocusEvent`      | Triggers when cursor entered the `<input>` element. |
| input   | `String`/`Number` | Used to update the `value` property. |
| keydown | `KeyboardEvent`   | Triggers when cursor is still in the `<input>` element and keyboard key is pressed. |

</div>


### Slots

<div class="cmp-property">

| Name        | Description  |
|-------------|--------------|
| default     | Contents for field label. |
| appendIcon  | Contents for custom icon on inner right side. |
| appendIconOuter  | Contents for custom icon on outer right side. |
| helpText         | Contents for custom help text. |
| prependIcon      | Contents for custom icon on inner left side. |
| prependIconOuter | Contents for custom icon on outer left side. |

</div>


<script src="./script/text-field.js"></script>
