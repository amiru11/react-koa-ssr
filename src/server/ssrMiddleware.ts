import { Middleware } from 'koa';

const ssrMiddleware: Middleware = async (ctx, next) => {
  // Middleware를 통해서 app.use(middleware) 사용가능
  try {
    /**
     * TODO
     * ServerRender용 jsx 받아와서 처리하기
     */
    const renderResult = await setTimeout(() => null);

    if (!renderResult) {
      return next();
    }
  } catch (err) {
    ctx.throw(500, err);
  }
};

export default ssrMiddleware;
