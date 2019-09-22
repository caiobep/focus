/* eslint-disable functional/immutable-data */
/* eslint-disable immutable/no-mutation */
/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-expression-statement */
import { createTask, updateTask } from './task'

jest.mock('uuid', () => ({ v4: jest.fn(() => 'uuid') }))

describe('task', () => {
  it('creates a task', () => {
    expect.assertions(1)
    jest.spyOn(Date, 'now').mockImplementation(() => 1560239936091)

    const task = createTask('Create Rocket trash ejection module')

    expect(task).toStrictEqual({
      uuid: 'uuid',
      name: 'Create Rocket trash ejection module',
      isActive: true,
      createdAt: 1560239936091,
      updatedAt: 1560239936091,
    })
  })

  it('updates a task', () => {
    expect.assertions(2)

    jest
      .spyOn(Date, 'now')
      .mockImplementationOnce(() => 1560239936091)
      .mockImplementationOnce(() => 1560239936091)
      .mockImplementation(() => 1569168402000)

    const task = createTask('Create Rocket trash ejection module')

    expect(task).toStrictEqual({
      uuid: 'uuid',
      name: 'Create Rocket trash ejection module',
      isActive: true,
      createdAt: 1560239936091,
      updatedAt: 1560239936091,
    })

    const updatedTask = updateTask(task, {
      name: 'Finish dashboard temperature relgulation module',
      isActive: true,
    })

    expect(updatedTask).toStrictEqual({
      uuid: 'uuid',
      name: 'Finish dashboard temperature relgulation module',
      isActive: true,
      createdAt: 1560239936091,
      updatedAt: 1560239936091,
    })
  })
})
