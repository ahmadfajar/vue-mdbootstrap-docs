:::lead
**BsAlert** is a component which provide contextual feedback message for typical user actions with the
handful of available and flexible alert messages. With the right use of colors, they add some emotional 
weight to our information, ranging from a simple warning to critical system failure or from an operation 
success to neutral information.
:::


## Overview

#### Basic Examples

:::demo
```html
<div class="alert-demo-wrapper">
  <bs-alert color="primary">
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
<style scoped>
.alert-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


#### Outline Alert

:::demo
```html
<div class="alert-demo-wrapper">
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
<style scoped>
.alert-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Additional content inside alerts

`<bs-alert>` can also contain additional HTML elements like headings and paragraphs, which will be styled with 
the appropriate color matching the variant.

:::demo
```html
<div class="alert-demo-wrapper">
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
<style scoped>
.alert-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


#### Link color

Use the `.alert-link` utility class on `<a>` element to quickly provide matching colored links within any alert.

:::demo
```html
<div class="alert-demo-wrapper">
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
<style scoped>
.alert-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Dismissible alerts

Use the `dismissible` property to dismiss any inline `<bs-alert>`. This will add a close `X` button. 

:::demo
```html
<div class="alert-demo-wrapper">
  <bs-alert color="primary" dismissable>
    Simple alert with primary color. Click the close button over there
    <font-awesome-icon icon="long-arrow-alt-right"></font-awesome-icon>
  </bs-alert>
  <bs-alert color="info" dismissable>
    Simple info alert with info color. Click the close button over there
    <font-awesome-icon icon="long-arrow-alt-right"></font-awesome-icon>
  </bs-alert>
  <bs-alert color="success" dismissable>
    Simple alert with success color. Click the close button over there
    <font-awesome-icon icon="long-arrow-alt-right"></font-awesome-icon>
  </bs-alert>
  <bs-alert color="danger" outlined dismissable>
    Outline alert with danger color. Click the close button over there
    <font-awesome-icon icon="long-arrow-alt-right"></font-awesome-icon>
  </bs-alert>
  <bs-alert color="warning" outlined dismissable>
    Outline alert with warning color. Click the close button over there
    <font-awesome-icon icon="long-arrow-alt-right"></font-awesome-icon>
  </bs-alert>
</div>
<style scoped>
.alert-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Controlling dissmisable alert

Use the `v-model` directive to create two-way data bindings on the `value` property as in `v-model="showAlert"`. 
This is useful to control the dismissible, because when user closes the alert, your variable will be updated. 

:::warning
Do not use the `value` property when using `v-model`.
:::


:::demo
```html
<div class="alert-demo-wrapper">
    <bs-alert v-model="showDismissibleAlert"
              color="teal" dismissable>
      This is a dismissable alert.
    </bs-alert>
    <bs-alert :value="dismissCountDown > 0"
              @input="dismissCountDown=0"
              dismissable>
      <div class="pb-2">This alert will dismiss after {{ dismissCountDown }} seconds...</div>
      <bs-progress color="warning" mode="determinate"
                   type="bar" :value="percentProgress"></bs-progress>
    </bs-alert>
    <div class="row">
      <div class="col-12 col-md-6 mb-3 mb-md-0">
        <bs-button color="primary" @click="toggleAlert">
          {{ showDismissibleAlert ? 'Hide' : 'Show' }} dismissable Alert
        </bs-button>
      </div>    
      <div class="col-12 col-md-6 mb-3 mb-md-0">
        <bs-button color="primary" @click="showAlert">
          Show Alert with timer
        </bs-button>
      </div>
    </div>
</div>
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
.alert-demo-wrapper {
  padding: 24px;
}
</style>

```
:::


## Component Reference

#### Properties

<div class="cmp-property">

| Property    | Type        | Default     | Description |
|-------------|-------------|-------------|-------------|
| color       | `String`    | `'primary'` | Applies one of the **Vue MdBootstrap color** variants to the component |
| dismissable | `Boolean`   | `false`     | When set, display the close button to dismiss/hide the component |
| outlined    | `Boolean`   | `false`     | Create outline alert style |
| icon        | `String`    |             | The Icon to display, see: [FontAwesome Icon](https://fontawesome.com/icons?d=gallery&s=solid&m=free) for valid icon name |
| transition  | `String`    | `'fade'`    | The component animation transition to display/hide |
| value <bs-badge color="unique text-white">v-model</bs-badge>  | `Boolean` | `true` | The value monitored by `v-model` to display or hide the alert component |

</div>


#### Events

<div class="cmp-property">

| Name   | Argument Type | Description |
|--------|---------------|-------------|
| input  | `Boolean`     | Used to update component state of `v-model` value property |

</div>

#### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| default | Main content |

</div>

<script src="./alert-js.js"></script>
