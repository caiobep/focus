import uuid from 'uuid'
import { Task } from './types'
import fs from 'fs'
import YAML from 'yaml'
import * as R from 'ramda'

const FOCUS_TASKS_PATH = `${process.env.HOME}/.focus.yaml`

export const createTask = (
  name: string,
  isActive = true,
  creationDate = Date.now(),
): Task => ({
  uuid: uuid.v4(),
  name,
  isActive,
  createdAt: creationDate,
  updatedAt: creationDate,
})

export const updateTask = (
  task: Task,
  { name, isActive }: Partial<Task>,
): Task => ({
  ...task,
  name,
  isActive,
  updatedAt: Date.now(),
})

// const listTasks: Task[] = () => {}

const logError = (err: any): any => {
  return err ? err && console.error(err) : !err
}

/**
 * Convert tasks to yaml and Write tasks on a file
 * !!! Contains *Side Effects*
 * @param tasks A collection of Task
 */
export const writeTasksWithEffects = (tasks: Task[]): Promise<boolean> =>
  new Promise(resolve => {
    const tasksAsYamlString = YAML.stringify(tasks)

    // Allow Side Effects
    // eslint-disable-next-line functional/no-expression-statement
    fs.writeFile(
      FOCUS_TASKS_PATH,
      tasksAsYamlString,
      'utf8',
      R.compose(
        resolve,
        logError,
      ),
    )
  })
