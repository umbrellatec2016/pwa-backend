import { request, Response } from '../../../@types/express'
import { QueueService } from '../../../@types/QueueService'
import { exception } from 'console'

export default class FavoritesController {
	constructor(private database: [any]) {}
	execute = async (req: request, res: Response) => {
		const parsed = req.body
		console.log(parsed)
		try {
			if (typeof parsed.nickname !== 'undefined') {
				const data = JSON.parse(parsed.data)
				this.database[parsed.nickname] = data

				res.status(201).send()
			} else {
				throw exception('must set nikcname')
			}
		} catch (e) {
			console.log(e)
			res.status(500).send()
		}
	}
}
