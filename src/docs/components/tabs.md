:::lead
Tab component is used for hiding content behind a selectable item. This can also be 
used as a pseudo-navigation for a page, where the tabs are links and the tab-items 
are the content.
:::


## Overview

:::demo
```html
<template>
  <div class="my-demo-wrapper bg-white">
    <bs-tabs v-model="activeTab" class="mt-2">
      <bs-tab label="Home" icon="home">
        {{ homeTab }}
      </bs-tab>
      <bs-tab label="Profile" icon="user">
        {{ profileTab }}
      </bs-tab>
      <bs-tab label="Contact" icon="address-card">
        {{ contactTab }}
      </bs-tab>
    </bs-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      homeTab: 'Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
      profileTab: 'Food truck fixie locavore, accusamus mcsweeney\'s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.',
      contactTab: 'Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney\'s organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.'
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


## Styles Variants

The Tabs component has four style variants.

### Bootstrap Tabs Style

**Bootstrap tabs style** variant is default style variant when `variant` property is not 
defined. To explicitly define this style variant, sets `variant` property value of `<bs-tabs>`
to `'tabs'`. When use inside `<bs-card>` component, sets `inner-class` property value to 
`'card-header'` to have proper Bootstrap tabs style.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card shadow>
      <bs-tabs v-model="activeTab" inner-class="card-header">
        <bs-tab label="Home" icon="home">
          {{ homeTab }}
        </bs-tab>
        <bs-tab label="Profile" icon="user">
          {{ profileTab }}
        </bs-tab>
        <bs-tab label="Contact" icon="address-card">
          {{ contactTab }}
        </bs-tab>
      </bs-tabs>
    </bs-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      homeTab: 'Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
      profileTab: 'Food truck fixie locavore, accusamus mcsweeney\'s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.',
      contactTab: 'Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney\'s organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.'
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


### Bootstrap Pill Style

**Bootstrap pill style** is another style variant from Bootstrap. To use it, sets
`variant` property value of `<bs-tabs>` to `'pills'`. When use inside `<bs-card>` 
component, sets `inner-class` property value to `'card-header'` to have proper 
Bootstrap Pill style.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card shadow>
      <bs-tabs v-model="activeTab" 
               variant="pills" 
               inner-class="card-header">
        <bs-tab label="Home" icon="home">
          {{ homeTab }}
        </bs-tab>
        <bs-tab label="Profile" icon="user">
          {{ profileTab }}
        </bs-tab>
        <bs-tab label="Contact" icon="address-card">
          {{ contactTab }}
        </bs-tab>
      </bs-tabs>
    </bs-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      homeTab: 'Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
      profileTab: 'Food truck fixie locavore, accusamus mcsweeney\'s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.',
      contactTab: 'Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney\'s organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.'
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


### Material Style

**Material style** variant can be enabled, by setting `variant` property value of `<bs-tabs>` 
to `'material'` and use any [color variants](#/reference/colors) for `color` property value
to have a proper tabs color.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card shadow>
      <bs-appbar class="bg-pink darken-2 rounded-top">
        <bs-button mode="icon"
                   color="light-grey"
                   flat>
          <bs-icon icon="menu_bars" size="24"></bs-icon>
        </bs-button>
        <bs-appbar-title title="Page Title" 
                         class="text-white"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light-grey"
                   mode="icon"
                   flat>
          <bs-icon icon="MoreVert" size="24"></bs-icon>
        </bs-button>
      </bs-appbar>
      <bs-tabs v-model="activeTab" 
               variant="material" 
               color="pink darken-2">
        <bs-tab label="Home">
          {{ homeTab }}
        </bs-tab>
        <bs-tab label="News">
          {{ profileTab }}
        </bs-tab>
        <bs-tab label="Videos">
          {{ textTab }}
        </bs-tab>
        <bs-tab label="Images">
          {{ contactTab }}
        </bs-tab>
      </bs-tabs>
    </bs-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      homeTab: 'Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
      profileTab: 'Food truck fixie locavore, accusamus mcsweeney\'s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.',
      contactTab: 'Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney\'s organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.'
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


### Modern Style

**Modern style** variant can be enabled, by setting `variant` property value of `<bs-tabs>` 
to `'modern'` and use any [color variants](#/reference/colors) for `color` property value
to have a proper tabs color.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card shadow>
      <bs-appbar class="bg-indigo rounded-top">
        <bs-button mode="icon"
                   color="light-grey"
                   flat>
          <bs-icon icon="menu_bars" size="24"></bs-icon>
        </bs-button>
        <bs-appbar-title title="Page Title" 
                         class="text-white"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light-grey"
                   mode="icon"
                   flat>
          <bs-icon icon="MoreVert" size="24"></bs-icon>
        </bs-button>
      </bs-appbar>
      <bs-tabs v-model="activeTab" 
               variant="modern" 
               color="indigo">
        <bs-tab label="Home" icon="home">
          {{ homeTab }}
        </bs-tab>
        <bs-tab label="Profile" icon="user">
          {{ profileTab }}
        </bs-tab>
        <bs-tab label="Contact" icon="address-card">
          {{ contactTab }}
        </bs-tab>
      </bs-tabs>
    </bs-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      homeTab: 'Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
      profileTab: 'Food truck fixie locavore, accusamus mcsweeney\'s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.',
      contactTab: 'Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney\'s organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.'
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


## Tabs Placement

The Tabs can be placed at **top**, **bottom**, **left** or **right** side.

### Placement Top

This placement is the **default** tabs position when `tab-position` property is not 
defined. To explicitly define this placement, sets `tab-position` property value of 
`<bs-tabs>` to `'top'`. Additionaly, you can also set the tabs alignment by setting
the `alignment` property value.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card shadow>
      <bs-tabs v-model="activeTab" 
               variant="pills" 
               alignment="center"
               tab-position="top">
        <bs-tab label="Home" icon="home">
          {{ homeTab }}
        </bs-tab>
        <bs-tab label="Profile" icon="user">
          {{ profileTab }}
        </bs-tab>
        <bs-tab label="Contact" icon="address-card">
          {{ contactTab }}
        </bs-tab>
      </bs-tabs>
    </bs-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      homeTab: 'Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
      profileTab: 'Food truck fixie locavore, accusamus mcsweeney\'s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.',
      contactTab: 'Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney\'s organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.'
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


### Placement Bottom

To place the tabs at bottom side, sets `tab-position` property value of `<bs-tabs>` 
to `'bottom'`. Additionaly, you can also set the tabs alignment by setting
the `alignment` property value.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card shadow>
      <bs-tabs v-model="activeTab" 
               inner-class="card-footer"
               tab-position="bottom">
        <bs-tab label="Home" icon="home">
          {{ homeTab }}
        </bs-tab>
        <bs-tab label="Profile" icon="user">
          {{ profileTab }}
        </bs-tab>
        <bs-tab label="Contact" icon="address-card">
          {{ contactTab }}
        </bs-tab>
      </bs-tabs>
    </bs-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      homeTab: 'Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
      profileTab: 'Food truck fixie locavore, accusamus mcsweeney\'s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.',
      contactTab: 'Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney\'s organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.'
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


### Placement Left

To place the tabs at left side, sets `tab-position` property value of `<bs-tabs>` 
to `'left'`.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card shadow>
      <bs-tabs v-model="activeTab" 
               variant="modern"
               color="indigo"
               tab-position="left">
        <bs-tab label="Home" icon="home">
          {{ homeTab }}
        </bs-tab>
        <bs-tab label="Profile" icon="user">
          {{ profileTab }}
        </bs-tab>
        <bs-tab label="Contact" icon="address-card">
          {{ contactTab }}
        </bs-tab>
      </bs-tabs>
    </bs-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      homeTab: 'Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
      profileTab: 'Food truck fixie locavore, accusamus mcsweeney\'s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.',
      contactTab: 'Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney\'s organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.'
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


### Placement Right

To place the tabs at right side, sets `tab-position` property value of `<bs-tabs>` 
to `'right'`.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card shadow>
      <bs-tabs v-model="activeTab" 
               variant="modern"
               color="indigo"
               tab-position="right">
        <bs-tab label="Home" icon="home">
          {{ homeTab }}
        </bs-tab>
        <bs-tab label="Profile" icon="user">
          {{ profileTab }}
        </bs-tab>
        <bs-tab label="Contact" icon="address-card">
          {{ contactTab }}
        </bs-tab>
      </bs-tabs>
    </bs-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      homeTab: 'Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
      profileTab: 'Food truck fixie locavore, accusamus mcsweeney\'s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.',
      contactTab: 'Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney\'s organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.'
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


## Icon Position And Size

To change the icon position use `icon-position` property and use `icon-size` to change
the icon size. If you set this property, each tab item will have the same icon position and size.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-tabs v-model="activeTab"
             variant="material"
             alignment="center"
             color="deep-purple"
             icon-position="top"
             icon-size="lg">
      <bs-tab label="Home" icon="home"></bs-tab>
      <bs-tab label="Profile" icon="user"></bs-tab>
      <bs-tab label="Contact" icon="address-card"></bs-tab>
    </bs-tabs>
    <bs-tabs v-model="activeTab"
             variant="material"
             alignment="center"
             color="indigo"
             icon-position="bottom"
             icon-size="lg">
      <bs-tab label="Home" icon="home"></bs-tab>
      <bs-tab label="Profile" icon="user"></bs-tab>
      <bs-tab label="Contact" icon="address-card"></bs-tab>
    </bs-tabs>
    <bs-tabs v-model="activeTab"
             variant="modern"
             alignment="center"
             color="teal"
             icon-position="left"
             icon-size="lg">
      <bs-tab label="Home" icon="home"></bs-tab>
      <bs-tab label="Profile" icon="user"></bs-tab>
      <bs-tab label="Contact" icon="address-card"></bs-tab>
    </bs-tabs>
    <bs-tabs v-model="activeTab"
             variant="modern"
             color="blue-green"
             alignment="center"
             icon-position="right"
             icon-size="lg">
      <bs-tab label="Home" icon="home"></bs-tab>
      <bs-tab label="Profile" icon="user"></bs-tab>
      <bs-tab label="Contact" icon="address-card"></bs-tab>
    </bs-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
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


## Icon Only

The tab items can also display icon only. To achieve this style, do not sets the
`label` property of `<bs-tab>`.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-tabs v-model="activeTab"
             variant="modern"
             alignment="center"
             color="deep-purple"
             icon-size="2x">
      <bs-tab icon="home"></bs-tab>
      <bs-tab icon="user"></bs-tab>
      <bs-tab icon="address-card"></bs-tab>
    </bs-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
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

### BsTabs - `<bs-tabs>`

The Tabs container component.

#### Properties

<div class="cmp-property">

| Property  | Type     | Default | Description |
|-----------|----------|---------|-------------|
| alignment | `String` | `'left'` | Tabs alignment. Valid values: `left`, `right`, `center`, `justified`. |
| color     | `String` |  | The tabs color style for tabs variant: `modern` and `material`. |
| content-class | `String` |  | Css class name for tab content. |
| content-transition | `String` | `'fade'` | Tab content display animation transition. Valid values: `fade`, `slide-fade`, `slide-fade-reverse`, `popover`. |
| flex      | `Boolean` | `false` | Create tabs variant of `tabs` or `pills` with flex styles. |
| icon-position | `String` | `'left'` | TabItem's icon position. Valid values: `left`, `right`, `top`, `bottom`. |
| icon-size   | `String` |  | TabItem icon size. Valid values are: `xs`, `sm`, `lg`, `1x`, `2x`, `3x`, `4x`. |
| inner-class | `String` |  | Css class name for tabs item's container. |
| tab-class   | `String` |  | Css class name for tab item. |  
| tab-position | `String` | `'top'` | Tabs position. Valid values: `left`, `right`, `top`, `bottom`. |
| value <bs-badge color="unique text-white">v-model</bs-badge> | `String`/`Number`/`Object` |  | The value maintained by `v-model`. |
| variant | `String` | `'tabs'` | Tabs style variant. Valid values: `tabs`, `pills`, `material`, `modern`. |

</div>


#### Events

<div class="cmp-property">

| Name   | Argument Type | Description |
|--------|---------------|-------------|
| change | (`BsTab` activeTab, `BsTab` oldTab) | Triggered when active tab is changed. |
| input  | `Number`/`Object` | Used to update active tab index or active tab object. |

</div>


#### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| default | Contents for registering tab items. |

</div>


### BsTab - `<bs-tab>`

The Tab item component. A tab item must at least has `icon` or `label` property defined.

#### Properties

<div class="cmp-property">

| Property   | Type     | Default | Description |
|------------|----------|---------|-------------|
| aria-label | `String` |  | TabItem `aria-labelledby`. |
| icon       | `String` |  | The icon to display inside tab item component. Use any valid [FontAwesome Icon](https://fontawesome.com/icons?d=gallery&s=solid&m=free) name. |
| id         | `String` |  | TabItem ID. |
| label      | `String` |  | TabItem label. |

</div>


#### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| default | Tab item contents. |

</div>


<script src="./script/tabs.js"></script>
