import { observable, action, runInAction } from 'mobx'
import { post, get } from '../../axios/index'
import { Message } from 'react-ryui'
const message = new Message({
  duration: 3,
  dark: true
})
class UI {
  @observable loading = false
  @observable visible = false
  @observable task = {
    id: null,
    name: '',
    status: 0,
    start_time: '',
    end_time: '',
    level: 1
  }
  @observable taskList = []
  @observable pagination = {
    pageSize: 10,
    current: 1,
    total: 0
  }
  @action setPagination = (key: string, value: number): void => {
    this.pagination[key] = value
    this.getTaskList()
  }
  @action setTaskByKey = (key: string, value: any): void => {
    this.task[key] = value
  }
  @action setLoading = (loading: boolean): void => {
    this.loading = loading
  }
  @action setVisible = (visible: boolean) => {
    this.visible = visible
  }
  @action setTask = (task) => {
    this.task = task
  }
  @action addOrUpdateTask = async (taskEntity) => {
    taskEntity = taskEntity || this.task
    const { code, insertId } = await post('/api/task/saveorupdate', taskEntity, {})
    if (code === 200) {
      runInAction(() => {
        if (taskEntity.id === null) { // new
          taskEntity.id = insertId
          this.taskList.unshift(taskEntity)
          this.pagination.total += 1
        } else { // update
          this.taskList = this.taskList.map(task => {
            return task.id === taskEntity.id ? taskEntity : task
          })
        }
      })
      message.success('保存成功!')
    } else {
      message.error('保存失败!')
    }
  }
  @action getTaskList = async () => {
    const { code, data } = await get('/api/task/list', this.pagination)
    if (code !== 200) {
      message.error('查询任务列表异常!')
    } else {
      runInAction(() => {
        this.pagination.total = data.count
        this.taskList = data.data
      })
    }
  }
  @action deleteTask = async (taskId) => {
    const { code } = await post('/api/task/delete', {
      id: taskId
    }, {})
    if (code !== 200) {
      message.error(`任务编号(${taskId})删除异常!`)
    } else {
      message.success(`任务编号(${taskId})已删除!`)
      runInAction(() => {
        this.taskList = this.taskList.filter(task => {
          return task.id !== taskId
        })
        this.pagination.total -= 1
      })
    }
  }
}
const ui = new UI()
export {
  ui
}