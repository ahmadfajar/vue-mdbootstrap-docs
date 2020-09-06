:::lead
**BsMenu** is a popup container which are typically used for displaying lists of links and actions 
in a dropdown menu format. Because its unique concept as popup container, **BsMenu** can also be used to 
display other components. 
:::


## Overview

The contents for the popup container need to be placed in the `content` slot.

:::demo
```html
<div class="my-demo-wrapper text-center">
  <bs-menu>
    <bs-button color="primary" dropdown-toggle>Dropdown</bs-button>
    <template v-slot:content>
      <bs-list-view slot="content">
        <bs-list-tile url="#/components/menu">
          <bs-list-tile-title>First Action</bs-list-tile-title>
        </bs-list-tile>
        <bs-list-tile url="#/components/menu">
          <bs-list-tile-title>Second Action</bs-list-tile-title>
        </bs-list-tile>
        <bs-list-tile url="#/components/menu">
          <bs-list-tile-title>Third Action</bs-list-tile-title>
        </bs-list-tile>
        <bs-divider></bs-divider>
        <bs-list-tile url="#/components/menu" v-model="active" @click="onClick">
          <bs-list-tile-title>Another Action</bs-list-tile-title>
        </bs-list-tile>
        <bs-list-tile disabled>
          <bs-list-tile-title>Disabled Action</bs-list-tile-title>
        </bs-list-tile>
      </bs-list-view>
    </template>
  </bs-menu>
</div>
<script>
export default {
    data() {
        return {
            active: false,
        }
    },
    methods: {
        onClick() {
            this.active = !this.active;
        }
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


## Hover Display

Menus can be accessed using hover instead of clicking with the `open-on-hover` property.

:::demo
```html
<div class="my-demo-wrapper text-center">
  <bs-menu open-on-hover>
    <bs-button color="primary" dropdown-toggle>Dropdown</bs-button>
    <template v-slot:content>
      <bs-list-view slot="content">
        <bs-list-tile url="#/components/menu">
          <bs-list-tile-title>First Action</bs-list-tile-title>
        </bs-list-tile>
        <bs-list-tile url="#/components/menu">
          <bs-list-tile-title>Second Action</bs-list-tile-title>
        </bs-list-tile>
        <bs-list-tile url="#/components/menu">
          <bs-list-tile-title>Third Action</bs-list-tile-title>
        </bs-list-tile>
        <bs-divider></bs-divider>
        <bs-list-tile url="#/components/menu" v-model="active" @click="onClick">
          <bs-list-tile-title>Another Action</bs-list-tile-title>
        </bs-list-tile>
        <bs-list-tile disabled>
          <bs-list-tile-title>Disabled Action</bs-list-tile-title>
        </bs-list-tile>
      </bs-list-view>
    </template>
  </bs-menu>
