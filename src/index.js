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
