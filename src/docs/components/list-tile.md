:::lead
**BsListTile** is a component used to display information. It can contain an avatar, content, actions, 
subheaders and much more. BsListTile present content in a way that makes it easy to identify a specific 
item in a collection. They provide a consistent styling for organizing groups of text and images.
:::


## Overview

The `<bs-list-tile>` needs to be used inside `<bs-list-view>` to compose various parts of the list item 
by different components. 

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
        <bs-appbar-title title="Menus" class="text-white"></bs-appbar-title>
      </bs-appbar>
      <bs-list-view>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="inbox"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Inbox</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="tags"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Important</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="paper-plane"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Sent</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="file-alt"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Drafts</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
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


## Avatar with Title and Icon

Here we combine `bs-list-tile-leading` and bs-list-tile-action in a single-line list.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card class="mobi-card mx-auto" shadow>
      <bs-appbar class="bg-default-color-dark rounded-top" shadow>
        <bs-button mode="icon"
                   color="light-grey"
                   flat>
          <bs-icon icon="menu_bars" size="24"></bs-icon>
        </bs-button>
        <bs-appbar-title title="Chats" 
                         class="text-white"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light-grey" 
                   mode="icon" 
                   icon="search" 
                   flat></bs-button>
      </bs-appbar>
      <bs-list-view>
        <bs-subheader>Recent chat</bs-subheader>
        <bs-list-tile v-for="item in chats1" 
                      :key="item.fullname" 
                      navigable>
          <bs-list-tile-leading :img-src="item.avatar" circle></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>{{ item.fullname }}</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <font-awesome-icon icon="comment-alt" 
                               size="lg" 
                               :class="{'text-primary': item.active}"></font-awesome-icon>
          </bs-list-tile-action>
        </bs-list-tile>
      </bs-list-view>
      <bs-divider></bs-divider>
      <bs-list-view>
        <bs-subheader>Previous chat</bs-subheader>
        <bs-list-tile v-for="item in chats2" 
                      :key="item.fullname" 
                      navigable>
          <bs-list-tile-leading :img-src="item.avatar" circle></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>{{ item.fullname }}</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <font-awesome-icon class="text-secondary" 
                               icon="comment-alt" 
                               size="lg"></font-awesome-icon>
          </bs-list-tile-action>
        </bs-list-tile>
      </bs-list-view>
    </bs-card>
  </div>
</template>

