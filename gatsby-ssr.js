const React = require("react");

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` });

  setHeadComponents([
    <script
      key="gtag-js"
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-B3HPPZMWT4"
    ></script>,
    <script
      key="gtag-init"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-B3HPPZMWT4');
        `,
      }}
    />,
  ]);
};
