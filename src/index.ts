/* eslint-disable functional/no-expression-statement */

import program from 'commander'
import chalk from 'chalk'
import ora from 'ora'
import { createTask, writeTasksWithEffects } from './task/task'

export const log = (message: string): null => {
  process.env.VERBOSE && console.log(`[!] ${chalk.blue(message)}`)
  return null
}

program
  .version('0.0.1')
  .description('A command line tool to help you focus on one thing at a time')
  .option('-v', '--verbose', 'Print steps on terminal')

program
  .command('start <name>')
  .alias('on')
  .description('Start a task with an optional category')
  .action(async (name: string) => {
    const spinner = ora('Creating Task')
    spinner.start()

    const isTaskRegistered = await writeTasksWithEffects([createTask(name)])

    spinner.stop()

    isTaskRegistered
      ? console.log(`${chalk.green('[+] Task Registered')}`)
      : console.log(`${chalk.red('[x] Task Not Registered')}`)
  })

program.parse(process.argv)
