:::lead
**BsAlert** is a component that provides contextual feedback messages for typical user actions with the
handful of available and flexible alert messages. With the right use of colors, they add some emotional 
weight to our information, ranging from a simple warning to critical system failure or from an operation 
success to neutral information.
:::


## Overview

By default, `<bs-alert>` is set to primary color. You can use `color` property to change its color and 
add some emotional weight. Any of [MDBootstrap colors](#/reference/colors) variants can be applied to the 
`color` property.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-alert>
      Simple alert with primary color
    </bs-alert>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Style Variants

**BsAlert** comes with three style variants.


### Default Style

Alert with default style variant will have appearance like **Bootstrap** alert.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-alert>
      Simple alert with primary color
    </bs-alert>
    <bs-alert color="info">
      Simple info alert with info color
    </bs-alert>
    <bs-alert color="success">
      Simple alert with success color
    </bs-alert>
    <bs-alert color="danger">
      Simple alert with danger color
    </bs-alert>
    <bs-alert color="warning">
      Simple alert with warning color
    </bs-alert>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


### Solid Fill Style

Use `solid-fill` property to enable the alert variant with **solid fill style**.

*Available in Vue MDBootstrap since `v1.2.0`*

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-alert solid-fill>
      Solid alert with primary color
    </bs-alert>
    <bs-alert color="info" solid-fill>
      Solid info alert with info color
    </bs-alert>
    <bs-alert color="success" solid-fill>
      Solid alert with success color
    </bs-alert>
    <bs-alert color="danger" solid-fill>
      Solid alert with danger color
    </bs-alert>
    <bs-alert color="warning" solid-fill>
      Solid alert with warning color
    </bs-alert>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


### Outline Style

Use `outlined` property to enable the alert variant with **outline style**.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-alert color="primary" outlined>
      Outline alert with primary color
    </bs-alert>
    <bs-alert color="info" outlined>
      Outline info alert with info color
    </bs-alert>
    <bs-alert color="success" outlined>
      Outline alert with success color
    </bs-alert>
    <bs-alert color="danger" outlined>
      Outline alert with danger color
    </bs-alert>
    <bs-alert color="warning" outlined>
      Outline alert with warning color
    </bs-alert>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Alerts with icon

### Predefined icon

Use `icon-type` property to create contextual alert with predefined icon. Additionally, 
you can sets the `icon-outlined` to `false` to use solid predefined icon.

*Available in Vue MDBootstrap since `v1.2.0`*

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-alert 
      icon-type="success" 
      solid-fill>
      Aww yeah, you successfully read this important alert message. This is an example how to
      construct <b>Alerts</b> with predefined icon.
    </bs-alert>
    <bs-alert
      icon-type="info" 
      solid-fill>
      Aww yeah, you successfully read this important alert message. This is an example how to
      construct <b>Alerts</b> with predefined icon.
    </bs-alert>
    <bs-alert
      :icon-outlined="false" 
      icon-type="warning" 
      solid-fill>
      Aww yeah, you successfully read this important alert message. This is an example how to
      construct <b>Alerts</b> with predefined icon.
    </bs-alert>
    <bs-alert 
      :icon-outlined="false" 
      icon-type="danger" 
      solid-fill>
      Aww yeah, you successfully read this important alert message. This is an example how to
      construct <b>Alerts</b> with predefined icon.
    </bs-alert>
    <bs-alert 
      :icon-outlined="false" 
      icon-type="help" 
      solid-fill>
      Aww yeah, you successfully read this important alert message. This is an example how to
      construct <b>Alerts</b> with predefined icon.
    </bs-alert>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


### Custom icon

Custom icon can be enabled by using the `icon` property and prefix its value with 
`bs-` to use *Vue MDBootstrap internal icon* or use any valid 
[FontAwesome Icon](https://fontawesome.com/icons?d=gallery&s=solid&m=free) name.

*Updated since Vue MDBootstrap `v1.2.0`*

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-alert icon="bs-verified" color="primary">
      Aww yeah, you successfully read this important alert message. This is an example how to
      construct <b>Alerts</b> with custom icon.
    </bs-alert>
    <bs-alert icon="bs-help-center" color="orange">
      Aww yeah, you successfully read this important alert message. This is an example how to
      construct <b>Alerts</b> with custom icon.
    </bs-alert>
    <bs-alert icon="exclamation-triangle" color="danger">
      Aww yeah, you successfully read this important alert message. This is an example how to
      construct <b>Alerts</b> with custom icon.
    </bs-alert>
    <bs-alert icon="bell" color="info">
      Aww yeah, you successfully read this important alert message. This is an example how to
      construct <b>Alerts</b> with custom icon.
    </bs-alert>
    <bs-alert icon="bullhorn" color="success">
      Aww yeah, you successfully read this important alert message. This is an example how to
      construct <b>Alerts</b> with custom icon.
    </bs-alert>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Additional content inside alerts

`<bs-alert>` can also contain additional HTML elements like headings and paragraphs, which will be 
styled with the appropriate color matching the variant.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-alert color="purple" icon="exclamation-triangle">
      <h5>Well done!</h5>
      <p>
        Aww yeah, you successfully read this important alert message. This is an example how to
        construct <b>Alerts</b> from other predefined colors.
      </p>
      <hr />
      <p class="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
      </p>
    </bs-alert>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


### Link color

Use the `.alert-link` utility class on `<a>` element to quickly provide matching colored links 
within any alert.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-alert color="primary">
      Simple primary alert with <a class="alert-link">an example link</a>.
    </bs-alert>
    <bs-alert color="info">
      Simple info alert with <a class="alert-link">an example link</a>.
    </bs-alert>
    <bs-alert color="success">
      Simple success alert with <a class="alert-link">an example link</a>.
    </bs-alert>
    <bs-alert color="danger">
      Simple danger alert with <a class="alert-link">an example link</a>.
    </bs-alert>
    <bs-alert color="warning">
      Simple warning alert with <a class="alert-link">an example link</a>.
    </bs-alert>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Dismissible alerts

Use the `dismissible` property to dismiss any inline `<bs-alert>`. This will add a close `X` button. 

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-alert color="primary" dismissible>
      Simple alert with primary color. Click the close button over there
      <font-awesome-icon icon="long-arrow-alt-right"></font-awesome-icon>
    </bs-alert>
    <bs-alert color="info" dismissible>
      Simple info alert with info color. Click the close button over there
      <font-awesome-icon icon="long-arrow-alt-right"></font-awesome-icon>
    </bs-alert>
    <bs-alert color="success" dismissible>
      Simple alert with success color. Click the close button over there
      <font-awesome-icon icon="long-arrow-alt-right"></font-awesome-icon>
    </bs-alert>
    <bs-alert color="danger" outlined dismissible>
      Outline alert with danger color. Click the close button over there
      <font-awesome-icon icon="long-arrow-alt-right"></font-awesome-icon>
    </bs-alert>
    <bs-alert color="warning" outlined dismissible>
      Outline alert with warning color. Click the close button over there
      <font-awesome-icon icon="long-arrow-alt-right"></font-awesome-icon>
    </bs-alert>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


### Controlling dismissible alert

Use the `v-model` directive to create two-way data bindings on the `value` property as in `v-model="showAlert"`. 
This is useful to control the dismissible, because when user closes the alert, your variable will be updated. 

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-alert 
      v-model="showDismissibleAlert"
      color="teal" 
      dismissible>
      This is a dismissible alert.
    </bs-alert>
    <bs-alert 
      :value="dismissCountDown > 0"
      @input="dismissCountDown=0"
      dismissible>
      <div class="pb-2">This alert will dismiss after {{ dismissCountDown }} seconds...</div>
      <bs-progress 
        :value="percentProgress"
        color="warning" 
        mode="determinate"
        type="bar"> 
      </bs-progress>
    </bs-alert>
    <div class="row">
      <div class="col-12 col-md-6 mb-3 mb-md-0">
        <bs-button 
          color="primary" 
          @click="toggleAlert">
          {{ showDismissibleAlert ? 'Hide' : 'Show' }} dismissible Alert
        </bs-button>
      </div>    
      <div class="col-12 col-md-6 mb-3 mb-md-0">
        <bs-button 
          color="primary" 
          @click="showAlert">
          Show Alert with timer
        </bs-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      timerInterval: null,
    }
  },
  computed: {
    percentProgress() {
      return (this.dismissCountDown / this.dismissSecs) * 100;
    }
  },
  watch: {
    dismissCountDown(newValue) {
      if (newValue < 1) {
        clearInterval(this.timerInterval);
      }
    }
  },
  methods: {
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
      this.startTimer();
    },
    startTimer() {
      this.timerInterval = setInterval(() => (this.dismissCountDown -= 1), 1000);
    },
    toggleAlert() {
      this.showDismissibleAlert = !this.showDismissibleAlert;
    },
  }
}
</script>

