/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onPizzaOrderStatusChange = /* GraphQL */ `subscription OnPizzaOrderStatusChange($id: String) {
  onPizzaOrderStatusChange(id: $id) {
    id
    ingredients
    crust
    createdTime
    status
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnPizzaOrderStatusChangeSubscriptionVariables,
  APITypes.OnPizzaOrderStatusChangeSubscription
>;
