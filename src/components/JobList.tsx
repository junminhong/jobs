import { useMemo, useState } from 'react'
import type { JobTypeFilter, Job } from '@/types/job'
import { JobCard } from './JobCard'
import { SearchBar } from './SearchBar'
import { FilterButtons } from './FilterButtons'
import { Loader2 } from 'lucide-react'

interface JobListProps {
  jobs: Job[]
  loading: boolean
  error: string | null
}

export function JobList({ jobs, loading, error }: JobListProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState<JobTypeFilter>('all')

  const filteredJobs = useMemo(() => {
    let filtered = jobs

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
          ${job.description}
        `.toLowerCase()
        return searchableText.includes(term)
      })
    }

    return filtered
  }, [jobs, activeFilter, searchTerm])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader2 className="animate-spin text-blue-600 mb-4" size={48} />
        <p className="text-slate-600">載入職缺中...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-600 text-lg">載入失敗,請稍後再試</p>
        <p className="text-slate-500 mt-2">{error}</p>
      </div>
    )
  }

  return (
    <div>
      <div className="bg-white rounded-xl shadow-sm p-5 mb-8">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <div className="mt-4">
          <FilterButtons activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </div>
      </div>

      {filteredJobs.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-slate-500 text-lg">😕 找不到符合條件的職缺</p>
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
