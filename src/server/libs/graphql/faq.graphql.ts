import gql from "graphql-tag";
import { fetchGraphQL } from "./fetch";
import { Document } from "@contentful/rich-text-types";

const query = gql`
  query {
    faqCollection(preview: false, order: order_ASC) {
      items {
        sys {
          id
        }
        question
        answer {
          json
        }
      }
    }
  }
`;

export interface FAQ {
  sys: {
    id: string;
  };
  question: string;
  answer: {
    json: Document;
  };
}

export const getFAQList = async (): Promise<FAQ[]> => {
  const faqCollection = await fetchGraphQL(query);

  return faqCollection.data.faqCollection.items;
};
