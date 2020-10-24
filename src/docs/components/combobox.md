:::lead
**BsCombobox** is a select field component which is used for collecting user provided 
information from a list of options.
:::


## Overview

**BsCombobox** component mimics the HTML5 `<select>` element. This means that you can add 
attributes like `required`, `readonly`, `disabled`, or `multiple` and it will react to 
them to give the best experience. You can also use `v-model` directive to create two-way 
data bindings on the `value` property as in `v-model="employee"`. This is useful to 
control or maintain the `value` property.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-combobox v-model="employee" :data-source="peopleSrc">
        <label class="col-md-3 col-xl-2 col-form-label">Employee</label>
      </bs-combobox>
    </div>
    <div class="form-group">
      <bs-combobox :value="employee1" :data-source="peopleSrc" readonly>
        <label class="col-md-3 col-xl-2 col-form-label">State Readonly</label>
      </bs-combobox>
    </div>
    <div class="form-group">
      <bs-combobox :value="employee2" :data-source="peopleSrc" disabled>
        <label class="col-md-3 col-xl-2 col-form-label">State Disabled</label>
      </bs-combobox>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employee: null,
      employee1: 2,
      employee2: 3,
      peopleSrc: {
        proxy: new BsArrayStore([
              {id: 1, name: 'Sandra Adams', avatar: 'img/1.jpg'},
              {id: 2, name: 'Ali Connors', avatar: 'img/2.jpg'},
              {id: 3, name: 'Trevor Hansen', avatar: 'img/3.jpg'},
              {id: 4, name: 'Tucker Smith', avatar: 'img/4.jpg'},
              {id: 5, name: 'Britta Holt', avatar: 'img/5.jpg'},
              {id: 6, name: 'Jane Smith', avatar: 'img/3.jpg'},
              {id: 7, name: 'John Smith', avatar: 'img/2.jpg'},
              {id: 8, name: 'Sandra Williams', avatar: 'img/4.jpg'}
            ], {
              idProperty: 'id',
            }
        ),
        schema: {displayField: 'name', valueField: 'id', imageField: 'avatar'}
      },
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
      <bs-combobox v-model="employee3" :data-source="peopleSrc" clear-button>
        <label class="col-md-3 col-xl-2 col-form-label">Employee</label>
      </bs-combobox>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employee3: null,
      peopleSrc: {
        proxy: new BsArrayStore([
              {id: 1, name: 'Sandra Adams', avatar: 'img/1.jpg'},
              {id: 2, name: 'Ali Connors', avatar: 'img/2.jpg'},
              {id: 3, name: 'Trevor Hansen', avatar: 'img/3.jpg'},
              {id: 4, name: 'Tucker Smith', avatar: 'img/4.jpg'},
              {id: 5, name: 'Britta Holt', avatar: 'img/5.jpg'},
              {id: 6, name: 'Jane Smith', avatar: 'img/3.jpg'},
              {id: 7, name: 'John Smith', avatar: 'img/2.jpg'},
              {id: 8, name: 'Sandra Williams', avatar: 'img/4.jpg'}
            ], {
              idProperty: 'id',
            }
        ),
        schema: {displayField: 'name', valueField: 'id', imageField: 'avatar'}
      },
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


## Multiple Select Support

Define the `multiple` property explicitly to enable multiple selection mode.


### Checkbox Color Style

