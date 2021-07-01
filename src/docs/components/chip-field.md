:::lead
**BsChipField** extends the **BsTextField** functionality by providing the tagging
functionality. It is used to create a set of keywords using chips.
:::

*Available since Vue MDBootstrap `v1.2.0`*


## Overview

Use `v-model` directive to create two-way data bindings on the `value` property as 
in `v-model="chipField1"`. This is useful to control or maintain the `value` property.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-chip-field placeholder="Add tags..." v-model="chipField1">
        <label class="col-md-3 col-xl-2 col-form-label">Tags Field</label>
      </bs-chip-field>
    </div>
    <div class="form-group">
      <bs-chip-field v-model="chipField2" readonly>
        <label class="col-md-3 col-xl-2 col-form-label">State Readonly</label>
      </bs-chip-field>
    </div>
    <div class="form-group">
      <bs-chip-field :value="chipField3" disabled>
        <label class="col-md-3 col-xl-2 col-form-label">State Disabled</label>
      </bs-chip-field>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chipField1: null,
      chipField2: 'VueJs, components, beginners',
      chipField3: 'Orange, Apple, Pineapple',
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

:::warning
Do not use the `value` property when using `v-model`.
:::


## Clearable

Define the `clear-button` property explicitly, so that the field value can be cleared 
easily.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-chip-field 
        v-model="clearableValue" 
        placeholder="Add tags..." 
        clear-button>
        <label class="col-md-3 col-xl-2 col-form-label">Tags Field</label>
      </bs-chip-field>
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


## Deletable Chip

Define the `chip-deletable` property explicitly, so the existing chip item can be delete 
easily.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-chip-field 
        v-model="deletableChips" 
        placeholder="Add tags..." 
        chip-deletable>
        <label class="col-md-3 col-xl-2 col-form-label">Tags Field</label>
      </bs-chip-field>
    </div>
    <div class="form-group">
      Real value: <b>{{ deletableChips }}</b>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deletableChips: null,
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


## Chip Styles

The chip items can also be styled. The guide below shows you how to style the chip items.

### Change Chip Color

