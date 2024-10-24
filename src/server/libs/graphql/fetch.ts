import { DocumentNode } from "graphql/language/ast";

export function getGqlString(doc: DocumentNode) {
  return doc.loc?.source.body ?? "";
}

export async function fetchGraphQL(
  query: DocumentNode,
  options?: {
    preview?: boolean;
    isCache?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    variables?: Record<string, any>;
  }
) {
  const { preview = false, isCache = true, variables = {} } = options || {};
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
      body: JSON.stringify({ query: getGqlString(query), variables }),
    }
  ).then((response) => response.json());
}