In multiple selection mode, the checkbox color can be changed via `check-option-color` 
property. Any of the [MdBootstrap colors](#/reference/colors) variants can be used for
this property value. If it is not defined, default value will be used.


### Controlling Checkbox Position

In multiple selection mode, the checkbox position can be changed via `check-option-position`
property. Valid values for this property are: `left`, `right`. If it is not defined, default
value will be used.


## Images or Avatars Support

The ListBox supports displaying images or avatars. Use `show-image` property to enable this
option and define the `imageField` value in the data source. By default, `imageField` value 
is set to `image`.


### Controlling Image Size

The size of images can be controlled via `image-size` property.


## Hover Display Support

The Popover or ListBox container can be displayed using hover instead of clicking 
with the `open-on-hover` property.


## Setting ListBox Views

ListBox items can be organized in different ways by providing the template via `optionItem` 
slot. You can also change the ListBox background color.


## Style Variants

**BsCombobox** comes with four style variants.

### Default

When combined with `floating-label` by defining it explicitly, this style variant will follow the 
Google Material Design spec.


### Filled

When combined with `floating-label` by defining it explicitly, this style variant will follow the 
Google Material Design spec.


### Outlined

When combined with `floating-label` by defining it explicitly, this style variant will follow the 
Google Material Design spec.


### Flat

This style will remove the borders and create flat appearance. It is useful when combined with 
`readonly` property to create appearance like plain text.


## Help Text

The `help-text` property on `<bs-combobox>` adds the provided string beneath the combobox field.
Using `persistent-help-text` keeps the help text visible when the combobox field is not focused.


## Icons

You can add icons to the combobox field with `prepend-icon`, `prepend-icon-outer`, `append-icon` 
or `append-icon-outer` property.


## Component Reference

### Properties

<div class="cmp-property">

| Property     | Type      | Default | Description |
|--------------|-----------|---------|-------------|
| append-icon  | `String`  |         | Sets icon to display on inner right side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| append-icon-outer     | `String` | | Sets icon to display on outer right side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| check-option-color    | `String` | `'purple'` | Sets the checkbox color for ListBox options. Any of the [MdBootstrap colors](#/reference/colors) variants can be applied. |
| check-option-position | `String` | `'left'`   | Sets the checkbox position for ListBox options. Valid values are: `left`, `right`. |
| circle-image | `Boolean` | `false` | Sets **circle** effect for the displayed image from ListBox item. |
| clear-button | `Boolean` | `false` | Sets **auto show** the clear button. |
| data-source  | `Object`  |  | Sets data source for the ListBox options. |
| disabled     | `Boolean` | `false` | Enable/disable the component and the `<select>` element. |
| empty-data-message | `String` | `'No data to display.'` | Sets the **no data message** when ListBox options is empty. |
| external-validator | `Object` |    | Sets external validator plugin to be used when validate the field value. |
| filled       | `Boolean` | `false` | Create the component with **filled** appearance. See [Google Material Design](https://material.io/components/text-fields) spec. |
| flat         | `Boolean` | `false` | Create the component with **flat** appearance, and removes the borders. The component appearance will be styled like plain text. |
| floating-label | `Boolean` | `false` | Create the component with floating field label. See [Google Material Design](https://material.io/components/text-fields) spec. |
| help-text      | `String`  |         | The help text to display below the field component. |
| id             | `String`  |         | Sets `<select>` element `ID` attribute. This property value is auto generates. |
| image-size     | `Number`  |         | Sets the image size for the ListBox items when `show-image` is enabled. |
| item-separator | `Boolean` | `false` | Show or hide the ListBox item separator. |
| listbox-color  | `String`  |         | Sets the ListBox background color. Any of [MdBootstrap colors](#/reference/colors) or [Material colors](#/reference/colors) variants can be applied. |
| minimum-items-for-search | `Number`/`String` | `15` | Sets minimum character to start searching an item inside the ListBox options. |
| multiple | `Boolean` | `false`  | Enable or disable multiple selection. |
| name     | `String`/`Number` |  | Sets `<select>` element `name` attribute. |
| not-found-message | `String` | `'Data not found.'` | Sets the **not found message** when searching returns no result. |
| open     | `Boolean` | `false`  | Popover state: **show** or **hide**. |
| open-on-hover | `Boolean` | `false` | Triggers the Popover to display when `mouseenter`. |
| outlined      | `Boolean` | `false`  | Create the component with **outlined** appearance. See [Google Material Design](https://material.io/components/text-fields) spec. |
| parent-value  | `String`/`Number`/`Boolean` |  | Sets the cascading combobox parent value. |
| persistent-help-text | `Boolean` | `true` | Keeps help text visible when the component is not focused. |
| placeholder   | `String`  |       | Sets the combobox field placeholder. |
| popover-max-height | `Number`/`String` | `300` | Sets maximum height for the Popover or ListBox container. |
| popover-min-width  | `Number`/`String` |  | Sets minimum width for the Popover or ListBox container. |
| prepend-icon  | `String`  |       | Sets icon to display on inner left side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| prepend-icon-outer | `String` |  | Sets icon to display on outer left side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| readonly      | `Boolean` | `false` | Put the component in readonly state and sets the `<select>` element `readonly` attribute. |
| required      | `Boolean` | `false` | Sets `<select>` element `required` attribute. |
| rounded-image | `Boolean` | `false` | Sets **rounded** effect for the displayed image from ListBox item. |
| show-image    | `Boolean` | `false` | Show or hide image if ListBox item's object contains image field. |
| transition    | `string`  | `'popover'` | Transition animation when showing the Popover. |
| value <bs-badge color="unique text-white">v-model</bs-badge> | `String`/`Number`/`Object`/`Boolean` |  | The value monitored by `v-model` to maintain field value. |
| value-as-object | `Boolean` | `false` | Sets the returns value from `v-model` as object. |

</div>


### Events

<div class="cmp-property">

| Name    | Argument Type     | Description |
|---------|-------------------|-------------|
| blur    | `FocusEvent`      | Triggers when cursor leave the `<input>` element. |
| change  | `String`/`Number` | Triggers when the `value` is changed. |
| focus   | `FocusEvent`      | Triggers when cursor entered the `<input>` element. |
| input   | `String`/`Number` | Used to update the `value` property. |

</div>


### Slots

<div class="cmp-property">

| Name             | Description  |
|------------------|--------------|
| appendIcon       | Contents for custom icon on inner right side. |
| appendIconOuter  | Contents for custom icon on outer right side. |
| default          | Contents for field label. |
| emptyData        | Contents for empty data message. |
| helpText         | Contents for custom help text. |
| optionItem       | Contents for List options. |
| prependIcon      | Contents for custom icon on inner left side. |
| prependIconOuter | Contents for custom icon on outer left side. |

</div>

<script src="./script/combobox.js"></script>
