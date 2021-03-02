:::lead
**BsChip** is a component which is used to convey small pieces of information to create 
arbitrary items, like categories or tags. Using the `dismissible` property, the chip can becomes 
interactive, allowing user interaction.
:::

*Available since Vue MDBootstrap `v1.2.0`*


## Overview

**BsChip** can be used like a badge which is used to create arbitrary items, like 
categories or tags. **BsChip** can have attributes like `active` and `disabled`, 
and it will react to them to give the best experience.

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <bs-chip>
      Default Chip
    </bs-chip>
    <bs-chip active>
      Active Chip
    </bs-chip>
    <bs-chip disabled>
      Disabled Chip
    </bs-chip>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Color Style

**BsChip** colors can be set using the `color` property. Any color variant from 
[MDBootstrap colors](#/reference/colors) and [Material colors](#/reference/colors)
 can be applied to the `<bs-chip>`.

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <div class="mb-3">
      <bs-chip>
        Default
      </bs-chip>
      <bs-chip color="primary">
        Primary
      </bs-chip>
      <bs-chip color="success">
        Success
      </bs-chip>
      <bs-chip color="danger">
        Danger
      </bs-chip>
      <bs-chip color="warning">
        Warning
      </bs-chip>
      <bs-chip color="info">
        Info
      </bs-chip>
    </div>
    <div>
      <bs-chip color="purple">
        Purple
      </bs-chip>
      <bs-chip color="unique-color">
        Unique Color
      </bs-chip>
      <bs-chip color="default-color-dark">
        Default Color Dark
      </bs-chip>
      <bs-chip color="primary-color-dark">
        Primary Color Dark
      </bs-chip>
    </div>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Element Type 

The `<bs-chip>` component by default renders a `<div>` element. However, you can also render as `<a>` element by providing `href` attribute value.

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <bs-chip href="#/components/chip">
      Default
    </bs-chip>
    <bs-chip color="primary" href="#/components/chip">
      Primary
    </bs-chip>
    <bs-chip color="success" href="#/components/chip">
      Success
    </bs-chip>
    <bs-chip color="danger" href="#/components/chip">
      Danger
    </bs-chip>
    <bs-chip color="warning" href="#/components/chip">
      Warning
    </bs-chip>
    <bs-chip color="info" href="#/components/chip">
      Info
    </bs-chip>
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

The `<bs-chip>` component comes with four predefined styles.

### Default style

This style variant is the default chip style.

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <bs-chip 
      :active="chipDefaultActive" 
      @click="chipDefaultClick">
      Default {{ chipDefaultActive ? ":: Active" : ""}}
    </bs-chip>
    <bs-chip 
      :active="defaultPrimaryActive" 
      color="primary" 
      @click="chipDefPrimaryClick">
      Primary {{ defaultPrimaryActive ? ":: Active" : ""}}
    </bs-chip>
    <bs-chip 
      :active="defaultSuccessActive" 
      color="success" 
      @click="chipDefSuccessClick">
      Success {{ defaultSuccessActive ? ":: Active" : ""}}
    </bs-chip>
    <bs-chip 
      :active="defaultDangerActive" 
      color="danger" 
      @click="chipDefDangerClick">
      Danger {{ defaultDangerActive ? ":: Active" : ""}}
    </bs-chip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chipDefaultActive: false,
      defaultPrimaryActive: false,
      defaultSuccessActive: false,
      defaultDangerActive: false,
    }
  },
  methods: {
    chipDefaultClick() {
      this.chipDefaultActive = !this.chipDefaultActive;
    },
    chipDefPrimaryClick() {
      this.defaultPrimaryActive = !this.defaultPrimaryActive;
    },
    chipDefSuccessClick() {
      this.defaultSuccessActive = !this.defaultSuccessActive;
    },
    chipDefDangerClick() {
      this.defaultDangerActive = !this.defaultDangerActive;
    },
  }
}
</script>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


### Label style

