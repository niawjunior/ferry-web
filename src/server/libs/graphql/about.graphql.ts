import gql from "graphql-tag"
import { fetchGraphQL } from "./fetch"
import { Document } from "@contentful/rich-text-types"

const query = gql`
  query {
    about(preview: false, id: "2dlMbnH8v8GA2AMPFA4Xaf") {
      title
      image {
        url
      }
      content {
        json
      }
    }
  }
`

export interface About {
  title: string
  image: {
    url: string
  }
  content: {
    json: Document
  }
}

export const getAbout = async (): Promise<About> => {
  const about = await fetchGraphQL(query, false, false)

  return about.data.about
}
