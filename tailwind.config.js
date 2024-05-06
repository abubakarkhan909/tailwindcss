/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      colors: {
        'light-gray': 'rgba(255, 255, 255, 0.9)',  
      },  
      width: {
        '66%': '66.6%',
        '350px': '350px'
      },
      height:{
        '100vh': '100vh',
      },
      fontSize:{

      },
      container: {
        padding: {
          DEFAULT: '20px',
        },
        margin:{
          DEFAULT: '0 auto',
        },
        
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1368px', // Set maxWidth for xl breakpoint
        },
      },
       lineHeight: {
        '120': '120px',
        '91px': '91px',
        '62px':'62.4px',
        '50px': '50px',
        '41px': '41px',
        '30px': '30px',
        '28px': '28.8px',
        '23px':'23.8px',
        '21px': '21.6px',
        '19px': '19px',
      },
    },
  },
  plugins: [],
}