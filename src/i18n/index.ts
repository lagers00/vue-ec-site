import { createI18n } from 'vue-i18n'
import { numberFormats } from './numbers'
import { datetimeFormats } from './datetimes'
import messages from './messages'
// Set and expose the default locale
export const defaultLocale = 'en'
// Private instance of VueI18n object
let _i18n: any
// Initializer
function setup(options = { locale: defaultLocale }) {
  _i18n = createI18n({
    locale: options.locale,
    fallbackLocale: defaultLocale,
    messages,
    numberFormats,
    datetimeFormats,
  })
  setLocale(options.locale)
  return _i18n
}
// Sets the active locale. 
function setLocale(newLocale: string) {
  _i18n.global.locale = newLocale
}
// Sets the active locale. 
export function getLocale() {
  return _i18n.global.locale
}
// Public interface
export default {
  // Expose the VueI18n instance via a getter
  get vueI18n() {
    return _i18n
  },
  setup,
  setLocale,
}