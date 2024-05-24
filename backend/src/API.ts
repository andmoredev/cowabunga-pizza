/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type PizzaOrderInput = {
  ingredients?: string | null,
  crust?: string | null,
};

export type PizzaOrder = {
  __typename: "PizzaOrder",
  id?: string | null,
  ingredients?: string | null,
  crust?: string | null,
  createdTime?: number | null,
  status?: string | null,
};

export type AddPizzaOrderMutationVariables = {
  input?: PizzaOrderInput | null,
};

export type AddPizzaOrderMutation = {
  addPizzaOrder?:  {
    __typename: "PizzaOrder",
    id?: string | null,
    ingredients?: string | null,
    crust?: string | null,
    createdTime?: number | null,
    status?: string | null,
  } | null,
};

export type UpdatePizzaOrderStatusMutationVariables = {
  id: string,
  status?: string | null,
};

export type UpdatePizzaOrderStatusMutation = {
  updatePizzaOrderStatus?:  {
    __typename: "PizzaOrder",
    id?: string | null,
    ingredients?: string | null,
    crust?: string | null,
    createdTime?: number | null,
    status?: string | null,
  } | null,
};

export type GetPizzaOrderQueryVariables = {
  id: string,
};

export type GetPizzaOrderQuery = {
  getPizzaOrder?:  {
    __typename: "PizzaOrder",
    id?: string | null,
    ingredients?: string | null,
    crust?: string | null,
    createdTime?: number | null,
    status?: string | null,
  } | null,
};

export type OnAddPizzaOrderSubscriptionVariables = {
  id?: string | null,
};

export type OnAddPizzaOrderSubscription = {
  onAddPizzaOrder?:  {
    __typename: "PizzaOrder",
    id?: string | null,
    ingredients?: string | null,
    crust?: string | null,
    createdTime?: number | null,
    status?: string | null,
  } | null,
};
