import amqp, { Connection,Channel } from 'amqplib'
import events from 'events'
declare namespace RabbitConnectionService{
 interface error{
     connected:boolean
     message:string
 }
 /*interface connection {
    instance:Promise<Connection> 
 }*/
 
 type callbackFunction=Function
 type message = amqp.ConsumeMessage 
 type connection =Connection
 type channel = Channel | null
 type EventEmitter=events.EventEmitter
 interface channels extends Array{
    [key:string]:channel 
 }
}
// export  interface rabbitConnection{

//         connected:boolean
//         message:string
//         error:RabbitError | null
//    } 

//    interface RabbitError{
//        connected:boolean
//        message:string
//    }

 declare var RabbitConnectionService:{
     new (queueInstance:any)
 }
export = RabbitConnectionService