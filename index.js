const express = require('express')
const bodyParser = require('body-parser')
const helpers = require('./lib/helpers')

const app = express()

app.get('/ping', (req, res) => {
  res.send('ok\n')
})

app.use('/*', bodyParser.urlencoded({
  extended: true,
  verify(req, res, buf, encoding) {
    req.originalBody = buf.toString(encoding)
  }
}))

app.use('/*', (req, res, next) => {
  if (!helpers.validateSignature(req, process.env.SLACK_SIGNING_SECRET)) {
    return res.status(403).send('Forbidden')
  }
  return next()
})

app.post('/echo', (req, res) => {
  res.send({
    text: req.body.text,
  })
})

if (require.main === module) {
  if (!process.env.SLACK_SIGNING_SECRET) {
    process.stdout.write('WARNING: SLACK_SIGNING_SECRET is undefined in the environment.\n')
    process.stdout.write('Slash commands will work without a valid signing secret.\n')
    process.stdout.write('\n')
  }

  const server = app.listen(3000, () => {
    process.stdout.write('listening on port 3000...\n');
  });

  process.on('SIGTERM', () => {
    server.close(() => {
      process.exit(128 + 15)
    })
  })
} else {
  module.exports = app;
}