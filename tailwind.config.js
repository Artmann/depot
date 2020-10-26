module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.js',
    './src/**/*.ts',
    './src/**/*.tsx'
  ],
  theme: {
    maxHeight: {
      '1/2': '50vh',
      '1/3': '33vh'
    },
    extend: {
      colors: {
        accent: '#f3614a'
      }
    }
  }
};
