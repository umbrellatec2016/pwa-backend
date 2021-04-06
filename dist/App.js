"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes/routes"));
class App {
    constructor() {
        this.port = process.env.PORT || 3000;
        this.app = express_1.default();
        this.app.use(express_1.default.json({
            limit: '10mb'
        }));
        const corsOptions = {
            origin: process.env.CORS_ORIGIN || '*',
            optionsSuccessStatus: 200
        };
        this.app.use(cors_1.default(corsOptions));
    }
    init() {
        this.app.use(routes_1.default);
        this.app.listen(this.port, () => {
            console.info(`Server Running ${this.port}`);
        });
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map