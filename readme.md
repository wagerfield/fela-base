# Fela Preset & Rules

Fela Base consists of a preset config and a collection of rules.

## Installation

```bash
yarn add fela fela-base
```

## Setup

```js
import { createRenderer } from "fela"
import { createConfig } from "fela-base"

const config = createConfig()
const renderer = createRenderer(config)

const rule = ({ size = 100 }) => ({ size })

renderer.renderRule(rule, { size: 50 })
```

## Author

[Matthew Wagerfield][github]

## License

[MIT][mit]

[mit]: https://opensource.org/licenses/MIT
[github]: https://github.com/wagerfield
