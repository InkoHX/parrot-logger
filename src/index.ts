import { inspect } from 'util'
import { createWriteStream, WriteStream } from 'fs'
import { DeepRequired } from 'utility-types'
import { EOL } from 'os'
import mergeObject from 'deepmerge'
import path from 'path'
import chalk from 'chalk'
import dayjs from 'dayjs'

export type LoggerType = 'INFO' | 'WARN' | 'ERROR' | 'DEBUG'

export interface ColorOptions {
  background: string,
  text: string
}

export interface ConsoleOptions {
  logging?: boolean,
  type?: Record<LoggerType, boolean>,
  color: Record<LoggerType, ColorOptions>
}

export interface FileLogging {
  logging?: boolean,
  filePath?: string,
  type?: Record<LoggerType, boolean>
}

export interface LoggerOptions {
  timestamp?: string,
  console?: ConsoleOptions,
  file?: FileLogging
}

const defaultOptions: DeepRequired<LoggerOptions> = {
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

export default class Logger {
  public readonly options: DeepRequired<LoggerOptions>

  private readonly writeStream: WriteStream | null

  public constructor (options: LoggerOptions = {}) {
    this.options = mergeObject(defaultOptions, options) as DeepRequired<LoggerOptions>

    this.writeStream = this.options.file.logging
      ? createWriteStream(this.options.file.filePath, { flags: 'a' })
      : null
  }

  public info (data: any): Logger {
    return this.write('INFO', data)
  }

  public warn (data: any): Logger {
    return this.write('WARN', data)
  }

  public error (data: any): Logger {
    return this.write('ERROR', data)
  }

  public debug (data: any): Logger {
    return this.write('DEBUG', data)
  }

  private write (type: LoggerType, data: any): Logger {
    const timestamp = dayjs().format(this.options.timestamp)

    if (this.options.console.logging && this.options.console.type[type]) {
      console.log(this.formatData(timestamp, this.flatten(data), this.options.console.color[type], this.isObject(data)))
    }

    if (this.options.file.logging && this.options.file.type[type] && this.writeStream) {
      this.writeStream.write(`[${timestamp}] [${type}] ${this.flatten(data, false) + EOL || '\n'}`, error => {
        if (error) console.error(error)
      })
    }

    return this
  }

  private flatten (data: any, color = true): string {
    if (typeof data === 'string') return data
    if (typeof data === 'object') {
      if (data instanceof Error) return data.stack || data.message

      return inspect(data, { depth: Number(Array.isArray(data)), colors: color })
    }

    return String(data)
  }

  private isObject (value: any): boolean {
    if (value instanceof Error) return false

    return typeof value === 'object'
  }

  private formatData (timestamp: string, data: string, option: ColorOptions, noColor = false): string {
    return `${chalk.bgHex(option.background)(`[${timestamp}]`)} ${noColor ? data : chalk.hex(option.text)(data)}`
  }
}
