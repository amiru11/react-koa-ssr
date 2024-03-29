import Koa from 'koa';
import path from 'path';
import serve from 'koa-static';
import Router from '@koa/router';
import ssrMiddleware from 'server/ssrMiddleware';

const app = new Koa(); // Koa 인스턴스 생성
const router = new Router(); // Koa Router 인스턴스 생성

/**
 * 정적파일 serve(rootDir, { ...opt })
 * ref: https://github.com/koajs/static
 */
app.use(
  serve(path.resolve('./build'), {
    index: false, // "/" 경로에서 index.html 을 보여주지 않도록 설정
  })
);

/**
 * Koa Router
 * router.routes(): 요청과 일치하는 라우트를 반환해주는 미들웨어입니다.
 * router.allowedMethods(): OPTIONS 요청에 응답(Allow 헤더)과 405 Method Not Allowed, 501 Not Implemented를 반환해주는 미들웨어입니다.
 */
app.use(router.routes()).use(router.allowedMethods());

/**
 * Koa Middleware for SSR
 */
app.use(ssrMiddleware);

// Start server with port 4000.
app.listen(4000, () => {
  console.log('SSR server is listening to http://localhost:4000');
});
