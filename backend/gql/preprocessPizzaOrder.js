import { util } from "@aws-appsync/utils";

export function request(ctx) {
  const id = util.autoId();
  const { ...values } = ctx.args.input;
  values.createdTime = util.time.nowEpochSeconds();
  values.status = "Created";
  return { payload: { key: { id }, values: values } };
}

export function response(ctx) {
  return ctx.result;
}