Use `label` property explicitly to create chip without the circle edge shape.

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <bs-chip 
      :active="labelDefaultActive" 
      label
      @click="labelDefaultClick">
      Default {{ labelDefaultActive ? ":: Active" : ""}}
    </bs-chip>
    <bs-chip 
      :active="labelPrimaryActive" 
      color="primary" 
      label
      @click="labelPrimaryClick">
      Primary {{ labelPrimaryActive ? ":: Active" : ""}}
    </bs-chip>
    <bs-chip 
      :active="labelSuccessActive" 
      color="success" 
      label
      @click="labelSuccessClick">
      Success {{ labelSuccessActive ? ":: Active" : ""}}
    </bs-chip>
    <bs-chip 
      :active="labelDangerActive" 
      color="danger" 
      label
      @click="labelDangerClick">
      Danger {{ labelDangerActive ? ":: Active" : ""}}
    </bs-chip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelDefaultActive: false,
      labelPrimaryActive: false,
      labelSuccessActive: false,
      labelDangerActive: false,
    }
  },
  methods: {
    labelDefaultClick() {
      this.labelDefaultActive = !this.labelDefaultActive;
    },
    labelPrimaryClick() {
      this.labelPrimaryActive = !this.labelPrimaryActive;
    },
    labelSuccessClick() {
      this.labelSuccessActive = !this.labelSuccessActive;
    },
    labelDangerClick() {
      this.labelDangerActive = !this.labelDangerActive;
    },
  }
}
</script>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


### Outlined style

Use `outlined` property explicitly to create chip with outline style.

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <bs-chip 
      :active="outlineDefaultActive" 
      outlined
      @click="outlineDefaultClick">
      Default {{ outlineDefaultActive ? ":: Active" : ""}}
    </bs-chip>
    <bs-chip 
      :active="outlinePrimaryActive" 
      color="primary" 
      outlined
      @click="outlinePrimaryClick">
      Primary {{ outlinePrimaryActive ? ":: Active" : ""}}
    </bs-chip>
    <bs-chip 
      :active="outlineSuccessActive" 
      color="success" 
      outlined
      @click="outlineSuccessClick">
      Success {{ outlineSuccessActive ? ":: Active" : ""}}
    </bs-chip>
    <bs-chip 
      :active="outlineDangerActive" 
      color="danger" 
      outlined
      @click="outlineDangerClick">
      Danger {{ outlineDangerActive ? ":: Active" : ""}}
    </bs-chip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      outlineDefaultActive: false,
      outlinePrimaryActive: false,
      outlineSuccessActive: false,
      outlineDangerActive: false,
    }
  },
  methods: {
    outlineDefaultClick() {
      this.outlineDefaultActive = !this.outlineDefaultActive;
    },
    outlinePrimaryClick() {
      this.outlinePrimaryActive = !this.outlinePrimaryActive;
    },
    outlineSuccessClick() {
      this.outlineSuccessActive = !this.outlineSuccessActive;
    },
    outlineDangerClick() {
      this.outlineDangerActive = !this.outlineDangerActive;
    },
  }
}
</script>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


### Outlined Label style

Use `label` and `outlined` property explicitly to create chip with outline style
without the rounded pill.

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <bs-chip 
      :active="mixedDefaultActive" 
      label
      outlined
      @click="mixedDefaultClick">
      Default {{ mixedDefaultActive ? ":: Active" : ""}}
    </bs-chip>
    <bs-chip 
      :active="mixedPrimaryActive" 
      color="primary" 
      label
      outlined
      @click="mixedPrimaryClick">
      Primary {{ mixedPrimaryActive ? ":: Active" : ""}}
    </bs-chip>
    <bs-chip 
      :active="mixedSuccessActive" 
      color="success" 
      label
      outlined
      @click="mixedSuccessClick">
      Success {{ mixedSuccessActive ? ":: Active" : ""}}
    </bs-chip>
    <bs-chip
      :active="mixedDangerActive" 
      color="danger" 
      label
      outlined
      @click="mixedDangerClick">
      Danger {{ mixedDangerActive ? ":: Active" : ""}}
    </bs-chip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mixedDefaultActive: false,
      mixedPrimaryActive: false,
      mixedSuccessActive: false,
      mixedDangerActive: false,
    }
  },
  methods: {
    mixedDefaultClick() {
      this.mixedDefaultActive = !this.mixedDefaultActive;
    },
    mixedPrimaryClick() {
      this.mixedPrimaryActive = !this.mixedPrimaryActive;
    },
    mixedSuccessClick() {
      this.mixedSuccessActive = !this.mixedSuccessActive;
    },
    mixedDangerClick() {
      this.mixedDangerActive = !this.mixedDangerActive;
    },
  }
}
</script>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Sizing 

`<bs-chip>` can be set in different size: `sm` (small), or `lg` (large).

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <div class="mb-3">
      <bs-chip 
        color="primary" 
        size="sm">
        Small Chip
      </bs-chip>
      <bs-chip color="success">
        Normal Chip
      </bs-chip>
      <bs-chip 
        color="danger" 
        size="lg">
        Large Chip
      </bs-chip>
    </div>
    <div>
      <bs-chip 
        color="primary" 
        size="sm" 
        label>
        Small Chip
      </bs-chip>
      <bs-chip 
        color="success" 
        label>
        Normal Chip
      </bs-chip>
      <bs-chip 
        color="danger" 
        size="lg" 
        label>
        Large Chip
      </bs-chip>
    </div>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Icon

