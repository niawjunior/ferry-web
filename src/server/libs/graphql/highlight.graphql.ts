import gql from "graphql-tag";
import { fetchGraphQL } from "./fetch";

const query = gql`
  query {
    highlightCollection(preview: false, limit: 1) {
      items {
        _id
        title
        description1
        description2
        actionText
        background {
          url
        }
        path
      }
    }
  }
`;

export interface Highlight {
  _id: string;
  title: string;
  description1: string;
  description2: string;
  background: {
    url: string;
  };
  actionText: string;
  path: string;
}

export const getHighlightList = async (): Promise<Highlight[]> => {
  const highlightCollection = await fetchGraphQL(query);

  return highlightCollection.data.highlightCollection.items ?? [];
};
