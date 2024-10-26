import gql from "graphql-tag"
import { fetchGraphQL } from "./fetch"

const query = gql`
  query {
    bannerCollection(preview: false) {
      items {
        title
        description
        image {
          url
        }
        path
        facebookId
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
  facebookId?: string
}

export const getBannerList = async (): Promise<Banner[]> => {
  const bannerCollection = await fetchGraphQL(query)

  return bannerCollection.data.bannerCollection.items
}
