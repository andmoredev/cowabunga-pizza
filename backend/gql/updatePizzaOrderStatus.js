import * as ddb from '@aws-appsync/utils/dynamodb'

export function request(ctx) {
  console.log('ctx.args', ctx.args);
  const { id, status } = ctx.args;
  return ddb.update({
    key: { id: id },
    update: {
      status: ddb.operations.replace(status)
    }
  })
}

export function response(ctx) {
  console.log('ctx.result', ctx.result);
  return ctx.result;
}
