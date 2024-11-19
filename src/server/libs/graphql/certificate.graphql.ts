import gql from "graphql-tag"
import { fetchGraphQL } from "./fetch"
import { Document } from "@contentful/rich-text-types"

const query = gql`
  query {
    certificate(preview: false, id: "4y255aSYUpg704GZg14Zsx") {
      title
      content {
        json
        links {
          assets {
            block {
              sys {
                id
              }
              url
              title
              width
              height
              description
            }
          }
        }
      }
    }
  }
`

export interface Certificate {
  title: string

  content: {
    json: Document
    links: {
      assets: {
        block: {
          sys: {
            id: string
          }
          url: string
          title: string
          width: number
          height: number
          description: string
        }[]
      }
    }
  }
}

export const getCertificate = async (): Promise<Certificate> => {
  const certificate = await fetchGraphQL(query, {
    isCache: false,
    preview: false,
  })

  return certificate.data.certificate
}
