export interface IUserPayload {
  username: string
  password: string
  city: string
}

export interface CityRoot {
  type: string
  features: Feature[]
  query: Query
}

export interface Feature {
  type: string
  properties: Properties
  geometry: Geometry
}

export interface Properties {
  city: string
  name: string
  county: string
  state_part?: string
  state: string
  region: string
  postcode?: string
  country: string
  country_code: string
  datasource: Datasource
  lon: number
  lat: number
  population: number
  result_type: string
  formatted: string
  address_line1: string
  address_line2: string
  category: string
  timezone: Timezone
  plus_code: string
  plus_code_short: string
  rank: Rank
  place_id: string
  state_code?: string
}

export interface Datasource {
  sourcename: string
  attribution: string
  license: string
  url: string
}

export interface Timezone {
  name: string
  offset_STD: string
  offset_STD_seconds: number
  offset_DST: string
  offset_DST_seconds: number
}

export interface Rank {
  confidence: number
  confidence_city_level: number
  match_type: string
}

export interface Geometry {
  type: string
  coordinates: number[]
}

export interface Query {
  text: string
  parsed: Parsed
}

export interface Parsed {
  city: string
  expected_type: string
}

// Article Types

export interface IArticle {
  id: number
  date: string
  date_gmt: string
  guid: Guid
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: Title
  content: Content
  excerpt: Excerpt
  author: number
  featured_media: number
  comment_status: string
  ping_status: string
  sticky: boolean
  template: string
  format: string
  meta: Meta
  categories: number[]
  tags: any[]
  acf: any[]
  _links: Links
  _embedded: Embedded[]
}

export interface Embedded {
  'wp:featuredmedia': Array<{
    source_url: string
  }>
}

export interface Guid {
  rendered: string
}

export interface Title {
  rendered: string
}

export interface Content {
  rendered: string
  protected: boolean
}

export interface Excerpt {
  rendered: string
  protected: boolean
}

export interface Meta {
  footnotes: string
}

export interface Links {
  self: Self[]
  collection: Collection[]
  about: About[]
  author: Author[]
  replies: Reply[]
  'version-history': VersionHistory[]
  'predecessor-version'?: PredecessorVersion[]
  'wp:attachment': WpAttachment[]
  'wp:term': WpTerm[]
  'wp:featuredmedia': WpFeaturedMedia[]
  curies: Cury[]
}

export interface WpFeaturedMedia {
  embeddable: boolean
  href: string
}

export interface Self {
  href: string
}

export interface Collection {
  href: string
}

export interface About {
  href: string
}

export interface Author {
  embeddable: boolean
  href: string
}

export interface Reply {
  embeddable: boolean
  href: string
}

export interface VersionHistory {
  count: number
  href: string
}

export interface PredecessorVersion {
  id: number
  href: string
}

export interface WpAttachment {
  href: string
}

export interface WpTerm {
  taxonomy: string
  embeddable: boolean
  href: string
}

export interface Cury {
  name: string
  href: string
  templated: boolean
}
