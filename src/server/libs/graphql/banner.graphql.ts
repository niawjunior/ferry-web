import gql from "graphql-tag"
import { fetchGraphQL } from "./fetch"

export const query = gql`
  query {
    bannerCollection(preview: false) {
      items {
        title
        description
        image {
          url
        }
        path
      }
    }
  }
`

export interface Banner {
  title: string
  description: string
  image: {
    url: string
  }
  path?: string
}

export const getBannerList = async (): Promise<Banner[]> => {
  const bannerCollection = await fetchGraphQL(query)

  return bannerCollection.data.bannerCollection.items
}
