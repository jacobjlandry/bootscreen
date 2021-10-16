module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/*.js',
      './src/**/*.{js,jsx,ts,tsx}',
      './public/index.html'
    ],
    safelist: [
      'row-span-1',
      'row-span-2',
      'row-span-3',
      'row-span-4',
      'row-span-5',
      'row-span-6',
      'row-span-7',
      'row-span-8',
      'row-span-9',
      'row-span-10',
      'col-span-1',
      'col-span-2',
      'col-span-3',
      'col-span-4',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
