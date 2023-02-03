export interface PublisherMetadata {
  id: number
  urn: string
  artist: string
  contains_music: boolean
  isrc: string
}

export interface Visual {
  urn: string
  entry_time: number
  visual_url: string
}

export interface Visuals {
  urn: string
  enabled: boolean
  visuals: Visual[]
  tracking?: any
}

export interface Format {
  protocol: string
  mime_type: string
}

export interface Transcoding {
  url: string
  preset: string
  duration: number
  snipped: boolean
  format: Format
  quality: string
}

export interface Media {
  transcodings: Transcoding[]
}

export interface Badges {
  pro: boolean
  pro_unlimited: boolean
  verified: boolean
}

export interface User {
  avatar_url: string
  first_name: string
  followers_count: number
  full_name: string
  id: number
  kind: string
  last_modified: Date
  last_name: string
  permalink: string
  permalink_url: string
  uri: string
  urn: string
  username: string
  verified: boolean
  city: string
  country_code?: any
  badges: Badges
  station_urn: string
  station_permalink: string
}

export interface ICollection {
  artwork_url: string
  caption?: any
  commentable: boolean
  comment_count: number
  created_at: Date
  description: string
  downloadable: boolean
  download_count: number
  duration: number
  full_duration: number
  embeddable_by: string
  genre: string
  has_downloads_left: boolean
  id: number
  kind: string
  label_name: string
  last_modified: Date
  license: string
  likes_count: number
  permalink: string
  permalink_url: string
  playback_count: number
  public: boolean
  publisher_metadata: PublisherMetadata
  purchase_title?: any
  purchase_url?: any
  release_date: Date
  reposts_count: number
  secret_token?: any
  sharing: string
  state: string
  streamable: boolean
  tag_list: string
  title: string
  track_format: string
  uri: string
  urn: string
  user_id: number
  visuals: Visuals
  waveform_url: string
  display_date: Date
  media: Media
  station_urn: string
  station_permalink: string
  track_authorization: string
  monetization_model: string
  policy: string
  user: User
}