Chip icon can be enabled by using the `icon` property and prefix its value with 
`bs-` to use *Vue MDBootstrap internal icon* or use any valid 
[FontAwesome Icon](https://fontawesome.com/icons?d=gallery&s=solid&m=free) name.
And additionally use the `icon-flip`, `icon-pulse`, `icon-rotation`, or 
`icon-spin` property to apply style effect to the icon.

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <div class="mb-3">
      <bs-chip 
        color="primary" 
        icon="bs-checked"
        size="sm">
        Small Chip
      </bs-chip>
      <bs-chip 
        color="success" 
        icon="bs-help">
        Normal Chip
      </bs-chip>
      <bs-chip 
        color="danger" 
        icon="bell"
        size="lg">
        Large Chip
      </bs-chip>
    </div>
    <div class="mb-3">
      <bs-chip 
        color="primary" 
        icon="bs-checked"
        size="sm" 
        label>
        Small Chip
      </bs-chip>
      <bs-chip 
        color="success" 
        icon="bs-help"
        label>
        Normal Chip
      </bs-chip>
      <bs-chip 
        color="danger" 
        icon="bell"
        size="lg" 
        label>
        Large Chip
      </bs-chip>
    </div>
    <div>
      <bs-chip 
        color="primary" 
        icon="bs-checked"
        size="sm" 
        outlined>
        Small Chip
      </bs-chip>
      <bs-chip 
        color="success" 
        icon="bs-help" 
        outlined>
        Normal Chip
      </bs-chip>
      <bs-chip 
        color="danger" 
        icon="bell"
        size="lg" 
        outlined>
        Large Chip
      </bs-chip>
    </div>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Avatar

Chip avatar can be enabled by using the `img-src` property and additionally you
can set the `img-circle` property to `false` to create square avatar.

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <div class="mb-3">
      <bs-chip 
        color="primary" 
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg"
        size="sm">
        Small Chip
      </bs-chip>
      <bs-chip 
        color="success" 
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg">
        Normal Chip
      </bs-chip>
      <bs-chip 
        color="danger" 
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg"
        size="lg">
        Large Chip
      </bs-chip>
    </div>
    <div class="mb-3">
      <bs-chip 
        :img-circle="false"
        color="primary" 
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg"
        size="sm" 
        label>
        Small Chip
      </bs-chip>
      <bs-chip 
        :img-circle="false"
        color="success" 
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg"
        label>
        Normal Chip
      </bs-chip>
      <bs-chip 
        :img-circle="false"
        color="danger" 
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg"
        size="lg" 
        label>
        Large Chip
      </bs-chip>
    </div>
    <div>
      <bs-chip 
        color="primary" 
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg"
        size="sm" 
        outlined>
        Small Chip
      </bs-chip>
      <bs-chip 
        color="success" 
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg" 
        outlined>
        Normal Chip
      </bs-chip>
      <bs-chip 
        color="danger" 
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg"
        size="lg" 
        outlined>
        Large Chip
      </bs-chip>
    </div>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


### Adjusting avatar size

Avatar size can be adjusted to match the chip height by eliminating the margin 
around the avatar. This can be achieved by setting the `img-padding` property to 
`false`.

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <div class="mb-3">
      <bs-chip 
        :img-padding="false"
        color="primary" 
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg"
        size="sm">
        Small Chip
      </bs-chip>
      <bs-chip 
        :img-padding="false"
        color="success" 
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg">
        Normal Chip
      </bs-chip>
      <bs-chip 
        :img-padding="false"
        color="danger" 
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg"
        size="lg">
        Large Chip
      </bs-chip>
    </div>
    <div class="mb-3">
      <bs-chip 
        :img-circle="false"
        :img-padding="false"
        color="primary" 
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg"
        size="sm" 
        label>
        Small Chip
      </bs-chip>
      <bs-chip 
        :img-circle="false"
        :img-padding="false"
        color="success" 
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg"
        label>
        Normal Chip
      </bs-chip>
      <bs-chip 
        :img-circle="false"
        :img-padding="false"
        color="danger" 
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg"
        size="lg" 
        label>
        Large Chip
      </bs-chip>
    </div>
    <div>
      <bs-chip 
        :img-padding="false"
        color="primary" 
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg"
        size="sm" 
        outlined>
        Small Chip
      </bs-chip>
      <bs-chip 
        :img-padding="false"
        color="success" 
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg" 
        outlined>
        Normal Chip
      </bs-chip>
      <bs-chip 
        :img-padding="false"
        color="danger" 
        img-src="https://vue-mdbootstrap.fajarconsultant.com/img/1.jpg"
        size="lg" 
        outlined>
        Large Chip
      </bs-chip>
    </div>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Dismissible Chip

Use the `dismissible` property to dismiss any `<bs-chip>`. This will add a close `X` 
button. Additionally you can use `close` event to execute a task after chip have 
been dismissed.

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <div class="mb-3">
      <bs-chip 
        dismissible
        size="sm">
        small Chip
      </bs-chip>
      <bs-chip dismissible>
        Normal Chip
      </bs-chip>
      <bs-chip 
        dismissible
        size="lg">
        Large Chip
      </bs-chip>
    </div>
    <div>
      <bs-chip 
        size="sm" 
        dismissible
        outlined>
        small Chip
      </bs-chip>
      <bs-chip 
        dismissible 
        outlined>
        Normal Chip
      </bs-chip>
      <bs-chip 
        size="lg" 
        dismissible
        outlined>
        Large Chip
      </bs-chip>
    </div>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


### Controlling dismissible chip

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-button 
      color="primary" 
      class="mr-4"
      @click="toggleChip">
      {{ showDismissibleChip ? 'Hide' : 'Show' }} Chip
    </bs-button>
    <bs-chip 
      v-model="showDismissibleChip" 
      dismissible>
      Dismissible Chip
    </bs-chip>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showDismissibleChip: true,
    }
  },
  methods: {
    toggleChip() {
      this.showDismissibleChip = !this.showDismissibleChip;
    },
  }
}
</script>

