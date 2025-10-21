import { useState } from 'react'
import type { RegionFilterType, ContinentFilter } from '@/types/job'
import { useI18n } from '@/contexts/I18nContext'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface RegionFilterProps {
  activeRegion: RegionFilterType
  onRegionChange: (region: RegionFilterType) => void
}

const regionsByContinent: Record<ContinentFilter, RegionFilterType[]> = {
  all: ['all'],
  asia: [
    'taiwan',
    'china',
    'japan',
    'korea',
    'singapore',
    'hongkong',
    'india',
    'thailand',
    'vietnam',
    'malaysia',
    'indonesia',
    'philippines',
  ],
  americas: ['us', 'canada', 'mexico', 'brazil', 'argentina'],
  europe: [
    'uk',
    'germany',
    'france',
    'netherlands',
    'switzerland',
    'sweden',
    'ireland',
    'spain',
    'italy',
    'poland',
  ],
  oceania: ['australia', 'newzealand'],
  africa: ['southafrica', 'uae', 'israel', 'others'],
}

const continents: ContinentFilter[] = ['all', 'asia', 'americas', 'europe', 'oceania', 'africa']

export function RegionFilter({ activeRegion, onRegionChange }: RegionFilterProps) {
  const { t } = useI18n()
  const [expandedContinent, setExpandedContinent] = useState<ContinentFilter | null>(null)

  const toggleContinent = (continent: ContinentFilter) => {
    if (continent === 'all') {
      onRegionChange('all')
      setExpandedContinent(null)
    } else {
      setExpandedContinent(expandedContinent === continent ? null : continent)
    }
  }

  return (
    <div className="space-y-2">
      {/* Continent Buttons */}
      <div className="flex gap-2 flex-wrap">
        {continents.map((continent) => (
          <button
            type='button'
            key={continent}
            onClick={() => toggleContinent(continent)}
            className={`px-4 py-2 rounded-full font-medium transition-all flex items-center gap-1 ${
              (continent === 'all' && activeRegion === 'all') ||
              (continent !== 'all' &&
                expandedContinent === continent &&
                regionsByContinent[continent].includes(activeRegion))
                ? 'bg-cyan-600 text-white'
                : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-cyan-600 hover:text-cyan-600'
            }`}
          >
            <span>{t.continents[continent]}</span>
            {continent !== 'all' && (
              <span className="ml-1">
                {expandedContinent === continent ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Expanded Region Buttons */}
      {expandedContinent && expandedContinent !== 'all' && (
        <div className="flex gap-2 flex-wrap pl-4 animate-in fade-in slide-in-from-top-2 duration-200">
          {regionsByContinent[expandedContinent].map((region) => (
            <button
              type='button'
              key={region}
              onClick={() => onRegionChange(region)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeRegion === region
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-cyan-100 hover:text-cyan-700'
              }`}
            >
              {t.regions[region]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
