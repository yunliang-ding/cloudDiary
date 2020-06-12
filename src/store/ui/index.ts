import { observable, action } from 'mobx'
class UI {
  @observable loading = false
  @observable dataList = [{
    key: Math.random(),
    time: '2020-06-12',
    content: '计划开发XXX,整理XXX,学习XXX',
    status: 1
  },{
    key: Math.random(),
    time: '2020-06-12',
    content: '计划开发计划开发XXX,整理XXX,学习XXX计划开发XXX,整理XXX,学习XXXXXX',
    status: 0
  },{
    key: Math.random(),
    time: '2020-06-12',
    content: '计划开发XXX,整理XXX,学习XXX计划开发XXX,整理XXX,学习XXX',
    status: 1
  },{
    key: Math.random(),
    time: '2020-06-12',
    content: '计划开发XXX,整理XXX,学习XXX',
    status: 1
  },{
    key: Math.random(),
    time: '2020-06-12',
    content: '计划开发计划开发XXX,整理XXX,学习XXX计划开发XXX,整理XXX,学习XXXXXX',
    status: 0
  },{
    key: Math.random(),
    time: '2020-06-12',
    content: '计划开发XXX,整理XXX,学习XXX计划开发XXX,整理XXX,学习XXX',
    status: 1
  },{
    key: Math.random(),
    time: '2020-06-12',
    content: '计划开发计划开发XXX,整理XXX,学习XXX计划开发XXX,整理XXX,学习XXXXXX',
    status: 0
  },{
    key: Math.random(),
    time: '2020-06-12',
    content: '计划开发XXX,整理XXX,学习XXX计划开发XXX,整理XXX,学习XXX',
    status: 1
  },{
    key: Math.random(),
    time: '2020-06-12',
    content: '计划开发计划开发XXX,整理XXX,学习XXX计划开发XXX,整理XXX,学习XXXXXX',
    status: 0
  },{
    key: Math.random(),
    time: '2020-06-12',
    content: '计划开发XXX,整理XXX,学习XXX计划开发XXX,整理XXX,学习XXX',
    status: 1
  }]
  @action setLoading = (loading: boolean): void => {
    this.loading = loading
  }
}
const ui = new UI()
export {
  ui
}