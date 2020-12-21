:::lead
The `v-scroll` directive allows you to provide callbacks when the window or specified 
target is scrolled.
:::


## Usage

`v-scroll` directive targets the `window` by default but can also watch the element it’s 
being bound to via `target` field. 

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div 
      class="bg-white md-shadow">
      <div class="p-2 text-center">
        <b>Scroll Offset Top: {{ offsetTop }} </b>
      </div>
      <div 
        v-scroll="{target: '#scroll-target', callback: onScroll}" 
        id="scroll-target" 
        class="overflow-auto" 
        style="height:400px">
        <p v-for="n in 12"
          :key="n"
          class="pl-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi commodi earum tenetur. Asperiores dolorem placeat ab nobis iusto culpa, autem molestias molestiae quidem pariatur. Debitis beatae expedita nam facere perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ducimus cupiditate rerum officiis consequuntur laborum doloremque quaerat ipsa voluptates, nobis nam quis nulla ullam at corporis, similique ratione quasi illo!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offsetTop: 0,
    }
  },
  methods: {
    onScroll(el, e) {
      this.offsetTop = e.target.scrollTop;
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

<script src="./script/scroll.js"></script>
