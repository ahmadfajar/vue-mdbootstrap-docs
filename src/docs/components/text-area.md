:::lead
**BsTextArea** is a component which is used for collecting large amounts of textual data.
:::


## Overview

Use `v-model` directive to create two-way data bindings on the `value` property as in `v-model="myText"`.
This is useful to control or maintain the `value` property.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-text-area>
        <label class="col-md-3 col-xl-2 col-form-label">TextArea 1</label>
      </bs-text-area>
    </div>
    <div class="form-group">
      <bs-text-area v-model="myText">
        <label class="col-md-3 col-xl-2 col-form-label">TextArea 2</label>
      </bs-text-area>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myText: null,
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
    <div class="form-group">
      <bs-text-area autocomplete="email" floating-label>
        <label>Field Label</label>
      </bs-text-area>
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


## Clearable

Define the `clear-button` property explicitly, so that the field value can be cleared easily.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-text-area clear-button>
        <label class="col-md-3 col-xl-2 col-form-label">Field Label</label>
      </bs-text-area>
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


## Displayed Rows

To set the height of `<bs-textarea>`, set the `rows` property to the desired number of rows. If no value is 
provided to `rows`, then it will default to `2`.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-text-area rows="4">
        <label class="col-md-3 col-xl-2 col-form-label">Field Label</label>
      </bs-text-area>
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


### Auto Height

`<bs-textarea>` can also automatically adjust its height (displayed rows) to fit the content, even as 
the user enters or deletes text. The height of the `<textarea>` element will either grow or shrink to 
fit the content.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-text-area auto-grow>
        <label class="col-md-3 col-xl-2 col-form-label">Field Label</label>
      </bs-text-area>
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


### Fixed Height

`<bs-textarea>` can also have a fixed height. Sets the `row-height` property to the desired number 
of pixels, and the component will have a fixed height.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-text-area row-height="70">
        <label class="col-md-3 col-xl-2 col-form-label">Field Label</label>
      </bs-text-area>
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


### Disable Resize Handle

Some web browsers will allow the user to re-size the height of the `<textarea>` element. 
To disable this feature, explicitly define the `no-resize` property.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-text-area rows="3" no-resize>
        <label class="col-md-3 col-xl-2 col-form-label">Field Label</label>
      </bs-text-area>
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

**BsTextArea** comes with four style variants.

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
          <bs-text-area floating-label>
            <label>Field Label</label>
          </bs-text-area>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-area placeholder="Placeholder" floating-label>
            <label>Field Label</label>
          </bs-text-area>
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
          <bs-text-area floating-label filled>
            <label>Field Label</label>
          </bs-text-area>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-area placeholder="Placeholder" floating-label filled>
            <label>Field Label</label>
          </bs-text-area>
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
          <bs-text-area floating-label outlined>
            <label>Field Label</label>
          </bs-text-area>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-area placeholder="Placeholder" floating-label outlined>
            <label>Field Label</label>
          </bs-text-area>
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

This style will remove the borders and create flat appearance. It is useful when combined 
with `readonly` property to create appearance like plain text.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-7">
        <div class="form-group">
          <bs-text-area v-model="flat1" flat>
            <label class="col-md-3 col-xl-2 col-form-label">Field Label</label>
          </bs-text-area>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="form-group">
          <bs-text-area v-model="flat2" placeholder="Placeholder" flat floating-label readonly>
            <label>Field Label</label>
          </bs-text-area>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flat1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      flat2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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

The `help-text` property on `<bs-text-area>` adds the provided string beneath the TextArea field.
Using `persistent-help-text` keeps the help text visible when the TextArea field is not focused.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-area :persistent-help-text="false"
                         value="Grocery delivery" 
                         help-text="For example, flowers or used cars" 
                         floating-label>
            <label>Product or Service</label>
          </bs-text-area>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-area help-text="Enter your profile information" 
                         floating-label>
            <label>Your Profile</label>
          </bs-text-area>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-area :persistent-help-text="false"
                         value="Grocery delivery" 
                         help-text="For example, flowers or used cars" 
                         floating-label 
                         filled>
            <label>Product or Service</label>
          </bs-text-area>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-area help-text="Enter your profile information" 
                         floating-label 
                         filled>
            <label>Your Profile</label>
          </bs-text-area>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-area :persistent-help-text="false"
                         value="Grocery delivery" 
                         help-text="For example, flowers or used cars" 
                         floating-label 
                         outlined>
            <label>Product or Service</label>
          </bs-text-area>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-area help-text="Enter your profile information" 
                        floating-label 
                        outlined>
            <label>Your Profile</label>
          </bs-text-area>
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

