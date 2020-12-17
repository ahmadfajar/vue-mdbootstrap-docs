:::lead
**BsModal** is a popup dialog component that brings information to the user. It also 
provides actions through the action buttons to prompt the user for input or to ask
for a decision. The component can also contain more complex UI elements that require 
the focus of the user. 
:::


## Overview

`<bs-modal>` supports close on ESC (enabled by default), and close on backdrop/overlay
is clicked (enabled by default). `<bs-modal>` doesn't have any button, to achieve this
you can add the appropriate action buttons on the `footer` slot. 

When dialog contains complex UI or you want to have appropriate dialog size, it is good
to define the `width` property and `max-width` property to a desire value.

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <bs-button color="indigo"
               @click="autoCloseModalVisible = true">
      Open Dialog
    </bs-button>
    
    <bs-modal :open.sync="autoCloseModalVisible"
              title="Dialog Title"
              max-width="85%">
      <b>Hello, I am a modal.</b><br>
      You can click outside area or press ESC to close me.

      <template v-slot:footer>
        <bs-button outlined 
                   color="secondary" 
                   @click="autoCloseModalVisible = false">
          Cancel
        </bs-button>
        <bs-button active 
                   color="primary"
                   @click="autoCloseModalVisible = false">
          OK
        </bs-button>
      </template>
    </bs-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      autoCloseModalVisible: false,
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
`<bs-modal>` doesn't work with `v-model` to show or hide the dialog. To overcome this 
situation, use `open.sync` property to update the dialog state.
:::


## Hiding The Overlay

Overlay or backdrop is enabled by default. To hide the overlay, sets `overlay` property 
to `false`.

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <bs-button color="indigo"
               @click="noOverlayVisible = true">
      Open Dialog
    </bs-button>
    
    <bs-modal :open.sync="noOverlayVisible"
              :overlay="false"
              title="Without Overlay"
              width="400"
              max-width="85%">
      <b>Hello, I am a modal dialog.</b><br>
      You can press ESC to close me.

      <template v-slot:footer>
        <bs-button outlined 
                   color="secondary" 
                   @click="noOverlayVisible = false">
          Cancel
        </bs-button>
        <bs-button active 
                   color="primary"
                   @click="noOverlayVisible = false">
          OK
        </bs-button>
      </template>
    </bs-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noOverlayVisible: false,
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


## True Modal Dialog

You can show a modal dialog by setting the `overlay-close` property to `false`.

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <bs-button color="indigo"
               @click="trueModalVisible = true">
      Open Dialog
    </bs-button>
    
    <bs-modal :open.sync="trueModalVisible"
              :overlay-close="false"
              title="Modal Dialog"
              max-width="85%">
      <b>Hello, I am a modal dialog.</b><br>
      You can only close me by clicking the button below or press ESC.

      <template v-slot:footer>
        <bs-button outlined 
                   color="secondary" 
                   @click="trueModalVisible = false">
          Cancel
        </bs-button>
        <bs-button active 
                   color="primary"
                   @click="trueModalVisible = false">
          OK
        </bs-button>
      </template>
    </bs-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trueModalVisible: false,
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


## Scrolling Long Content

When dialog content become too long, you can make the dialog content scrollable.

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <bs-button color="indigo"
               @click="scrollableModalVisible = true">
      Open Dialog
    </bs-button>
    
    <bs-modal :open.sync="scrollableModalVisible"
              :scrollable="true"
              title="Long Content Dialog"
              width="600"
              max-width="90%">
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>

      <template v-slot:footer>
        <bs-button outlined 
                   color="secondary" 
                   @click="scrollableModalVisible = false">
          Cancel
        </bs-button>
        <bs-button active 
                   color="primary"
                   @click="scrollableModalVisible = false">
          OK
        </bs-button>
      </template>
    </bs-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollableModalVisible: false,
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

| Property     | Type     | Default  | Description |
|--------------|----------|----------|-------------|
| body-class   | `String`/`Array` |  | Additional css class name for dialog body container. |
| esc-close    | `Boolean` | `true`  | Close modal dialog when **ESC** key is pressed. |
| footer-class | `String`/`Array` |  | Additional css class name for dialog footer container. |
| full-page    | `Boolean` | `false` | Show modal dialog in full page mode. |
| header-class | `String`/`Array` |  | Additional css class name for dialog header container. |
| max-width    | `Number`/`String` | | Modal dialog maximum width. |  
| open         | `Boolean` | `false` | Component state, show or hide. |
| overlay      | `Boolean` | `true`  | Show backdrop or overlay or not. |
| overlay-close | `Boolean` | `true` | Close modal dialog when the **overlay** is clicked. |
| overlay-color | `String` | `'#000'`| The overlay color. |
| overlay-opacity | `Number` | `0.4` | The overlay opacity. |
| scrollable | `Boolean` | `false` | Show a modal dialog that has a scrollable body. |
| title      | `String` |  | Modal dialog title. |
| transition | `String` | `'scale'` | Transition animation name when showing the dialog. Valid values are: `scale`, `slide-top`, `slide-bottom`, `slide-left`, `slide-right`, `fade`. |
| width      | `Number`/`String` |  | Modal dialog width. |

</div>


### Events

<div class="cmp-property">

| Name   | Argument Type | Description |
|--------|---------------|-------------|
| update:open | `Boolean` | Used to update the `open` property value. |
| close  | `String`       | Triggers when the dialog is closed. The input argument contains a debug message that triggers the event. |

</div>


### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| default | Contents for dialog body. |
| header  | Contents for custom header or dialog title. |
| footer  | Contents for dialog footer. |

</div>

<script src="./script/modal.js"></script>
