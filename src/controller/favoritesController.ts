import FavoritesController from './lib/favoritesController'
const memoryDatabase: [any] = ['exist']
const FavoritesControllerInstance = new FavoritesController(memoryDatabase)
export default FavoritesControllerInstance