</div>
<script>
export default {
    data() {
        return {
            active: false,
        }
    },
    methods: {
        onClick() {
            this.active = !this.active;
        }
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


## Popup Placement

`<bs-menu>` supports various positioning such as `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, 
`bottom-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`. It can be done
by explicitly define the `placement` property.

:::demo
```html
<div class="my-demo-wrapper">
  <div class="row">
    <div class="col-md-4 mb-3">
      <bs-menu>
        <bs-button color="primary" dropdown-toggle>Bottom-Left</bs-button>
        <template v-slot:content>
          <bs-list-view>
            <bs-list-tile navigable>
              <bs-list-tile-title>First Action</bs-list-tile-title>
            </bs-list-tile>
            <bs-list-tile navigable>
              <bs-list-tile-title>Second Action</bs-list-tile-title>
            </bs-list-tile>
            <bs-list-tile navigable>
              <bs-list-tile-title>Third Action</bs-list-tile-title>
            </bs-list-tile>
            <bs-divider></bs-divider>
            <bs-list-tile v-model="active" @click="onClick" navigable>
              <bs-list-tile-title>Another Action</bs-list-tile-title>
            </bs-list-tile>
            <bs-list-tile disabled>
              <bs-list-tile-title>Disabled Action</bs-list-tile-title>
            </bs-list-tile>
          </bs-list-view>
        </template>
      </bs-menu>
    </div>
    <div class="col-md-4 mb-3">
      <bs-menu placement="bottom">
        <bs-button color="primary" dropdown-toggle>Bottom</bs-button>
        <template v-slot:content>
          <bs-list-view>
            <bs-list-tile navigable>
              <bs-list-tile-title>First Action</bs-list-tile-title>
            </bs-list-tile>
            <bs-list-tile navigable>
              <bs-list-tile-title>Second Action</bs-list-tile-title>
            </bs-list-tile>
            <bs-list-tile navigable>
              <bs-list-tile-title>Third Action</bs-list-tile-title>
            </bs-list-tile>
            <bs-divider></bs-divider>
            <bs-list-tile v-model="active" @click="onClick" navigable>
              <bs-list-tile-title>Another Action</bs-list-tile-title>
            </bs-list-tile>
            <bs-list-tile disabled>
              <bs-list-tile-title>Disabled Action</bs-list-tile-title>
            </bs-list-tile>
          </bs-list-view>
        </template>
      </bs-menu>
    </div>
    <div class="col-md-4 mb-3">
      <bs-menu placement="bottom-right">
        <bs-button color="primary" dropdown-toggle>Bottom-Right</bs-button>
        <template v-slot:content>
          <bs-list-view>
            <bs-list-tile navigable>
              <bs-list-tile-title>First Action</bs-list-tile-title>
            </bs-list-tile>
            <bs-list-tile navigable>
              <bs-list-tile-title>Second Action</bs-list-tile-title>
            </bs-list-tile>
            <bs-list-tile navigable>
              <bs-list-tile-title>Third Action</bs-list-tile-title>
            </bs-list-tile>
            <bs-divider></bs-divider>
            <bs-list-tile v-model="active" @click="onClick" navigable>
              <bs-list-tile-title>Another Action</bs-list-tile-title>
            </bs-list-tile>
            <bs-list-tile disabled>
              <bs-list-tile-title>Disabled Action</bs-list-tile-title>
            </bs-list-tile>
          </bs-list-view>
        </template>
      </bs-menu>
    </div>
    <div class="col-md-4 mb-3">
       <bs-menu placement="top-left">
         <bs-button color="primary" dropdown-toggle>Top-Left</bs-button>
           <template v-slot:content>
             <bs-list-view>
               <bs-list-tile navigable>
                 <bs-list-tile-title>First Action</bs-list-tile-title>
               </bs-list-tile>
               <bs-list-tile navigable>
                 <bs-list-tile-title>Second Action</bs-list-tile-title>
               </bs-list-tile>
               <bs-list-tile navigable>
                 <bs-list-tile-title>Third Action</bs-list-tile-title>
               </bs-list-tile>
               <bs-divider></bs-divider>
               <bs-list-tile v-model="active" @click="onClick" navigable>
                 <bs-list-tile-title>Another Action</bs-list-tile-title>
               </bs-list-tile>
               <bs-list-tile disabled>
                 <bs-list-tile-title>Disabled Action</bs-list-tile-title>
               </bs-list-tile>
             </bs-list-view>
           </template>
       </bs-menu>
    </div>
    <div class="col-md-4 mb-3">
       <bs-menu placement="top">
         <bs-button color="primary" dropdown-toggle>Top</bs-button>
           <template v-slot:content>
             <bs-list-view>
               <bs-list-tile navigable>
                 <bs-list-tile-title>First Action</bs-list-tile-title>
               </bs-list-tile>
               <bs-list-tile navigable>
                 <bs-list-tile-title>Second Action</bs-list-tile-title>
               </bs-list-tile>
               <bs-list-tile navigable>
                 <bs-list-tile-title>Third Action</bs-list-tile-title>
               </bs-list-tile>
               <bs-divider></bs-divider>
               <bs-list-tile v-model="active" @click="onClick" navigable>
                 <bs-list-tile-title>Another Action</bs-list-tile-title>
               </bs-list-tile>
               <bs-list-tile disabled>
                 <bs-list-tile-title>Disabled Action</bs-list-tile-title>
               </bs-list-tile>
             </bs-list-view>
           </template>
       </bs-menu>
    </div>
    <div class="col-md-4 mb-3">
       <bs-menu placement="top-right">
         <bs-button color="primary" dropdown-toggle>Top-Right</bs-button>
           <template v-slot:content>
             <bs-list-view>
               <bs-list-tile navigable>
                 <bs-list-tile-title>First Action</bs-list-tile-title>
               </bs-list-tile>
               <bs-list-tile navigable>
                 <bs-list-tile-title>Second Action</bs-list-tile-title>
               </bs-list-tile>
               <bs-list-tile navigable>
                 <bs-list-tile-title>Third Action</bs-list-tile-title>
               </bs-list-tile>
               <bs-divider></bs-divider>
               <bs-list-tile v-model="active" @click="onClick" navigable>
                 <bs-list-tile-title>Another Action</bs-list-tile-title>
               </bs-list-tile>
               <bs-list-tile disabled>
                 <bs-list-tile-title>Disabled Action</bs-list-tile-title>
               </bs-list-tile>
             </bs-list-view>
           </template>
       </bs-menu>
    </div>
  </div>
</div>
<script>
export default {
    data() {
        return {
            active: false,
        }
    },
    methods: {
        onClick() {
            this.active = !this.active;
        }
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


## Popup Container

You can configure `<bs-menu>` to be static when opened, allowing it to function as a popup container. 
This can be useful when there are multiple interactive items within the `<bs-menu>` contents.

:::demo
```html
<div class="my-demo-wrapper">
  <div class="row">
    <div class="col-md-6 col-xl-4 mb-3 mb-md-0">
      <bs-menu v-model="popup1" placement="top-left" :content-click-close="false">
        <bs-button color="blue">Button Dropdown</bs-button>
        <template v-slot:content>
          <bs-list-view>
            <bs-list-tile tag="div">
              <bs-list-tile-leading img-src="/img/2.jpg" rounded></bs-list-tile-leading>
              <bs-list-tile-content>
                <bs-list-tile-title>John Doe</bs-list-tile-title>
                <bs-list-tile-subtitle>Going further more, etc.. </bs-list-tile-subtitle>
              </bs-list-tile-content>
            </bs-list-tile>
          </bs-list-view>
          <bs-divider></bs-divider>
          <div class="card-body pt-2">
            <div class="d-block">
              <bs-switch v-model="enableMessage" color="purple">Enable Messages</bs-switch>
            </div>
            <div class="d-block mt-2">
              <bs-switch v-model="enableHints" color="purple">Enable Hints</bs-switch>
            </div>
            <div class="mt-4 text-right">
              <bs-button class="mr-2 font-weight-bold" 
                         color="secondary" 
                         flat
                         @click="popup2 = false">Cancel</bs-button>
              <bs-button class="font-weight-bold" 
                         color="primary" 
                         flat 
                         @click="popup2 = false">Save</bs-button>
            </div>
          </div>
        </template>
      </bs-menu>
    </div>
    <div class="col-md-6 col-xl-3">
      <bs-menu v-model="popup2" placement="right-bottom" :content-click-close="false">
        <bs-avatar size="72" class="md-shadow-1" img-src="/img/kitty-2.jpg" rounded></bs-avatar>
        <template v-slot:content>
          <bs-list-view>
            <bs-list-tile tag="div">
              <bs-list-tile-leading img-src="/img/kitty-2.jpg" rounded></bs-list-tile-leading>
              <bs-list-tile-content>
                <bs-list-tile-title>Kitty Doe</bs-list-tile-title>
                <bs-list-tile-subtitle>Going further from an Avatar</bs-list-tile-subtitle>
              </bs-list-tile-content>
            </bs-list-tile>
          </bs-list-view>
          <bs-divider></bs-divider>
          <div class="card-body pt-2">
            <div class="d-block">
              <bs-switch v-model="enableMessage" color="purple">Enable Messages</bs-switch>
            </div>
            <div class="d-block mt-2">
              <bs-switch v-model="enableHints" color="purple">Enable Hints</bs-switch>
            </div>
            <div class="mt-4 text-right">
              <bs-button class="mr-2 font-weight-bold" 
                         color="secondary" 
                         flat
                         @click="popup2 = false">Cancel</bs-button>
              <bs-button class="font-weight-bold" 
                         color="primary" 
                         flat 
                         @click="popup2 = false">Save</bs-button>
            </div>
          </div>
        </template>
      </bs-menu>
    </div>
  </div>
</div>
<script>
export default {
    data() {
        return {
            popup1: false,
            popup2: false,
            enableMessage: false,
            enableHints: true,
        }
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

#### Properties

<div class="cmp-property">

| Property | Type     | Default   | Description |
|----------|----------|-----------|-------------|
| color    | `String` | `'white'` | Popup container background color. |
| content-click-close | `Boolean` | `true` | Close or hide popup menu when content clicked. |
| cover       | `Boolean` | `false` | Display popup menu at a position which can cover the activator. |
| disabled    | `Boolean` | `false` | Disabled popup menu and prevents it from displaying. |
| open <bs-badge color="unique text-white">v-model</bs-badge> | `Boolean` | `false` | Popup menu state: show or hide. |
| open-on-hover | `Boolean` | `false` | Triggers the popup menu to display when `mouseenter` and hide when `mouseleave`. |
| placement   | `String`  | `'bottom-left'` | Popup menu display placement. Valid values are: `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`. |
| transition  | `String`  | `'popover'` | Transition animation when show popup menu. This animation is effected by `placement` prop. |

</div>


#### Events

<div class="cmp-property">

| Name   | Argument Type | Description |
|--------|---------------|-------------|
| open   | `Boolean`     | Triggers when updating popup menu state: show or hide. |
| close  |      | Triggers when popup menu is hiding. |

</div>


#### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| default | Popup menu activator content. |
| content | Main contents for popup container. |

</div>


<script src="./menu-js.js"></script>
