const { WebClient } = require('@slack/client');

const web = new WebClient(process.env.SLACK_ACCESS_TOKEN);
const channel = process.env.SLACK_CHANNEL

web.chat.postMessage({ channel, text: 'Hello!' })
  .then(res => console.log(`Message Sent: ${res.ts}`))
  .catch(err => console.error(err))