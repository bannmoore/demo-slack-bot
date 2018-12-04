const crypto = require('crypto')

function getHmacSignature(signingSecret, str) {
  const hmac = crypto.createHmac('sha256', signingSecret);

  hmac.update(str);
  return hmac.digest('hex');
}

function validateSignature(request, signingSecret) {
  const timestamp = request.headers['x-slack-request-timestamp'];
  const digest = getHmacSignature(signingSecret, `v0:${timestamp}:${request.originalBody}`);

  return `v0=${digest}` === request.headers['x-slack-signature'];
}

module.exports = {
  validateSignature,
}