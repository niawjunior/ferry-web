import gql from "graphql-tag"
import { fetchGraphQL } from "./fetch"

const query = gql`
  query {
    promotionCollection(preview: false, order: order_ASC) {
      items {
        title
        originalPrice
        price
        features
        isTopPick
        path
        background {
          url
        }
        facebookId
      }
    }
  }
`

export interface Promotion {
  title: string
  originalPrice: number
  price: number
  features: string[]
  isTopPick: boolean
  path: string
  facebookId?: string
  background: {
    url: string
  }
}

export const getPromotionList = async (): Promise<Promotion[]> => {
  const promotionCollection = await fetchGraphQL(query)

  return promotionCollection.data.promotionCollection.items ?? []
}
