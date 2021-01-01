:::lead
**BsIconToggle** is a lightweight component which is used to toggle two different icon. It can be used
inside almost any component or html element. **BsIconToggle** utilizes
[vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome) component to display the icon.
:::

*Available in Vue MDBootstrap since v1.1.0*


## Example

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="input-group">
      <input :type="inputType" 
             class="form-control" 
             placeholder="Enter password" 
             aria-label="password">
      <div class="input-group-append">
        <bs-icon-toggle class="input-group-text" 
                        icon="eye" 
                        toggle-icon="eye-slash"
                        v-model="passwordToggled">
        </bs-icon-toggle>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      passwordToggled: false
    }
  },
  computed: {
    inputType() {
      return this.passwordToggled ? 'text' : 'password';
    }
  },
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

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| icon <bs-badge color="danger text-white">required</bs-badge> | `String` |  | The default icon to display. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| value <bs-badge color="unique text-white">v-model</bs-badge> | `Boolean` | `false`  | Value monitored by `v-model` to maintain icon state. |
| toggle-icon <bs-badge color="danger text-white">required</bs-badge> | `String` |  | The icon to display when `toggle` property is `true`. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |

</div>


### Events

<div class="cmp-property">

| Name   | Argument Type | Description |
|--------|---------------|-------------|
| toggle | `Boolean` | Triggers when icon-toggle is clicked. |

</div>

<script src="./script/icon-toggle.js"></script>
