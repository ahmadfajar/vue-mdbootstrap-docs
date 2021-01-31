:::lead
Smooth animations help make a UI feel great. Using Vue’s transition system and re-usable functional animation, 
you can easily control the motion of your application. **Vue MDBootstrap** has built-in animation transitions 
that can be applied to numerous components and elements.
:::


## Fade

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-button 
      color="indigo" 
      class="mb-3" 
      @click="fadeShow = !fadeShow">
      Click Me
    </bs-button>
    <transition name="fade">
      <bs-card v-if="fadeShow" class="mw-65">
        <bs-card-body>
          <bs-card-content type="title">
            Content Title
          </bs-card-content>
          <div>Some quick example text to build on the card title and make up the bulk of the card's content.</div>
        </bs-card-body>
      </bs-card>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fadeShow: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.my-demo-wrapper {
  margin: 24px;
  
  .mw-65 {
    max-width: 65%;
  }
}
</style>
```
:::


## Scale

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-button 
      color="indigo" 
      class="mb-3" 
      @click="scaleShow = !scaleShow">
      Click Me
    </bs-button>
    <transition name="scale">
      <bs-card v-if="scaleShow" class="mw-65">
        <bs-card-body>
          <bs-card-content type="title">
            Content Title
          </bs-card-content>
          <div>Some quick example text to build on the card title and make up the bulk of the card's content.</div>
        </bs-card-body>
      </bs-card>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scaleShow: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.my-demo-wrapper {
  margin: 24px;
  
  .mw-65 {
    max-width: 65%;
  }
}
</style>
```
:::


## Slide Fade

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-button 
      color="indigo" 
      class="mb-3" 
      @click="slideFadeShow = !slideFadeShow">
      Click Me
    </bs-button>
    <transition name="slide-fade">
      <bs-card v-if="slideFadeShow" class="mw-65">
        <bs-card-body>
          <bs-card-content type="title">
            Content Title
          </bs-card-content>
          <div>Some quick example text to build on the card title and make up the bulk of the card's content.</div>
        </bs-card-body>
      </bs-card>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideFadeShow: true,
    }
  }
}
</script>

<style scoped>
.my-demo-wrapper {
  margin: 24px;

  .mw-65 {
    max-width: 65%;
  }
}
</style>
```
:::


## Slide Fade Reverse

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-button 
      color="indigo" 
      class="mb-3" 
      @click="slideFadeReverseShow = !slideFadeReverseShow">
      Click Me
    </bs-button>
    <transition name="slide-fade-reverse">
      <bs-card v-if="slideFadeReverseShow" class="mw-65">
        <bs-card-body>
          <bs-card-content type="title">
            Content Title
          </bs-card-content>
          <div>Some quick example text to build on the card title and make up the bulk of the card's content.</div>
        </bs-card-body>
      </bs-card>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideFadeReverseShow: true,
    }
  }
}
</script>

<style scoped>
.my-demo-wrapper {
  margin: 24px;

  .mw-65 {
    max-width: 65%;
  }
}
</style>
```
:::


## Slide Left-Right

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-button 
      color="indigo" 
      class="mb-3" 
      @click="slideLeftRightShow = !slideLeftRightShow">
      Click Me
    </bs-button>
    <transition name="slide-left-right">
      <bs-card v-if="slideLeftRightShow" class="mw-65">
        <bs-card-body>
          <bs-card-content type="title">
            Content Title
          </bs-card-content>
          <div>Some quick example text to build on the card title and make up the bulk of the card's content.</div>
        </bs-card-body>
      </bs-card>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideLeftRightShow: false,
    }
  }
}
</script>

<style scoped>
.my-demo-wrapper {
  margin: 24px;

  .mw-65 {
    max-width: 65%;
  }
}
</style>
```
:::


## Slide Right-Left

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-button 
      color="indigo" 
      class="mb-3" 
      @click="slideRightLeftShow = !slideRightLeftShow">
      Click Me
    </bs-button>
    <transition name="slide-right-left">
      <bs-card v-if="slideRightLeftShow" class="mw-65">
        <bs-card-body>
          <bs-card-content type="title">
            Content Title
          </bs-card-content>
          <div>Some quick example text to build on the card title and make up the bulk of the card's content.</div>
        </bs-card-body>
      </bs-card>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideRightLeftShow: false,
    }
  }
}
</script>

<style scoped>
.my-demo-wrapper {
  margin: 24px;

  .mw-65 {
    max-width: 65%;
  }
}
</style>
```
:::


## Slide Top-Bottom

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-button 
      color="indigo" 
      class="mb-3" 
      @click="slideTopBottomShow = !slideTopBottomShow">
      Click Me
    </bs-button>
    <transition name="slide-top-bottom">
      <bs-card v-if="slideTopBottomShow" class="mw-65">
        <bs-card-body>
          <bs-card-content type="title">
            Content Title
          </bs-card-content>
          <div>Some quick example text to build on the card title and make up the bulk of the card's content.</div>
        </bs-card-body>
      </bs-card>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideTopBottomShow: false,
    }
  }
}
</script>

<style scoped>
.my-demo-wrapper {
  margin: 24px;

  .mw-65 {
    max-width: 65%;
  }
}
</style>
```
:::


## Slide Bottom-Top

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-button 
      color="indigo" 
      class="mb-3" 
      @click="slideBottomTopShow = !slideBottomTopShow">
      Click Me
    </bs-button>
    <transition name="slide-bottom-top">
      <bs-card v-if="slideBottomTopShow" class="mw-65">
        <bs-card-body>
          <bs-card-content type="title">
            Content Title
          </bs-card-content>
          <div>Some quick example text to build on the card title and make up the bulk of the card's content.</div>
        </bs-card-body>
      </bs-card>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideBottomTopShow: false,
    }
  }
}
</script>

<style scoped>
.my-demo-wrapper {
  margin: 24px;

  .mw-65 {
    max-width: 65%;
  }
}
</style>
```
:::


## Expand Transition

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-button 
      color="indigo" 
      class="mb-3" 
      @click="expandShow = !expandShow">
      Click Me
    </bs-button>
    <bs-expand-transition>
      <bs-card v-if="expandShow" class="mw-65">
        <bs-card-body>
          <bs-card-content type="title">
            Content Title
          </bs-card-content>
          <div>Some quick example text to build on the card title and make up the bulk of the card's content.</div>
        </bs-card-body>
      </bs-card>
    </bs-expand-transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expandShow: false,
    }
  }
}
</script>

<style scoped>
.my-demo-wrapper {
  margin: 24px;

  .mw-65 {
    max-width: 65%;
  }
}
</style>
```
:::

*Available in Vue MDBootstrap since `v1.1.0`*


<style lang="scss" scoped>
.my-demo-wrapper {
  min-height: 200px;

  .mw-65 {
    max-width: 100%;
    
    @media (min-width: 768px) {
      max-width: 65%;
    }
  }
}
</style>

<script src="./script/transition.js"></script>
