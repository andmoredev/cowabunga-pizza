export function request(ctx) {
  console.log('ctx.args', ctx.args);
  return {};
}

export function response(ctx) {
  return ctx.prev.result;
}
