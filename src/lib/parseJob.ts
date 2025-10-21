import type { GitHubIssue, Job } from '@/types/job'

export function parseJob(issue: GitHubIssue): Job {
  const body = issue.body || ''

  const extractField = (fieldName: string): string => {
    const regex = new RegExp(`###\\s*${fieldName}\\s*\\n\\s*(.+?)(?=\\n###|$)`, 'is')
    const match = body.match(regex)
    return match ? match[1].trim() : ''
  }

  const extractFromTitle = (title: string): string => {
    const match = title.match(/\[職缺\]\s*(.+?)\s*[-–]/)
    return match ? match[1].trim() : ''
  }

  return {
    id: issue.number,
    title: issue.title,
    company: extractField('公司名稱') || extractFromTitle(issue.title),
    position: extractField('職位名稱') || issue.title,
    jobType: extractField('工作類型'),
    locationType: extractField('工作地點類型'),
    region: extractField('地區 Region'),
    location: extractField('工作地點'),
    salary: extractField('薪資範圍'),
    description: extractField('職位描述'),
    contact: extractField('聯絡方式'),
    url: issue.html_url,
    createdAt: issue.created_at,
    labels: issue.labels.map((l) => l.name),
  }
}
