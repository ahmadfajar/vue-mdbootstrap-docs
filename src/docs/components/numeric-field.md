:::lead
**BsNumericField** is a component which is used for collecting user provided numeric text.
:::

*Available in Vue MDBootstrap since `v1.2.0`*


## Overview

**BsNumericField** component mimics the HTML5 `<input>` element but only working on numeric text. 
This means that you can add attributes like `required`, `readonly`, or `disabled` and it will react 
to them to give the best experience. You can also use `v-model` directive to create two-way data bindings 
on the `value` property which is useful to control or maintain the `value` property.

Additionally, you can use keyboard **UP/DOWN** arrow to increment or decrement the value.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-numeric-field v-model="numericValue">
        <label class="col-md-3 col-xl-2 col-form-label">Numeric Field</label>
      </bs-numeric-field>
    </div>
    <div class="form-group row">
      <label class="col-md-3 col-xl-2 col-form-label">Real value:</label>
      <label class="col-md-9 col-xl-10 col-form-label"><b>{{ numericValue }}</b></label>
    </div>
    <div class="form-group">
      <bs-numeric-field value="123456.789" readonly>
        <label class="col-md-3 col-xl-2 col-form-label">State Readonly</label>
      </bs-numeric-field>
    </div>
    <div class="form-group">
      <bs-numeric-field value="123456.789" disabled>
        <label class="col-md-3 col-xl-2 col-form-label">State Disabled</label>
      </bs-numeric-field>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numericValue: 2345.005689,
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


## Clearable

Define the `clear-button` property explicitly, so that the field value can be cleared easily.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-numeric-field v-model="clearableValue" step="0.5" clear-button>
        <label class="col-md-3 col-xl-2 col-form-label">Numeric Field</label>
      </bs-numeric-field>
    </div>
    <div class="form-group">
      Real value: <b>{{ clearableValue }}</b>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clearableValue: null,
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


## Action Buttons

The **BsNumericField** has two variants of action buttons to increment/decrement the numeric value.


### Spinner Action Buttons

The *Spinner* action buttons is the default action buttons. They can be placed on the
**left** or **right** side (*default*).

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field spin-button-placement="right">
            <label class="col-md-4 col-xl-3 col-form-label">Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field spin-button-placement="left">
            <label class="col-md-4 col-xl-3 col-form-label">Field Label</label>
          </bs-numeric-field>
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


### Plus-Minus Action Buttons

The *PlusMinus* action buttons can be enabled by defining the `action-button` property 
explicitly and sets the `spin-button` property to `false`. They can be placed on the
**left**, **right** (*default*) or **both** side.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            :spin-button="false" 
            action-button>
            <label class="col-md-4 col-xl-3 col-form-label">Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            :spin-button="false" 
            action-button
            action-button-placement="left">
            <label class="col-md-4 col-xl-3 col-form-label">Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            :spin-button="false" 
            action-button 
            action-button-placement="both">
            <label class="col-md-4 col-xl-3 col-form-label">Field Label</label>
          </bs-numeric-field>
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


## Style Variants

**BsNumericField** comes with four style variants.

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
          <bs-numeric-field floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            placeholder="Placeholder" 
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            spin-button-placement="left" 
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            placeholder="Placeholder" 
            spin-button-placement="left" 
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            :spin-button="false" 
            action-button 
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            :spin-button="false" 
            placeholder="Placeholder" 
            action-button
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            :spin-button="false" 
            action-button
            action-button-placement="both" 
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            :spin-button="false" 
            placeholder="Placeholder" 
            action-button
            action-button-placement="both" 
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
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
          <bs-numeric-field 
            filled 
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            placeholder="Placeholder" 
            filled
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            spin-button-placement="left" 
            filled
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            placeholder="Placeholder" 
            spin-button-placement="left" 
            filled
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            :spin-button="false" 
            action-button 
            filled
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            :spin-button="false" 
            placeholder="Placeholder" 
            action-button
            filled
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            :spin-button="false" 
            action-button
            action-button-placement="both" 
            filled
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            :spin-button="false" 
            placeholder="Placeholder" 
            action-button
            action-button-placement="both" 
            filled
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
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
          <bs-numeric-field 
            outlined 
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            placeholder="Placeholder" 
            outlined
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            spin-button-placement="left" 
            outlined
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            placeholder="Placeholder" 
            spin-button-placement="left" 
            outlined
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            :spin-button="false" 
            action-button 
            outlined
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            :spin-button="false" 
            placeholder="Placeholder" 
            action-button
            outlined
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            :spin-button="false" 
            action-button
            action-button-placement="both" 
            outlined
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            :spin-button="false" 
            placeholder="Placeholder" 
            action-button
            action-button-placement="both" 
            outlined
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
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

This style will remove the borders and create flat appearance. When combined with 
`readonly` property it will create appearance like plain text.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-7">
        <div class="form-group">
          <bs-numeric-field value="123456.789" flat>
            <label class="col-md-3 col-xl-2 col-form-label">Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="form-group">
          <bs-numeric-field 
            value="123456.789"
            placeholder="Placeholder" 
            flat
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
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


## Help Text

