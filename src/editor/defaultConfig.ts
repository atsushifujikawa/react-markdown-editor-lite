import { EditorConfig } from '../share/var';

const defaultConfig: EditorConfig = {
  theme: 'default',
  view: {
    menu: true,
    md: true,
    html: true,
  },
  canView: {
    menu: true,
    md: true,
    html: true,
    both: true,
    fullScreen: true,
    hideMenu: true,
  },
  htmlClass: '',
  markdownClass: '',
  syncScrollMode: ['rightFollowLeft', 'leftFollowRight'],
  imageUrl: '',
  imageAccept: '',
  linkUrl: '',
  table: {
    maxRow: 4,
    maxCol: 6,
  },
  allowPasteImage: true,
  onImageUpload: undefined,
  onCustomImageUpload: undefined,
  shortcuts: true,
  onChangeTrigger: 'both',
};

export default defaultConfig;
