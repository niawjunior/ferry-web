import gql from "graphql-tag"
import { fetchGraphQL } from "./fetch"

const query = gql`
  query {
    galleryCollection(preview: false) {
      items {
        name
        imageCollection {
          items {
            url
            title
          }
        }
      }
    }
  }
`

export interface Gallery {
  name: string
  imageCollection: {
    items: {
      url: string
      title: string
    }[]
  }
}

export const getGalleryList = async (): Promise<Gallery[]> => {
  const galleryCollection = await fetchGraphQL(query)

  return galleryCollection.data.galleryCollection.items
}
