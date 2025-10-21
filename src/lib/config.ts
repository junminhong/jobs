export const GITHUB_CONFIG = {
  owner: 'junminhong', 
  repo: 'jobs', 
  token: '', 
} as const

export const API_URL = `https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/issues`
