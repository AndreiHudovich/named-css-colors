module.exports = {
  '*.ts': [
    () => 'npm run lint:tsc',
    'npm run lint:eslint',
    'npm run lint:prettier'
  ],
  '*.json': ['npm run lint:prettier']
}
