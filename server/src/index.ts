
import 'dotenv/config'
import { createApp } from './app.js'
const app = createApp()

import { config } from './config.js'


app.listen(config.port, () => {
  console.log(`API listening on http://localhost:${config.port}`)
  console.log(`Allowed origin: ${config.clientOrigin}`)
})
