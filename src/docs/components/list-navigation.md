:::lead
**BsListNavItem** is a component used for displaying a series of item and mainly used for navigation.
It can contain an icon, nested items, and provide a consistent styling for organizing the items. But
doesn't have the flexibility like **BsListTile**.
:::


## Overview

The `<bs-list-nav-item>` needs to be used inside `<bs-list-view>` to compose the list item. 

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card class="mobi-card mx-auto" shadow>
      <bs-appbar class="bg-purple darken-3 rounded-top" shadow>
        <bs-button mode="icon"
                   color="light-grey"
                   flat>
          <bs-icon icon="menu_bars" size="24"></bs-icon>
        </bs-button>
        <bs-appbar-title title="Menus" class="text-white"></bs-appbar-title>
      </bs-appbar>
      <bs-list-view>
        <bs-list-nav>
          <bs-list-nav-item icon="folder" label="My Files"></bs-list-nav-item>
          <bs-list-nav-item icon="bs-folder-shared" label="Shared with me"></bs-list-nav-item>
          <bs-list-nav-item icon="history" label="Recent"></bs-list-nav-item>
          <bs-list-nav-item icon="star" label="Starred"></bs-list-nav-item>
          <bs-list-nav-item icon="upload" label="Uploads"></bs-list-nav-item>
          <bs-list-nav-item icon="cloud-upload-alt" label="Backups"></bs-list-nav-item>
          <bs-list-nav-item icon="trash" label="Trash"></bs-list-nav-item>
        </bs-list-nav>
      </bs-list-view>
    </bs-card>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px 24px 60px;
  
  .mobi-card {
    max-width: 400px;

    > .md-appbar {
      z-index: 100;
    }
  }
}
</style>
```
:::


## Nested Navigation

To create nested navigation list, the child navigation list needs to be wrapped by `<bs-list-nav>` and
put inside current `<bs-list-nav-item>`. Additionally, define the `depth` or `indent` property to 
customize indentation from the left side.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card class="mobi-card mx-auto" shadow>
      <bs-appbar class="bg-deep-purple rounded-top" shadow>
        <bs-button mode="icon"
                   color="light-grey"
                   flat>
          <bs-icon icon="menu_bars" size="24"></bs-icon>
        </bs-button>
        <bs-appbar-title title="Topics" class="text-white"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light-grey"
                   mode="icon"
                   flat>
          <bs-icon icon="MoreVert" size="24"></bs-icon>
        </bs-button>
      </bs-appbar>
      <bs-list-view>
        <bs-list-nav>
          <bs-list-nav-item icon="box" label="Attractions">
            <bs-list-nav child>
              <bs-list-nav-item label="Topic 1"></bs-list-nav-item>
              <bs-list-nav-item label="Topic 2"></bs-list-nav-item>
            </bs-list-nav>
          </bs-list-nav-item>
          <bs-list-nav-item icon="utensils" label="Dining">
            <bs-list-nav child>
              <bs-list-nav-item label="Breakfast"></bs-list-nav-item>
              <bs-list-nav-item label="Sushi"></bs-list-nav-item>
              <bs-list-nav-item label="Pizza"></bs-list-nav-item>
            </bs-list-nav>
          </bs-list-nav-item>
          <bs-list-nav-item icon="graduation-cap" label="Education">
            <bs-list-nav child>
              <bs-list-nav-item label="Topic 1"></bs-list-nav-item>
              <bs-list-nav-item label="Topic 2"></bs-list-nav-item>
              <bs-list-nav-item label="Topic 3"></bs-list-nav-item>
            </bs-list-nav>
          </bs-list-nav-item>
          <bs-list-nav-item icon="users" label="Family">
            <bs-list-nav child>
              <bs-list-nav-item label="Topic 1"></bs-list-nav-item>
              <bs-list-nav-item label="Topic 2"></bs-list-nav-item>
            </bs-list-nav>
          </bs-list-nav-item>
          <bs-list-nav-item icon="briefcase-medical" label="Health">
            <bs-list-nav child>
              <bs-list-nav-item label="Topic 1"></bs-list-nav-item>
              <bs-list-nav-item label="Topic 2"></bs-list-nav-item>
              <bs-list-nav-item label="Topic 3"></bs-list-nav-item>
            </bs-list-nav>
          </bs-list-nav-item>
          <bs-list-nav-item icon="warehouse" label="Office">
            <bs-list-nav child>
              <bs-list-nav-item label="Topic 1"></bs-list-nav-item>
              <bs-list-nav-item label="Topic 2"></bs-list-nav-item>
            </bs-list-nav>
          </bs-list-nav-item>
          <bs-list-nav-item icon="ribbon" label="Promotions">
            <bs-list-nav child>
              <bs-list-nav-item label="Topic 1"></bs-list-nav-item>
              <bs-list-nav-item label="Topic 2"></bs-list-nav-item>
            </bs-list-nav>
          </bs-list-nav-item>
        </bs-list-nav>
      </bs-list-view>
    </bs-card>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px 24px 60px;
  
  .mobi-card {
    max-width: 400px;

    > .md-appbar {
      z-index: 100;
    }
  }
}
</style>
```
:::


