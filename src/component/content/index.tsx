import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Switch, Pagination } from 'react-ryui'
import './index.less'
@inject('UI')
@observer
class Content extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.UI.getTaskList()
  }
  render() {
    const {
      pagination: {
        pageSize,
        current,
        total
      },
      setPagination,
      setTaskByKey,
      addOrUpdateTask
    } = this.props.UI
    return <div className='app-content'>
      <div className='app-content-box'>
        <div className='app-content-box-header'>
          <div className='app-content-box-item'>
            <div className='app-content-box-item-sort'>
              任务编号
            </div>
            <div className='app-content-box-item-sort'>
              任务级别
            </div>
            <div className='app-content-box-item-time'>
              计划开始时间
            </div>
            <div className='app-content-box-item-content'>
              任务描述
            </div>
            <div className='app-content-box-item-time'>
              计划完成时间
            </div>
            <div className='app-content-box-item-status'>
              任务状态
            </div>
            <div className='app-content-box-item-operation'>
              操作
            </div>
          </div>
        </div>
        <div className='app-content-box-body'>
          {
            this.props.UI.taskList.map(item => {
              return <div className='app-content-box-item' key={item.id}>
                <div className='app-content-box-item-sort'>
                  {item.id}
                </div>
                <div className='app-content-box-item-sort'>
                  {item.level === 1 ? '暂缓' : item.level === 2 ? '一般' : '优先'}
                </div>
                <div className='app-content-box-item-time'>
                  {new Date(item.start_time).toLocaleDateString()}
                </div>
                <div className='app-content-box-item-content'>
                  {item.name}
                </div>
                <div className='app-content-box-item-time'>
                  {new Date(item.end_time).toLocaleDateString()}
                </div>
                <div className='app-content-box-item-status'>
                  <Switch
                    checked={item.status === 1}
                    checkedNode={<span>Yes</span>}
                    unCheckedNode={<span>No</span>}
                    onChange={
                      (e) => {
                        addOrUpdateTask(Object.assign({}, item, { status: e ? 1 : 0 }))
                      }
                    }
                  />
                </div>
                <div className='app-content-box-item-operation'>
                  <i className='diaryfont diary-bianji' onClick={
                    () => {
                      this.props.UI.setVisible(true)
                      this.props.UI.setTask({ ...item }) // deep
                    }
                  }></i>
                  <i className='diaryfont diary-remove' onClick={
                    () => {
                      let result = window.confirm(`是否删除编号为(${item.id})的任务?`)
                      result && this.props.UI.deleteTask(item.id)
                    }
                  }></i>
                </div>
              </div>
            })
          }
        </div>
        <div className='app-content-box-footer'>
          {
            total > 0 && <Pagination
              current={current}
              pageSize={pageSize}
              total={total}
              showJumper
              dark
              onChange={
                (e) => {
                  setPagination('current', e)
                }
              }
            />
          }
        </div>
      </div>
    </div>
  }
}
export { Content }