<style>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::

:::warning
Do not use the `value` property when using `v-model`.
:::


## Component Reference

### Properties

<div class="cmp-property">

| Property    | Type        | Default     | Description |
|-------------|-------------|-------------|-------------|
| color       | `String`    |  | Any of the [MDBootstrap colors](#/reference/colors) variants can be used. When **undefined**, **primary** color will be used. |
| dismissible | `Boolean`   | `false`     | When set, display the close button to dismiss/hide the component |
| icon        | `String`    |             | The icon to display as avatar. Use prefix `bs-` to use internal icon, otherwise use any valid [FontAwesome Icon](https://fontawesome.com/icons?d=gallery&s=solid&m=free) name. |
| icon-flip     | `String`    |  | Flip the icon, valid values are: `horizontal`, `vertical`, `both`. <bs-badge>v1.2.0</bs-badge> |
| icon-outlined | `Boolean`   | `true`  | Use predefined outline icon to create contextual alert. <bs-badge>v1.2.0</bs-badge> |
| icon-pulse    | `Boolean`   | `false` | Apply **pulse** animation to the icon. <bs-badge>v1.2.0</bs-badge> |
| icon-rotation | `Number`    |         | Rotate the icon, valid values are: `90`, `180`, `270`. <bs-badge>v1.2.0</bs-badge> |
| icon-spin     | `Boolean`   | `false` | Apply **spin** animation to the icon. <bs-badge>v1.2.0</bs-badge> |
| icon-type   | `String`  |  | Use predefined icon to create contextual alert. Valid values: `success`, `info`, `warning`, `danger`, `help`. <bs-badge>v1.2.0</bs-badge> |
| outlined    | `Boolean` | `false`  | Create outline alert style |
| solid-fill  | `Boolean` | `false`  | Create alert variant with solid fill style. <bs-badge>v1.2.0</bs-badge> |
| transition  | `String`  | `'fade'` | The component animation transition to display/hide |
| value <bs-badge color="unique text-white">v-model</bs-badge>  | `Boolean` | `true` | The value monitored by `v-model` to show or hide the alert component |

</div>


### Events

<div class="cmp-property">

| Name   | Argument Type | Description |
|--------|---------------|-------------|
| input  | `Boolean`     | Used to update component state of `value` property |

</div>


### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| default | Main content |
| alertIcon | Content for custom icon. This slot can be enabled by defining the `icon` property with any values, then use this slot to customize the contents. <bs-badge>v1.2.0</bs-badge> |

</div>

<script src="./script/alert.js"></script>
