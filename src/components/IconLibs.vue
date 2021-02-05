<template>
  <div class="demo-block">
    <div class="card-body bg-grey-200 pb-2">
      <div class="row text-center">
        <div
          v-for="icon in iconDatas"
          class="col-4 col-sm-3 col-xl-2 mb-2"
          :key="icon.name">
          <div class="icon-wrapper md-hover-shadow">
            <bs-icon :icon="icon.name" size="32" />
            <div class="text-truncate">
              {{ icon.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconLibrary from "vue-mdbootstrap/src/components/BsIcon/IconLibrary";

export default {
  name: "IconLibs",
  data: () => ({
    iconDatas: IconLibrary,
  }),
};
</script>

<style lang="scss" scoped>
.icon-wrapper {
    padding: .5rem;

    &:hover {
        background-color: white;
    }
}
</style>
