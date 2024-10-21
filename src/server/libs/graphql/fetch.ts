import { DocumentNode } from "graphql/language/ast"

export function getGqlString(doc: DocumentNode) {
  return doc.loc?.source.body ?? ""
}

export async function fetchGraphQL(
  query: DocumentNode,
  preview = false,
  isCache = true
) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      cache: isCache ? "default" : "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query: getGqlString(query) }),
    }
  ).then((response) => response.json())
}
