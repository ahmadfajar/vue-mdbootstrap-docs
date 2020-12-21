::: lead
**Vue MDBootstrap** provides a function that can be used to push notifications to 
your visitors which can be used to generate alert messages and can be easily customized.
:::


## Overview

Notification component is designed to mimic the push notifications that have been popularized 
by mobile and desktop operating systems. Notification component are intended to be small 
interruptions to your visitors or users, and therefore should contain minimal, to-the-point, 
non-interactive content.

The notification can be generate dynamically via `this.$notification` instance injection 
without the need to place component tag in your html.

:::demo
```html
<template>
  <div class="my-demo-wrapper text-center">
    <bs-button color="indigo" @click="showDefaultNotification">
      Show notification
    </bs-button>
  </div>
</template>

<script>
export default {
  methods: {
    showDefaultNotification() {
      this.$notification.add({message: 'I am notification message.'});
    }
  }
}
</script>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Variants

**Vue MDBootstrap** provides four notification variants.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-12 col-md-6 col-xl">
        <bs-button color="success" @click="showSuccessNotification">
          Success notification
        </bs-button>
      </div>
      <div class="col-12 col-md-6 col-xl mt-3 mt-md-0">
        <bs-button color="info" @click="showInfoNotification">
          Info notification
        </bs-button>
      </div>
      <div class="col-12 col-md-6 col-xl mt-3 mt-xl-0">
        <bs-button color="warning" @click="showWarningNotification">
          Warning notification
        </bs-button>
      </div>
      <div class="col-12 col-md-6 col-xl mt-3 mt-xl-0">
        <bs-button color="danger" @click="showErrorNotification">
          Error notification
        </bs-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showSuccessNotification() {
      this.$notification.success('I am success notification message.', 'Success');
    },
    showInfoNotification() {
      this.$notification.info('I am info notification message.', 'Info');
    },
    showWarningNotification() {
      this.$notification.warning('I am warning notification message.', 'Warning');
    },
    showErrorNotification() {
      this.$notification.error('I am error notification message.', 'Error');
    },
  }
}
</script>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Display Placement

**Vue MDBootstrap** notifications can be displayed on four sides of the html page.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-button 
      class="mr-2 mb-2" 
      color="indigo" 
      @click="showCustomNotification('top-left')">
      Top Left
    </bs-button>
    <bs-button 
      class="mr-2 mb-2" 
      color="indigo" 
      @click="showCustomNotification('top-center')">
      Top Center
    </bs-button>
    <bs-button 
      class="mr-2 mb-2" 
      color="indigo" 
      @click="showCustomNotification('top-right')">
      Top Right
    </bs-button>
    <bs-button 
      class="mr-2 mb-2" 
      color="indigo" 
      @click="showCustomNotification('top-full-width')">
      Top Full Width
    </bs-button>
    <bs-button 
      class="mr-2 mb-2" 
      color="indigo" 
      @click="showCustomNotification('bottom-left')">
      Bottom Left
    </bs-button>
    <bs-button 
      class="mr-2 mb-2" 
      color="indigo" 
      @click="showCustomNotification('bottom-center')">
      Bottom Center
    </bs-button>
    <bs-button 
      class="mr-2 mb-2" 
      color="indigo" 
      @click="showCustomNotification('bottom-right')">
      Bottom Right
    </bs-button>
    <bs-button 
      class="mr-2 mb-2" 
      color="indigo" 
      @click="showCustomNotification('bottom-full-width')">
      Bottom Full Width
    </bs-button>
  </div>
</template>

<script>
export default {
  methods: {
    showCustomNotification(position) {
      let options = {
          position: position,
          message: 'I am notification message...'
      };
      this.$notification.info(options, 'Info');
    }
  }
}
</script>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Notification With ProgressBar

**Vue MDBootstrap** notification also has progress bar which can be displayed when needed.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-button 
      class="mr-2 mb-2" 
      color="secondary" 
      @click="showDefaultNotificationProgress('Information')">
      Default notification
    </bs-button>
    <bs-button 
      class="mr-2 mb-2" 
      color="success" 
      @click="showNotificationProgress('success', 'Success')">
      Success notification
    </bs-button>
    <bs-button 
      class="mr-2 mb-2" 
      color="info" 
      @click="showNotificationProgress('info', 'Info')">
      Info notification
    </bs-button>
    <bs-button 
      class="mr-2 mb-2" 
      color="warning" 
      @click="showNotificationProgress('warning', 'Warning')">
      Warning notification
    </bs-button>
    <bs-button 
      class="mr-2 mb-2" 
      color="danger" 
      @click="showNotificationProgress('error', 'Error')">
      Error notification
    </bs-button>
  </div>
</template>

<script>
export default {
  methods: {
    showDefaultNotificationProgress(title) {
      let options = {
        message: 'I am notification message...',
        title: title,
        progressBar: true,
        progressBarValue: null
      };
      this.$notification.add(options);
    },
    showNotificationProgress(variant, title) {
      let options = {
        message: 'I am notification message...',
        progressBar: true,
        progressBarValue: null
      };
      this.$notification[variant](options, title);
    }
  }
}
</script>

<style scoped>
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## API

<div class="refs-api">

* INSTANCE METHOD

* <span class="text-primary font-weight-bold">add</span>(`Object|String` option) : <em class="text-grey-500">Object</em>

  Returns the Notification's instance or NULL if failed.

  If `option` is `string` then it will be interpret as notification message and if
  `option` is `object` the properties are :
  * <span class="text-primary">message</span> : `String`
  * <span class="text-primary">title</span> : `String`
  * <span class="text-primary">variant</span> : `String`
  * <span class="text-primary">timeout</span> : `Number`, default `6000`
  * <span class="text-primary">position</span> : `String`, default `bottom-right`

    Valid values are: `top-right`, `top-left`, `top-center`, `top-full-width`, 
    `bottom-right`, `bottom-left`, `bottom-center`, `bottom-full-width`

  * <span class="text-primary">clickClose</span> : `Boolean`, default `false`
  * <span class="text-primary">closeButton</span> : `Boolean`, default `true`
  * <span class="text-primary">closeOnHover</span> : `Boolean`, default `false`
  * <span class="text-primary">preventDuplicates</span> : `Boolean`, default `false`
  * <span class="text-primary">progressBar</span> : `Boolean`, default `false`
  * <span class="text-primary">progressBarValue</span> : `Number`

    If `null`, the notification's progressBar will automatically be adjusted with the timeout 
    and the remaining times.

* <span class="text-primary font-weight-bold">clearAll</span>()
* <span class="text-primary font-weight-bold">close</span>(`Object` data)

  <span class="text-muted font-weight-bold">PARAMETERS<span>

  <span class="text-unique font-weight-bold">data</span> : The notification's instance.

* <span class="text-primary font-weight-bold">removeByType</span>(`String` type)

  Valid values are: `default`, `custom`, `error`, `info`, `success`, `warning`

* <span class="text-primary font-weight-bold">setProgressValue</span>(`Object` data, `Number` value)
  
  <span class="text-muted font-weight-bold">PARAMETERS<span>

  <span class="text-unique font-weight-bold">data</span> : The notification's instance.

  <span class="text-unique font-weight-bold">value</span> : The progress bar value.

* <span class="text-primary font-weight-bold">error</span>(`Object|String` option, `String` title) : <em class="text-grey-500">Object</em>

  Returns the Notification's instance or NULL if failed.

  <span class="text-muted font-weight-bold">PARAMETERS<span>

  <span class="text-unique font-weight-bold">option</span> : The notification's options.

  <span class="text-unique font-weight-bold">title</span> : The notification's title, optional.

* <span class="text-primary font-weight-bold">info</span>(`Object|String` option, `String` title) : <em class="text-grey-500">Object</em>

  Returns the Notification's instance or NULL if failed.

  <span class="text-muted font-weight-bold">PARAMETERS<span>

  <span class="text-unique font-weight-bold">option</span> : The notification's options.

  <span class="text-unique font-weight-bold">title</span> : The notification's title, optional.

* <span class="text-primary font-weight-bold">success</span>(`Object|String` option, `String` title) : <em class="text-grey-500">Object</em>

  Returns the Notification's instance or NULL if failed.

  <span class="text-muted font-weight-bold">PARAMETERS<span>

  <span class="text-unique font-weight-bold">option</span> : The notification's options.

  <span class="text-unique font-weight-bold">title</span> : The notification's title, optional.

* <span class="text-primary font-weight-bold">warning</span>(`Object|String` option, `String` title) : <em class="text-grey-500">Object</em>

  Returns the Notification's instance or NULL if failed.

  <span class="text-muted font-weight-bold">PARAMETERS<span>

  <span class="text-unique font-weight-bold">option</span> : The notification's options.

  <span class="text-unique font-weight-bold">title</span> : The notification's title, optional.

</div>


<script src="./script/notification.js"></script>
