/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onAddPizzaOrder = /* GraphQL */ `subscription OnAddPizzaOrder($id: String) {
  onAddPizzaOrder(id: $id) {
    id
    ingredients
    crust
    createdTime
    status
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnAddPizzaOrderSubscriptionVariables,
  APITypes.OnAddPizzaOrderSubscription
>;
