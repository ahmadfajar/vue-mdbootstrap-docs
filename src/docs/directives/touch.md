:::lead
The `v-touch` directive allows you to capture swipe gestures and apply directional callbacks.
:::


## Usage

On a mobile device, try swiping in various directions.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div 
      v-touch="{
        left: () => swipe('Left'),
        right: () => swipe('Right'),
        up: () => swipe('Up'),
        down: () => swipe('Down')
      }" 
      class="bg-secondary d-flex align-items-center justify-content-center" 
      style="height:300px">
      <div class="text-white">
        Swipe direction: <b>{{ swipeDirection }}</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swipeDirection: 'None',
    }
  },
  methods: {
    swipe(dir) {
      this.swipeDirection = dir;
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


<script src="./script/touch.js"></script>
