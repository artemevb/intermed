// app/i18n/settings.js

const fallbackLng = 'ru';
const languages = [fallbackLng, 'en', 'uz'];
const defaultNS = 'translation';
const cookieName = 'i18next';

function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}

module.exports = {
  fallbackLng,
  languages,
  defaultNS,
  cookieName,
  getOptions,
};
