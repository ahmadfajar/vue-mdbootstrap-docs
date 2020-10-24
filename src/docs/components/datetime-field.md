:::lead
**BsDateTimeField** is a fully featured date selection component which lets users
select a date, time, month, year, or datetime.
:::


## Overview

Use `v-model` directive to create two-way data bindings on the `value` property as 
in `v-model="date1"`. This is useful to control or maintain the `value` property.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-date-time-field v-model="date1">
        <label class="col-md-3 col-xl-2 col-form-label">Choose a date</label>
      </bs-date-time-field>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date1: null,
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
      <bs-date-time-field v-model="date2" clear-button>
        <label class="col-md-3 col-xl-2 col-form-label">Choose a date</label>
      </bs-date-time-field>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date2: null,
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


## DateTime Formatting

Use `display-format` property to customize displayed datetime and `value-format` property to customize
the output value format. If `display-format` property is not defined, then `value-format` will be used 
to format the displayed datetime.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-date-time-field v-model="fmtValue" 
                          value-format="YYYY-MM-DD" 
                          display-format="DD MMMM YYYY" 
                          clear-button>
        <label class="col-md-3 col-xl-2 col-form-label">Choose a date</label>
      </bs-date-time-field>
    </div>
    <div class="form-group">
      Output Value: <strong>{{ fmtValue }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fmtValue: null,
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
Please refer to [moment](https://momentjs.com/docs/#/displaying/) documentation for valid 
datetime format.
:::

## Picker Selection Modes

You can use `view-mode` property to use different DateTime picker, but to get the correct 
value the `value-format` property must be defined. 


### Date selection mode

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-date-time-field v-model="pickDate" 
                          value-format="YYYY-MM-DD" 
                          display-format="DD MMMM YYYY" 
                          clear-button>
        <label class="col-md-3 col-xl-2 col-form-label">Choose a date</label>
      </bs-date-time-field>
    </div>
    <div class="form-group">
      Output Value: <strong>{{ pickDate }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickDate: null,
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


### DateTime selection mode

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-date-time-field v-model="pickDateTime" 
                          value-format="YYYY-MM-DD HH:mm:ss" 
                          display-format="dddd, DD MMM YYYY HH:mm:ss" 
                          clear-button>
        <label class="col-md-3 col-xl-2 col-form-label">Choose a datetime</label>
      </bs-date-time-field>
    </div>
    <div class="form-group">
      Output Value: <strong>{{ pickDateTime }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickDateTime: null,
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


### Month selection mode

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-date-time-field v-model="pickMonth" 
                          view-mode="month"
                          value-format="YYYY-MM" 
                          display-format="MMMM YYYY" 
                          clear-button>
        <label class="col-md-3 col-xl-2 col-form-label">Choose month</label>
      </bs-date-time-field>
    </div>
    <div class="form-group">
      Output Value: <strong>{{ pickMonth }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickMonth: null,
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


### Year selection mode

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-date-time-field v-model="pickYear" 
                          view-mode="year"
                          value-format="YYYY" 
                          clear-button>
        <label class="col-md-3 col-xl-2 col-form-label">Choose year</label>
      </bs-date-time-field>
    </div>
    <div class="form-group">
      Output Value: <strong>{{ pickYear }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickYear: null,
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


### Time selection mode

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-date-time-field v-model="pickTime" 
                          view-mode="time"
                          value-format="HH:mm:ss" 
                          clear-button>
        <label class="col-md-3 col-xl-2 col-form-label">Choose time</label>
      </bs-date-time-field>
    </div>
    <div class="form-group">
      Output Value: <strong>{{ pickTime }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickTime: null,
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


## Hover Display Support

The DateTime picker can be displayed using hover instead of clicking with the `open-on-hover` property.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-date-time-field v-model="date3"
                          value-format="DD-MM-YYYY" 
                          open-on-hover 
                          clear-button>
        <label class="col-md-3 col-xl-2 col-form-label">Choose a date</label>
      </bs-date-time-field>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date3: null,
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


## Landscape Layout

Define `landscape-mode` property explicitly to display DateTime picker in landscape layout.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-date-time-field v-model="pickDate1" 
                          value-format="DD-MM-YYYY" 
                          landscape-mode 
                          clear-button>
        <label class="col-md-3 col-xl-2 col-form-label">Choose a date</label>
      </bs-date-time-field>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickDate1: null,
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

**BsDateTimeField** comes with four style variants.

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
          <bs-date-time-field v-model="date4" 
                              clear-button 
                              floating-label>
            <label>Field Label</label>
          </bs-date-time-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-date-time-field v-model="date5" 
                              placeholder="Placeholder" 
                              clear-button 
                              floating-label>
            <label>Field Label</label>
          </bs-date-time-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date4: null,
      date5: null,
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

When combined with `floating-label` by defining it explicitly, this style variant will follow the 
Google Material Design spec.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-date-time-field v-model="filled1" 
                              clear-button 
                              floating-label 
                              filled>
            <label>Field Label</label>
          </bs-date-time-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-date-time-field v-model="filled2" 
                              placeholder="Placeholder" 
                              clear-button 
                              floating-label 
                              filled>
            <label>Field Label</label>
          </bs-date-time-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filled1: null,
      filled2: null,
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

When combined with `floating-label` by defining it explicitly, this style variant will follow the 
Google Material Design spec.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-date-time-field v-model="outlined1" 
                              clear-button 
                              floating-label 
                              outlined>
            <label>Field Label</label>
          </bs-date-time-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-date-time-field v-model="outlined2" 
                              placeholder="Placeholder" 
                              clear-button 
                              floating-label 
                              outlined>
            <label>Field Label</label>
          </bs-date-time-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      outlined1: null,
      outlined2: null,
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

This style will remove the borders and create flat appearance. It is useful when combined with 
`readonly` property to create appearance like plain text.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-8">
        <div class="form-group">
          <bs-date-time-field v-model="flat1" 
                              clear-button 
                              flat>
            <label class="col-md-3 col-form-label">Choose a date :</label>
          </bs-date-time-field>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="form-group">
          <bs-date-time-field v-model="flat2" 
                              floating-label 
                              flat 
                              readonly>
            <label>Field Label</label>
          </bs-date-time-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flat1: new Date(),
      flat2: new Date(),
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

The `help-text` property on `<bs-date-time-field>` adds the provided string beneath the datetime field.
Using `persistent-help-text` keeps the help text visible when the datetime field is not focused.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-date-time-field :persistent-help-text="false"
                              v-model="expiry1" 
                              help-text="Choose product expiry date" 
                              clear-button
                              floating-label>
            <label>Product Expiry</label>
          </bs-date-time-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-date-time-field v-model="expiry2" 
                              help-text="Choose product expiry date" 
                              clear-button
                              floating-label>
            <label>Product Expiry</label>
          </bs-date-time-field>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-date-time-field :persistent-help-text="false"
                              v-model="expiryFilled1" 
                              help-text="Choose product expiry date" 
                              clear-button
                              floating-label 
                              filled>
            <label>Product Expiry</label>
          </bs-date-time-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-date-time-field v-model="expiryFilled2" 
                              help-text="Choose product expiry date" 
                              clear-button
                              floating-label 
                              filled>
            <label>Product Expiry</label>
          </bs-date-time-field>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-date-time-field :persistent-help-text="false"
                              v-model="expiryOutlined1" 
                              help-text="Choose product expiry date" 
                              clear-button
                              floating-label 
                              outlined>
            <label>Product Expiry</label>
          </bs-date-time-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-date-time-field v-model="expiryOutlined2" 
                              help-text="Choose product expiry date" 
                              clear-button
                              floating-label 
                              outlined>
            <label>Product Expiry</label>
          </bs-date-time-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expiry1: null,
      expiry2: null,
      expiryFilled1: null,
      expiryFilled2: null,
      expiryOutlined1: null,
      expiryOutlined2: null,
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

You can add icons to the `<bs-date-time-field>` with `prepend-icon`, `prepend-icon-outer` or 
`append-icon-outer` property and use `append-icon` property to customize the default icon. 

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-date-time-field v-model="bornDate1" 
                              prepend-icon="user" 
                              clear-button
                              floating-label 
                              filled>
            <label>Prepend</label>
          </bs-date-time-field>
        </div>
        <div class="form-group">
          <bs-date-time-field v-model="bornDate2" 
                              prepend-icon-outer="user" 
                              clear-button 
                              filled 
                              floating-label>
            <label>Prepend Outer</label>
          </bs-date-time-field>
        </div>
        <div class="form-group">
          <bs-date-time-field v-model="bornDate3" 
                              append-icon="calendar" 
                              clear-button 
                              filled 
                              floating-label>
            <label>Append</label>
          </bs-date-time-field>
        </div>
        <div class="form-group">
          <bs-date-time-field v-model="bornDate4" 
                              append-icon-outer="user" 
                              clear-button 
                              filled 
                              floating-label>
            <label>Append Outer</label>
          </bs-date-time-field>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-date-time-field v-model="bornDate1" 
                              prepend-icon="user" 
                              clear-button 
                              floating-label 
                              outlined>
            <label>Prepend</label>
          </bs-date-time-field>
        </div>
        <div class="form-group">
          <bs-date-time-field v-model="bornDate2" 
                              prepend-icon-outer="user" 
                              clear-button 
                              floating-label 
                              outlined>
            <label>Prepend Outer</label>
          </bs-date-time-field>
        </div>
        <div class="form-group">
          <bs-date-time-field v-model="bornDate3" 
                              append-icon="calendar" 
                              clear-button 
                              floating-label 
                              outlined>
            <label>Append</label>
          </bs-date-time-field>
        </div>
        <div class="form-group">
          <bs-date-time-field v-model="bornDate4" 
                              append-icon-outer="user" 
                              clear-button 
                              floating-label 
                              outlined>
            <label>Append Outer</label>
          </bs-date-time-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bornDate1: null,
      bornDate2: null,
      bornDate3: null,
      bornDate4: null,
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

### Properties

<div class="cmp-property">

| Property     | Type      | Default | Description |
|--------------|-----------|---------|-------------|
| append-icon  | `String`  |         | Sets icon to display on inner right side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| append-icon-outer | `String` |     | Sets icon to display on outer right side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| autofocus    | `Boolean` | `false` | Autofocus field when document is loaded. |
| clear-button | `Boolean` | `false` | Sets **auto show** the clear button. |
| color        | `String`  | `'primary'` | DateTime picker color appearance. Any of [MdBootstrap colors](#/reference/colors) variant can be used. |
| disabled     | `Boolean` | `false` | Enable/disable the component and the `<input>` element. |
| display-format     | `String`|     | The display date format. See [moment](https://momentjs.com/docs/#/displaying/) for valid format. If not defined then it will takes from `value-format` property. |
| external-validator | `Object` |    | Sets external validator plugin to be used when validate the field value. |
| filled       | `Boolean` | `false` | Create the component with **filled** appearance. See [Google Material Design](https://material.io/components/text-fields) spec. |
| first-day-of-week | `Number`/`String`  | `0` | Default first day of the week. |
| flat         | `Boolean` | `false` | Create the component with **flat** appearance, and removes the borders. The component appearance will be styled like plain text. |
| floating-label | `Boolean` | `false` | Create the component with floating field label. See [Google Material Design](https://material.io/components/text-fields) spec. |
| header-color | `String`  |     | DateTime picker header panel color, default is the same as `color` property. |
| header-panel | `Boolean` | `true` | Display header panel or not. |
| help-text    | `String`  |     | The help text to display below the field component. |
| id           | `String`  |     | Sets `<input>` element `ID` attribute. This property value is auto generates. |
| landscape-mode | `Boolean` | `false` | Whether to display DateTime picker in landscape or portrait orientation. |
| locale  | `String` | `'en-us'` | Default locale to be used. |
| name    | `String`/`Number` |  | Sets `<input>` element `name` attribute. |
| open    | `Boolean` | `false`  | DateTime picker state: **show** or **hide**. |
| open-on-hover | `Boolean` | `false` | Triggers the DateTime picker to display when `mouseenter`. |
| outlined    | `Boolean` | `false`  | Create the component with **outlined** appearance. See [Google Material Design](https://material.io/components/text-fields) spec. |
| persistent-help-text | `Boolean` | `true` | Keeps help text visible when the component is not focused. |
| picker-placement   | `String`  | `'bottom-left'` | DateTime picker display placement. Valid values are: `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`. |
| placeholder  | `String`  |       | Sets the field placeholder. |
| prepend-icon | `String`  |       | Sets icon to display on inner left side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| prepend-icon-outer | `String` |  | Sets icon to display on outer left side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| readonly     | `Boolean` | `false` | Put the component in readonly state and sets the `<input>` element `readonly` attribute. |
| required     | `Boolean` | `false` | Sets `<input>` element `required` attribute. |
| transition   | `String`  | `'popover'` | Transition animation when showing the DateTime picker. This animation is effected by `picker-placement` property. |
| value <bs-badge color="unique text-white">v-model</bs-badge> | `String`/`Number` |  | The value monitored by `v-model` to maintain field value. The value must be convertible to datetime. |
| value-format | `String`  | `'L'`    | The date format for output value. See [moment](https://momentjs.com/docs/#/displaying/) for valid format. |
| view-mode    | `String`  | `'date'` | DateTime picker view mode, valid values are: `date`, `month`, `year` or `time`. |

</div>


### Events

<div class="cmp-property">

| Name    | Argument Type     | Description |
|---------|-------------------|-------------|
| blur    | `FocusEvent`      | Triggers when cursor leave the `<input>` element. |
| change  | `String`/`Number` | Triggers when the `value` is changed. |
| close   |                   | Triggers when DateTime picker is hiding. |
| focus   | `FocusEvent`      | Triggers when cursor entered the `<input>` element. |
| input   | `String`/`Number` | Used to update the `value` property. |
| open    | `Boolean`         | Triggers when updating DateTime picker state: show or hide. |

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


<script src="./script/datetime-field.js"></script>
