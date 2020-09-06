:::lead
**BsCard** is a flexible and extensible content container. It includes sub-component for headers, footers, 
and content with variety background colors, and powerful display options.
:::


## Overview

**BsCard** utilize [Boostrap v4](https://getbootstrap.com/docs/4.5/components/card/) css classes and
built with as little markup and styles as possible, but still manage to deliver control and customization.
Built with flexbox, it offers easy alignment and mix well with other components. A card may contains 
a variety of related information, such as photos, texts, and links on a single subject. Cards often 
used as gateway to more detailed and complex information. 

`<bs-card>` has no fixed width to start, so they'll naturally fill the full width of its parent element.
This is easily customized via styles or standard Bootstrap v4 sizing classes. Change the default `div` 
root tag to any other HTML element by specifying via the `tag` property.

:::demo
```html
<div class="my-demo-wrapper">
  <div class="row">
    <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
      <bs-card>
        <bs-card-media title="Image Title" subtitle="Image SubTitle">
          <img src="https://picsum.photos/600/300/?image=29" alt="image">        
        </bs-card-media>
        <bs-card-body>
          <bs-card-content type="title">Content Title</bs-card-content>
          <bs-card-content type="subtitle">Content SubTitle</bs-card-content>
          <bs-card-content class="mt-3">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </bs-card-content>
          <bs-card-content>
            <small class="text-muted">Last updated 3 mins ago</small>
          </bs-card-content>
          <bs-button color="primary" class="mr-2">Action 1</bs-button>
          <bs-button color="primary" flat>Action 2</bs-button>
        </bs-card-body>
      </bs-card>
    </div>
  </div>
</div>
<style lang="scss">
.my-demo-wrapper {
  padding: 24px 24px 60px;
}
</style>
```
:::


## Header and Footer

:::demo
```html
<div class="my-demo-wrapper">
  <div class="row">
    <div class="col-lg-6 offset-lg-3">
      <bs-card shadow>
        <bs-card-header>Card Header</bs-card-header>
        <bs-card-body>
          <bs-card-content>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </bs-card-content>
          <bs-card-content>
            <small class="text-muted">Last updated 3 mins ago</small>
          </bs-card-content>
        </bs-card-body>
        <bs-card-footer>Card Footer</bs-card-footer>
      </bs-card>
    </div>
  </div>
</div>
<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Card Images

:::demo
```html
<div class="my-demo-wrapper">
  <div class="row row-cols-1 row-cols-md-2">
    <div class="col mb-3 mb-md-4">
      <bs-card img-top-src="https://picsum.photos/600/300/?image=29" img-top-alt="Image Top" shadow>
        <bs-card-body>
          <bs-card-content type="title">Content Title</bs-card-content>
          <bs-card-content>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </bs-card-content>
        </bs-card-body>
      </bs-card>
    </div>
    <div class="col mb-3 mb-md-4">
      <bs-card class="bg-unique text-white" shadow>
        <bs-card-media title="Image Title" subtitle="Image SubTitle">
          <img src="https://picsum.photos/600/300/?image=25" alt="image">        
        </bs-card-media>
        <bs-card-body>
          <bs-card-content type="title">Content Title</bs-card-content>
          <bs-card-content>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </bs-card-content>
        </bs-card-body>
      </bs-card>
    </div>
    <div class="col mb-3 mb-md-0">
      <bs-card img-bottom-src="https://picsum.photos/600/300/?image=425" img-bottom-alt="Image Bottom" shadow>
        <bs-card-body>
          <bs-card-content type="title">Content Title</bs-card-content>
          <bs-card-content>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </bs-card-content>
        </bs-card-body>
      </bs-card>
    </div>
    <div class="col">
      <bs-card class="bg-stylish-color text-white" shadow>
        <bs-card-body>
          <bs-card-content type="title">Content Title</bs-card-content>
          <bs-card-content>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </bs-card-content>
        </bs-card-body>
        <bs-card-media title="Image Title" subtitle="Image SubTitle">
          <img src="https://picsum.photos/600/300/?image=225" alt="image">        
        </bs-card-media>
      </bs-card>
    </div>
  </div>
</div>
<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Card Styles

Cards include various options for customizing their backgrounds, borders, and color.
See [Reference - Color Variants](#/reference/colors) for more information.

:::demo
```html
<div class="my-demo-wrapper">
  <div class="row row-cols-1 row-cols-md-2">
    <div class="col mb-3 mb-md-4">
      <bs-card class="bg-primary text-white" shadow>
        <bs-card-header>Card with bg-primary</bs-card-header>
        <bs-card-body>
          <bs-card-content type="title">Card Title</bs-card-content>
          <bs-card-content>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </bs-card-content>
        </bs-card-body>
        <bs-card-footer>Card Footer</bs-card-footer>
      </bs-card>
    </div>
    <div class="col mb-3 mb-md-4">
      <bs-card class="bg-secondary text-white" shadow>
        <bs-card-header>Card with bg-secondary</bs-card-header>
        <bs-card-body>
          <bs-card-content type="title">Card Title</bs-card-content>
          <bs-card-content>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </bs-card-content>
        </bs-card-body>
        <bs-card-footer>Card Footer</bs-card-footer>
      </bs-card>
    </div>
    <div class="col mb-3 mb-md-0">
      <bs-card class="bg-indigo text-white" flat shadow>
        <bs-card-header>Card with bg-indigo</bs-card-header>
        <bs-card-body>
          <bs-card-content type="title">Card Title</bs-card-content>
          <bs-card-content>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </bs-card-content>
        </bs-card-body>
        <bs-card-footer>Card Footer</bs-card-footer>
      </bs-card>
    </div>
    <div class="col">
      <bs-card class="bg-unique text-white" flat shadow>
        <bs-card-header>Card with bg-unique</bs-card-header>
        <bs-card-body>
          <bs-card-content type="title">Card Title</bs-card-content>
          <bs-card-content>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </bs-card-content>
        </bs-card-body>
        <bs-card-footer>Card Footer</bs-card-footer>
      </bs-card>
    </div>
  </div>
</div>
<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Component Reference

### Properties

#### `<bs-card>`

<div class="cmp-property">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| flat     | `Boolean` | `false`  | Create rectangle card and removes rounded border on its corner. |
| img-bottom-alt | `String` |   | Value for the image `alt` attribute. |
| img-bottom-src | `String` |   | The image URL. |
| img-top-alt | `String`  |     | Value for the image `alt` attribute. |
| img-top-src | `String`  |     | The image URL. |
| shadow    | `Boolean` | `false` | Create card with shadow on its sides. |
| tag       | `String`  | `'div'` | Html tag used to render the card. |

</div>


#### `<bs-card-header>`

<div class="cmp-property">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| tag      | `String`  | `'div'`  | Html tag used to render the card header. |

</div>


#### `<bs-card-footer>`

<div class="cmp-property">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| tag      | `String`  | `'div'`  | Html tag used to render the card footer. |

</div>

#### `<bs-card-media>`

<div class="cmp-property">

| Property    | Type      | Default  | Description |
|-------------|-----------|----------|-------------|
| overlay-top | `Boolean` | `false` | Placed text overlay at the top. |
| subtitle    | `String`  |   | Text for media subtitle. |
| title       | `String`  |   | Text for media title. |

</div>

#### `<bs-card-body>`

<div class="cmp-property">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| tag      | `String`  | `'div'`  | Html tag used to render the card body. |

</div>

#### `<bs-card-content>`

<div class="cmp-property">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| tag      | `String`  |   | Override html tag generated by `type` property. |
| type     | `String`  | `'text'` | Card content variations, valid values are: `title`, `subtitle`, `text`. |

</div>


### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| default | Main content |

</div>

