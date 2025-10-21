import type { enUS } from '@/i18n/locales/en-US'

type TranslationFunction = typeof enUS

export function formatDate(
  dateString: string,
  t: TranslationFunction['job'],
): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return t.today
  if (diffDays === 1) return t.yesterday
  if (diffDays < 7) return t.daysAgo(diffDays)
  if (diffDays < 30) return t.weeksAgo(Math.floor(diffDays / 7))

  return date.toLocaleDateString()
}
