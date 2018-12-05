import { LocaleData } from '../locale.types';

export default <LocaleData>{
  abbr: 'en-US',
  exception: {
    403: `Niestety, nie masz uprawnień do tej strony`,
    404: `Niestety, ta strona nie istnieje`,
    500: `Niestety, błąd serwera`,
    backToHome: 'Powróć do strony głównej',
  },
  noticeIcon: {
    emptyText: 'No data',
    clearText: 'Clear',
  },
  reuseTab: {
    close: 'Close tab',
    closeOther: 'Close other tabs',
    closeRight: 'Close tabs to right',
    clear: 'Clear tabs',
  },
  tagSelect: {
    expand: 'Expand',
    collapse: 'Collapse',
  },
  miniProgress: {
    target: 'Target: ',
  },
  st: {
    total: '{{range[0]}} - {{range[1]}} of {{total}}',
  },
  sf: {
    submit: 'Submit',
    reset: 'Reset',
    search: 'Search',
    edit: 'Save',
    addText: 'Add',
    removeText: 'Remove',
    checkAllText: 'Check all',
  },
};
