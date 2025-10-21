export interface GitHubIssue {
  number: number
  title: string
  body: string | null
  html_url: string
  created_at: string
  updated_at: string
  state: 'open' | 'closed'
  labels: Array<{
    name: string
    color: string
  }>
  user: {
    login: string
    avatar_url: string
  }
}

export interface Job {
  id: number
  title: string
  company: string
  position: string
  jobType: string
  locationType: string
  location: string
  region: string
  salary: string
  description: string
  contact: string
  url: string
  createdAt: string
  labels: string[]
}

export type JobTypeFilter = 'all' | 'remote' | 'full-time' | 'part-time' | 'internship'

export type ContinentFilter = 'all' | 'asia' | 'americas' | 'europe' | 'oceania' | 'africa'

export type RegionFilterType =
  | 'all'
  // Asia
  | 'taiwan'
  | 'china'
  | 'japan'
  | 'korea'
  | 'singapore'
  | 'hongkong'
  | 'india'
  | 'thailand'
  | 'vietnam'
  | 'malaysia'
  | 'indonesia'
  | 'philippines'
  // Americas
  | 'us'
  | 'canada'
  | 'mexico'
  | 'brazil'
  | 'argentina'
  // Europe
  | 'uk'
  | 'germany'
  | 'france'
  | 'netherlands'
  | 'switzerland'
  | 'sweden'
  | 'ireland'
  | 'spain'
  | 'italy'
  | 'poland'
  // Oceania
  | 'australia'
  | 'newzealand'
  // Africa & Others
  | 'southafrica'
  | 'uae'
  | 'israel'
  | 'others'
