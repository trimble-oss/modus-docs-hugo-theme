/* eslint-disable-next-line */
export default {
  js2svg: {
    indent: 2,
    pretty: true,
  },
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          // customize the params of a default plugin
          inlineStyles: {
            onlyMatchedOnce: false,
          },
          // keep viewBox property on SVGs
          removeViewBox: false,
        },
      },
    },
    {
      name: "removeAttrs",
      params: {
        attrs: "(data-name)",
      },
    },
  ],
};
