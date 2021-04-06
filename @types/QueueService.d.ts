import { callbackFunction, channel, connection } from "./RabbitConnectionService";

export interface QueueService {
    connect(event:string,event:EventEmitter)
    createChannel(channelName:string):Promise<channel>
    addChannel(channel:channel,chanelName:string)
    consume(channel:channel,channelName:string,fn:callbackFunction)
    publish(channel:string,payload:string)
}