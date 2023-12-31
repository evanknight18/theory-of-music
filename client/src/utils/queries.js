import { gql } from '@apollo/client';

export const GET_LESSONS = gql`
  query GSetLessons {
    getLessons {
    _id
    title
    description
    content
    }
  }
`;

export const GET_QUIZ = gql`
  query GetQuiz($id: ID!) {
    getQuiz(id: $id) {
      id
      title
      questions {
        question
        options
        answer
      }
    }
  }
`;
