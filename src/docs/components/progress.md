:::lead
**BsProgress** is a component which are typically used for displaying simple progress 
bars, or to show the data loading progress. 
:::


## Overview

`<bs-progress>` is used for displaying simple progress. The `mode` property has three 
valid values, they are: `determinate`, `indeterminate`, and `buffer`. The default value 
for `mode` property is `indeterminate`. `<bs-progress>` doesn't triggers the `input` 
event, therefore there is no two-way data bindings, but `v-model` still works fine 
to bind the `value` property. 

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-progress class="mb-3"></bs-progress>
    <bs-progress 
      v-model="linear" 
      mode="determinate" 
      color="green">
    </bs-progress>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linear: 10,
    }
  },
  created() {
    this.timer = setInterval(() => {
      this.linear += 10;
      if (this.linear > 100) {
        this.linear = 0;
      }
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
</script>

<style scoped>
.my-demo-wrapper {
  margin: 24px;
}
</style>
```
:::


## Spinner Type

The *Spinner* progress type can be enabled by using `type` property sets to `spinner`.

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <div class="pr-5 d-inline-block">
      <bs-progress type="spinner"></bs-progress>
    </div>
    <div class="d-inline-block">
      <bs-progress 
        :value="spinner" 
        mode="determinate" 
        type="spinner" 
        color="purple">
      </bs-progress>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spinner: 10,
    }
  },
  created() {
    this.timer = setInterval(() => {
      this.spinner += 10;
      if (this.spinner > 100) {
        this.spinner = 0;
      }
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
</script>

<style scoped>
.my-demo-wrapper {
  margin: 24px;
}
</style>
```
:::


## Buffer Mode

The `buffer` mode can only works for *Progress Bar* type (default type). Example below will
shows you a simple usage of `buffer` mode.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-progress 
      :buffer="buffer" 
      :value="amount2" 
      mode="buffer" 
      color="deep-orange" 
      class="mb-2">
    </bs-progress>
    <bs-progress 
      :buffer="buffer" 
      :value="amount2" 
      mode="buffer" 
      color="purple" 
      class="mb-4">
    </bs-progress>
    <bs-divider class="mb-3"></bs-divider>
    <bs-card-content type="subtitle" class="mb-2">
      Progress Value: <span class="text-blue">{{ amount2 }}%</span>
    </bs-card-content>
    <input 
      v-model.number="amount2"
      class="form-control-range" 
      type="range" /> 
    <bs-card-content type="subtitle" class="my-2">
      Buffer Value: <span class="text-blue">{{ buffer }}%</span>
    </bs-card-content>
    <input 
      v-model.number="buffer"
      class="form-control-range" 
      type="range" /> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount2: 25,
      buffer: 50,
    }
  }
}
</script>

<style scoped>
.my-demo-wrapper {
  margin: 24px;
}
</style>
```
:::


## Colors and Sizes

You can change the color of *Progress Bar* or *Spinner* using the color property. Additionaly, 
you use the `height` property to sets the *Progress Bar* height and use the `stroke` property
combine with the `diameter` property to sets the *Spinner* size.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-12 col-xl-7 mb-2">
        <bs-card-content type="title">
          Bars
        </bs-card-content>
        <bs-progress 
          :value="amount1"
          height="10"
          mode="determinate"
          color="deep-orange"
          class="mb-2">
        </bs-progress>
        <bs-progress 
          :value="amount1"
          height="15"
          mode="determinate"
          color="purple"
          class="mb-2">
        </bs-progress>
        <bs-progress 
          :value="amount1"
          height="20"
          mode="determinate"
          color="blue"
          class="mb-2">
        </bs-progress>
      </div>
      <div class="col-12 col-xl-5 text-center">
        <bs-card-content type="title">
          Spinner
        </bs-card-content>
        <div class="p-3 d-inline-block">
          <bs-progress 
            :value="amount1"
            type="spinner"
            mode="determinate"
            color="amber">
          </bs-progress>
        </div>
        <div class="p-3 d-inline-block">
          <bs-progress 
            :value="amount1"
            type="spinner"
            diameter="80"
            stroke="15"
            mode="determinate"
            color="deep-orange">
          </bs-progress>
        </div>
        <div class="p-3 d-inline-block">
          <bs-progress 
            :value="amount1"
            type="spinner"
            diameter="90"
            stroke="20"
            mode="determinate"
            color="danger">
          </bs-progress>
        </div>
      </div>
      <div class="col-12 mt-2">
        <bs-divider class="mb-3"></bs-divider>
        <bs-card-content type="subtitle" class="mb-2">
          Progress Value: <span class="text-blue">{{ amount1 }}%</span>
        </bs-card-content>
        <input 
          v-model.number="amount1"
          class="form-control-range" 
          type="range" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount1: 75,
    }
  }
}
</script>

<style scoped>
.my-demo-wrapper {
  margin: 24px;
}
</style>
```
:::


## Component Reference

### Properties

<div class="cmp-property">

| Property | Type     | Default | Description |
|----------|----------|---------|-------------|
| buffer   | `Number` | `0`     | Progress bar buffer length. |
| color    | `String` | `'primary'` | The component color appearance. Any of [MDBootstrap colors](#/reference/colors) variant can be applied. |
| diameter | `Number` | `60`    | Spinner diameter value. |
| height   | `Number` | `5`     | Progress bar thickness. |
| mode     | `String` | `'indeterminate'` | ProgressControl mode, valid values are: `determinate`, `indeterminate`, `buffer`. |
| stroke   | `Number` | `6`     | Spinner thickness. |
| type     | `String` | `'bar'` | ProgressControl type, valid values are: `spinner`, `bar`. |
| value <bs-badge color="unique text-white">v-model</bs-badge> | `Number` | `0` | The value monitored by `v-model` to control the progress value. |

</div>


<script src="./script/progress.js"></script>
