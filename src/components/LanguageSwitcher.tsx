import { useI18n } from '@/contexts/I18nContext'
import { Languages } from 'lucide-react'

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()

  const toggleLocale = () => {
    setLocale(locale === 'zh-TW' ? 'en-US' : 'zh-TW')
  }

  return (
    <button
      type='button'
      onClick={toggleLocale}
      className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors font-medium"
      aria-label="Switch language"
    >
      <Languages size={18} />
      <span>{locale === 'zh-TW' ? 'EN' : '中'}</span>
    </button>
  )
}
