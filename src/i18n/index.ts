import { zhTW } from './locales/zh-TW'
import { enUS } from './locales/en-US'

export const locales = {
  'zh-TW': zhTW,
  'en-US': enUS,
} as const

export type Locale = keyof typeof locales
export type Translations = typeof zhTW