<style scoped>
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

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| active   | `Boolean` | `false`  | The Chip component state. |
| active-class | `String` |  | Custom css class to apply when the Chip is in active state. See [Reference - Color Variants](#/reference/colors) for more information. |
| color    | `String`  | `'light-grey'` | Change the Chip color appearance. Any of [MDBootstrap colors](#/reference/colors) or [Material colors](#/reference/colors) variant can be used. |
| disabled | `Boolean` | `false`  | The Chip component state. |
| dismissible | `Boolean` | `false` | When set, display the close (`x`) button to dismiss/hide the component |
| fa-styles   | `Object`  |   | Adjust FontAwesome Icon size with css rules like `font-size` or `height` and `width`. |
| href        | `String`  |  | Render the chip as `<a>` element and define its `href` property and apply styles to the `<a>` element. |
| icon        | `String`  |  | The icon to display within the Chip. Use prefix `bs-` to use internal icon, otherwise use valid [FontAwesome Icon](https://fontawesome.com/icons?d=gallery&s=solid&m=free) name. |
| icon-flip   | `String`  |  | Flip the icon, valid values are: `horizontal`, `vertical`, `both`. |
| icon-pulse  | `Boolean` | `false` | Apply **pulse** animation to the icon. |
| icon-rotation | `Number` |   | Rotate the icon, valid values are: `90`, `180`, `270`. |
| icon-spin   | `Boolean`  | `false` | Apply **spin** animation to the icon. |
| img-circle  | `Boolean`  | `true` | Create avatar with **circle** shape. |
| img-padding | `Boolean`  | `true` | Adjust avatar size to match the Chip height by eliminating the margin around the avatar. |
| img-src  | `String`  |   | Enable avatar and set the image location url. |
| label    | `Boolean` | `false` | Remove circle edges. |
| outlined | `Boolean` | `false` | Create Chip with outlined style or not. |
| ripple-off | `Boolean` | `false` | Enabled or disabled ripple effect. Ripple effect is automatically disabled when `click` event or `href` property is not defined. |
| size       | `String`  |   | Create Chip with predefined size, valid values are: `sm` (small), `lg` (large). |
| value <bs-badge color="unique text-white">v-model</bs-badge>  | `Boolean` | `true` | The value monitored by `v-model` to show or hide the Chip component |

</div>


### Events

<div class="cmp-property">

| Name   | Argument Type | Description |
|--------|---------------|-------------|
| close  |  | Triggers when close button is clicked or chip has been dismissed. |
| input  | `Boolean` | Used to update component state of `value` property. |
| update:active | `MouseEvent` | Used to update the chip state of `active` property and triggers when a non-disabled Chip is clicked. |

</div>


### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| default  | Main content |
| chipIcon | Content for custom icon. This slot can be enabled by defining the `icon` property with any values, then use this slot to customize the contents. |

</div>


<script src="./script/chip.js"></script>