The chip's color can be set using the `chip-color` property. Any color variant from 
[MDBootstrap colors](#/reference/colors) and [Material colors](#/reference/colors)
 can be applied to the `<bs-chip-field>`.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipColor1" 
            chip-color="secondary"
            floating-label>
            <label>Field Label</label>
          </bs-chip-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipColor2" 
            chip-color="stylish-color"
            placeholder="Add tags..."
            floating-label>
            <label>Field Label</label>
          </bs-chip-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chipColor1: null,
      chipColor2: null,
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


### Label Chip Style

Use `chip-labeled` property explicitly to create chip items without the circle edge shape.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipLabeled1" 
            chip-color="secondary"
            chip-labeled
            floating-label>
            <label>Field Label</label>
          </bs-chip-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipLabeled2"
            chip-color="secondary" 
            placeholder="Add tags..."
            chip-labeled
            floating-label>
            <label>Field Label</label>
          </bs-chip-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chipLabeled1: null,
      chipLabeled2: null,
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


### Outlined Chip Style

Use `chip-outlined` property explicitly to create chip items with outline style.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipOutlined1" 
            chip-color="blue"
            chip-outlined
            floating-label>
            <label>Field Label</label>
          </bs-chip-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipOutlined2" 
            chip-color="indigo"
            placeholder="Add tags..."
            chip-outlined
            floating-label>
            <label>Field Label</label>
          </bs-chip-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chipOutlined1: null,
      chipOutlined2: null,
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


### Outlined Label Chip Style

Use `chip-outlined` and `chip-labeled` property explicitly to create chip 
items with outline style without circle edge shape.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipOutlinedLabel1" 
            chip-color="blue"
            chip-outlined
            chip-labeled
            floating-label>
            <label>Field Label</label>
          </bs-chip-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipOutlinedLabel2" 
            chip-color="indigo"
            placeholder="Add tags..."
            chip-outlined
            chip-labeled
            floating-label>
            <label>Field Label</label>
          </bs-chip-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chipOutlinedLabel1: null,
      chipOutlinedLabel2: null,
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


## Field Style Variants

**BsChipField** comes with four style variants.

### Default

When combined with `floating-label` by defining it explicitly, this style variant will 
follow the Google Material Design spec.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipStyle1" 
            floating-label>
            <label>Field Label</label>
          </bs-chip-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipStyle2" 
            placeholder="Placeholder"
            floating-label>
            <label>Field Label</label>
          </bs-chip-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chipStyle1: null,
      chipStyle2: null,
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


### Filled

When combined with `floating-label` by defining it explicitly, this style variant will 
follow the Google Material Design spec.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipStyle3" 
            chip-color="blue-grey"
            filled
            floating-label>
            <label>Field Label</label>
          </bs-chip-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipStyle4" 
            placeholder="Placeholder"
            chip-color="blue-grey"
            filled
            floating-label>
            <label>Field Label</label>
          </bs-chip-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chipStyle3: null,
      chipStyle4: null,
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


### Outlined

When combined with `floating-label` by defining it explicitly, this style variant will 
follow the Google Material Design spec.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipStyle5" 
            chip-color="secondary"
            outlined
            floating-label>
            <label>Field Label</label>
          </bs-chip-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipStyle6" 
            placeholder="Placeholder"
            chip-color="secondary"
            outlined
            floating-label>
            <label>Field Label</label>
          </bs-chip-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chipStyle5: null,
      chipStyle6: null,
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


### Flat

This style will remove the borders and create flat appearance. When combined with `readonly` 
property, it will create non removable chips with flat appearance.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-8">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipStyle7" 
            flat>
            <label class="col-md-3 col-xl-2 col-form-label">Field Label</label>
          </bs-chip-field>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipStyle8" 
            flat 
            floating-label 
            readonly>
            <label>Field Label</label>
          </bs-chip-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chipStyle7: 'VueJs, components, beginners',
      chipStyle8: 'Orange, Apple, Pineapple',
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

The `help-text` property on `<bs-chip-field>` adds the provided string beneath the field.
Using `persistent-help-text` keeps the help text visible even when the field is not focused.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            :persistent-help-text="false"
            v-model="chipHlpText1" 
            help-text="Enter product keywords or tags" 
            floating-label>
            <label>Product tags</label>
          </bs-chip-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipHlpText2" 
            help-text="Enter keywords for your website" 
            floating-label>
            <label>Website keywords</label>
          </bs-chip-field>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            :persistent-help-text="false"
            v-model="chipHlpText3" 
            chip-color="blue-grey"
            help-text="Enter product keywords or tags" 
            floating-label 
            filled>
            <label>Product tags</label>
          </bs-chip-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipHlpText4" 
            chip-color="blue-grey"
            help-text="Enter keywords for your website" 
            floating-label 
            filled>
            <label>Website keywords</label>
          </bs-chip-field>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            :persistent-help-text="false"
            v-model="chipHlpText5" 
            help-text="Enter product keywords or tags" 
            floating-label 
            outlined>
            <label>Product tags</label>
          </bs-chip-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipHlpText6" 
            help-text="Enter keywords for your website" 
            floating-label 
            outlined>
            <label>Website keywords</label>
          </bs-chip-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chipHlpText1: null,
      chipHlpText2: null,
      chipHlpText3: null,
      chipHlpText4: null,
      chipHlpText5: null,
      chipHlpText6: null,
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


## Icons

You can add icon to the field with `prepend-icon`, `prepend-icon-outer`, `append-icon` or 
`append-icon-outer` property.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipIcon1"
            prepend-icon="user" 
            floating-label>
            <label>Prepend</label>
          </bs-chip-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipIcon2"
            append-icon="user" 
            floating-label>
            <label>Append</label>
          </bs-chip-field>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipIcon3"
            prepend-icon-outer="user" 
            floating-label>
            <label>Prepend Outer</label>
          </bs-chip-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipIcon4"
            append-icon-outer="user" 
            floating-label>
            <label>Append Outer</label>
          </bs-chip-field>
        </div>
      </div>
    </div>  
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipIcon5"
            prepend-icon="user" 
            chip-color="blue-grey"
            floating-label 
            filled>
            <label>Prepend</label>
          </bs-chip-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipIcon6"
            append-icon="user" 
            chip-color="blue-grey"
            floating-label 
            filled>
            <label>Append</label>
          </bs-chip-field>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipIcon7"
            prepend-icon-outer="user" 
            chip-color="blue-grey"
            floating-label 
            filled>
            <label>Prepend Outer</label>
          </bs-chip-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipIcon8"
            append-icon-outer="user" 
            chip-color="blue-grey"
            floating-label 
            filled>
            <label>Append Outer</label>
          </bs-chip-field>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipIcon9"
            prepend-icon="user" 
            floating-label 
            outlined>
            <label>Prepend</label>
          </bs-chip-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipIcon10"
            append-icon="user" 
            floating-label 
            outlined>
            <label>Append</label>
          </bs-chip-field>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipIcon11"
            prepend-icon-outer="user" 
            floating-label 
            outlined>
            <label>Prepend Outer</label>
          </bs-chip-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-chip-field 
            v-model="chipIcon12"
            append-icon-outer="user" 
            floating-label 
            outlined>
            <label>Append Outer</label>
          </bs-chip-field>
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
| autocomplete | `Boolean`/`String`  | `false` | Sets browsers **autocomplete** predictions on/off. |
| autofocus    | `Boolean` | `false` | Autofocus field when document is loaded. |
| chip-color   | `String` | `'light-grey'` | The default chips color to apply. |
| chip-deletable | `Boolean` | `false` | Display the close button on every chip to delete a chip. |
| chip-labeled   | `Boolean` | `false` | Remove Chip's circle edges. |
| chip-outlined  | `Boolean` | `false` | Create Chips with outline style. |
| clear-button | `Boolean` | `false` | Sets **auto show** the clear button. |
| disabled     | `Boolean` | `false` | Enable/disable the component and the `<input>` element. |
| external-validator | `Object` |    | Sets external validator plugin to be used when validate the field value. See [Reference - Form Validation](#/reference/form-validation), to learn how to implement the validation. |
| filled       | `Boolean` | `false` | Create the component with **filled** appearance. See [Google Material Design](https://material.io/components/text-fields) spec. |
| flat         | `Boolean` | `false` | Create the component with **flat** appearance, and removes the borders. |
| floating-label | `Boolean` | `false` | Create the component with floating field label. See [Google Material Design](https://material.io/components/text-fields) spec. |
| help-text    | `String`  |          | The help text to display below the field component. |
| id           | `String`  |          | Sets `<input>` element `ID` attribute. This property value is auto generates. |
| name         | `String`  |  | Sets `<input>` element `name` attribute. |
| outlined     | `Boolean` | `false`  | Create the component with **outlined** appearance. See [Google Material Design](https://material.io/components/text-fields) spec. |
| persistent-help-text | `Boolean` | `true` | Keeps help text visible when the component is not focused. |
| placeholder  | `String`  |       | Sets the field placeholder. |
| prepend-icon | `String`  |       | Sets icon to display on inner left side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| prepend-icon-outer | `String` |  | Sets icon to display on outer left side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| readonly     | `Boolean` | `false` | Put the component in readonly state and sets the `<input>` element `readonly` attribute. |
| required     | `Boolean` | `false` | Sets `<input>` element `required` attribute. |
| value <bs-badge color="unique text-white">v-model</bs-badge> | `String` |  | The value monitored by `v-model` to maintain field value. |
| value-as-array | `Boolean` | `false` | Sets the returns value from `v-model` as Array. |

</div>


### Events

<div class="cmp-property">

| Name    | Argument Type     | Description |
|---------|-------------------|-------------|
| blur    | `FocusEvent`      | Triggers when cursor leave the `<input>` element. |
| focus   | `FocusEvent`      | Triggers when cursor entered the `<input>` element. |
| input   | `String` | Used to update the `value` property. |
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

<script src="./script/chip-field.js"></script>
