import gql from "graphql-tag"
import { fetchGraphQL } from "./fetch"

const query = gql`
  query GetArticleById($limit: Int) {
    articleCollection(preview: false, limit: $limit) {
      items {
        sys {
          id
        }
        title
        coverImage {
          title
          url
        }
        shortDescription
        content {
          json
        }
        author {
          __typename
          sys {
            id
          }
        }
      }
    }
  }
`

const getArticleByIdQuery = gql`
  query GetArticleById($id: String!) {
    articleCollection(where: { sys: { id: $id } }, limit: 1) {
      items {
        sys {
          id
        }
        title
        coverImage {
          title
          url
        }
        shortDescription
        content {
          json
        }
        author {
          __typename
          sys {
            id
          }
        }
      }
    }
  }
`

export interface Article {
  sys: {
    id: string
  }
  title: string
  coverImage: {
    title: string
    url: string
  }
  shortDescription: string
  content: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    json: any
  }
  author: {
    __typename: string
    sys: {
      id: string
    }
  }
}

export const getArticleList = async (limit?: number): Promise<Article[]> => {
  const articleCollection = await fetchGraphQL(query, {
    variables: {
      limit: limit,
    },
  })

  return articleCollection.data.articleCollection.items ?? []
}

export const getArticleById = async (id: string): Promise<Article> => {
  const articleCollection = await fetchGraphQL(getArticleByIdQuery, {
    isCache: false,
    variables: {
      id,
    },
  })

  return (articleCollection.data.articleCollection.items ?? [])[0]
}
