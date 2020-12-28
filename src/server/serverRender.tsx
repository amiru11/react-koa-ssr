import path from 'path';
// import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import { FilledContext, HelmetProvider } from 'react-helmet-async';
import App from '../shared/App';
import Html from './Html';
import rootReducer from '../modules';

/**
 * import ReactDOMServer from 'react-dom/server';
 * ReactDOMServer 객체를 통해 컴포넌트를 정적 마크업으로 렌더링할 수 있습니다.
 * https://ko.reactjs.org/docs/react-dom-server.html
 */

/**
 * { StaticRouter } from 'react-router-dom'
 * react-router-dom의 <Router />는 실제로 location 변화가 없기 때문에 SSR에서 사용하는 StaticRouter
 * https://reactrouter.com/web/api/StaticRouter
 */

/**
 * { ChunkExtractor } from '@loadable/server'
 * loadable-stats.json에서 chunkFile을 추출해서 React App의 Provider를 감싸줍니다.
 * https://loadable-components.com/docs/server-side-rendering/
 */

/**
 * import { FilledContext, HelmetProvider } from 'react-helmet-async'
 * react에서 선언한 metadata를 읽어들이는 역할을 합니다.
 * https://github.com/staylor/react-helmet-async
 */

interface IServerRenderProps {
  url: string;
}

const statsFile = path.resolve(__dirname, '../build/loadable-stats.json');
// const template = fs.readFileSync(
//   path.join(__dirname, '../../dist/index.html'),
//   { encoding: 'utf8' }
// );

// 서버사이드 렌더링을 처리 할 핸들러 함수입니다.
const serverRender = async ({ url }: IServerRenderProps) => {
  console.log('URL: ', url, process.env.PUBLIC_URL);
  // prepare redux store
  const store = createStore(rootReducer);
  const context = {
    statusCode: 200,
  };
  const extractor = new ChunkExtractor({
    statsFile,
    publicPath: process.env.PUBLIC_URL,
  });

  const helmetContext = {} as FilledContext;

  const Root: JSX.Element = (
    <ChunkExtractorManager extractor={extractor}>
      <HelmetProvider context={helmetContext}>
        <Provider store={store}>
          <StaticRouter location={url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      </HelmetProvider>
    </ChunkExtractorManager>
  );

  const content = ReactDOMServer.renderToString(extractor.collectChunks(Root)); // React 엘리먼트의 초기 HTML을 렌더링합니다.
  console.log('CONTENT: ', content);
  const html = (
    <Html
      content={content}
      reduxState={store.getState()}
      extractor={extractor}
      helmet={helmetContext.helmet}
    />
  );

  const pageHtml = `<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(
    html
  )}`; // html 마크업 및 뼈대넣기

  return { html: pageHtml, statusCode: context.statusCode };
};

export default serverRender;
