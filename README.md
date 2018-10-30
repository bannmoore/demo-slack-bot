# BAM Bot

This repo is a sandbox for demonstrating several types of Slack App integrations.

Prerequisites:
- A Slack workspace

## Bot User

### Configuration

- Go to https://api.slack.com/apps/new and create a new Web App for your Slack workspace.
- Go to Bot Users and add a bot user.
- Go to OAuth and Permissions
  - Add `chat:write:bot` permission.
  - Click Install App button.
  - Copy the bot's OAuth Access Token (the one beginning with `xoxb`) into `.env` as `SLACK_ACCESS_TOKEN`.
  - Copy the channel ID where you want your bot to post into `.env` as `SLACK_CHANNEL`.

### Post a Message as the Bot

```
source .env
node lib/bot-user/post-message.js
```
