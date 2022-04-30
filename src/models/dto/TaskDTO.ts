export interface BaseTaskDTO {
  id?: number
  title: string
  content: string
  birth: Date  
  done:  boolean
}

export interface TaskDTO extends BaseTaskDTO {
  id: number
  userId: number | null
}

export interface CreateTaskDTO extends BaseTaskDTO {
  
}

export type UpdateTaskDTO = Partial<BaseTaskDTO>