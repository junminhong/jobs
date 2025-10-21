import type { GitHubIssue, Job } from '@/types/job'
import { API_URL, GITHUB_CONFIG } from './config'
import { parseJob } from './parseJob'
import { mockJobs } from './mockData'

const USE_MOCK_DATA = false

export async function fetchJobs(): Promise<Job[]> {
  if (USE_MOCK_DATA) {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return mockJobs
  }

  const headers: HeadersInit = {
    Accept: 'application/vnd.github.v3+json',
  }

  if (GITHUB_CONFIG.token) {
    headers.Authorization = `token ${GITHUB_CONFIG.token}`
  }

  const response = await fetch(`${API_URL}?state=open&labels=job,approved&per_page=100`, {
    headers,
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const issues: GitHubIssue[] = await response.json()
  return issues.map(parseJob)
}
