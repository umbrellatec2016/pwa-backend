"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
class FavoritesController {
    constructor(database) {
        this.database = database;
        this.execute = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const parsed = req.body;
            try {
                if (parsed.nickname) {
                    const data = JSON.parse(parsed.data);
                    this.database[parsed.nickname] = data;
                    res.status(201).send();
                }
                else {
                    throw console_1.exception('must set nikcname');
                }
            }
            catch (e) {
                res.status(500).send(e);
            }
        });
    }
}
exports.default = FavoritesController;
//# sourceMappingURL=favoritesController.js.map