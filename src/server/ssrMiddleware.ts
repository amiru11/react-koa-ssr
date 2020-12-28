import { Middleware } from 'koa';
import serverRender from './serverRender';

const ssrMiddleware: Middleware = async (ctx, next) => {
  // Middleware를 통해서 app.use(middleware) 사용가능
  try {
    /**
     * ServerRender용 jsx 받아와서 처리하기
     */
    const renderResult = await serverRender({ url: ctx.url });

    console.log('RENDER RESULT:: ', renderResult);

    if (!renderResult) {
      return next();
    }

    ctx.body = renderResult.html;
    ctx.status = renderResult.statusCode;
  } catch (err) {
    ctx.throw(500, err);
  }
};

export default ssrMiddleware;
