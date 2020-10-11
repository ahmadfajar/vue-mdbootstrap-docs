:::lead
**BsCombobox** is a select field component which is used for collecting user provided 
information from a list of options.
:::


## Overview

**BsCombobox** component mimics the HTML5 `<select>` element. This means that you can add 
attributes like `required`, `readonly`, `disabled`, and `multiple` and it will react to 
them to give the best experience.



## Component Reference

### Properties

<div class="cmp-property">

| Property     | Type      | Default | Description |
|--------------|-----------|---------|-------------|
| append-icon  | `String`  |         | Sets icon to display on inner right side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| append-icon-outer | `String` |     | Sets icon to display on outer right side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| check-option | `Object` | `{color: 'purple', position: 'left'}` | Sets the checkbox color and position for listbox options. |
| check-option-color | `String` |  | Sets the checkbox color for listbox options. Any of the [MdBootstrap colors](#/reference/colors) variants can be applied. |
| check-option-position | `String` |  | Sets the checkbox position for listbox options. Valid values are: `left`, `right`. |
| circle-image | `Boolean` | `false` | Sets **circle** effect for the displayed image from listbox item. |
| clear-button | `Boolean` | `false` | Sets **auto show** the clear button. |
| data-source  | `Object`  |  | Sets data source for the listbox options. |
| disabled     | `Boolean` | `false` | Enable/disable the component and the `<select>` element. |
| empty-data-message | `String` | `'No data to display.'` | Sets the **no data message** when listbox options is empty. |
| external-validator | `Object` |    | Sets external validator plugin to be used when validate the field value. |
| filled       | `Boolean` | `false` | Create the component with **filled** appearance. See [Google Material Design](https://material.io/components/text-fields) spec. |
| flat         | `Boolean` | `false` | Create the component with **flat** appearance, and removes the borders. The component appearance will be styled like plain text. |
| floating-label | `Boolean` | `false` | Create the component with floating field label. See [Google Material Design](https://material.io/components/text-fields) spec. |
| help-text      | `String`  |         | The help text to display below the field component. |
| id             | `String`  |         | Sets `<select>` element `ID` attribute. This property value is auto generates. |
| item-separator | `Boolean` | `false` | Show or hide the listbox item separator. |
| listbox-color  | `String`  |  | Sets the listbox background color. Any of [MdBootstrap colors](#/reference/colors) or [Material colors](#/reference/colors) variants can be applied. |
| minimum-items-for-search | `Number`/`String` |  | Sets minimum character to start searching an item inside the listbox options. |
| multiple | `Boolean` | `false`  | Enable or disable multiple selection. |
| name     | `String`/`Number` |  | Sets `<select>` element `name` attribute. |
| not-found-message | `String` | `'Data not found.'` | Sets the **not found message** when searching returns no result. |
| open     | `Boolean` | `false`  | Popover state: **show** or **hide**. |
| open-on-hover | `Boolean` | `false` | Triggers the Popover to display when `mouseenter`. |
| outlined    | `Boolean` | `false`  | Create the component with **outlined** appearance. See [Google Material Design](https://material.io/components/text-fields) spec. |
| parent-value | `String`/`Number`/`Object`/`Boolean` |  | Sets the cascading combobox parent value. |
| persistent-help-text | `Boolean` | `true` | Keeps help text visible when the component is not focused. |
| placeholder  | `String`  |       | Sets the combobox field placeholder. |
| popover-max-height | `Number`/`String` |  | Sets maximum height for the Popover or listbox container. |
| popover-min-width  | `Number` |  | Sets minimum width for the Popover or listbox container. |
| prepend-icon | `String`  |       | Sets icon to display on inner left side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| prepend-icon-outer | `String` |  | Sets icon to display on outer left side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| readonly   | `Boolean` | `false` | Put the component in readonly state and sets the `<select>` element `readonly` attribute. |
| required   | `Boolean` | `false` | Sets `<select>` element `required` attribute. |
| rounded-image | `Boolean` | `false` | Sets **rounded** effect for the displayed image from listbox item. |
| show-image | `Boolean` | `false` | Show or hide image if listbox item's object contains image field. |
| transition | `string`  | `'popover'` | Transition animation when showing the Popover. |
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

| Name        | Description  |
|-------------|--------------|
| appendIcon  | Contents for custom icon on inner right side. |
| appendIconOuter  | Contents for custom icon on outer right side. |
| default     | Contents for field label. |
| emptyData   | Contents for empty data message. |
| helpText    | Contents for custom help text. |
| optionItem  | Contents for List options. |
| prependIcon      | Contents for custom icon on inner left side. |
| prependIconOuter | Contents for custom icon on outer left side. |

</div>

