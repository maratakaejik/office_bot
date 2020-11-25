process.env.NTBA_FIX_319 = 1;

const TelegramBot = require ('node-telegram-bot-api')

const TOKEN = '1458238691:AAFlrtqdOBgjuBewW5VH-9FujmoCW7mr5lU'

const bot = new TelegramBot (TOKEN, {polling: true})

bot.on ('message', (msg) => {
	console.log(msg)
	bot.sendMessage (msg.chat.id, 'Здравствуй! ' + msg.from.first_name)
}) 