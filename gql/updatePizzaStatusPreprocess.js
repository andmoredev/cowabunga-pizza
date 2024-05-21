import { util } from "@aws-appsync/utils";

export function request(ctx) {
  const { ...values } = ctx.args.input;
  return { payload: { key: { id: values.id }, values: values } };
}

export function response(ctx) {
  return ctx.result;
}
