module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        height: {
          '1/10': '10%',
          '2/10': '20%',
          '3/10': '30%',
          '4/10': '40%',
          '5/10': '50%',
          '6/10': '60%',
          '7/10': '70%',
          '8/10': '80%',
          '9/10': '90%',
        },
        fontFamily: {
          poppins: ["Poppins"],
        },
        width: {
          '2/10': '20%',
          '1/10': '10%',
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }