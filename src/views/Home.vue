<template>
  <div class="home"  :style="{ background: random.background.color }">
    <div
      ref="avatarRef"
      class="vue-color-avatar"
    >
      <!-- :class="getWrapperShapeClassName()" -->
      <!-- <Background :color="avatarOption.background.color" /> -->
      <div class="avatar-background" :style="{ background: random.background.color }"></div>

      <div class="avatar-payload" v-html="svgContent" />
    </div>
    <div class="wrap-btn-box" :style="{ background: random.background.color }">
      <button class="wrap-btn" @click="handleRandom">
        点击切换
      </button>
    </div>
  </div>
</template>

<script>
import {
  BeardShape,
  ClothesShape,
  EarringsShape,
  EarShape,
  EyebrowsShape,
  EyesShape,
  FaceShape,
  Gender,
  GlassesShape,
  MouthShape,
  NoseShape,
  TopsShape,
  WidgetType,
  WrapperShape,
} from '../enums'
import {getRandomAvatarOption} from '../random'
import { widgetData } from '../dynamic-data'
import {
  AVATAR_LAYER
} from '../index'
export default {
  name: 'Home',
  data: () => {
    return {
      sortedList: [],
      svgContent: '',
      random: {}
    }
  },
  components: {
  },
  watch: {
    'sortedList': function() {
      this.handleReader()
    }
  },
  created() {
    this.handleRandom()
  },
  methods: {

    async  handleReader () {
      const promises = this.sortedList.map(
      ([widgetType, opt]) => {
        if (opt.shape !== 'none' && widgetData?.[widgetType]?.[opt.shape]) {
    
          return (widgetData[widgetType][opt.shape]())
        }
        return ''
      }
    )
    const svgRawList=  await Promise.all(promises).then((raw) => {
      
      return raw.map((svgRaw, i) => {
        const content = svgRaw
          .slice(svgRaw.indexOf('>', svgRaw.indexOf('<svg')) + 1)
          .replace('</svg>', '')

        return `
          <g id="vue-colddor-avatar-${this.sortedList[i][0]}" file>
            ${content}
          </g>
        `
      })
    })

    this.$nextTick(() => {
    //   this.svgContent = `
    //   <svg
    //     width="${280}"
    //     height="${280}"
    //     viewBox="0 0 ${280 / 0.7} ${280 / 0.7}"
    //     preserveAspectRatio="xMidYMax meet"
    //     fill="none"
    //     xmlns="http://www.w3.org/2000/svg"
    //   >
    //      <g transform="translate(100, 65)">
    //     ${svgRawList.join('')}
    //   </g>
    //   </svg>
    // `
      this.svgContent = `
      <svg
        width="${280}"
        height="${280}"
        viewBox="0 0 ${280 / 0.7} ${280 / 0.7}"
        preserveAspectRatio="xMidYMax meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
         <g transform="translate(100, 65)">
        ${svgRawList.join('')}
      </g>
      </svg>
    `


    })
     },
     handleRandom () {
       const random = getRandomAvatarOption({ wrapperShape: WrapperShape.Squircle })
       console.log(random)
       this.random = random
       const sortedList = Object.entries(random.widgets).sort(
        (i, ii) => {
          const ix = AVATAR_LAYER[i[0]]?.zIndex ?? 0
          const iix = AVATAR_LAYER[ii[0]]?.zIndex ?? 0
          return ix - iix
        }
      )
      // console.log(sortedList)
  this.sortedList = sortedList
     }
  }
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.vue-color-avatar {
  position: relative;
  margin: auto;
  width: 100%;
  height: calc(100% - 72px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar-background {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background-color 0.1s;
}

.wrap-btn-box {
  width: 108px;
  border-radius: 8px;
  height: 28px;
  margin: 22px auto;
  border: 1px solid #ccc;
}
.wrap-btn {
  /* margin-top: 24px; */
  width: 100px;
  height: 20px;
  margin: 4px;
  box-sizing: border-box;
  border: 0px;
  outline: none;
  background-color: transparent;
  color: #e04040d6;
}
</style>
