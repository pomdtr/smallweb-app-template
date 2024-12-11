import { Hono } from "hono"

export type ServerOptions = {
    name: string
}

export function createServer(opts: ServerOptions) {
    return new Hono().get("*", () => {
        return new Response(`Hello, ${opts.name}!`)
    })
}
