export interface sendPayload {
    id: uuid
    service: 'mail' | 'sms'
    data: data
    
}


interface data {
    to: Array<mailObject>
    subject: string
    reply:Object<mailObject>
    sender:Object<mailObject>
    params:Params
    html:string
}


interface mailObject{

    name: string,
    email: string
    
}
interface Params extends Object{
    [key:string]:string | Array<Atachment>
}
interface attachment {
    name:string;
    content:base64String
}
type base64String  = string

//export interface Request<P extends core.Params = core.ParamsDictionary, ResBody = any, ReqBody = any, ReqQuery = core.Query> extends core.Request<P, ResBody, ReqBody, ReqQuery> { }
interface request extends Express.Request{
    header:any
    body:sendPayload
}
interface Response extends Express.Response{
    set:Function
    header:Function
    send:Function
    status:Function
    //body:sendPayload
}