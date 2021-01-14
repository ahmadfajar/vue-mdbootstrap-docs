:::lead
**BsAppbar** is a lightweight component which is placed at the top of the page as a 
container for page title, logo, menus, and action buttons.
:::


## Basic Usage

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-appbar shadow>
      <bs-appbar-title title="Page Title"></bs-appbar-title>
    </bs-appbar> 
  </div>
</template>
```
:::


## Use with Button

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-appbar class="bg-indigo" shadow>
      <bs-button 
        color="light-grey"
        mode="icon"
        flat>
        <bs-icon icon="menu_bars" size="24"></bs-icon>
      </bs-button>
      <bs-appbar-title 
        class="text-white" 
        title="Page Title">
      </bs-appbar-title>
    </bs-appbar> 
  </div>
</template>
```
:::


## Use with Button and Menus

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-appbar class="bg-indigo" shadow>
      <bs-button 
        color="light-grey"
        mode="icon"
        flat>
        <bs-icon icon="MenuBars" size="24"></bs-icon>
      </bs-button>
      <bs-appbar-title 
        class="text-white" 
        title="Page Title">
      </bs-appbar-title>
      <bs-spacer></bs-spacer>
      <bs-appbar-items>
        <bs-button 
          mode="icon" 
          icon="search"
          color="light-grey" 
          flat>
        </bs-button>
        <bs-button 
          mode="icon" 
          icon="bell"
          color="light-grey" 
          flat>
        </bs-button>
        <bs-menu 
          class="ml-2" 
          placement="bottom-right">
          <bs-button 
            mode="icon" 
            color="light-grey" 
            flat>
            <bs-icon icon="MoreVert" size="24"></bs-icon>
          </bs-button>
          <template v-slot:content>
            <bs-list-view slot="content">
              <bs-list-tile url="#/components/appbar">
                <bs-list-tile-title>First Action</bs-list-tile-title>
              </bs-list-tile>
              <bs-list-tile url="#/components/appbar">
                <bs-list-tile-title>Second Action</bs-list-tile-title>
              </bs-list-tile>
              <bs-list-tile url="#/components/appbar">
                <bs-list-tile-title>Third Action</bs-list-tile-title>
              </bs-list-tile>
              <bs-divider></bs-divider>
              <bs-list-tile url="#/components/appbar">
                <bs-list-tile-title>Another Action</bs-list-tile-title>
              </bs-list-tile>
            </bs-list-view>
          </template>
        </bs-menu>
      </bs-appbar-items>
    </bs-appbar> 
  </div>
</template>
```
:::


## Component Reference

### BsAppbar - `<bs-appbar>`

#### Properties

<div class="cmp-property">

| Property | Type      | Default | Description |
|----------|-----------|---------|-------------|
| clipped-left | `Boolean` | `false` | Clipped left side of the Appbar or not. |
| fixed-top    | `Boolean` | `false` | Always stick Appbar at top of the page even though user already scrolled down. |
| shadow       | `Boolean` | `false` | Add shadow effect or not. |
| tag          | `String`  | `'nav'` | Html tag used to render the component. |

</div>

#### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| default | Main content |

</div>


### BsAppbarTitle - `<bs-appbar-title>`

Small and lightweight component to create a page title.

#### Properties

<div class="cmp-property">

| Property | Type      | Default | Description |
|----------|-----------|---------|-------------|
| title    | `String`  |  | Text for page title. |
| raw-html | `Boolean` | `false` | If sets to `true` the `title` property may contains html tags. |

</div>

#### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| default | Custom content for page title. If defined, you can omit the `title` property. |

</div>


### BsAppbarItems - `<bs-appbar-items>`

Optional component to create a container inside `<bs-appbar>` which may contains buttons, menus and others.

#### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| default | Main content for the container. |

</div>
