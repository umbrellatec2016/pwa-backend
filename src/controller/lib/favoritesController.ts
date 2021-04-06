import { request, Response } from '../../../@types/express'

export default class FavoritesController {
	constructor(private database: [any]) {}
	execute = async (req: request, res: Response) => {
		const parsed = req.body
		console.log(parsed)
		try {
			if (typeof parsed.nickname !== 'undefined') {
				let data = JSON.parse(parsed.data.replace(/\\/g, ''))
				//data = JSON.parse(data)
				//console.log('data ', data)
				this.database[parsed.nickname] = data
				//console.log(this.database)
				res.status(201).send()
			}
		} catch (e) {
			console.log(e)
			res.status(500).send()
		}
	}
}
