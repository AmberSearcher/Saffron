export interface SearchResult {
  id: string
  title: string
  description: string
  url: string
  thumbnail?: string
  timestamp: string
}

export interface SearchFilters {
  sortBy?: 'relevance' | 'date' | 'popularity'
  timeRange?: 'any' | 'day' | 'week' | 'month' | 'year'
  type?: 'all' | 'image' | 'video' | 'article'
}

export interface UserProfile {
  id: string
  name: string
  email: string
  avatar?: string
  preferences: {
    theme: string
    language: string
  }
}
