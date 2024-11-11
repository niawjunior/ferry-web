import gql from "graphql-tag"
import { fetchGraphQL } from "./fetch"

const query = gql`
  query {
    highlightCollection(preview: false, limit: 1) {
      items {
        title
        description1
        description2
        actionText
        backgroundCollection {
          items {
            url
          }
        }
        path
        facebookId
      }
    }
  }
`

export interface Highlight {
  title: string
  description1: string
  description2: string
  backgroundCollection: {
    items: {
      url: string
    }[]
  }
  actionText: string
  path: string
  facebookId?: string
}

export const getHighlightList = async (): Promise<Highlight[]> => {
  const highlightCollection = await fetchGraphQL(query)

  return highlightCollection.data.highlightCollection.items ?? []
}
