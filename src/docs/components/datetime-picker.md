:::lead
**BsDatePicker** is a component that generates a calendar style date selection widget, 
which can be used to create customized date picker inputs.
:::


## Overview

DateTime picker's component comes in two orientation variations, portrait (**default**) 
and landscape. By default they are emitting `input` event. Additionaly, you can use 
`v-model` directive to create two-way data bindings on the `value` property.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-md">
        <bs-date-picker v-model="date1"></bs-date-picker>
        <div class="form-group mt-2">
          Output Value: <strong>{{ date1 }}</strong>
        </div>
      </div>
      <div class="col-md">
        <bs-date-picker v-model="date2" :landscape="true"></bs-date-picker>
        <div class="form-group mt-2">
          Output Value: <strong>{{ date2 }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date1: null,
      date2: null,
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


## Color Style

DateTime picker colors can be set using the `color` and `header-color` property. If 
`header-color` property is not provided, the header panel will use the `color` 
property value. Any color variant from [MdBootstrap colors](#/reference/colors) can 
be applied to the `<bs-date-picker>`. 

:::demo
```html
<template>
  <div class="my-demo-wrapper d-flex justify-content-center">
    <div class="mx-auto">
      <bs-date-picker v-model="date3" color="deep-purple"></bs-date-picker>
      <div class="form-group mt-2">
        Output Value: <strong>{{ date3 }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date3: null,
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


## Picker Selection Modes

You can use `view-mode` property to use different DateTime picker, but to get the correct 
value the `format` property must be defined. 

### Date selection mode

:::demo
```html
<template>
  <div class="my-demo-wrapper d-flex justify-content-center">
    <div class="mx-auto">
      <bs-date-picker v-model="date4"></bs-date-picker>
      <div class="form-group mt-2">
        Output Value: <strong>{{ date4 }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date4: null,
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


### DateTime selection mode

:::demo
```html
<template>
  <div class="my-demo-wrapper d-flex justify-content-center">
    <div class="mx-auto">
      <bs-date-picker v-model="datetime1" 
                      format="YYYY-MM-DD HH:mm:ss"></bs-date-picker>
      <div class="form-group mt-2">
        Output Value: <strong>{{ datetime1 }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datetime1: null,
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


### Month selection mode

:::demo
```html
<template>
  <div class="my-demo-wrapper d-flex justify-content-center">
    <div class="mx-auto">
      <bs-date-picker v-model="month1" 
                      view-mode="month" 
                      format="YYYY-MM"></bs-date-picker>
      <div class="form-group mt-2">
        Output Value: <strong>{{ month1 }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      month1: null,
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


### Year selection mode

:::demo
```html
<template>
  <div class="my-demo-wrapper d-flex justify-content-center">
    <div class="mx-auto">
      <bs-date-picker v-model="year1" 
                      view-mode="year" 
                      format="YYYY"></bs-date-picker>
      <div class="form-group mt-2">
        Output Value: <strong>{{ year1 }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year1: null,
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


### Time selection mode

:::demo
```html
<template>
  <div class="my-demo-wrapper d-flex justify-content-center">
    <div class="mx-auto">
      <bs-date-picker v-model="time1" 
                      view-mode="time" 
                      format="HH:mm:ss"></bs-date-picker>
      <div class="form-group mt-2">
        Output Value: <strong>{{ time1 }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time1: null,
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

| Property     | Type      | Default | Description |
|--------------|-----------|---------|-------------|
| color        | `String`  | `'primary'` | DateTime picker color appearance. Any of [MdBootstrap colors](#/reference/colors) variant can be used. |
| first-day-of-week | `Number`/`String`  | `0` | Default first day of the week. |
| format       | `String`  | `'L'`   | The date format for output value. See [moment](https://momentjs.com/docs/#/displaying/) for valid format. |
| full-width   | `Boolean` | `false` | Whether to display DateTime picker in 100% width or not. |
| header-color | `String`  |         | DateTime picker header panel color, default is the same as `color` property. |
| header-panel | `Boolean` | `true`  | Show or hide header panel. |
| landscape    | `Boolean` | `false` | Whether to display DateTime picker in landscape or portrait orientation. |
| locale       | `String`  | `'en-us'` | Default locale to be used. |
| readonly     | `Boolean` | `false` | Put the component in readonly state. |
| value <bs-badge color="unique text-white">v-model</bs-badge> | `String`/`Number`/`Date` |  | The value monitored by `v-model` to maintain the field value. The value must be convertible to datetime. |
| view-mode    | `String`  | `'date'`| DateTime picker view mode, valid values are: `date`, `month`, `year` or `time`. |
| width | `Number`/`String`| `300`   | DateTime picker's container width, default is 300 pixels. |

</div>


### Events

<div class="cmp-property">

| Name    | Argument Type     | Description |
|---------|-------------------|-------------|
| input   | `String`/`Number` | Used to update the `value` property. |

</div>

<script src="./script/datetime-picker.js"></script>
