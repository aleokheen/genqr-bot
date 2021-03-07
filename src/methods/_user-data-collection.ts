import { Context } from "telegraf"
import { nError, $db } from "../funcs"

export default async (ctx: Context, next: any) => (async () => {

  await $db.users.updateOne({id: ctx.from?.id}, {$set: {
    firstName: ctx.from?.first_name,
    lastName: ctx.from?.last_name,
    username: ctx.from?.username,
    languageCode: ctx.from?.language_code,
    lastActivity: new Date()
  }}, {upsert: true})  

  next()

})().catch((error) => nError(error, ctx))
