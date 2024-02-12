import { createI18n } from 'vue-i18n'
import ruElement from 'element-plus/es/locale/lang/ru'
import enElement from 'element-plus/es/locale/lang/en'
import dayjs from 'dayjs'

import ru from './ru.json'
import en from './en.json'

import 'dayjs/locale/en'
import 'dayjs/locale/ru'

const Locale = {
  en: 'en',
  ru: 'ru',
} as const

export type LocaleType = keyof typeof Locale

const DEFAULT_LOCALE: LocaleType = Locale.en
const FALLBACK_LOCALE: LocaleType = Locale.en

const i18n = createI18n({
  locale: DEFAULT_LOCALE,
  fallbackLocale: FALLBACK_LOCALE,
  messages: {
    en: {
      element: enElement,
      ...en,
    },
    ru: {
      element: ruElement,
      ...ru,
    },
  },
})

dayjs(i18n.global.locale)

export default i18n

export const useI18n = () => ({
  i18n: i18n.global,
  setLocale: (locale: LocaleType) => {
    if (!i18n.global.availableLocales.includes(locale)) {
      return FALLBACK_LOCALE
    }
    dayjs(locale)

    i18n.global.locale = locale
  },
})
