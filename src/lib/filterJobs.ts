import type { Job, RegionFilter } from '@/types/job'

const regionMatchers: Record<RegionFilter, string[]> = {
  all: [],
  // Asia
  taiwan: ['taiwan', '台灣'],
  china: ['china', '中國', 'prc'],
  japan: ['japan', '日本'],
  korea: ['korea', '韓國', 'south korea'],
  singapore: ['singapore', '新加坡'],
  hongkong: ['hong kong', '香港', 'hk'],
  india: ['india', '印度'],
  thailand: ['thailand', '泰國'],
  vietnam: ['vietnam', '越南'],
  malaysia: ['malaysia', '馬來西亞'],
  indonesia: ['indonesia', '印尼', '印度尼西亞'],
  philippines: ['philippines', '菲律賓'],
  // Americas
  us: ['united states', '美國', 'usa', 'u.s.'],
  canada: ['canada', '加拿大'],
  mexico: ['mexico', '墨西哥'],
  brazil: ['brazil', '巴西'],
  argentina: ['argentina', '阿根廷'],
  // Europe
  uk: ['united kingdom', '英國', 'britain', 'u.k.'],
  germany: ['germany', '德國'],
  france: ['france', '法國'],
  netherlands: ['netherlands', '荷蘭'],
  switzerland: ['switzerland', '瑞士'],
  sweden: ['sweden', '瑞典'],
  ireland: ['ireland', '愛爾蘭'],
  spain: ['spain', '西班牙'],
  italy: ['italy', '義大利'],
  poland: ['poland', '波蘭'],
  // Oceania
  australia: ['australia', '澳洲', '澳大利亞'],
  newzealand: ['new zealand', '紐西蘭'],
  // Africa & Others
  southafrica: ['south africa', '南非'],
  uae: ['uae', '阿聯酋', 'united arab emirates', 'dubai'],
  israel: ['israel', '以色列'],
  others: ['others', '其他'],
}

export function matchesRegion(job: Job, region: RegionFilter): boolean {
  if (region === 'all') return true

  const jobRegion = job.region.toLowerCase()
  const matchers = regionMatchers[region]

  return matchers.some((matcher) => jobRegion.includes(matcher))
}
