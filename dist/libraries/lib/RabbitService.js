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
class RabbitService {
    constructor(amqp, conn) {
        this.amqp = amqp;
        this.conn = conn;
        this.error = null;
        this.connection = this.amqp.connect(conn);
        this.error = {
            connected: false,
            message: 'Not Connected'
        };
        this.channels = [];
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            this.connection = yield (this.connection);
        });
    }
    createChannel(channelName) {
        return __awaiter(this, void 0, void 0, function* () {
            const channel = yield this.connection.createConfirmChannel();
            yield channel.assertExchange(channelName, 'direct', {
                dudable: true
            });
            yield channel.assertQueue(`process.${channelName}`, {
                durable: true
            });
            yield channel.bindQueue(`process.${channelName}`, channelName, channelName);
            yield channel.prefetch(1);
            this.error = {
                connected: true,
                message: ''
            };
            return channel;
        });
    }
    consume(channel, channelName, fn) {
        if (channel !== null) {
            channel.consume(`process.${channelName}`, (msg) => {
                try {
                    if (msg !== null) {
                        const data = JSON.parse(msg.content.toString());
                        fn(data);
                        channel.ack(msg);
                    }
                }
                catch (e) {
                    console.log('Processing Error', e);
                    if (msg !== null) {
                        channel.ack(msg);
                    }
                    this.error = {
                        connected: true,
                        message: 'invalid Message'
                    };
                }
            });
        }
    }
    publish(channelName, payload) {
        const ch = this.channels[channelName];
        if (ch !== null) {
            ch.publish(channelName, channelName, Buffer.from(payload));
        }
    }
    addChannel(channel, channelName) {
        this.channels[channelName] = channel;
    }
}
exports.default = RabbitService;
//# sourceMappingURL=RabbitService.js.map