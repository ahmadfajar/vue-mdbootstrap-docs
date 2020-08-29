:::lead
**BsDivider** is small and lightweight component which is primarily used to manage and separate content within
lists or page layouts.
:::

## Example

:::demo
```html
<div class="my-demo-wrapper">
  <div class="row">
    <div class="col-md-6 mb-3">
      <bs-card shadow>
        <bs-list-view>
          <bs-list-tile>
            <bs-list-tile-content>
              <bs-list-tile-title>List Item 1</bs-list-tile-title>
            </bs-list-tile-content>
          </bs-list-tile>
          <bs-divider left-indent="16"></bs-divider>
          <bs-list-tile>
            <bs-list-tile-content>
              <bs-list-tile-title>List Item 2</bs-list-tile-title>
            </bs-list-tile-content>
          </bs-list-tile>
          <bs-divider left-indent="16"></bs-divider>
          <bs-list-tile>
            <bs-list-tile-content>
              <bs-list-tile-title>List Item 3</bs-list-tile-title>
            </bs-list-tile-content>
          </bs-list-tile>
        </bs-list-view>
      </bs-card>
    </div>
    <div class="col-md-6">
      <bs-card shadow>
        <bs-list-view>
          <bs-list-tile>
            <bs-list-tile-leading size="20">
              <font-awesome-icon icon="cog" size="lg"></font-awesome-icon>
            </bs-list-tile-leading>
            <bs-list-tile-content>
              <bs-list-tile-title>Setting</bs-list-tile-title>
            </bs-list-tile-content>
          </bs-list-tile>
          <bs-list-tile>
            <bs-list-tile-leading size="20">
              <font-awesome-icon icon="question-circle" size="lg"></font-awesome-icon>
            </bs-list-tile-leading>
            <bs-list-tile-content>
              <bs-list-tile-title>Help</bs-list-tile-title>
            </bs-list-tile-content>
          </bs-list-tile>
          <bs-divider></bs-divider>
          <bs-list-tile>
            <bs-list-tile-leading size="20">
              <font-awesome-icon icon="power-off" size="lg"></font-awesome-icon>
            </bs-list-tile-leading>
            <bs-list-tile-content>
              <bs-list-tile-title>Exit</bs-list-tile-title>
            </bs-list-tile-content>
          </bs-list-tile>
        </bs-list-view>
      </bs-card>
    </div>
  </div>
</div>
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

| Property     | Type        | Default  | Description |
|--------------|-------------|----------|-------------|
| dark         | `Boolean`   | `false`  | Define explicitly when placed inside element with dark background. |
| left-indent  | `Number`/`String` |   | Indentation from left side. Numbers get converted to pixel values. Any other value must include the units (such as `px`, `em`, or `rem`). |
| right-indent | `Number`/`String` |   | Indentation from right side. Numbers get converted to pixel values. Any other value must include the units (such as `px`, `em`, or `rem`). |
| thickness    | `Number`/`String` |   | Divider thickness. Numbers get converted to pixel values. Any other value must include the units (such as `px`, `em`, or `rem`). |

</div>
