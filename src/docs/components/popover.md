:::lead
**BsPopover** is a lightweight component which is used as a popup container.
:::


## Overview

Some components use `<bs-popover>` internally, such as **BsMenu**, **BsCombobox**, 
**BsDateTimeField**, **BsSearchField**. Example below, shows you basic usage of `<bs-popover>`.

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <bs-button 
      ref="activator" 
      color="blue" 
      @click="open = !open">
      Button Dropdown
    </bs-button>
    <bs-popover 
      :open.sync="open" 
      :trigger="trigger"
      :space="2" 
      class="md-shadow-1 bg-white">
      <bs-list-view>
        <bs-list-tile>
          <bs-list-tile-leading 
            img-src="https://vue-mdbootstrap.fajarconsultant.com/img/2.jpg" 
            rounded>
          </bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>
              <b>John Doe</b>
            </bs-list-tile-title>
            <bs-list-tile-subtitle>
              Going further more...
            </bs-list-tile-subtitle>
          </bs-list-tile-content>
        </bs-list-tile>
      </bs-list-view>
      <bs-divider></bs-divider>
      <div class="card-body pt-2">
        <div class="d-block">
          <bs-switch 
            v-model="enableMessage" 
            color="purple">
            Enable Messages
          </bs-switch>
        </div>
        <div class="d-block mt-2">
          <bs-switch 
            v-model="enableHints" 
            color="purple">
            Enable Hints
          </bs-switch>
        </div>
        <div class="mt-4 text-right">
          <bs-button 
            class="mr-2 font-weight-bold" 
            color="secondary" 
            flat
            @click="open = false">
            Cancel
          </bs-button>
          <bs-button 
            class="font-weight-bold" 
            color="primary" 
            flat 
            @click="open = false">
            Save
          </bs-button>
        </div>
      </div>
    </bs-popover> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      trigger: null,
      enableMessage: false,
      enableHints: true,
    }
  },
  mounted() {
    this.trigger = this.$refs.activator.$el;
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

| Property | Type     | Default   | Description |
|----------|----------|-----------|-------------|
| cover       | `Boolean` | `false` | Display **Popover** at a position that covers the activator. |
| esc-close   | `Boolean` | `true`  | Close the **Popover** when **ESC** key is pressed. |
| open <bs-badge variant="danger">required</bs-badge> | `Boolean` | `false` | **Popover** state: **show** or **hide**. |
| overlay       | `Boolean` | `false` | Show backdrop overlay or not. |
| overlay-close | `Boolean` | `true`  | Close the **Popover** when the backdrop overlay is clicked. |
| overlay-color | `String`  | `'#000'`| The backdrop overlay color. |
| overlay-opacity | `Number` | `0.4` | The backdrop overlay opacity. |
| placement   | `String`  | `'bottom-left'` | **Popover** display placement. Valid values are: `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`. |
| space       | `Number` |  | Number of pixel to shift the **Popover** display position. |
| transition  | `String`  | `'scale'` | Transition animation when show the Popover. This animation is effected by `placement` prop. |
| trigger <bs-badge variant="danger">required</bs-badge> | `HTMLElement`  |  | HTML element to calculate the **Popover** display position. |

</div>


### Events

<div class="cmp-property">

| Name   | Argument Type | Description |
|--------|---------------|-------------|
| update:open | `Boolean` | Triggers when updating **Popover** state: *show* or *hide*. |
| close       |      | Triggers when **Popover** is hiding. |

</div>


### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| default | Main content. |

</div>


<script src="./script/popover.js"></script>
