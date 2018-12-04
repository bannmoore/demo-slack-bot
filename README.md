# BAM Bot

This repo is a sandbox for demonstrating several types of Slack App integrations.

Prerequisites:
- A Slack workspace
- A Slack Web App (https://api.slack.com/apps/new)

## Slash Command

The Express app is set up to receive an `/echo` slash command from Slack.

Note: To test this locally, you'll need to use `ngrok` or a similar tool to forward requests to the app at localhost:3000. It won't work if you provide `localhost` in the Slack App's slash command settings.

### Configuration

- Go to your Slack App settings.
- Under Features, click "Slash Commands".
- Click "Create New Command".
- Provide the settings below.
- Reinstall the app if prompted.

```
Command: /echo
Request URL: <HOST>/echo
Short Description: Echoes text back to you.
Usage Hint: [text]
```

If everything is configured correctly, you should be able to type `/echo something` in your Slack workspace and get a response.

## Bot User

### Configuration

- Go to your Slack App settings.
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
