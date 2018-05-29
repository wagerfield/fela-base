declare module "fela-plugin-embedded" {
  import { TPlugin } from "fela"
  export default function(): TPlugin
}

declare module "fela-plugin-named-keys" {
  import { TPlugin } from "fela"
  export interface Config {
    [alias: string]: string
  }
  export default function(config: Config): TPlugin
}

declare module "fela-plugin-custom-property" {
  import { TPlugin } from "fela"
  export interface Config {
    [key: string]: (value: any) => object
  }
  export default function(config: Config): TPlugin
}
