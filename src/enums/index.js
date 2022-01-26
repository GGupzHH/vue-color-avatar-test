export const Locale = {
  ZH: 'zh',
  EN: 'en',
};

export const ActionType = {
  Undo: 'undo',
  Redo: 'redo',
  Flip: 'flip',
  Code: 'code',
};

export const Gender = {
  Male: 'male',
  Female: 'female',
  NotSet: 'notSet',
};

export const WidgetType = {
  Face: 'face',
  Tops: 'tops',
  Ear: 'ear',
  Earrings: 'earrings',
  Eyebrows: 'eyebrows',
  Eyes: 'eyes',
  Nose: 'nose',
  Glasses: 'glasses',
  Mouth: 'mouth',
  Beard: 'beard',
  Clothes: 'clothes',
};

export const WrapperShape = {
  Circle: 'circle',
  Square: 'square',
  Squircle: 'squircle',
};

/**
 * WidgetShape
 *
 * All eration values of `WidgetShape` correspond to the file name.
 */

export const FaceShape = {
  Base: 'base',
};

export const TopsShape = {
  Fonze: 'fonze',
  Funny: 'funny',
  Clean: 'clean',
  Punk: 'punk',
  Danny: 'danny',
  Wave: 'wave',
  Turban: 'turban',
  Pixie: 'pixie',
  Beanie: 'beanie',
};

export const EarShape = {
  Attached: 'attached',
  Detached: 'detached',
};

export const EarringsShape = {
  Hoop: 'hoop',
  Stud: 'stud',
  None: 'none',
};

export const EyebrowsShape = {
  Up: 'up',
  Down: 'down',
  Eyelashesup: 'eyelashesup',
  Eyelashesdown: 'eyelashesdown',
};

export const EyesShape = {
  Ellipse: 'ellipse',
  Smiling: 'smiling',
  Eyeshadow: 'eyeshadow',
  Round: 'round',
};

export const NoseShape = {
  Curve: 'curve',
  Round: 'round',
  Pointed: 'pointed',
};

export const MouthShape = {
  Frown: 'frown',
  Laughing: 'laughing',
  Nervous: 'nervous',
  Pucker: 'pucker',
  Sad: 'sad',
  Smile: 'smile',
  Smirk: 'smirk',
  Surprised: 'surprised',
};

export const BeardShape = {
  Scruff: 'scruff',
  None: 'none',
};

export const GlassesShape = {
  Round: 'round',
  Square: 'square',
  None: 'none',
};

export const ClothesShape = {
  Crew: 'crew',
  Collared: 'collared',
  Open: 'open',
};





export const SETTINGS = {
  gender: [Gender.Male, Gender.Female],

  wrapperShape: Object.values(WrapperShape),
  faceShape: Object.values(FaceShape),
  topsShape: Object.values(TopsShape),
  earShape: Object.values(EarShape),
  earringsShape: Object.values(EarringsShape),
  eyebrowsShape: Object.values(EyebrowsShape),
  eyesShape: Object.values(EyesShape),
  noseShape: Object.values(NoseShape),
  glassesShape: Object.values(GlassesShape),
  mouthShape: Object.values(MouthShape),
  beardShape: Object.values(BeardShape),
  clothesShape: Object.values(ClothesShape),

  backgroundColor: [
    '#6BD9E9',
    '#FC909F',
    '#F4D150',
    '#E0DDFF',
    '#D2EFF3',
    '#FFEDEF',
    '#FFEBA4',
    '#506AF4',
    '#F48150',
    '#48A99A',
    '#C09FFF',
    '#FD6F5D',
    'linear-gradient(45deg, #E3648C, #D97567)',
    'linear-gradient(62deg, #8EC5FC, #E0C3FC)',
    'linear-gradient(90deg, #ffecd2, #fcb69f)',
    'linear-gradient(120deg, #a1c4fd, #c2e9fb)',
    'linear-gradient(-135deg, #fccb90, #d57eeb)',
    'transparent',
  ],
  skinColor: ['#F9C9B6', '#AC6651'],
  clothesColor: ['#9287FF', '#6BD9E9', '#FC909F', '#F4D150', '#77311D'],
}