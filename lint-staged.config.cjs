module.exports = {
  '*.ts': [
    () => 'pnpm run lint:tsc',
    'pnpm run lint:eslint',
    'pnpm run lint:prettier'
  ],
  '*.json': ['pnpm run lint:prettier']
}
