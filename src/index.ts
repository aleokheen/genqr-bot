import {Telegraf} from 'telegraf'
import consola from 'consola'
import {session} from "telegraf-session-mongodb"

import {nError, $db} from "./funcs"

const bot = new Telegraf(process.env.BOT_TOKEN)

// Run
const main = async () => {

  // Add sessions support
  bot.use(session($db.$db, { collectionName: 'sessions' }))

  // User data collection
  bot.use(require('./methods/_user-data-collection').default)

  /* === Set middlewares === */

  bot.start(require('./methods/start').default)
  bot.on('text', require('./methods/_text').default)

  // Launch the bot
  bot.launch().then(() => {
    consola.success('The bot is launched!')
  }).catch(nError)
}

setTimeout(main, 1000)
