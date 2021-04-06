export interface request extends Express.Request{
    header:any
    body:sendPayload
}
export interface Response extends Express.Response{
    set:Function
    header:Function
    send:Function
    status:Function
    //body:sendPayload
}