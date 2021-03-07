import { $db } from "./funcs"
import consola from "consola"

const main = (async () => {

  /* === cities === */

  await $db.user.ensureIndex({
    firstName: "text"
  }, {
    name: "Main search index",
    default_language: "russian"
  })

  await $db.users.updateOne({}, {
    $set: {
      name: "Alex",
      tzOffset: 3
    }
  }, { upsert: true })
})

/* === Run this === */

const int = setInterval(() => {

  if (!$db) return

  main().catch(consola.error).finally(() => {
    process.exit(0)
  })

  clearInterval(int)

}, 500)
