import { gql } from "@apollo/client";

export const GET_STORIES = gql`
  query {
    node(id: "PVT_kwHOAYLnRs4AZfy1") {
      ... on ProjectV2 {
        items(first: 100) {
          nodes {
            id
            __typename
            fieldValues(first: 100) {
              nodes {
                ... on ProjectV2ItemFieldTextValue {
                  text
                  field {
                    ... on ProjectV2FieldCommon {
                      name
                    }
                  }
                }
                ... on ProjectV2ItemFieldDateValue {
                  date
                  field {
                    ... on ProjectV2FieldCommon {
                      name
                    }
                  }
                }
                ... on ProjectV2ItemFieldSingleSelectValue {
                  description
                  optionId
                  name
                  field {
                    ... on ProjectV2FieldCommon {
                      name
                    }
                    ... on ProjectV2SingleSelectField {
                      name
                    }
                  }
                }
              }
            }
            content {
              ... on DraftIssue {
                title
                body
                assignees(first: 10) {
                  nodes {
                    login
                  }
                }
              }
              ... on Issue {
                title
                assignees(first: 10) {
                  nodes {
                    login
                  }
                }
              }
              ... on PullRequest {
                title
                assignees(first: 10) {
                  nodes {
                    login
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
