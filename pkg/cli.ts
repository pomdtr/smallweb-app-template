import { program } from "@commander-js/extra-typings"

export type CliOptions = {
    name: string
}

export function createCli(opts: CliOptions) {
    program.action(() => {
        console.log(`Hello, ${opts.name}!`)
    })

    return {
        run(args: string[]) {
            program.parseAsync(args, { from: "user" })
        }
    }
}
