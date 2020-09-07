:::lead
**BsSubheader** is small and lightweight component which is primarily used to manage and separate content within
lists or page layouts.
:::


## Example

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-md-8 offset-md-2 col-xl-6 offset-xl-3">
        <bs-card shadow>
          <bs-list-view>
            <bs-subheader>Today</bs-subheader>
            <bs-list-tile>
              <bs-list-tile-leading img-src="img/1.jpg" circle></bs-list-tile-leading>
              <bs-list-tile-content>
                <bs-list-tile-title>Jason Oner</bs-list-tile-title>
              </bs-list-tile-content>
              <bs-list-tile-action>
                <font-awesome-icon class="text-secondary" icon="comment-alt" size="lg"></font-awesome-icon>
              </bs-list-tile-action>
            </bs-list-tile>
            <bs-list-tile>
              <bs-list-tile-leading img-src="img/2.jpg" circle></bs-list-tile-leading>
              <bs-list-tile-content>
                <bs-list-tile-title>Ranee Carlson</bs-list-tile-title>
              </bs-list-tile-content>
              <bs-list-tile-action>
                <font-awesome-icon class="text-secondary" icon="comment-alt" size="lg"></font-awesome-icon>
              </bs-list-tile-action>
            </bs-list-tile>
            <bs-list-tile>
              <bs-list-tile-leading img-src="img/3.jpg" circle></bs-list-tile-leading>
              <bs-list-tile-content>
                <bs-list-tile-title>Cindy Baker</bs-list-tile-title>
              </bs-list-tile-content>
              <bs-list-tile-action>
                <font-awesome-icon class="text-secondary" icon="comment-alt" size="lg"></font-awesome-icon>
              </bs-list-tile-action>
            </bs-list-tile>
          </bs-list-view>
          <bs-divider></bs-divider>
          <bs-list-view>
            <bs-subheader>History</bs-subheader>
            <bs-list-tile>
              <bs-list-tile-leading img-src="img/4.jpg" circle></bs-list-tile-leading>
              <bs-list-tile-content>
                <bs-list-tile-title>Ali Connors</bs-list-tile-title>
              </bs-list-tile-content>
              <bs-list-tile-action>
                <font-awesome-icon class="text-secondary" icon="comment-alt" size="lg"></font-awesome-icon>
              </bs-list-tile-action>
            </bs-list-tile>
            <bs-list-tile>
              <bs-list-tile-leading img-src="img/5.jpg" circle></bs-list-tile-leading>
              <bs-list-tile-content>
                <bs-list-tile-title>Travis Howard</bs-list-tile-title>
              </bs-list-tile-content>
              <bs-list-tile-action>
                <font-awesome-icon class="text-secondary" icon="comment-alt" size="lg"></font-awesome-icon>
              </bs-list-tile-action>
            </bs-list-tile>
          </bs-list-view>
        </bs-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-demo-wrapper {
  margin: 24px 24px 60px;
}
</style>
```
:::


## Component Reference

### Properties

<div class="cmp-property">

| Property     | Type        | Default  | Description |
|--------------|-------------|----------|-------------|
| dark         | `Boolean`   | `false`  | Define explicitly when placed inside element with dark background. |

</div>
