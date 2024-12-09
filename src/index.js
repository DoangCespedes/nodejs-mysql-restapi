import app from "./app.js"
import { PORT } from './config.js'

app.listen(PORT)

console.log(`La app esta corriendo en el  puerto ${process.env.PORT}`)