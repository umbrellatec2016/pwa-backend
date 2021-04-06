"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const favoritesController_1 = __importDefault(require("../controller/favoritesController"));
const router = express_1.Router();
router.post('/favorites', favoritesController_1.default.execute);
router.route('/*').all((req, res) => {
    return res.status(502).json({
        error: 'Bad Gateway'
    });
});
exports.default = router;
//# sourceMappingURL=routes.js.map