<template>
  <div class="my-demo-wrapper">
    <bs-card class="mobi-card mx-auto" shadow>
      <bs-appbar class="bg-deep-purple rounded-top" shadow>
        <bs-button mode="icon"
                   color="light-grey"
                   flat>
          <bs-icon icon="menu_bars" size="24"></bs-icon>
        </bs-button>
        <bs-appbar-title title="Chats" class="text-white"></bs-appbar-title>
      </bs-appbar>
      <bs-list-view>
        <bs-subheader>Recent chat</bs-subheader>
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
        <bs-list-tile>
          <bs-list-tile-leading img-src="img/4.jpg" circle></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Ali Connors</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <font-awesome-icon class="text-secondary" icon="comment-alt" size="lg"></font-awesome-icon>
          </bs-list-tile-action>
        </bs-list-tile>
      </bs-list-view>
      <bs-divider></bs-divider>
      <bs-list-view>
        <bs-subheader>Previous chat</bs-subheader>
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
</template>

<script>
export default {
    name: "TestAja"
}
</script>

<style scoped>

</style>
