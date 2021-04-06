"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const favoritesController_1 = __importDefault(require("./lib/favoritesController"));
const memoryDatabase = ['exist'];
const FavoritesControllerInstance = new favoritesController_1.default(memoryDatabase);
exports.default = FavoritesControllerInstance;
//# sourceMappingURL=favoritesController.js.map