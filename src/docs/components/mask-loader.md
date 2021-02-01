:::lead
**BsMaskLoader** is a component which are typically used for displaying a loading 
progress with backdrop overlay.
:::


## Overview

**BsMaskLoader** can be used to obscure parent element. With this you can provide
information to User that the application is busy performing a background task. Example
below will shows you how to use the `<bs-mask-loader>`.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card>
      <bs-card-body>
        <bs-card-content type="title">
          Content Title
        </bs-card-content>
        <p>Click the button to toggle the Mask Loader.</p>
        <bs-button @click="showLoader = true">
          Show Loader
        </bs-button>
      </bs-card-body>
      <bs-mask-loader :show="showLoader"></bs-mask-loader>
    </bs-card>
    <bs-button 
      class="mt-3" 
      color="indigo"
      @click="showLoader = !showLoader">
      Toggle Loader
    </bs-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLoader: false,
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


## Loader Types

**BsMaskLoader** comes with **four** type variants, which are: **linear** (the default), 
**progress**, **spinner**, and **glow**.

*Available in Vue MDBootstrap since `v1.1.4`*

:::demo
```html
<template>
  <div class="my-demo-wrapper row">
    <div class="col-md-6 mb-4">
      <bs-card>
        <bs-card-body>
          <bs-card-content type="title">
            Linear Loader
          </bs-card-content>
          <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </bs-card-body>
        <bs-mask-loader :show="showLinear"></bs-mask-loader>
      </bs-card>
      <bs-button 
        class="mt-3" 
        color="indigo"
        @click="showLinear = !showLinear">
        Toggle Loader
      </bs-button>
    </div>
    <div class="col-md-6 mb-4">
      <bs-card>
        <bs-card-body>
          <bs-card-content type="title">
            Progress Loader
          </bs-card-content>
          <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </bs-card-body>
        <bs-mask-loader 
          :show="showProgress" 
          spinner-type="progress">
        </bs-mask-loader>
      </bs-card>
      <bs-button 
        class="mt-3" 
        color="indigo"
        @click="showProgress = !showProgress">
        Toggle Loader
      </bs-button>
    </div>
    <div class="col-md-6 mb-4 mb-md-0">
      <bs-card>
        <bs-card-body>
          <bs-card-content type="title">
            Spinner Loader
          </bs-card-content>
          <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </bs-card-body>
        <bs-mask-loader 
          :show="showSpinner" 
          spinner-type="spinner">
        </bs-mask-loader>
      </bs-card>
      <bs-button 
        class="mt-3" 
        color="indigo"
        @click="showSpinner = !showSpinner">
        Toggle Loader
      </bs-button>
    </div>
    <div class="col-md-6 mb-4 mb-md-0">
      <bs-card>
        <bs-card-body>
          <bs-card-content type="title">
            Grow Loader
          </bs-card-content>
          <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </bs-card-body>
        <bs-mask-loader 
          :show="showGrow" 
          spinner-type="grow">
        </bs-mask-loader>
      </bs-card>
      <bs-button 
        class="mt-3" 
        color="indigo"
        @click="showGrow = !showGrow">
        Toggle Loader
      </bs-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showGrow: false,
      showLinear: false,
      showProgress: false,
      showSpinner: false,
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


## Size and Color

You can change the Loader size simply by changing the `spinner-diameter` property value.
And specify the value of the `spinner-color` property to change the Loader color.
And specify the value of the `overlay-color` property to change the backdrop overlay color.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card>
      <bs-card-body>
        <bs-card-content type="title">
          Content Title
        </bs-card-content>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </bs-card-body>
      <bs-mask-loader 
        :show="showCustom" 
        overlay-color="#064E40"
        spinner-color="red" 
        spinner-diameter="60">
      </bs-mask-loader>
    </bs-card>
    <bs-button 
      class="mt-3" 
      color="indigo"
      @click="showCustom = !showCustom">
      Toggle Loader
    </bs-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCustom: false,
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
| fixed-position  | `Boolean` | `false` | Sets the css-style `position` value. If `true` then css-style `position` is set to `fixed`. |
| overlay-color   | `String` | `'#000000'` | Backdrop overlay color in hex color formatted value. <bs-badge>v1.1.4</bs-badge> |
| overlay-opacity | `Number`/`String`  | `0.4` | Backdrop overlay opacity value. <bs-badge>v1.1.4</bs-badge> |
| show <bs-badge variant="danger">required</bs-badge> | `Boolean` | `false` | Monitor the ***Mask Loader*** state, `show` or `hide`. |
| spinner-color | `String` | `'primary'` | The spinner color. Any of [MDBootstrap colors](#/reference/colors) variant can be applied. <bs-badge>v1.1.4</bs-badge> |
| spinner-diameter  | `Number`/`String` | `35` | The spinner diameter. |
| spinner-thickness | `Number`/`String` | `5` | The spinner thickness. Only valid for `linear` and `progress` type variants. <bs-badge>v1.1.4</bs-badge> |
| spinner-type  | `String` | `'linear'` | The spinner type variant. Available type variants are: `linear`, `progress`, `spinner`, and `glow`. <bs-badge>v1.1.4</bs-badge> |
| transition | `String` | `'fade'` | The animation transition to be used when displaying the mask loader. |
| z-index | `Number` | `100` | Sets the css style `z-index` value. |

</div>


<script src="./script/mask-loader.js"></script>
