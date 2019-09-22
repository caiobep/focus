export type Task = {
  readonly uuid: string
  readonly isActive: boolean
  readonly name: string
  readonly createdAt: Date | number
  readonly updatedAt: Date | number
}

export type TaskDb = {
  readonly [uuid: string]: Task
}
