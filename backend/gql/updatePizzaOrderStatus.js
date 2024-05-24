import * as ddb from '@aws-appsync/utils/dynamodb'

export function request(ctx) {
  const { id, status } = ctx.args;
  return ddb.update({
    key: { id: id },
    update: {
      status: ddb.operations.replace(status)
    }
  })
}

export function response(ctx) {
  return ctx.result;
}
