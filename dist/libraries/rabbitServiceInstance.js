"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitServiceInstance = void 0;
const RabbitService_1 = __importDefault(require("./lib/RabbitService"));
const amqplib_1 = __importDefault(require("amqplib"));
const conn = process.env.RABBITQUEUE;
exports.RabbitServiceInstance = new RabbitService_1.default(amqplib_1.default, conn);
//# sourceMappingURL=rabbitServiceInstance.js.map