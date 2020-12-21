:::lead
The `v-click-outside` directive calls a function when something outside of the target element 
is clicked on. This directive is used internally by components like **BsMenu** and **BsPopover**.
:::


## Usage

The `v-click-outside` directive allows you to provide a handler to be invoked when the user clicks 
outside of the target element.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div 
      v-click-outside="onClickOutside"
      :class="{'bg-white': !active, 'bg-blue': active}" 
      class="mx-auto md-link md-shadow rounded d-flex align-items-center justify-content-center" 
      style="width:225px; height:150px" 
      @click="active = true">
      <div 
        :class="{'text-white': active}" 
        class="h4">
        {{ active ? 'Click Outside' : 'Click Me' }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    }
  },
  methods: {
    onClickOutside() {
      this.active = false;
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


<script src="./script/click-outside.js"></script>
