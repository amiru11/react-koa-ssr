import React from 'react';
import { ChunkExtractor } from '@loadable/server';
import { HelmetData } from 'react-helmet';

export type THtmlProps = {
  content: string;
  extractor: ChunkExtractor;
  helmet: HelmetData;
  rootStore?: any;
};

const favicons = [
  { rel: 'shortcut icon', path: '/favicon.ico' },
  {
    rel: 'apple-touch-icon',
    sizes: '152x152',
    path: '/favicons/apple-icon-152x152.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    path: '/favicons/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    path: '/favicons/favicon-96x96.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    path: '/favicons/favicon-16x16.png',
  },
];

function Html({ content, extractor, helmet, rootStore }: THtmlProps) {
  console.log('rootStore', { ...rootStore });
  return (
    <html>
      {/* <head dangerouslySetInnerHTML={{ __html: head }}></head> */}
      <head>
        {helmet.title.toComponent()}
        {helmet.link.toComponent()}
        {helmet.meta.toComponent()}
        {extractor.getLinkElements()}
        {extractor.getStyleElements()}
        {favicons.map((favicon) => (
          <link
            key={favicon.path}
            rel={favicon.rel}
            sizes={favicon.sizes}
            href={process.env.PUBLIC_URL.concat(favicon.path)}
          />
        ))}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body>
        <div id='root' dangerouslySetInnerHTML={{ __html: content }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__INITIAL_STATE__=${JSON.stringify({
              counterStore: rootStore.counterStore.toJson(),
            })};`,
          }}
        />
        {extractor.getScriptElements()}
      </body>
    </html>
  );
}

export default Html;
