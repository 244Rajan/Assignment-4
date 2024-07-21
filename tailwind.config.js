module.exports = {
    mode: 'jit',
    content: [
      './views/**/*.ejs', // update this to include your EJS files
    ],
    theme: {
      extend: {
        backgroundColor: {
          'base-100': '#f7fafc', // define the bg-base-100 class
        },
      },
    },
    variants: {},
    plugins: [],
  }