import { LocaleData } from '../locale.types';

export default <LocaleData>{
  abbr: 'en-US',
  exception: {
    403: `Sorry, you don't have access to this page`,
    404: `Sorry, that page don't exist`,
    500: `Sorry, server error`,
    backToHome: 'Back To Home',
  },
  noticeIcon: {
    emptyText: 'Brak danych',
    clearText: 'Wyczyść',
  },
  reuseTab: {
    close: 'Zamknij kartę',
    closeOther: 'Zamknij inne karty',
    closeRight: 'Zamknij karty po prawej',
    clear: 'Wyczyść karty',
  },
  tagSelect: {
    expand: 'Rozszerz',
    collapse: 'Zmniejsz',
  },
  miniProgress: {
    target: 'Cel: ',
  },
  st: {
    total: '{{range[0]}} - {{range[1]}} z {{total}}',
  },
  sf: {
    submit: 'Wyślij',
    reset: 'Resetuj',
    search: 'Szukaj',
    edit: 'Zapisz',
    addText: 'Dodaj',
    removeText: 'Usuń',
    checkAllText: 'Zaznacz wszystkie',
  },
};