### Mixed with ListTile

The `<bs-list-nav-item>` can also be mixed with `<bs-list-tile-title>` to display custom and fine tune
navigation items.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card class="mobi-card mx-auto" shadow>
      <bs-appbar class="bg-blue darken-3 rounded-top" shadow>
        <bs-button mode="icon"
                   color="light-grey"
                   flat>
          <bs-icon icon="menu_bars" size="24"></bs-icon>
        </bs-button>
        <bs-appbar-title title="Mail" class="text-white"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light-grey"
                   mode="icon"
                   flat>
          <bs-icon icon="MoreVert" size="24"></bs-icon>
        </bs-button>
      </bs-appbar>
      <bs-list-view>
        <bs-list-nav>
          <bs-list-nav-item icon="inbox" label="Inbox">
            <bs-list-nav child>
              <bs-list-nav-item label="Social"></bs-list-nav-item>
              <bs-list-nav-item label="Promotions"></bs-list-nav-item>
              <bs-list-nav-item label="Updates"></bs-list-nav-item>
            </bs-list-nav>
          </bs-list-nav-item>
          <bs-list-nav-item icon="tags" label="Important"></bs-list-nav-item>
          <bs-list-nav-item icon="paper-plane" label="Sent"></bs-list-nav-item>
          <bs-list-nav-item icon="file-alt" label="Drafts"></bs-list-nav-item>
        </bs-list-nav>
        <bs-divider></bs-divider>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="envelope-open-text"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>All Mail</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <bs-badge type="pill" variant="secondary">102</bs-badge>
          </bs-list-tile-action>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="bs-trash"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Trash</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <bs-badge type="pill" variant="secondary">12</bs-badge>
          </bs-list-tile-action>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="shield-virus"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Spam</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <bs-badge type="pill" variant="secondary">8</bs-badge>
          </bs-list-tile-action>
        </bs-list-tile>
      </bs-list-view>
    </bs-card>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px 24px 60px;
  
  .mobi-card {
    max-width: 400px;

    > .md-appbar {
      z-index: 100;
    }
  }
}
</style>
```
:::


## Styling

### Color

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card class="mobi-card mx-auto" shadow>
      <bs-list-view color="special-color">
        <bs-subheader>Main Menu</bs-subheader>
        <bs-list-nav>
          <bs-list-nav-item icon="inbox" label="Inbox">
            <bs-list-nav child>
              <bs-list-nav-item label="Social"></bs-list-nav-item>
              <bs-list-nav-item label="Promotions"></bs-list-nav-item>
              <bs-list-nav-item label="Updates"></bs-list-nav-item>
            </bs-list-nav>
          </bs-list-nav-item>
          <bs-list-nav-item icon="tags" label="Important"></bs-list-nav-item>
          <bs-list-nav-item icon="paper-plane" label="Sent"></bs-list-nav-item>
          <bs-list-nav-item icon="file-alt" label="Drafts"></bs-list-nav-item>
        </bs-list-nav>
        <bs-divider></bs-divider>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="envelope-open-text"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>All Mail</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <bs-badge type="pill" variant="secondary">102</bs-badge>
          </bs-list-tile-action>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="bs-trash"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Trash</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <bs-badge type="pill" variant="secondary">12</bs-badge>
          </bs-list-tile-action>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="shield-virus"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Spam</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <bs-badge type="pill" variant="secondary">8</bs-badge>
          </bs-list-tile-action>
        </bs-list-tile>
      </bs-list-view>
    </bs-card>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px 24px 60px;
  
  .mobi-card {
    max-width: 400px;

    > .md-appbar {
      z-index: 100;
    }
  }
}
</style>
```
:::


