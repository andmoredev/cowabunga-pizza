/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const addPizzaOrder = /* GraphQL */ `mutation AddPizzaOrder($input: PizzaOrderInput) {
  addPizzaOrder(input: $input) {
    id
    ingredients
    crust
    createdTime
    status
    __typename
  }
}
` as GeneratedMutation<
  APITypes.AddPizzaOrderMutationVariables,
  APITypes.AddPizzaOrderMutation
>;
export const updatePizzaOrderStatus = /* GraphQL */ `mutation UpdatePizzaOrderStatus($id: String!, $status: String) {
  updatePizzaOrderStatus(id: $id, status: $status) {
    id
    ingredients
    crust
    createdTime
    status
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePizzaOrderStatusMutationVariables,
  APITypes.UpdatePizzaOrderStatusMutation
>;
