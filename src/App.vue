<template>
  <bs-app-container>
    <bs-appbar ref="appbar"
               class="bg-unique"
               clipped-left
               fixed-top
               shadow>
      <bs-button color="light-grey d-xl-none"
                 flat
                 mode="icon"
                 @click="menuBarClick">
        <bs-icon icon="menu_bars" size="24" />
      </bs-button>
      <bs-appbar-title :title="pageTitle" class="text-white" />
      <bs-spacer />
      <bs-appbar-items>
        <span class="mr-3 text-white align-self-center">v1.1.0</span>
        <bs-button color="light-grey"
                   flat
                   href="https://github.com/ahmadfajar/vue-mdbootstrap"
                   mode="icon"
                   target="_blank">
          <bs-avatar circle
                     img-src="img/GitHub-Light.png"
                     size="22" />
        </bs-button>
      </bs-appbar-items>
    </bs-appbar>

    <bs-side-drawer :mini="sideDrawerState === 'mini'"
                    :open="sideDrawerState === 'open'"
                    color="white border-right"
                    width="280"
                    @open="toggleDrawer">
      <img :style="{width: sideDrawerState === 'mini' ? '40px' : '96px'}"
           alt=""
           class="mx-auto d-block logo"
           src="img/vue-mdb.png" />
      <transition name="fade" v-if="sideDrawerState === 'open'">
        <div class="h4 text-center text-blue-grey pb-2">
          Vue MdBootstrap
        </div>
      </transition>
      <bs-divider />
      <bs-list-view active-item-bordered="left">
        <bs-list-nav>
          <bs-list-nav-item v-for="(nav, idx) in navs"
                            :key="'nav-' + idx"
                            :icon="nav.icon"
                            :label="nav.title"
                            :path="nav.route">
            <bs-list-nav v-if="nav.children" child>
              <bs-list-nav-item v-for="(navchild, ix) in nav.children"
                                :key="'child-' + idx + '-' + ix"
                                :label="navchild.title"
                                :path="navchild.route">
                <bs-list-nav v-if="navchild.children" child>
                  <bs-list-nav-item v-for="(child, nx) in navchild.children"
                                    :key="'child-' + idx + '-' + ix + '-' + nx"
                                    :label="child.title"
                                    :path="child.route" />
                </bs-list-nav>
              </bs-list-nav-item>
            </bs-list-nav>
          </bs-list-nav-item>
        </bs-list-nav>
      </bs-list-view>
    </bs-side-drawer>

    <bs-container tag="main"
                  class="bg-grey-100"
                  app>
      <router-view />
    </bs-container>
  </bs-app-container>
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
