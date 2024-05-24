/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPizzaOrder = /* GraphQL */ `query GetPizzaOrder($id: String!) {
  getPizzaOrder(id: $id) {
    id
    ingredients
    crust
    createdTime
    status
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPizzaOrderQueryVariables,
  APITypes.GetPizzaOrderQuery
>;
