import express from 'express'
import cors from 'cors'
import router from './routes/routes'

export class App {
	private port = process.env.APP_PORT || 3000
	private app = express()

	constructor() {
		this.app.use(
			express.json({
				limit: '10mb'
			})
		)
		const corsOptions = {
			origin: process.env.CORS_ORIGIN || '*',
			optionsSuccessStatus: 200
		}
		this.app.use(cors(corsOptions))
	}
	init() {
		this.app.use(router)
		this.app.listen(this.port, () => {
			console.info(`Server Running ${this.port}`)
		})
	}
}
