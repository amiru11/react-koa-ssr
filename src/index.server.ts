import Koa from 'koa';
import path from 'path';
import serve from 'koa-static';
import Router from '@koa/router';

const app = new Koa(); // Koa 인스턴스 생성
const router = new Router(); // Koa Router 인스턴스 생성

// 정적파일 serve(rootDir, { ...opt })
// https://github.com/koajs/static
app.use(serve(path.resolve('./build'), { index: false }));

/**
 * TODO
 * Koa Middleware for SSR
 */

app.listen(4000, () => {
  console.log('SSR server is listening to http://localhost:4000');
});
