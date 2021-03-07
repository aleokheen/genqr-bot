import {Context} from "telegraf"
import {nError, $db} from "../funcs"

export default async (ctx: Context) => (async () => {

  if(ctx.from?.language_code === 'ru')
    await ctx.reply(`
      Привет, ${ctx.from?.first_name}!

      Отправь этому боту любой текст или ссылку, чтобы моментально получить QR-код.

      Мой автор: @aleokheen
      Может сделать бота и для тебя :)
    `.replace(/^ */mg, ''))
  
  else
    await ctx.reply(`
      Hi ${ctx.from?.first_name}!

      Send any text or link to this bot and get QR code.
      Author: @aleokheen
    `.replace(/^ */mg, ''))

})().catch((error) => nError(error, ctx))