You can add icons to the TextArea field with `prepend-icon`, `prepend-icon-outer`, 
`append-icon` or `append-icon-outer` property.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-area prepend-icon="user" floating-label filled>
            <label>Prepend</label>
          </bs-text-area>
        </div>
        <div class="form-group">
          <bs-text-area prepend-icon-outer="user" floating-label filled>
            <label>Prepend Outer</label>
          </bs-text-area>
        </div>
        <div class="form-group">
          <bs-text-area append-icon="user" floating-label filled>
            <label>Append</label>
          </bs-text-area>
        </div>
        <div class="form-group">
          <bs-text-area append-icon-outer="user" floating-label filled>
            <label>Append Outer</label>
          </bs-text-area>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-text-area prepend-icon="user" floating-label outlined>
            <label>Prepend</label>
          </bs-text-area>
        </div>
        <div class="form-group">
          <bs-text-area prepend-icon-outer="user" floating-label outlined>
            <label>Prepend Outer</label>
          </bs-text-area>
        </div>
        <div class="form-group">
          <bs-text-area append-icon="user" floating-label outlined>
            <label>Append</label>
          </bs-text-area>
        </div>
        <div class="form-group">
          <bs-text-area append-icon-outer="user" floating-label outlined>
            <label>Append Outer</label>
          </bs-text-area>
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
| auto-grow    | `Boolean` | `false` | Enable/disable `<textarea>` element to auto grow. |
| autocomplete | `Boolean` | `false` | Sets browsers **autocomplete** predictions on/off. |
| autofocus    | `Boolean` | `false` | Autofocus area when document is loaded. |
| clear-button | `Boolean` | `false` | Sets **auto show** the clear button. |
| disabled     | `Boolean` | `false` | Enable/disable the component and the `<textarea>` element. |
| external-validator | `Object` |    | Sets external validator plugin to be used when validate the area value. |
| filled       | `Boolean` | `false` | Create the component with **filled** appearance. See [Google Material Design](https://material.io/components/text-areas) spec. |
| flat         | `Boolean` | `false` | Create the component with **flat** appearance, and removes the borders. The component appearance will be styled like plain text. |
| floating-label | `Boolean` | `false` | Create the component with floating area label. See [Google Material Design](https://material.io/components/text-areas) spec. |
| help-text   | `String`  |         | The help text to display below the area component. |
| id          | `String`  |         | Sets `<textarea>` element `ID` attribute. This property value is auto generates. |
| name        | `String`/`Number` | | Sets `<textarea>` element `name` attribute. |
| no-resize   | `Boolean` | `false` | Disable resizing the `<textarea>` element. When set, the browser's resize handle will be disabled which prevents the user from changing the height of the `<textarea>` element. |
| outlined    | `Boolean` | `false` | Create the component with **outlined** appearance. See [Google Material Design](https://material.io/components/text-areas) spec. |
| persistent-help-text | `Boolean`  | `true` | Keeps help text visible when the component is not focused. |
| placeholder  | `String`  |        | Sets the area placeholder. |
| prepend-icon | `String`  |        | Sets icon to display on inner left side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| prepend-icon-outer | `String` |   | Sets icon to display on outer left side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| readonly    | `Boolean` | `false` | Put the component in readonly state and sets the `<textarea>` element `readonly` attribute. |
| required    | `Boolean` | `false` | Sets `<textarea>` element `required` attribute. |
| row-height | `Number`/`String` |  | Sets `<textarea>` height in pixel. |
| rows | `Number`/`String` | `2` | The minimum number of rows to display. Value must be greater than 1. |
| value <bs-badge color="unique text-white">v-model</bs-badge> | `String`/`Number` |  | The value monitored by `v-model` to maintain area value. |

</div>


### Events

<div class="cmp-property">

| Name    | Argument Type     | Description |
|---------|-------------------|-------------|
| blur    | `FocusEvent`      | Triggers when cursor leave the `<textarea>` element. |
| change  | `String`/`Number` | Triggers when the `value` is changed. |
| focus   | `FocusEvent`      | Triggers when cursor entered the `<textarea>` element. |
| input   | `String`/`Number` | Used to update the `value` property. |
| keydown | `KeyboardEvent`   | Triggers when cursor is still in the `<textarea>` element and keyboard key is pressed. |

</div>


### Slots

<div class="cmp-property">

| Name        | Description  |
|-------------|--------------|
| default     | Contents for area label. |
| appendIcon  | Contents for custom icon on inner right side. |
| appendIconOuter  | Contents for custom icon on outer right side. |
| helpText         | Contents for custom help text. |
| prependIcon      | Contents for custom icon on inner left side. |
| prependIconOuter | Contents for custom icon on outer left side. |

</div>

<script src="./script/text-area.js"></script>
