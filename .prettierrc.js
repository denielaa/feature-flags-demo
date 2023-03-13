module.exports = {
  plugins: [require('@trivago/prettier-plugin-sort-imports')],
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  overrides: [
    {
      files: '*.yml',
      options: {
        tabWidth: 2,
      },
    },
  ],
  printWidth: 100,
  arrowParens: 'avoid',
  tabWidth: 2,
  endOfLine: 'auto',
  importOrder: ['^.*.(css|scss)$', '<THIRD_PARTY_MODULES>', '^~/(shared)/?(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['jsx', 'typescript'],
  importOrderCaseInsensitive: true,
}
