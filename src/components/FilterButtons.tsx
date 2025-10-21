import type { JobTypeFilter } from '@/types/job'
import { useI18n } from '@/contexts/I18nContext'

interface FilterButtonsProps {
  activeFilter: JobTypeFilter
  onFilterChange: (filter: JobTypeFilter) => void
}

const filters: JobTypeFilter[] = ['all', 'remote', 'full-time', 'part-time', 'internship']

const filterLabelMap: Record<JobTypeFilter, keyof ReturnType<typeof useI18n>['t']['filters']> = {
  all: 'all',
  remote: 'remote',
  'full-time': 'fullTime',
  'part-time': 'partTime',
  internship: 'internship',
}

export function FilterButtons({ activeFilter, onFilterChange }: FilterButtonsProps) {
  const { t } = useI18n()

  return (
    <div className="flex gap-2 flex-wrap">
      {filters.map((filter) => (
        <button
          type='button'
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-5 py-2 rounded-full font-medium transition-all ${
            activeFilter === filter
              ? 'bg-cyan-600 text-white'
              : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-cyan-600 hover:text-cyan-600'
          }`}
        >
          {t.filters[filterLabelMap[filter]]}
        </button>
      ))}
    </div>
  )
}
