import type {
  BlogEntriesItem,
  BlogEntriesItemGenqlSelection,
  FieldsSelection
} from 'basehub'

import { basehub } from '../basehub'

export const blogPostFragment = {
  _slug: true,
  _title: true,
  postTitle: true,
  releaseDate: true,
  isPublished: true,
  thumbnail: {
    url: true,
    alt: true
  },
  subtitle: true,
  body: {
    html: true,
    readingTime: true
  },
  author: {
    name: true
  }
} satisfies BlogEntriesItemGenqlSelection

export type BlogPostFragment = FieldsSelection<
  BlogEntriesItem,
  typeof blogPostFragment
>

const getBySlug = (slug: string) =>
  basehub.query({
    blogEntries: {
      __args: {
        filter: {
          _sys_title: {
            eq: slug
          }
        },
        first: 1
      },
      _meta: {
        totalCount: true
      },
      items: blogPostFragment
    }
  })

const getLatest = () =>
  basehub.query({
    blogEntries: {
      __args: {
        first: 1
      },
      _meta: {
        totalCount: true
      },
      items: blogPostFragment
    }
  })

const getLatests = (count: number = 12) =>
  basehub.query({
    blogEntries: {
      __args: {
        first: count
      },
      _meta: {
        totalCount: true
      },
      items: blogPostFragment
    }
  })

const getRelated = () => {
  // todo
}

export const blogPost = {
  getLatest,
  getLatests,
  getBySlug,
  getRelated
}
