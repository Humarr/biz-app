/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}', // if using app directory
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1A1A1A',       // Deep dark text
          secondary: '#888888',     // Muted commentary text
          accent: '#FF3C3C',        // Red CTA / highlight
          highlight: '#FFDB58',     // Sticky yellow
          background: '#FEF9F3',    // Paper white background
          note: '#FFF6B0',          // Sticky note bg
        },
        fontFamily: {
          body: ['var(--font-inter)', 'Inter', 'sans-serif'],
          headline: ['var(--font-anton)', 'Anton', 'sans-serif'],
          scribble: ['var(--font-patrick-hand)', 'Patrick Hand', 'cursive'],
          headline2: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  