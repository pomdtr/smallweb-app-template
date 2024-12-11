import { createServer } from "./server.ts"
import { createCli } from "./cli.ts"

export type AppOptions = {
    name?: string
}

export class App {
    private server
    private cli

    constructor(opts: AppOptions = {}) {
        const { name = "smallweb" } = opts;

        this.server = createServer({ name })
        this.cli = createCli({ name })
    }

    fetch: (req: Request) => Response | Promise<Response> = (req) => {
        return this.server.fetch(req)
    };

    run: (args: string[]) => void | Promise<void> = (args) => {
        return this.cli.run(args)
    };
}
