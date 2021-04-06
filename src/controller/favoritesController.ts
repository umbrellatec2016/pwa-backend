import FavoritesController from './lib/favoritesController'
let memoryDatabase: [any] = ['exist']
const FavoritesControllerInstance = new FavoritesController(memoryDatabase)
export default FavoritesControllerInstance
