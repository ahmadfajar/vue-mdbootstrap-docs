<template>
  <div id="app">
    <bs-app-container>
      <bs-appbar ref="appbar"
                 class="bg-unique"
                 clipped-left
                 fixed-top
                 shadow>
        <bs-button mode="icon"
                   color="light-grey"
                   flat
                   @click="menuBarClick">
          <bs-icon icon="menu_bars" size="24" />
        </bs-button>
        <bs-appbar-title :title="pageTitle" class="text-white" />
        <bs-spacer />
        <bs-appbar-items>
          <span class="mr-3 text-white align-self-center">v1.0.4</span>
          <bs-button mode="icon"
                     color="light-grey"
                     href="https://github.com/ahmadfajar/vue-mdbootstrap"
                     flat>
            <bs-avatar img-src="img/GitHub-Light.png" size="22" circle />
          </bs-button>
        </bs-appbar-items>
      </bs-appbar>

      <bs-side-drawer width="250"
                      mini-width="70"
                      color="white border-right"
                      :mini="sideDrawerState === 'mini'"
                      :open="sideDrawerState === 'open'"
                      @open="toggleDrawer">
        <img src="img/vue-mdb.png"
             class="mx-auto d-block logo"
             :style="{width: sideDrawerState === 'mini' ? '46px' : '120px'}"
             alt="" />
        <transition name="fade" v-if="sideDrawerState === 'open'">
          <div class="h4 text-center text-blue-grey pb-2">
            Vue MdBootstrap
          </div>
        </transition>
        <bs-divider />
        <bs-list-view>
          <bs-list-nav>
            <bs-list-nav-item v-for="(nav, idx) in navs"
                              :key="'nav-' + idx"
                              :label="nav.title"
                              :path="nav.route"
                              :has-child="!!nav.children">
              <bs-list-nav v-if="nav.children" child>
                <bs-list-nav-item v-for="(navchild, cix) in nav.children"
                                  :key="'nav-' + idx + '-child-' + cix"
                                  :label="navchild.title"
                                  :path="navchild.route" />
              </bs-list-nav>
            </bs-list-nav-item>
          </bs-list-nav>
        </bs-list-view>
      </bs-side-drawer>

      <bs-content tag="main" class="bg-grey-100" app>
        <router-view />
      </bs-content>
    </bs-app-container>
  </div>
</template>

<script>
import navs from './navigation';

export default {
    name: "App",
    data: () => ({
        sideDrawerState: "open",
        navs: navs
    }),
    computed: {
        pageTitle() {
            return this.$route.meta ? this.$route.meta.title : "Getting Started";
        },
    },
    methods: {
        menuBarClick() {
            if (this.$refs.appbar.isMobile && this.sideDrawerState !== "close") {
                this.sideDrawerState = "close";
            } else if ((this.$refs.appbar.isMobile && this.sideDrawerState === "close") || this.sideDrawerState === "mini") {
                this.sideDrawerState = "open";
            } else {
                this.sideDrawerState = "mini";
            }
        },
        toggleDrawer(value) {
            if (value === true) {
                this.sideDrawerState = "open";
            } else {
                this.sideDrawerState = "close";
            }
        },
    },
};
</script>
