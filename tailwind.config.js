// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      height: {
        '524' : '524px',
      },
      fontSize: {
        'sub-heading' : '22px',
        'section-heading': '52px',
        '2.5xl' : '28px'
      },
      margin:{
        '50': '50px'
      },
      maxWidth: {
        'small-block': '148px',
        'mid-screen' : '1375px'
      },
      colors: {
        'mild-gray': '#0813331A',
        'light-blue': '#275FFF33',
        'gray-text' : '#838999',
        'theme-blue' : '#275FFF',
        'cream': '#F8F9FA',
      },
      lineHeight : {
        '56' : '56px',
      }
    },
  },
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
}
