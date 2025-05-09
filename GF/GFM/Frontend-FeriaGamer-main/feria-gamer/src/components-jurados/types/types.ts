export interface Game {
  id: string
  name: string
  teamName: string
  logo: string
  subject: string
  description: string
  nrc: string
  rating: number | null
  teamMembers: string[]
}

export interface RatingCriterion {
  id: string
  name: string
  description: string
}

export interface Rating {
  id: string
  gameId: string
  criteria: {
    [key: string]: number
  }
  comments: string
  timestamp: string
}
