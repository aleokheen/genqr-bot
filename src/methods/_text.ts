import { Context } from "telegraf"
import { nError } from "../funcs"
import QRCode from "qrcode"
import fs from "fs"

export default async (ctx: any) => (async () => {

  let fileName = `./qr-${Date.now()}.png`

  await QRCode.toFile(fileName, ctx.update.message.text)

  await ctx.replyWithPhoto({source: fileName})

  await fs.promises.unlink(fileName)

})().catch((error) => nError(error, ctx))
