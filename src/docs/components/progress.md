:::lead
**BsProgress** is a component which are typically used for displaying simple or complex progress bars,
or to show the data loading progress. 
:::


## Overview

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-progress class="mb-3"></bs-progress>
    <bs-progress :value="linear" mode="determinate" color="green"></bs-progress>
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

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <div class="pr-5 d-inline-block">
      <bs-progress type="spinner"></bs-progress>
    </div>
    <div class="d-inline-block">
      <bs-progress :value="spinner" mode="determinate" type="spinner" color="purple"></bs-progress>
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


## Buffer

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-progress :value="amount2" :buffer="buffer" mode="buffer" color="deep-orange" class="mb-2"></bs-progress>
    <bs-progress :value="amount2" :buffer="buffer" mode="buffer" color="purple" class="mb-4"></bs-progress>
    <bs-divider class="mb-3"></bs-divider>
    <bs-card-content type="subtitle" class="mb-2">
      Progress Value: <span class="text-blue">{{ amount2 }}%</span>
    </bs-card-content>
    <input type="range" class="form-control-range" v-model.number="amount2"></input>
    <bs-card-content type="subtitle" class="my-2">
      Buffer Value: <span class="text-blue">{{ buffer }}%</span>
    </bs-card-content>
    <input type="range" class="form-control-range" v-model.number="buffer"></input>
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

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-12 col-xl-7 mb-2">
        <bs-card-content type="title">
          Bars
        </bs-card-content>
        <bs-progress :value="amount1"
                     height="10"
                     mode="determinate"
                     color="deep-orange"
                     class="mb-2"></bs-progress>
        <bs-progress :value="amount1"
                     height="15"
                     mode="determinate"
                     color="purple"
                     class="mb-2"></bs-progress>
        <bs-progress :value="amount1"
                     height="20"
                     mode="determinate"
                     color="blue"
                     class="mb-2"></bs-progress>
      </div>
      <div class="col-12 col-xl-5 text-center">
        <bs-card-content type="title">
          Spinner
        </bs-card-content>
        <div class="p-3 d-inline-block">
          <bs-progress :value="amount1"
                       type="spinner"
                       mode="determinate"
                       color="amber"></bs-progress>
        </div>
        <div class="p-3 d-inline-block">
          <bs-progress :value="amount1"
                       type="spinner"
                       diameter="80"
                       stroke="15"
                       mode="determinate"
                       color="deep-orange"></bs-progress>
        </div>
        <div class="p-3 d-inline-block">
          <bs-progress :value="amount1"
                       type="spinner"
                       diameter="90"
                       stroke="20"
                       mode="determinate"
                       color="danger"></bs-progress>
        </div>
      </div>
      <div class="col-12 mt-2">
        <bs-divider class="mb-3"></bs-divider>
        <bs-card-content type="subtitle" class="mb-2">
          Progress Value: <span class="text-blue">{{ amount1 }}%</span>
        </bs-card-content>
        <input type="range" class="form-control-range" v-model.number="amount1"></input>
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
| color    | `String` | `'primary'` | The component color appearance. Any of **Vue MdBootstrap** color variant can be applied. |
| diameter | `Number` | `60`    | Spinner diameter value. |
| height   | `Number` | `5`     | Progress bar thickness. |
| mode     | `String` | `'indeterminate'` | ProgressControl mode, valid values are: `determinate`, `indeterminate`, `buffer`. |
| stroke   | `Number` | `6`     | Spinner thickness. |
| type     | `String` | `'bar'` | ProgressControl type, valid values are: `spinner`, `bar`. |
| value <bs-badge color="unique text-white">v-model</bs-badge> | `Number` | `0` | The value monitored by `v-model` to control the progress value. |

</div>


<script src="./script/progress.js"></script>