### Space around

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card class="mobi-card mx-auto" shadow>
      <bs-list-view space-around="both">
        <bs-subheader>Main Menu</bs-subheader>
        <bs-list-nav>
          <bs-list-nav-item icon="inbox" label="Inbox">
            <bs-list-nav child>
              <bs-list-nav-item label="Social"></bs-list-nav-item>
              <bs-list-nav-item label="Promotions"></bs-list-nav-item>
              <bs-list-nav-item label="Updates"></bs-list-nav-item>
            </bs-list-nav>
          </bs-list-nav-item>
          <bs-list-nav-item icon="tags" label="Important"></bs-list-nav-item>
          <bs-list-nav-item icon="paper-plane" label="Sent"></bs-list-nav-item>
          <bs-list-nav-item icon="file-alt" label="Drafts"></bs-list-nav-item>
        </bs-list-nav>
        <bs-divider></bs-divider>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="envelope-open-text"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>All Mail</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <bs-badge type="pill" variant="secondary">102</bs-badge>
          </bs-list-tile-action>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="bs-trash"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Trash</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <bs-badge type="pill" variant="secondary">12</bs-badge>
          </bs-list-tile-action>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="shield-virus"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Spam</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <bs-badge type="pill" variant="secondary">8</bs-badge>
          </bs-list-tile-action>
        </bs-list-tile>
      </bs-list-view>
    </bs-card>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px 24px 60px;
  
  .mobi-card {
    max-width: 400px;

    > .md-appbar {
      z-index: 100;
    }
  }
}
</style>
```
:::


### Border for active item

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card class="mobi-card mx-auto" shadow>
      <bs-list-view active-item-bordered="left">
        <bs-subheader>Main Menu</bs-subheader>
        <bs-list-nav>
          <bs-list-nav-item icon="inbox" label="Inbox">
            <bs-list-nav child>
              <bs-list-nav-item label="Social"></bs-list-nav-item>
              <bs-list-nav-item label="Promotions"></bs-list-nav-item>
              <bs-list-nav-item label="Updates"></bs-list-nav-item>
            </bs-list-nav>
          </bs-list-nav-item>
          <bs-list-nav-item icon="tags" label="Important"></bs-list-nav-item>
          <bs-list-nav-item icon="paper-plane" label="Sent"></bs-list-nav-item>
          <bs-list-nav-item icon="file-alt" label="Drafts"></bs-list-nav-item>
        </bs-list-nav>
        <bs-divider></bs-divider>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="envelope-open-text"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>All Mail</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <bs-badge type="pill" variant="secondary">102</bs-badge>
          </bs-list-tile-action>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="bs-trash"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Trash</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <bs-badge type="pill" variant="secondary">12</bs-badge>
          </bs-list-tile-action>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="shield-virus"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Spam</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <bs-badge type="pill" variant="secondary">8</bs-badge>
          </bs-list-tile-action>
        </bs-list-tile>
      </bs-list-view>
    </bs-card>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px 24px 60px;
  
  .mobi-card {
    max-width: 400px;

    > .md-appbar {
      z-index: 100;
    }
  }
}
</style>
```
:::



## Component Reference

### BsListNav - `<bs-list-nav>`

**BsListNav** is a parent component which hold all the navigation items.

#### Properties
 
<div class="cmp-property">

| Property | Type      | Default | Description |
|----------|-----------|---------|-------------|
| child    | `Boolean` | `false` | Treat the items inside it as child items. |

</div>

#### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| default | Content for navigation items. |

</div>


### BsListNavItem - `<bs-list-nav-item>`

The component to display the navigation item.

#### Properties

<div class="cmp-property">

| Property   | Type      | Default | Description |
|------------|-----------|---------|-------------|
| active <bs-badge color="unique text-white">v-model</bs-badge> | `Boolean` | `false` | Component state and monitored by `v-model`. |
| active-class | `String` | `'active'` | `<router-link>` prop: Configure the active CSS class applied when the link is active. Typically you will want to set this to class name `active`. |
| depth      | `Number`  |  | Item depth level in tree hierarchy (zero based level). |
| disabled   | `Boolean` | `false` | Component state. |
| exact      | `Boolean` | `false` | `<router-link>` prop: The default active class matching behavior is inclusive match. Setting this property forces the mode to exactly match the route. |
| icon       | `String`  |         | The icon to display. Use prefix `bs-` to use internal icon, otherwise use valid [FontAwesome Icon](https://fontawesome.com/icons?d=gallery&s=solid&m=free) name. |
| icon-flip  | `String`  |         | Flip the icon, valid values are: `horizontal`, `vertical`, `both`. |
| icon-pulse | `Boolean` | `false` | Apply **pulse** animation to the icon. |
| icon-rotation | `Number` |       | Rotate the icon, valid values are: `90`, `180`, `270`. |
| icon-size  | `Number`/`String` |  | Render the icon with predefined size. Use `Number` if using internal icon, otherwise use these predefine size: `xs`, `sm`, `lg`, `1x`, `2x`. |
| icon-spin  | `Boolean` | `false` | Apply **spin** animation to the icon. |
| indent     | `Number`  |  | Text indentation from left side. |
| label <bs-badge color="danger text-white">required</bs-badge> | `String` |  | The text label to display. |
| path       | `String`  |  | The route path for the navigation target. See [vue-router](https://router.vuejs.org/) for more information. |
| ripple-off | `Boolean` | `false` | Enabled or disabled ripple effect. |
| url        | `String`  |  | Absolute or relative URL for the navigation target, if doesn't use vue-router. |

</div>

#### Events

<div class="cmp-property">

| Name   | Argument Type | Description |
|--------|---------------|-------------|
| click  | (`MouseEvent` event, `this` sender) | Fires when a non-disabled ListNavItem is clicked. |
| input  | `Boolean` | Used to update component state of `active` property. |

</div>

#### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| default | Contents for child navigation items. |

</div>


<style scoped>
.mobi-card {
  max-width: 400px;
}
.mobi-card .md-appbar {
  z-index: 100;
}
.mobi-card .md-list-tile .md-list-tile-action.rating {
  font-size: 18px;
  text-align: right;
}
.my-demo-wrapper > .md-side-drawer {
  position: relative;
  height: auto !important;
  z-index: auto;
}
.my-demo-wrapper > .md-side-drawer img {
  width: 90px;
}
</style>
