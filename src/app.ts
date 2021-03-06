import express from 'express'
import routes from './routes'
import ErrorMiddleware from './errors'

const app = express()
const port = process.env.NODE_ENV == 'test' ? 2222 : process.env.PORT || 3000

app.use(express.json())
app.use(routes)
app.use(ErrorMiddleware)

try {
    app.listen(port, () => console.log(`\n Server running at ${port}`))
} catch (error) {
    console.log(error)
}

export default app