<script>
export default {
  data() { 
    return {
      chats1: [
        {active: true, fullname: 'Jason Oner', avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/1.jpg'},
        {active: true, fullname: 'Ranee Carlson', avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/2.jpg'},
        {active: false, fullname: 'Cindy Baker', avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/3.jpg'},
        {active: false, fullname: 'Ali Connors', avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/4.jpg'}
      ],
      chats2: [
        {fullname: 'Travis Howard', avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/5.jpg'}
      ],
    }; 
  },
}
</script>

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


## Image with Multiline Text

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card class="mobi-card mx-auto" shadow>
      <bs-appbar class="bg-primary-color-dark rounded-top" shadow>
        <bs-button mode="icon"
                   color="light-grey"
                   flat>
          <bs-icon icon="menu_bars" size="24"></bs-icon>
        </bs-button>
        <bs-appbar-title title="My Recipes" 
                         class="text-white"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light-grey" 
                   mode="icon" 
                   icon="search" 
                   flat></bs-button>
      </bs-appbar>
      <bs-list-view>
        <bs-subheader>Summer Recipes</bs-subheader>
        <template v-for="(item, idx) in recipes">
          <bs-list-tile :key="item.title" navigable>
            <bs-list-tile-leading :img-src="item.url" 
                                  :size="{height: 56, width: 85}" 
                                  center></bs-list-tile-leading>
            <bs-list-tile-content multi-line>
              <bs-list-tile-title class="font-weight-bold">{{ item.title }}</bs-list-tile-title>
              <bs-list-tile-subtitle>{{ item.desc }}</bs-list-tile-subtitle>
            </bs-list-tile-content>
            <bs-list-tile-action class="rating text-grey-500" :center="false">0{{ idx + 1 }}</bs-list-tile-action>
          </bs-list-tile>
          <bs-divider v-if="idx + 1 < recipes.length" 
                      :key="item.title + idx" 
                      left-indent="118"></bs-divider>        
        </template>
      </bs-list-view>
    </bs-card>
  </div>
</template>

<script>
export default {
  data() { 
    return {
      recipes: [{
        url: "http://vue-mdbootstrap.fajarconsultant.com/img/crunchy-croissants.jpg",
        title: "Crunchy Croissants",
        desc: "Buttery, flaky pastry named for its crescent shaped."
      }, {
        url: "http://vue-mdbootstrap.fajarconsultant.com/img/grilled-eggplant.jpg",
        title: "Grilled Eggplant",
        desc: "Tender with a rich, complex flavor when cooked."
      }, {
        url: "http://vue-mdbootstrap.fajarconsultant.com/img/tangerine-salad.jpg",
        title: "Tangerine Salad",
        desc: "Peak tangerine season lasts from autumn to spring."
      }, {
        url: "http://vue-mdbootstrap.fajarconsultant.com/img/pomegranate-juice.jpg",
        title: "Pomegranate Juice",
        desc: "A superfood for good skin, hair and health."
      }, {
        url: "http://vue-mdbootstrap.fajarconsultant.com/img/simple-salsa.jpg",
        title: "Chili Salsa",
        desc: "Heat up any taco night with minimal preparation."
      }, {
        url: "http://vue-mdbootstrap.fajarconsultant.com/img/flour-scratch.jpg",
        title: "Flour from scratch",
        desc: "Grind grains, nuts, or beans in your coffee grinder."
      }],
    }; 
  },
}
</script>

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


## Used inside Card

### Basic Example

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
        <bs-card shadow>
          <bs-list-view>
            <bs-subheader>Today</bs-subheader>
            <template v-for="(item, index) in cardItems">
              <bs-list-tile :key="item.title">
                <bs-list-tile-leading :img-src="item.avatar" size="40" circle></bs-list-tile-leading>
                <bs-list-tile-content multi-line>
                  <bs-list-tile-title class="font-weight-bold">{{ item.title }}</bs-list-tile-title>
                  <bs-list-tile-subtitle v-html="item.subtitle" class="text-muted"></bs-list-tile-subtitle>
                </bs-list-tile-content>
              </bs-list-tile>
              <bs-divider v-if="index + 1 < cardItems.length"
                          left-indent="70"
                          :key="item.title + index"></bs-divider>
            </template>
          </bs-list-view>
          <bs-card-body>
            <bs-card-content type="title">
              Another Content Title
            </bs-card-content>
            <bs-card-content>
              Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. 
              Laborum consequat non elit enim exercitation cillum aliqua consequat id aliqua.
            </bs-card-content>
          </bs-card-body>
        </bs-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() { 
    return {
      cardItems: [
        {
          avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<b>Ali Connors</b> &#8212; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/2.jpg',
          title: 'Summer BBQ',
          subtitle: "<b>to Alex, Scott, Jennifer</b> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        {
          avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/3.jpg',
          title: 'Oui oui',
          subtitle: "<b>Sandra Adams</b> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        {
          avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/4.jpg',
          title: 'Birthday gift',
          subtitle: "<b>Trevor Hansen</b> &mdash; Have any ideas about what we should get Heidi for her birthday?"
        }
      ],
    }; 
  },
}
</script>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px 24px 60px;
}
</style>
```
:::

### Contact Details Example

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card class="mobi-card mx-auto" shadow>
      <bs-card-media title="Jonathan Smith">
        <img src="https://picsum.photos/id/118/600/350.jpg?blur=4" alt="image">        
      </bs-card-media>
      <bs-list-view>
        <bs-list-tile>
          <bs-list-tile-leading class="text-info" icon="phone-alt"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title class="font-weight-bold">0821-5555-1234</bs-list-tile-title>
            <bs-list-tile-subtitle class="text-muted">Mobile | Indonesia</bs-list-tile-subtitle>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile>
          <bs-list-tile-leading class="md-has-icon" size="24"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title class="font-weight-bold">+6221-4444-6789</bs-list-tile-title>
            <bs-list-tile-subtitle class="text-muted">Work | Indonesia</bs-list-tile-subtitle>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-divider left-indent="70"></bs-divider>
        <bs-list-tile>
          <bs-list-tile-leading class="text-info" icon="envelope"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title class="font-weight-bold">jonathan.smith@company.com</bs-list-tile-title>
            <bs-list-tile-subtitle class="text-muted">Work</bs-list-tile-subtitle>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile>
          <bs-list-tile-leading class="md-has-icon" size="24"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title class="font-weight-bold">jonathan.smith212@example.com</bs-list-tile-title>
            <bs-list-tile-subtitle class="text-muted">Personal</bs-list-tile-subtitle>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-divider left-indent="70"></bs-divider>
        <bs-list-tile>
          <bs-list-tile-leading class="text-info" icon="map-marker-alt"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title class="font-weight-bold">1400 Main Street</bs-list-tile-title>
            <bs-list-tile-subtitle class="text-muted">Jakarta, Indonesia</bs-list-tile-subtitle>
          </bs-list-tile-content>
        </bs-list-tile>
      </bs-list-view>
    </bs-card>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px 24px 60px;
}

.mobi-card {
  max-width: 400px;
}
</style>
```
:::


## Used inside SideDrawer

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-side-drawer width="280" class="mx-auto" color="white" shadow>
      <div class="p-3 text-center">
          <img src="http://vue-mdbootstrap.fajarconsultant.com/img/kitty-1.jpg" alt="image" class="rounded-circle">      
          <div class="h5 mt-3">Kitty Doe</div>  
      </div>
      <bs-divider></bs-divider>
      <bs-list-view space-around="both">
        <bs-list-tile navigable active>
          <bs-list-tile-leading icon="inbox"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Inbox</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="tags"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Important</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="paper-plane"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Sent</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="file-alt"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Drafts</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
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
    </bs-side-drawer>
  </div>
</template>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px 24px 60px;

  > .md-side-drawer {
    position: relative;
    height: auto !important;
    z-index: auto !important;

    img {
      width: 90px;
    }
  }
}
</style>
```
:::


## Used with Input Controls

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card class="mobi-card mx-auto" shadow>
      <bs-appbar class="bg-purple rounded-top" shadow>
        <bs-button mode="icon"
                   color="light-grey"
                   flat>
          <bs-icon icon="menu_bars" size="24"></bs-icon>
        </bs-button>
        <bs-appbar-title title="Setting" 
                         class="text-white"></bs-appbar-title>
      </bs-appbar>
      <bs-list-view>
        <bs-subheader>User Controls</bs-subheader>
        <bs-list-tile>
          <bs-list-tile-content multi-line>
            <bs-list-tile-title class="font-weight-bold">Content Filtering</bs-list-tile-title>
            <bs-list-tile-subtitle class="text-muted">
              Set the content filtering level to restrict appts that can be downloaded
            </bs-list-tile-subtitle>
          </bs-list-tile-content>
          <bs-list-tile-action :center="false">
            <bs-switch v-model="enableFiltering" color="purple"></bs-switch>
          </bs-list-tile-action>
        </bs-list-tile>
        <bs-list-tile>
          <bs-list-tile-content multi-line>
            <bs-list-tile-title class="font-weight-bold">Password</bs-list-tile-title>
            <bs-list-tile-subtitle class="text-muted">
              Require password for purchase or use password to restrict purchase
            </bs-list-tile-subtitle>
          </bs-list-tile-content>
          <bs-list-tile-action :center="false">
            <bs-switch v-model="enablePassword" color="purple"></bs-switch>
          </bs-list-tile-action>
        </bs-list-tile>
      </bs-list-view>
      <bs-divider></bs-divider>
      <bs-list-view>
        <bs-subheader>General</bs-subheader>
        <bs-list-tile navigable @input="updateEnableNotification">
          <bs-list-tile-action :center="false">
            <bs-checkbox v-model="enableNotification" color="purple"></bs-checkbox>
          </bs-list-tile-action>
          <bs-list-tile-content multi-line>
            <bs-list-tile-title>Notifications</bs-list-tile-title>
            <bs-list-tile-subtitle class="text-muted">
              Notify me about updates to apps or games that I downloaded
            </bs-list-tile-subtitle>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile navigable @input="updateEnableSound">
          <bs-list-tile-action :center="false">
            <bs-checkbox v-model="enableSound" color="purple"></bs-checkbox>
          </bs-list-tile-action>
          <bs-list-tile-content multi-line>
            <bs-list-tile-title>Sound</bs-list-tile-title>
            <bs-list-tile-subtitle class="text-muted">
              Auto-update apps at any time. Data charges may apply
            </bs-list-tile-subtitle>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile navigable @input="updateEnableWidget">
          <bs-list-tile-action :center="false">
            <bs-checkbox v-model="enableWidget" color="purple"></bs-checkbox>
          </bs-list-tile-action>
          <bs-list-tile-content multi-line>
            <bs-list-tile-title>Auto-add widgets</bs-list-tile-title>
            <bs-list-tile-subtitle class="text-muted">
              Automatically add home screen widgets when downloads complete
            </bs-list-tile-subtitle>
          </bs-list-tile-content>
        </bs-list-tile>
      </bs-list-view>
    </bs-card>
  </div>
</template>

<script>
export default {
  data() { 
    return {
      enableFiltering: false,
      enablePassword: false,
      enableNotification: false,
      enableSound: false,
      enableWidget: false,
    }; 
  },
  methods: {
    updateEnableNotification() {
      this.enableNotification = !this.enableNotification;
    },
    updateEnableSound() {
      this.enableSound = !this.enableSound;
    },
    updateEnableWidget() {
      this.enableWidget = !this.enableWidget;
    },
  },
}
</script>

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


## Color Style

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
        <bs-card class="bg-stylish-color text-white" shadow>
          <bs-list-view color="stylish-color">
            <bs-subheader>
              Today
              <bs-menu class="ml-auto"
                       color="teal"
                       placement="bottom-right">
                <bs-button color="light-grey"
                           class="ml-auto"
                           mode="icon"
                           flat>
                  <bs-icon icon="MoreVert" size="24"></bs-icon>
                </bs-button>
                <template v-slot:content>
                  <bs-list-view color="teal">
                    <bs-list-tile navigable>
                      <bs-list-tile-title>Refresh</bs-list-tile-title>
                    </bs-list-tile>
                    <bs-list-tile navigable>
                      <bs-list-tile-title>Send feedback</bs-list-tile-title>
                    </bs-list-tile>
                    <bs-list-tile navigable>
                      <bs-list-tile-title>Settings</bs-list-tile-title>
                    </bs-list-tile>
                    <bs-list-tile navigable>
                      <bs-list-tile-title>Help</bs-list-tile-title>
                    </bs-list-tile>
                  </bs-list-view>
                </template>
              </bs-menu>
            </bs-subheader>
            <template v-for="(item, index) in cardItems">
              <bs-list-tile :key="item.title" navigable>
                <bs-list-tile-leading :img-src="item.avatar" size="40" circle></bs-list-tile-leading>
                <bs-list-tile-content multi-line>
                  <bs-list-tile-title class="font-weight-bold">{{ item.title }}</bs-list-tile-title>
                  <bs-list-tile-subtitle v-html="item.subtitle"></bs-list-tile-subtitle>
                </bs-list-tile-content>
              </bs-list-tile>
              <bs-divider v-if="index + 1 < cardItems.length"
                          left-indent="70"
                          :key="item.title + index"></bs-divider>
            </template>
          </bs-list-view>
          <bs-card-body>
            <bs-card-content type="title">
              Another Content Title
            </bs-card-content>
            <bs-card-content>
              Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. 
              Laborum consequat non elit enim exercitation cillum aliqua consequat id aliqua.
            </bs-card-content>
          </bs-card-body>
        </bs-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() { 
    return {
      cardItems: [
        {
          avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<b>Ali Connors</b> &#8212; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/2.jpg',
          title: 'Summer BBQ',
          subtitle: "<b>to Alex, Scott, Jennifer</b> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        {
          avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/3.jpg',
          title: 'Oui oui',
          subtitle: "<b>Sandra Adams</b> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        {
          avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/4.jpg',
          title: 'Birthday gift',
          subtitle: "<b>Trevor Hansen</b> &mdash; Have any ideas about what we should get Heidi for her birthday?"
        }
      ],
    }; 
  },
}
</script>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px 24px 60px;
}
</style>
```
:::


## Component Reference

### BsListView - `<bs-list-view>`

**BsListView** is a container to hold all the list items.

#### Properties
 
<div class="cmp-property">

| Property      | Type        | Default   | Description |
|---------------|-------------|-----------|-------------|
| active-item-bordered | `String` |  | Give border around the active item. Valid values are: `left`, `right`, `left-right`, `top`, `bottom`, `top-bottom`. |
| color           | `String`  | `'white'` | ListView color appearance. Any of [MDBootstrap colors](#/reference/colors) or [Material colors](#/reference/colors) variant can be used. |
| overflow-hidden | `Boolean` | `false`   | Apply css `'overflow-hidden'` or not. |
| single-expand   | `Boolean` | `true`    | If `false` then more than one item can be expanded. |
| space-around    | `String`  |   | Give some space around each item. Valid values are: `both`, `left`, `right`. |

</div>


### BsListTile - `<bs-list-tile>`

The component to display and organize the item parts.

#### Properties

<div class="cmp-property">

| Property   | Type      | Default | Description |
|------------|-----------|---------|-------------|
| active <bs-badge color="unique text-white">v-model</bs-badge> | `Boolean` | `false` | Component state and monitored by `v-model`. |
| active-class | `String` | `'active'` | `<router-link>` prop: Configure the active CSS class applied when the link is active. Typically you will want to set this to class name `active`. |
| disabled   | `Boolean` | `false` | Component state. |
| exact      | `Boolean` | `false` | `<router-link>` prop: The default active class matching behavior is inclusive match. Setting this property forces the mode to exactly match the route. |
| navigable  | `Boolean` | `false` | Explicitly define this propperty when you want to use ListTile as navigation or menu item. |
| path       | `String`  |  | The route path for the navigation target. See [vue-router](https://router.vuejs.org/) for more information. |
| ripple-off | `Boolean` | `false` | Enabled or disabled ripple effect. |
| url        | `String`  |  | Absolute or relative URL for the navigation target, if doesn't use vue-router. |

</div>

#### Events

<div class="cmp-property">

| Name   | Argument Type | Description |
|--------|---------------|-------------|
| click  | `MouseEvent` | Fires when a non-disabled ListTile is clicked. |
| input  | `Boolean` | Used to update component state of `active` property. |

</div>


### BsListTileAction - `<bs-list-tile-action>`

**BsListTileAction** is a container for less important parts of item or for actionable component.

#### Properties

<div class="cmp-property">

| Property | Type      | Default | Description |
|----------|-----------|---------|-------------|
| center   | `Boolean` | `true`  | Centers item inside it vertically. |
| stack    | `Boolean` | `false` | Arrange item inside it vertically. |
| tag      | `String`  | `'div'` | The html tag is used to render the container. |

</div>


### BsListTileContent - `<bs-list-tile-content>`

**BsListTileContent** is a container for item's description. Inside it, you can put component such 
as `<bs-list-tile-title>` and `<bs-list-tile-subtitle>`.

#### Properties

<div class="cmp-property">

| Property  | Type      | Default | Description |
|-----------|-----------|---------|-------------|
| multiLine | `Boolean` | `false` | Useful when you want to display multiline text. By default the subtitle will be display in a single line, if the text length is beyond the container width then the text will be cut and put an ellipses at the end.  |
| tag       | `String`  | `'div'` | The html tag is used to render the container. |

</div>


### BsListTileLeading - `<bs-list-tile-leading>`

**BsListTileLeading** is a component for important parts of item. Avatar, image, or icon usually placed 
inside this component. This component also can help to display avatar, image or icon directly by 
defining its property. 

#### Properties

<div class="cmp-property">

| Property | Type      | Default | Description |
|----------|-----------|---------|-------------|
| center   | `Boolean`   | `false`  | Centers the avatar or image horizontally and vertically. |
| circle   | `Boolean`   | `false`  | Create avatar with **circle** shape. |
| icon     | `String`    |          | The icon to display. Use prefix `bs-` to use internal icon, otherwise use valid [FontAwesome Icon](https://fontawesome.com/icons?d=gallery&s=solid&m=free) name. |
| icon-flip     | `String`    |     | Flip the icon, valid values are: `horizontal`, `vertical`, `both`. |
| icon-pulse    | `Boolean`   | `false` | Apply **pulse** animation to the icon. |
| icon-rotation | `Number`    |         | Rotate the icon, valid values are: `90`, `180`, `270`. |
| icon-spin     | `Boolean`   | `false` | Apply **spin** animation to the icon. |
| img-src  | `String`    |          | Set the image location or image url to display as avatar |
| rounded  | `Boolean`   | `false`  | Create avatar with **rounded** shape. If `circle` and `rounded` are not set, then avatar shape will become `square`. |
| size     | `Number`/`String`/`Object` | `48` | The avatar size. |

</div>


### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| default | Main content for each component above. |

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
  z-index: auto !important;
}
.my-demo-wrapper > .md-side-drawer img {
  width: 90px;
}
</style>


<script src="./script/list-tile.js"></script>
