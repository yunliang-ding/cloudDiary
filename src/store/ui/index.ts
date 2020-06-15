import { observable, action } from 'mobx'
class UI {
  @observable loading = false
  @observable visible = false
  @observable task = {
    key: Math.random(), id: 3,
    time: '2020-06-12',
    content: '计划开发XXX,整理XXX,学习XXX',
    status: 1
  }
  @observable taskList = [{
    key: Math.random(), id: 3,
    time: '2020-06-12',
    content: '计划开发XXX,整理XXX,学习XXX',
    status: 1
  }, {
    key: Math.random(), id: 3,
    time: '2020-06-12',
    content: '计划开发计划开发XXX,整理XXX,学习XXX计划开发XXX,整理XXX,学习XXXXXX',
    status: 0
  }, {
    key: Math.random(), id: 3,
    time: '2020-06-12',
    content: '计划开发XXX,整理XXX,学习XXX计划开发XXX,整理XXX,学习XXX',
    status: 1
  }, {
    key: Math.random(), id: 3,
    time: '2020-06-12',
    content: '计划开发XXX,整理XXX,学习XXX',
    status: 1
  }, {
    key: Math.random(), id: 3,
    time: '2020-06-12',
    content: '计划开发计划开发XXX,整理XXX,学习XXX计划开发XXX,整理XXX,学习XXXXXX',
    status: 0
  }, {
    key: Math.random(), id: 3,
    time: '2020-06-12',
    content: '计划开发XXX,整理XXX,学习XXX计划开发XXX,整理XXX,学习XXX',
    status: 1
  }, {
    key: Math.random(), id: 3,
    time: '2020-06-12',
    content: '计划开发计划开发XXX,整理XXX,学习XXX计划开发XXX,整理XXX,学习XXXXXX',
    status: 0
  }, {
    key: Math.random(), id: 3,
    time: '2020-06-12',
    content: '计划开发XXX,整理XXX,学习XXX计划开发XXX,整理XXX,学习XXX',
    status: 1
  }, {
    key: Math.random(), id: 3,
    time: '2020-06-12',
    content: '计划开发计划开发XXX,整理XXX,学习XXX计划开发XXX,整理XXX,学习XXXXXX',
    status: 0
  }, {
    key: Math.random(), id: 3,
    time: '2020-06-12',
    content: '计划开发XXX,整理XXX,学习XXX计划开发XXX,整理XXX,学习XXX',
    status: 1
  }, {
    key: Math.random(), id: 3,
    time: '2020-06-12',
    content: '计划开发计划开发XXX,整理XXX,学习XXX计划开发XXX,整理XXX,学习XXXXXX',
    status: 0
  }, {
    key: Math.random(), id: 3,
    time: '2020-06-12',
    content: '计划开发XXX,整理XXX,学习XXX计划开发XXX,整理XXX,学习XXX',
    status: 1
  }]
  @action setLoading = (loading: boolean): void => {
    this.loading = loading
  }
  @action setVisible = (visible: boolean) => {
    this.visible = visible
  }
  @action setTask = (task) => {
    this.task = task
  }
}
const ui = new UI()
export {
  ui
}