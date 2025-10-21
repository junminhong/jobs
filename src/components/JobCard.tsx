import type { Job } from '@/types/job'
import { formatDate } from '@/lib/utils'
import { useI18n } from '@/contexts/I18nContext'

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
  const { t } = useI18n()

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all hover:-translate-y-1">
      <div className="mb-3">
        <h2 className="text-xl font-semibold text-slate-900 mb-1">
          {job.position || job.title}
        </h2>
        <p className="text-slate-600 font-medium">{job.company}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.locationType && (
          <span className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium">
            {job.locationType}
          </span>
        )}
        {job.location && (
          <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
            {job.location}
          </span>
        )}
        {job.jobType && (
          <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
            {job.jobType}
          </span>
        )}
        {job.salary && (
          <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
            {job.salary}
          </span>
        )}
      </div>

      {job.description && (
        <div className="text-slate-600 text-sm mb-4 line-clamp-3">
          {job.description.split('\n').slice(0, 3).map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}

      <div className="flex justify-between items-center pt-4 border-t border-slate-100">
        <span className="text-slate-500 text-sm">{formatDate(job.createdAt, t.job)}</span>
        <a
          href={job.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors text-sm font-medium"
        >
          {t.job.viewDetails} →
        </a>
      </div>
    </div>
  )
}
