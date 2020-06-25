# telegram-bot-template

Telegram's bot template, based on [Telegraf js](https://telegraf.js.org/#/) framework.

## Installation

1. run `npm i`
2. replace `.env.sample` by `.env`
3. set Environment variables in `.env`
```bash
BOT_TOKEN=<bot token>
MONGO_URL=<mongodb url>
ADMIN_ID=<adminid> (optional)
USE_WEBHOOK=<'true' to use webhook> (optional)
DOMAIN=<app domain to handle webhooks> (optional)
```
4. run `npm run dev` for development mode
