declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_PORT  : number
      RABBITQUEUE  : string
      CHANNEL:string
      SECRET:string
    }
  }
}

export {}