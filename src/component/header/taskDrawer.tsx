import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { Input, DatePicker, Select } from 'react-ryui'
import './index.less'
@inject('UI')
@observer
class TaskDrawer extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  render() {
    const {
      task: {
        name,
        start_time,
        end_time,
        level,
        remake,
        id
      },
      setTaskByKey
    } = this.props.UI
    return <div className='app-drawer-box'>
      <div className='app-drawer-box-item'>
        <div className='app-drawer-box-item-left'>
          任务优先级
        </div>
        <div className='app-drawer-box-item-right'>
          <Select
            dark
            style={{ width: 300, marginBottom: 16 }}
            placeholder='请选择'
            dataList={[{
              label: '优先',
              value: 3
            }, {
              label: '一般',
              value: 2
            }, {
              label: '暂缓',
              value: 1
            }]}
            value={level}
            onChange={
              (e) => {
                setTaskByKey('level', e)
              }
            }
          />
        </div>
      </div>
      <div className='app-drawer-box-item'>
        <div className='app-drawer-box-item-left'>
          任务详情
        </div>
        <div className='app-drawer-box-item-right'>
          <Input
            type='textArea'
            dark
            value={name}
            onChange={
              (e) => {
                setTaskByKey('name', e.target.value)
              }
            }
          />
        </div>
      </div>
      <div className='app-drawer-box-item'>
        <div className='app-drawer-box-item-left'>
          计划开始时间
        </div>
        <div className='app-drawer-box-item-right'>
          <DatePicker
            dark
            value={start_time}
            placeholder='请选择'
            onChange={
              (e) => {
                setTaskByKey('start_time', e)
              }
            }
          />
        </div>
      </div>
      <div className='app-drawer-box-item'>
        <div className='app-drawer-box-item-left'>
          计划完成时间
        </div>
        <div className='app-drawer-box-item-right'>
          <DatePicker
            dark
            value={end_time}
            placeholder='请选择'
            onChange={
              (e) => {
                setTaskByKey('end_time', e)
              }
            }
          />
        </div>
      </div>
      {
        id !== null && <div className='app-drawer-box-item'>
          <div className='app-drawer-box-item-left'>
            任务评论
          </div>
          <div className='app-drawer-box-item-right'>
            <Input
              type='textArea'
              dark
              value={remake}
              onChange={
                (e) => {
                  setTaskByKey('remake', e.target.value)
                }
              }
            />
          </div>
        </div>
      }

    </div>
  }
}
export { TaskDrawer }