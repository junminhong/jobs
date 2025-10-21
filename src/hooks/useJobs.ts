import { useQuery } from '@tanstack/react-query'
import type { Job } from '@/types/job'
import { fetchJobs } from '@/lib/api'

interface UseJobsResult {
  jobs: Job[]
  loading: boolean
  error: string | null
  refetch: () => void
}

export function useJobs(): UseJobsResult {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['jobs'],
    queryFn: fetchJobs,
  })

  return {
    jobs: data ?? [],
    loading: isLoading,
    error: error ? (error as Error).message : null,
    refetch,
  }
}
