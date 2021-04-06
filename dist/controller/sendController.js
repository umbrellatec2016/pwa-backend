"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sendController_1 = __importDefault(require("./lib/sendController"));
const rabbitServiceInstance_1 = require("../libraries/rabbitServiceInstance");
const channelName = process.env.CHANNEL;
const secret = process.env.SECRET;
const SendControllerInstance = new sendController_1.default(rabbitServiceInstance_1.RabbitServiceInstance, channelName, secret);
exports.default = SendControllerInstance;
//# sourceMappingURL=sendController.js.map