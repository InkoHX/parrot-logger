<div
  align="center"
>

![ParrotLogger](https://github.com/InkoHX/parrot-logger/blob/master/media/ParrotLogger.png?raw=true)

![CI](https://github.com/InkoHX/parrot-logger/workflows/CI/badge.svg)
![LICENCE](https://img.shields.io/github/license/InkoHX/logger-renew?label=LICENCE&style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/InkoHX/logger-renew)

</div>

## Description

- Logging to file.

## Install

### npm

```bash
npm i parrot-logger
```

### Yarn

```bash
yarn add parrot-logger
```

## Usage

```ts
import Logger from 'parrot-logger'

const logger = new Logger()

logger
  .info('Hello')
  .warn('World')
  .error(new Error('oof'))
  .debug('Not displayed on console by default.')
```

## Default Logger Options

```ts
const defaultOptions = {
  timestamp: 'YYYY/MM/DD HH:mm:ss:SSS',
  console: {
    logging: true,
    type: {
      INFO: true,
      WARN: true,
      ERROR: true,
      DEBUG: false
    },
    color: {
      INFO: {
        text: '#fff',
        background: '#1565c0'
      },
      WARN: {
        text: '#ffb04c',
        background: '#ff833a'
      },
      ERROR: {
        text: '#f44336',
        background: '#f44336'
      },
      DEBUG: {
        text: '#9e9e9e',
        background: '#707070'
      }
    }
  },
  file: {
    logging: false,
    filePath: path.join(path.resolve(process.cwd()), 'program.log'),
    type: {
      INFO: true,
      WARN: true,
      ERROR: true,
      DEBUG: true
    }
  }
}
```

## LICENCE

```txt
MIT License

Copyright (c) 2020 InkoHX

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Author

- [Twitter](https://twitter.com/InkoHX)
