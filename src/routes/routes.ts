import { Router } from 'express'
import FavoritesControllerInstance from '../controller/favoritesController'

const router = Router()
router.post('/favorites', FavoritesControllerInstance.save)
router.post('/retrieve', FavoritesControllerInstance.retrieve)
router.route('/*').all((req, res) => {
	return res.status(502).json({
		error: 'Bad Gateway'
	})
})
export default router
