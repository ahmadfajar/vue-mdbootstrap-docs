:::lead
**BsLighbox** is a modal image gallery component. It works with a series of images
and includes support for previous/next controls, indicators and toolbar buttons.
:::


## Overview

**BsLightbox** is simple modal image gallery component and has previous/next controls, 
indicator and toolbar buttons enabled by default. Data sources is provided via `items` 
property.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row justify-content-center">
        <div class="col-md-8 col-xl-6">
          <div class="row">
            <div class="col-sm-4">
              <bs-avatar
                class="md-link"
                img-src="https://unsplash.it/600.jpg?image=251"
                size="100%"
                rounded
                @click="openGallery1At(0)" />
            </div>
            <div class="col-sm-4 mt-3 mt-sm-0">
              <bs-avatar
                class="md-link"
                img-src="https://unsplash.it/600.jpg?image=252"
                size="100%"
                rounded
                @click="openGallery1At(1)" />
            </div>
            <div class="col-sm-4 mt-3 mt-sm-0">
              <bs-avatar
                class="md-link"
                img-src="https://unsplash.it/600.jpg?image=253"
                size="100%"
                rounded
                @click="openGallery1At(2)" />
            </div>
          </div>
        </div>
    </div>
    <bs-lightbox
      ref="lightbox1"
      :items="galleryItems1"
      :open.sync="showGalleryItems1">
    </bs-lightbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showGalleryItems1: false,
      galleryItems1: [{
          thumbnail: 'https://unsplash.it/200.jpg?image=251',
          imageSrc: 'https://unsplash.it/1200/768.jpg?image=251',
          title: 'First image title'
      }, {
          thumbnail: 'https://unsplash.it/200.jpg?image=252',
          imageSrc: 'https://unsplash.it/1200/768.jpg?image=252',
          title: 'Second image title'
      }, {
          thumbnail: 'https://unsplash.it/200.jpg?image=253',
          imageSrc: 'https://unsplash.it/1200/768.jpg?image=253',
          title: 'Third image title'
      }],
    }
  },
  methods: {
    openGallery1At(index) {
      if (index != null && index > -1) {
          this.$refs.lightbox1.openAt(index);
      } else {
          this.showGalleryItems1 = true;
      }
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

:::warning
`<bs-lightbox>` doesn't work with `v-model` to show or hide the modal image gallery. 
To overcome this situation, use `open.sync` property to update its state.
:::


## Customizing Toolbar Buttons

**BsLightbox** toolbar buttons can be customized to some extent. Additionally, you can
add custom menus to your needs via `menubar` slot and enable the `menubar` button via 
`toolbar` property to make the custom menus work correctly. Some buttons doesn't execute 
any action except triggers an event. You have to provide your own method for these 
buttons. The buttons that don't provide any actions are: **download**, 
**delete** and **info** buttons.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row justify-content-center">
        <div class="col-md-8 col-xl-6">
          <div class="row">
            <div class="col-sm-4">
              <bs-avatar
                class="md-link"
                img-src="https://unsplash.it/600.jpg?image=254"
                size="100%"
                rounded
                @click="openGallery2At(0)" />
            </div>
            <div class="col-sm-4 mt-3 mt-sm-0">
              <bs-avatar
                class="md-link"
                img-src="https://unsplash.it/600.jpg?image=255"
                size="100%"
                rounded
                @click="openGallery2At(1)" />
            </div>
            <div class="col-sm-4 mt-3 mt-sm-0">
              <bs-avatar
                class="md-link"
                img-src="https://unsplash.it/600.jpg?image=256"
                size="100%"
                rounded
                @click="openGallery2At(2)" />
            </div>
          </div>
        </div>
    </div>
    <bs-lightbox
      ref="lightbox2"
      :items="galleryItems2"
      :open.sync="showGalleryItems2"
      :toolbar="buttons">
      <template v-slot:menubar>
        <bs-list-view>
          <bs-list-tile navigable>
            <bs-list-tile-title>Add to album</bs-list-tile-title>
          </bs-list-tile>
          <bs-list-tile navigable>
            <bs-list-tile-title>Shared picture</bs-list-tile-title>
          </bs-list-tile>
          <bs-divider></bs-divider>
          <bs-list-tile navigable>
            <bs-list-tile-title>Send Feedback</bs-list-tile-title>
          </bs-list-tile>
        </bs-list-view>
      </template>
    </bs-lightbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showGalleryItems2: false,
      buttons: {download: true, rotate: true, menubar: true, close: true},
      galleryItems2: [{
          thumbnail: 'https://unsplash.it/200.jpg?image=254',
          imageSrc: 'https://unsplash.it/1200/768.jpg?image=254',
          title: 'First image title'
      }, {
          thumbnail: 'https://unsplash.it/200.jpg?image=255',
          imageSrc: 'https://unsplash.it/1200/768.jpg?image=255',
          title: 'Second image title'
      }, {
          thumbnail: 'https://unsplash.it/200.jpg?image=256',
          imageSrc: 'https://unsplash.it/1200/768.jpg?image=256',
          title: 'Third image title'
      }],
    }
  },
  methods: {
    openGallery2At(index) {
      if (index != null && index > -1) {
          this.$refs.lightbox2.openAt(index);
      } else {
          this.showGalleryItems2 = true;
      }
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


## Displaying Single Image

**BsLightbox** can also be used to display single modal image. To achieve this, you
have to sets `show-counter`, `show-nav-control`, and `show-thumbnail` property to 
`false`. Additionally, you can also sets `show-toolbar` property to `false`, if you 
don't need any toolbar buttons.

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <bs-avatar
      class="md-link"
      img-src="https://unsplash.it/600.jpg?image=257"
      size="200"
      rounded
      @click="showSingleItem = true">
    </bs-avatar>
    <bs-lightbox
      :items="singleItem"
      :open.sync="showSingleItem"
      :show-counter="false"
      :show-nav-control="false"
      :show-thumbnail="false"
      :show-toolbar="false">
    </bs-lightbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSingleItem: false,
      singleItem: [{
          thumbnail: 'https://unsplash.it/200.jpg?image=257',
          imageSrc: 'https://unsplash.it/1200/768.jpg?image=257',
          title: 'Your image title'
      }],
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


## Component Reference

### Properties

<div class="cmp-property">

| Property     | Type      | Default  | Description |
|--------------|-----------|----------|-------------|
| esc-close    | `Boolean` | `true`  | Close Lightbox when **ESC** key is pressed. |  
| image-class  | `String`/`Array` |  | Additional css class name for active image. |
| image-styles | `Object`  |  | Additional css styles for active image. |
| items        | `Object[]`|  | Lightbox source dataset. |
| open         | `Boolean` | `false` | Lightbox state, show or hide. |
| overlay      | `Boolean` | `true`  | Show backdrop or overlay or not. |
| overlay-close | `Boolean` | `true` | Close Lightbox when the **overlay** is clicked. |
| overlay-color | `String` | `'#000'`| The overlay color. |
| overlay-opacity  | `Number` | `0.9` | The overlay opacity. |
| show-counter     | `Boolean` | `true`  | Show or hide indicator counter. |
| show-item-title  | `Boolean` | `true`  | Show or hide active item image title. |
| show-nav-control | `Boolean` | `true` | Show or hide navigation controls. |
| show-thumbnail   | `Boolean` | `true` | Show or hide image thumbnails. |
| show-toolbar     | `Boolean` | `true` | Show or hide toolbar buttons. |
| thumbnail-height | `Number`  | `72` | Default image thumbnails height. |
| toolbar          | `Object` | `{'download': false, 'zoom': true, 'rotate': true, 'info': true, 'delete': true, 'menubar': false, 'close': true}` | Configure the toolbar buttons. |
| transition       | `String` | `'slide-top-bottom'` | Transition animation name when showing the active image. Available transitions are: `fade`, `scale`, `slide-fade`, `slide-fade-reverse`, `slide-bottom-top`, `slide-top-bottom`, `slide-left-right`, `slide-right-left`. |
| transition-mode  | `String` |  | Controls the timing sequence of leaving/entering transitions. Available modes are `out-in` and `in-out`. |

</div>


### Events

<div class="cmp-property">

| Name   | Argument Type | Description |
|--------|---------------|-------------|
| change | (`Object` activeItem, `Number` index) | Triggers when active item is changed. |
| close         | `String`  | Triggers when Lightbox is closed. The input argument contains a debug message that triggers the event. |
| exec-delete   | `Object`  | Triggers when button **DELETE** is clicked. The input argument contains the active item object. |
| exec-download | `Object`  | Triggers when button **DOWNLOAD**is clicked. The input argument contains the active item object. |
| exec-info     | `Object`  | Triggers when button **INFO** is . The input argument contains the active item object. |
| exec-rotate-left  | `Object` | Triggers when button **ROTATE-LEFT** is clicked. The input argument contains the active item object. |
| exec-rotate-right | `Object` | Triggers when button **ROTATE-RIGHT** is clicked. The input argument contains the active item object. |
| exec-zoomin  | `Object`  | Triggers when button **ZOOM-IN** is clicked. The input argument contains the active item object. |
| exec-zoomout | `Object`  | Triggers when button **ZOOM-OUT** is clicked. The input argument contains the active item object. |
| update:open  | `Boolean` | Used to update the `open` property value. |

</div>


### Public Methods

<div class="cmp-property">

| Name   | Description |
|--------|-------------|
| changeActive(`Object` item, `Number` index) | Change the active item. |
| openAt(`Number` index)  | Open modal lightbox at the given index. |
| nextSlide()  | Open modal lightbox at next to active item. |
| prevSlide()  | Open modal lightbox at prior to active item. |

</div>


### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| menubar | Contents for toolbar button menus. |

</div>

<script src="./script/lightbox.js"></script>
