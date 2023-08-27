/* eslint-disable */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current', // Set target to Node.js version you're using
        },
      },
    ],
    '@babel/preset-typescript',
    'next/babel', // Include Next.js preset
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    'babel-plugin-const-enum' // Use this to handle async/await and other features
    // Add any additional plugins you may need
  ],
};