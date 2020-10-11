:::lead
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
:::

## Text Field

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-text-field append-icon-outer="folder" prepend-icon="address-book" 
                     clear-button>
        <label class="col-md-3 col-form-label">
          Text Field
        </label>
      </bs-text-field>
    </div>
    <div class="form-group">
      <bs-text-field type="password" prepend-icon-outer="key" clear-button>
        <label class="col-md-3 col-form-label">
          Password Field
        </label>
      </bs-text-field>
    </div>
    <div class="form-group">
      <bs-text-field append-icon-outer="archway"
                     placeholder="placeholder" 
                     help-text="This is a help text." 
                     floating-label :persistent-help-text="false">
        <label>Text Field</label>
      </bs-text-field>
    </div>
    <div class="form-group">
      <bs-text-field append-icon="user" prepend-icon-outer="archway" prepend-icon="archway"
                     help-text="This is a help text." 
                     floating-label clear-button>
        <label>Text Field</label>
      </bs-text-field>
    </div>
    <div class="form-group">
      <bs-text-field append-icon-outer="folder" append-icon="address-book" 
                     help-text="This is a help text." 
                     :persistent-help-text="false"
                     outlined clear-button>
        <label class="col-md-3 col-form-label">
          Text Summer Field
        </label>
      </bs-text-field>
    </div>
    <div class="form-group">
      <bs-text-field append-icon-outer="folder" append-icon="address-book" 
                     help-text="This is a help text." 
                     filled clear-button>
        <label class="col-md-3 col-form-label">
          Text Summer Field
        </label>
      </bs-text-field>
    </div>
    <div class="row">
      <div class="col-lg">
        <div class="form-group">
          <bs-text-field append-icon="archway" prepend-icon-outer="archway"
                         placeholder="placeholder" 
                         help-text="This is a help text."  
                         floating-label outlined clear-button>
            <label>Text Field</label>
          </bs-text-field>
        </div>
        <div class="form-group">
          <bs-text-field prepend-icon="archway"
                         help-text="This is a help text."
                         floating-label outlined clear-button>
            <label>Text Field</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col-lg">
        <div class="form-group">
          <bs-text-field append-icon="archway" prepend-icon-outer="archway"
                         placeholder="placeholder" 
                         help-text="This is a help text."  
                         floating-label filled clear-button>
            <label>Text Field</label>
          </bs-text-field>
        </div>
        <div class="form-group">
          <bs-text-field prepend-icon="archway" prepend-icon-outer="archway" append-icon="heart"
                         help-text="This is a help text."
                         floating-label filled>
            <label>Text Field</label>
          </bs-text-field>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Text Area

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-text-area append-icon-outer="folder" prepend-icon="address-book" 
                    clear-button>
        <label class="col-md-3 col-form-label">
          TextArea Field
        </label>
      </bs-text-area>
    </div>
    <div class="form-group">
      <bs-text-area prepend-icon-outer="address-book" append-icon="folder"
                    clear-button>
        <label class="col-md-3 col-form-label">
          TextArea Field
        </label>
      </bs-text-area>
    </div>
    <div class="form-group">
      <bs-text-area placeholder="placeholder" 
                    help-text="This is a help text." 
                    no-resize
                    floating-label :persistent-help-text="false">
        <label>TextArea Field</label>
      </bs-text-area>
    </div>
    <div class="form-group">
      <bs-text-area append-icon="user" prepend-icon-outer="archway" prepend-icon="archway"
                    help-text="This is a help text." auto-grow
                    floating-label clear-button>
        <label>TextArea Field</label>
      </bs-text-area>
    </div>
    <div class="form-group">
      <bs-text-area append-icon-outer="folder" append-icon="address-book" 
                     help-text="This is a help text." 
                     :persistent-help-text="false"
                     outlined no-resize clear-button>
        <label class="col-md-3 col-form-label">
          Text Summer Field
        </label>
      </bs-text-area>
    </div>
    <div class="form-group">
      <bs-text-area append-icon-outer="folder" append-icon="address-book" 
                    prepend-icon="archway" prepend-icon-outer="archway"
                    help-text="This is a help text." 
                    filled auto-grow clear-button>
        <label class="col-md-3 col-form-label">
          Text Summer Field
        </label>
      </bs-text-area>
    </div>
    <div class="row">
      <div class="col-lg">
        <div class="form-group">
          <bs-text-area append-icon="archway" prepend-icon-outer="archway"
                         placeholder="placeholder" 
                         help-text="This is a help text."  
                         floating-label outlined clear-button no-resize>
            <label>TextArea Field</label>
          </bs-text-area>
        </div>
        <div class="form-group">
          <bs-text-area prepend-icon-outer="archway" prepend-icon="archway"
                         help-text="This is a help text."
                         floating-label outlined clear-button auto-grow>
            <label>TextArea Field</label>
          </bs-text-area>
        </div>
      </div>
      <div class="col-lg">
        <div class="form-group">
          <bs-text-area append-icon="archway" prepend-icon-outer="archway"
                         placeholder="placeholder" 
                         help-text="This is a help text."  
                         floating-label filled clear-button no-resize>
            <label>TextArea Field</label>
          </bs-text-area>
        </div>
        <div class="form-group">
          <bs-text-area prepend-icon-outer="archway"
                        floating-label filled clear-button auto-grow>
            <label>TextArea Field</label>
          </bs-text-area>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::

