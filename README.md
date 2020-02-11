<div
  align="center"
>

![ParrotLogger](https://github.com/InkoHX/parrot-logger/blob/master/media/ParrotLogger.png?raw=true)

![CI](https://github.com/InkoHX/parrot-logger/workflows/CI/badge.svg)
![LICENCE](https://img.shields.io/github/license/InkoHX/logger-renew?label=LICENCE&style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/InkoHX/logger-renew)

</div>

## Description

Lightweight logger module.

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

const logger = new Logger({
  console: {
    type: {
      DEBUG: true
    }
  }
})

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
        background: '#1565c0',
        backgroundText: '#cccccc'
      },
      WARN: {
        text: '#ffb04c',
        background: '#ff833a',
        backgroundText: '#cccccc'
      },
      ERROR: {
        text: '#f44336',
        background: '#f44336',
        backgroundText: '#cccccc'
      },
      DEBUG: {
        text: '#9e9e9e',
        background: '#707070',
        backgroundText: '#cccccc'
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
