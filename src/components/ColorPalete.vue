<template>
  <div class="color-table">
    <div v-if="palette === 'material'" class="row">
      <div v-for="(item, key) in materialColors"
           :key="key"
           class="mb-4 col-md-6 col-xl-3">
        <div class="md-shadow-1 color-block text-white" :class="['bg-' + mdbColorInfo(item)[0].color]">
          <div>{{ mdbColorInfo(item)[0].color }}</div>
          <div>{{ mdbColorInfo(item)[0].value | upperCase }}</div>
        </div>
        <div class="md-shadow-1 color-block text-white" :class="['bg-' + mdbColorInfo(item)[1].color]">
          <div>{{ mdbColorInfo(item)[1].color }}</div>
          <div>{{ mdbColorInfo(item)[1].value | upperCase }}</div>
        </div>
      </div>
    </div>
    <div v-else-if="palette === 'bootstrap'" class="row">
      <div v-for="(value, key) in themeColors"
           :key="key"
           class="col-md-6 col-xl-4 mb-4">
        <div class="md-shadow-1 p-3" :class="bootstrapColor(key)">
          <span>{{ key }}</span>
          <span class="float-right">{{ value | upperCase }}</span>
        </div>
      </div>
    </div>
    <div v-else-if="palette === 'grays'" class="row">
      <div class="col-md-6 col-xl-4">
        <div class="md-shadow-1">
          <div v-for="(value, key) in grayColors"
               class="p-3"
               :key="key"
               :class="grayColor(key)">
            <span>grey-{{ key }}</span>
            <span class="float-right">{{ value | upperCase }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="palette === 'fullColor'" class="row">
      <div v-for="(items, key) in fullColors" class="col-md-6 col-xl-4 mb-4" :key="key">
        <div class="md-shadow">
          <div v-for="(value, prop) in items"
               class="p-3"
               :key="key + prop"
               :class="fullColor(key, prop)">
            <span>{{ fullColorName(key, prop) }}</span>
            <span class="float-right">{{ value | upperCase }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { materialColors, themeColors, grayColors } from "@/components/colors";
import { fullColors } from "@/components/palettes";

export default {
    name: "ColorPalete",
    props: {
        palette: {
            type: String,
            default: undefined
        },
    },
    data: () => ({
        materialColors,
        themeColors,
        fullColors,
        grayColors
    }),
    filters: {
        upperCase(value) {
            if (value === '') {
                return value;
            } else {
                return value.toUpperCase();
            }
        },
    },
    methods: {
        bootstrapColor(colorName) {
            return {
                ['bg-' + colorName]: true,
                'text-white': ['white', 'light', 'light-grey'].includes(colorName) === false,
                'text-black': ['white', 'light', 'light-grey'].includes(colorName),
            }
        },
        fullColor(base, prop) {
            return {
                ['bg-' + base]: prop !== 'base',
                ['bg-' + base + '-base']: prop === 'base',
                [prop]: prop !== 'base',
                'text-white': ['lighten-5', 'lighten-4', 'lighten-3', 'lighten-2', 'lighten-1', 'accent-1', 'accent-2', 'accent-3', 'accent-4'].includes(prop) === false,
                'text-black': ['lighten-5', 'lighten-4', 'lighten-3', 'lighten-2', 'lighten-1', 'accent-1', 'accent-2', 'accent-3', 'accent-4'].includes(prop) || (base === 'yellow' && prop === 'base'),
            }
        },
        fullColorName(base, prop) {
            if (prop === 'base') {
                return base + '-' + prop;
            } else {
                return base + ' ' + prop;
            }
        },
        grayColor(key) {
            return {
                ['bg-grey-' + key]: true,
                'text-white': ['100', '200', '300', '400', '500'].includes(key) === false,
                'text-black': ['100', '200', '300', '400', '500'].includes(key),
            }
        },
        mdbColorInfo(color) {
            const keys   = Object.keys(color);
            const values = Object.values(color);

            return [
                {color: keys[0], value: values[0]},
                {color: keys[1], value: values[1]},
            ]
        }
    }
}
</script>

<style lang="scss">
.color-block {
    padding: 1.5rem;
    text-align: center;
}
</style>
