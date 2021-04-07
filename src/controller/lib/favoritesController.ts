import { request, Response } from '../../../@types/express'

export default class FavoritesController {
	constructor(private database: [any]) {}
	save = (req: request, res: Response) => {
		const parsed = req.body
		try {
			if (typeof parsed.nickname !== 'undefined') {
				let data = JSON.parse(parsed.data.replace(/\\/g, ''))

				this.database[parsed.nickname] = data
				res.status(200).send()
			} else {
				res.status(400).send()
			}
		} catch (e) {
			res.status(500).send()
		}
	}
	retrieve = (req: request, res: Response) => {
		const parsed = req.body
		if (typeof parsed.nickname !== 'undefined') {
			if (this.database[parsed.nickname] != 'undefined') {
				res.send({
					data: this.database[parsed.nickname]
				})
				return
			}
			res.status(404)
		}
	}
}
