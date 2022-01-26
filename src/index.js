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
} from './enums'

import { widgetData } from './dynamic-data'

const avatarOption = {
  "gender": "male",
  "wrapperShape": "squircle",
  "background": {
      "color": "#FFEDEF"
  },
  "widgets": {
      "face": {
          "shape": "base"
      },
      "tops": {
          "shape": "funny"
      },
      "ear": {
          "shape": "detached"
      },
      "earrings": {
          "shape": "none"
      },
      "eyebrows": {
          "shape": "eyelashesdown"
      },
      "eyes": {
          "shape": "eyeshadow"
      },
      "nose": {
          "shape": "curve"
      },
      "glasses": {
          "shape": "none"
      },
      "mouth": {
          "shape": "nervous"
      },
      "beard": {
          "shape": "none"
      },
      "clothes": {
          "shape": "crew"
      }
  }
}

export const AVATAR_LAYER = {
  [WidgetType.Face]: {
    zIndex: 10,
  },
  [WidgetType.Ear]: {
    zIndex: 102,
  },
  [WidgetType.Earrings]: {
    zIndex: 103,
  },
  [WidgetType.Eyebrows]: {
    zIndex: 70,
  },
  [WidgetType.Eyes]: {
    zIndex: 50,
  },
  [WidgetType.Nose]: {
    zIndex: 60,
  },
  [WidgetType.Glasses]: {
    zIndex: 90,
  },
  [WidgetType.Mouth]: {
    zIndex: 100,
  },
  [WidgetType.Beard]: {
    zIndex: 105,
  },
  [WidgetType.Tops]: {
    zIndex: 80,
  },
  [WidgetType.Clothes]: {
    zIndex: 110,
  }
}

// const sortedList = Object.entries(avatarOption.widgets).sort(
//   (i, ii) => {
//     const ix = AVATAR_LAYER[i[0]]?.zIndex ?? 0
//     const iix = AVATAR_LAYER[ii[0]]?.zIndex ?? 0
//     return ix - iix
//   }
// )



// console.log(sortedList)


// const svgRawList = svgList()
// console.log(svgRawList)
//  const svgContent = `
//   <svg
//     width="${280}"
//     height="${280}"
//     viewBox="0 0 ${280 / 0.7} ${280 / 0.7}"
//     preserveAspectRatio="xMidYMax meet"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <g transform="translate(100, 65)">
//       ${svgRawList.join('')}
//     </g>
//   </svg>
// `
// console.log(svgContent)

// export default sortedList