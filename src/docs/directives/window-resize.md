:::lead
The `v-resize` directive can be used for calling specific functions when the window resizes.
:::


## Usage

Resize your window and observe the values change.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div 
      v-resize="onResize"
      class="mx-auto bg-white md-shadow rounded d-flex align-items-center justify-content-center" 
      style="width:400px; height:150px">
      <div>Window Size: <b>{{ windowSize }}</b></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowSize: { width: 0, height: 0 },
    }
  },
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.windowSize = { width: window.innerWidth, height: window.innerHeight };
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

<script src="./script/window-resize.js"></script>
