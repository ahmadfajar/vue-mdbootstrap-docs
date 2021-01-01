:::lead
**BsSearchField** is a standalone input field for collecting search keywords. This 
component is usually placed on the *Navbar* or anywhere on a page that is easy to see.
:::


## Overview

**BsSearchField** component mimics the HTML5 `<input>` element. This means that you can 
add attributes like `readonly`, or `disabled` and it will react to them to give the 
best experience. You can also use `v-model` directive to create two-way data bindings 
on the value property as in `v-model="srchvalue"`. This is useful to control or maintain 
the `value` property. Additionally, you can listen to the `search` event to handle the
*search* task based on the given *keyword*.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="small-box mx-auto">
      <bs-search-field 
        v-model="srchvalue0" 
        @search="onSearch">
      </bs-search-field>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      srchvalue0: null,
    }
  },
  methods: {
    onSearch(term) {
      // do something here...
    },
  }
}
</script>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;

  .small-box {
    max-width: 480px;
  }
}
</style>
```
:::


## Adapts to container background

You can configure `<bs-search-field>` to adapts to the container background color by explicitly 
define the `dark-mode` property.

:::demo
```html
<template>
  <div class="my-demo-wrapper bg-indigo">
    <div class="small-box mx-auto">
      <bs-search-field dark-mode></bs-search-field>
    </div>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;

  .small-box {
    max-width: 480px;
  }
}
</style>
```
:::


## Working with custom search options

**BsSearchField** component can also be used to build custom search by explicitly define
the `search-options` property. Then use the `popover` slot to build a custom form elements 
for the custom search. **BsSearchField** used ***BsPopover*** component internally to
handle the custom form elements.

:::demo
```html
<template>
  <div class="my-demo-wrapper bg-grey-800">
    <div class="small-box mx-auto">
      <bs-search-field 
        v-model="fullname" 
        :open="showOptions" 
        name="srch" 
        dark-mode 
        search-options 
        @open="updateShowOptions">
        <template v-slot:popover>
          <bs-card-body>
            <div class="form-group">
              <bs-text-field 
                v-model="fullname" 
                name="fullname" 
                floating-label>
                <label>Full Name</label>
              </bs-text-field>
            </div>
            <div class="row">
              <div class="col-4">
                <div class="form-group">
                  <bs-combobox 
                    v-model="dateOperator" 
                    :data-source="dateOperators" 
                    name="bornOpr"
                    floating-label>
                  </bs-combobox>
                </div>
              </div>
              <div class="col-8">
                <div class="form-group">
                  <bs-date-time-field 
                    v-model="bornDate" 
                    name="born" 
                    clear-button 
                    floating-label>
                    <label>Born Date</label>
                  </bs-date-time-field>
                </div>
              </div>
            </div>
            <div class="mt-3 text-right">
              <bs-button 
                active
                class="font-weight-bold" 
                color="primary" 
                @click="doCustomSearch">
                Search
              </bs-button>
            </div>
          </bs-card-body>
        </template>
      </bs-search-field>
    </div>
  </div>
</template>

<script>
import { BsArrayStore } from "vue-mdbootstrap";

export default {
  data() {
    return {
      showOptions: false,
      fullname: null,
      bornDate: null,
      dateOperator: 'gt',
      dateOperators: {
        proxy: new BsArrayStore([
          { id: 'gt', name: 'Greater than' },
          { id: 'lt', name: 'Less than' },
        ], {
          idProperty: 'id'
        }),
        schema: { displayField: 'name', valueField: 'id' }
      },
    }
  },
  methods: {
    doCustomSearch(term) {
      this.showOptions = false
      // do something here...
    },
    updateShowOptions(value) {
      this.showOptions = value;
    }
  }
}
</script>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;

  .small-box {
    max-width: 480px;
  }
}
</style>
```
:::



## Component Reference

### Properties

<div class="cmp-property">

| Property     | Type      | Default | Description |
|--------------|-----------|---------|-------------|
| autofocus    | `Boolean` | `false` | Autofocus field when document is loaded. |
| dark-mode    | `Boolean` | `false` | Adapts search field to the container background color. |
| disabled     | `Boolean` | `false` | Enable/disable the component and the `<input>` element. |
| id           | `String`  |         | Sets `<input>` element `ID` attribute. This property value is auto generates. |
| inner-cls    | `String`  |  | Custom css class for component inner element. |
| minlength    | `Number`/`String` | `4` | Minimum characters to check before triggers event `search`. |
| name         | `String`  |  | Sets `<input>` element `name` attribute. |
| open         | `Boolean` | `false`     | *Popover* container state: `show` or `hide`. |
| placeholder  | `String`  | `Search...` | Sets the field placeholder. |
| popover-cls  | `String`    | `bg-white md-shadow` | Custom css class for the *Popover* container. |
| popover-min-width | `String`/`Number`  | `480` | Sets minimum width for the *Popover* container. |
| popover-position  | `String` | `bottom` | Sets the *Popover* display placement. |
| readonly       | `Boolean` | `false` | Put the component in readonly state and sets the `<input>` element `readonly` attribute. |
| search-options | `Boolean` | `false` | Enable custom search. If `true` then *Popover* container will be enabled. |
| transition     | `String`  | `popover` | Sets animation transition when displaying the *Popover* container. |
| value <bs-badge color="unique text-white">v-model</bs-badge> | `String` |  | The value monitored by `v-model` to maintain field value. |

</div>


### Events

<div class="cmp-property">

| Name    | Argument Type | Description |
|---------|---------------|-------------|
| blur    | `FocusEvent`  | Triggers when cursor leave the `<input>` element. |
| focus   | `FocusEvent`  | Triggers when cursor entered the `<input>` element. |
| input   | `String`      | Used to update the `value` property. |
| search  | `String`      | Asks handler to start searching for the given keyword. |
| open    | `Boolean`     | Triggers when updating *Popover* container state: `show` or `hide`. |

</div>


### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| popover | Contents for custom search options. |

</div>

<style lang="scss" scoped>
.my-demo-wrapper {
  padding: 24px;

  > .small-box {
    max-width: 480px;
  }

}
</style>

<script src="./script/search-field.js"></script>