The `help-text` property on `<bs-numeric-field>` adds the provided string beneath the text field.
Using `persistent-help-text` keeps the help text visible even when the text field is not focused.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            :persistent-help-text="false"
            value="123456.789" 
            help-text="Type the product price per-unit" 
            floating-label>
            <label>Unit Price</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            help-text="Type the product price per-unit" 
            value="123456.789" 
            floating-label>
            <label>Unit Price</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            :persistent-help-text="false"
            value="123456.789" 
            help-text="Type the product price per-unit" 
            filled
            floating-label>
            <label>Unit Price</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            help-text="Type the product price per-unit" 
            value="123456.789" 
            filled
            floating-label>
            <label>Unit Price</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            :persistent-help-text="false"
            value="123456.789" 
            help-text="Type the product price per-unit" 
            outlined
            floating-label>
            <label>Unit Price</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            help-text="Type the product price per-unit" 
            value="123456.789" 
            outlined
            floating-label>
            <label>Unit Price</label>
          </bs-numeric-field>
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
          <bs-numeric-field 
            prepend-icon="heart"
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            append-icon="heart" 
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            prepend-icon-outer="heart"
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            append-icon-outer="heart" 
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            prepend-icon="heart"
            filled
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            append-icon="heart"
            filled
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            prepend-icon-outer="heart"
            filled
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            append-icon-outer="heart"
            filled
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            prepend-icon="heart"
            outlined
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            append-icon="heart"
            outlined
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            prepend-icon-outer="heart"
            outlined
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-numeric-field 
            append-icon-outer="heart"
            outlined
            floating-label>
            <label>Field Label</label>
          </bs-numeric-field>
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
| action-button | `Boolean` | `false` | Enable and shows the *Plus-Minus* action buttons which is used to increment/decrement the numeric value. |
| action-button-color | `String` | `'secondary'` | Sets the *Plus-Minus* action buttons color appearance. Any of [MDBootstrap colors](#/reference/colors) variant can be used. |
| action-button-placement | `String` | `'right'` | Sets the *Plus-Minus* action buttons placement, valid values: `left`, `right` and `both`. |
| append-icon  | `String`  |         | Sets icon to display on inner right side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| append-icon-outer | `String` |     | Sets icon to display on outer right side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| autocomplete | `Boolean`/`String` | `false` | Sets browsers **autocomplete** predictions on/off. |
| autofocus    | `Boolean` | `false` | Autofocus field when document is loaded. |
| clear-button | `Boolean` | `false` | Sets **auto show** the clear button. |
| disabled     | `Boolean` | `false` | Enable/disable the component and the `<input>` element. |
| external-validator | `Object` |    | Sets external validator plugin to be used when validate the field value. See [Reference - Form Validation](#/reference/form-validation), to learn how to implement the validation. |
| filled       | `Boolean` | `false` | Create the component with **filled** appearance. See [Google Material Design](https://material.io/components/text-fields) spec. |
| flat         | `Boolean` | `false` | Create the component with **flat** appearance, and removes the borders. The component appearance will be styled like plain text. |
| floating-label | `Boolean` | `false` | Create the component with floating field label. See [Google Material Design](https://material.io/components/text-fields) spec. |
| help-text   | `String`  |          | The help text to display below the field component. |
| id          | `String`  |          | Sets `<input>` element `ID` attribute. This property value is auto generates. |
| locale | `String` | `'en-US'` | Defaults locale to be used to format the displayed numeric value. |
| max-fraction | `Number` | `3` | Sets the maximum allowed fraction or decimal digits for the displayed value. |
| max-value   | `Number` |  | Sets the maximum allowed value. |
| min-value   | `Number` |  | Sets the minimum allowed value. |
| name        | `String`/`Number` |  | Sets `<input>` element `name` attribute. |
| outlined    | `Boolean` | `false`  | Create the component with **outlined** appearance. See [Google Material Design](https://material.io/components/text-fields) spec. |
| persistent-help-text | `Boolean` | `true` | Keeps help text visible when the component is not focused. |
| placeholder  | `String`  |       | Sets the field placeholder. |
| prepend-icon | `String`  |       | Sets icon to display on inner left side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| prepend-icon-outer | `String` |  | Sets icon to display on outer left side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| readonly    | `Boolean` | `false` | Put the component in readonly state and sets the `<input>` element `readonly` attribute. |
| required    | `Boolean` | `false` | Sets `<input>` element `required` attribute. |
| spin-button | `Boolean` | `true` | Enable and shows the *Spinner* action buttons which is used to increment/decrement the numeric value. |
| spin-button-placement | `String` | `'right'` | Sets the *Spinner* action buttons placement, valid values: `left` and `right`. |
| step | `Number` | `1.0` | Sets the increment/decrement steps value. |
| use-grouping | `Boolean` | `true` | Format the displayed numeric value with digit grouping. |
| value <bs-badge color="unique text-white">v-model</bs-badge> | `Number` |  | The value monitored by `v-model` to maintain field value. |

</div>


### Events

<div class="cmp-property">

| Name    | Argument Type     | Description |
|---------|-------------------|-------------|
| blur    | `FocusEvent` | Triggers when cursor leave the `<input>` element. |
| change  | `Number`     | Triggers when the `value` is changed. |
| focus   | `FocusEvent` | Triggers when cursor entered the `<input>` element. |
| input   | `Number`     | Used to update the `value` property. |
| keydown | `KeyboardEvent` | Triggers when cursor is still in the `<input>` element and keyboard key is pressed. |

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


<script src="./script/numeric-field.js"></script>
