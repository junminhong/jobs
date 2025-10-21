import { createFileRoute } from '@tanstack/react-router'
import { useJobs } from '@/hooks/useJobs'
import { JobCard } from '@/components/JobCard'
import { SearchBar } from '@/components/SearchBar'
import { FilterButtons } from '@/components/FilterButtons'
import { RegionFilter } from '@/components/RegionFilter'
import { useI18n } from '@/contexts/I18nContext'
import { matchesRegion } from '@/lib/filterJobs'
import { Loader2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import type { JobTypeFilter, RegionFilter as RegionFilterType } from '@/types/job'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const { t } = useI18n()
  const { jobs, loading, error } = useJobs()
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState<JobTypeFilter>('all')
  const [activeRegion, setActiveRegion] = useState<RegionFilterType>('all')

  const filteredJobs = useMemo(() => {
    let filtered = jobs

    filtered = filtered.filter((job) => matchesRegion(job, activeRegion))

    if (activeFilter !== 'all') {
      filtered = filtered.filter((job) => {
        const locationType = job.locationType.toLowerCase()
        const jobType = job.jobType.toLowerCase()

        switch (activeFilter) {
          case 'remote':
            return locationType.includes('remote') || locationType.includes('遠端')
          case 'full-time':
            return jobType.includes('full') || jobType.includes('全職')
          case 'part-time':
            return jobType.includes('part') || jobType.includes('兼職')
          case 'internship':
            return jobType.includes('intern') || jobType.includes('實習')
          default:
            return true
        }
      })
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter((job) => {
        const searchableText = `
          ${job.title}
          ${job.company}
          ${job.position}
          ${job.location}
          ${job.region}
          ${job.description}
        `.toLowerCase()
        return searchableText.includes(term)
      })
    }

    return filtered
  }, [jobs, activeFilter, activeRegion, searchTerm])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader2 className="animate-spin text-cyan-600 mb-4" size={48} />
        <p className="text-slate-600">{t.messages.loading}</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-600 text-lg">{t.messages.loadError}</p>
        <p className="text-slate-500 mt-2">{error}</p>
      </div>
    )
  }

  return (
    <div>
      <div className="bg-white rounded-xl shadow-sm p-5 mb-8">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />

        <div className="mt-4">
          <p className="text-sm font-semibold text-slate-600 mb-2">{t.filters.region}</p>
          <RegionFilter activeRegion={activeRegion} onRegionChange={setActiveRegion} />
        </div>

        <div className="mt-4">
          <p className="text-sm font-semibold text-slate-600 mb-2">{t.filters.jobType}</p>
          <FilterButtons activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </div>
      </div>

      {filteredJobs.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-slate-500 text-lg">{t.messages.noResults}</p>
        </div>
      ) : (
        <div className="grid gap-5">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  )
}
