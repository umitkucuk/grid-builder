module.exports = {
  babel: {
    plugins: [
      [
        "babel-plugin-styled-components",
        {
          fileName: false,
          displayName: true,
          ssr: false,
        },
      ],
    ],
  },
};
export {};
