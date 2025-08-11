/**** Tailwind Config ****/
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.astro',
    './src/**/*.js',
    './src/**/*.ts'
  ],
  theme: {
    extend: {
      colors: {
        platinum: {
          50: '#F2F2F2',
          100: '#E5E5E5',
          200: '#CFCFCF',
          300: '#AFAFAF',
          900: '#3A3A3A'
        },
        accent: '#2A5DB0'
      },
      fontFamily: {
        chicago: [ 'ChicagoFLF', 'Chiago', 'Monaco', 'Geneva', 'Lucida Grande', 'system-ui', 'VT323', 'monospace' ]
      },
      boxShadow: {
        'pixel-sm': '1px 1px 0 #3A3A3A',
        'pixel-inset': 'inset 1px 1px 0 #FFFFFF, inset -1px -1px 0 #3A3A3A',
        'pixel-outset': '1px 1px 0 #3A3A3A, -1px -1px 0 #FFFFFF'
      },
      animation: {
        'press': 'press 120ms steps(2, end)',
        'fade-in': 'fade-in 160ms linear'
      },
      keyframes: {
        press: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(1px)' }
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }
    }
  },
  plugins: []
};
