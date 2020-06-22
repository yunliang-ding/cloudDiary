import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Drawer, Button, Tooltip } from 'react-ryui'
import { TaskDrawer } from './taskDrawer'
import './index.less'
@inject('UI')
@observer
class Header extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  state = {
    visible: false,
    footer: false,
    mask: true,
    closable: true
  }
  render() {
    const {
      visible,
      setVisible,
      task,
      addOrUpdateTask,
      setLogin,
      setUserName,
      clearTaskList
    } = this.props.UI
    return <div className='app-header'>
      <div className='app-header-left'>
        <i className='diaryfont diary-task-line'></i>
        <span>Cloud Record</span>
      </div>
      <div className='app-header-right'>
        <i className='diaryfont diary-Userpersonavtar'></i>
        <span>{this.props.UI.userName}</span>
        <Tooltip
          dark
          title={<span>切换用户</span>}
          placement='bottom'
        >
          <i className='diaryfont diary-tuichu' style={{fontSize: 18, margin: '0 10px'}} onClick={
            () => {
              setLogin(false)
              clearTaskList()
              setUserName(null)
              localStorage.removeItem('user_name')
            }
          }></i>
        </Tooltip>
        <i className='diaryfont diary-jia' onClick={
          () => {
            setVisible(true)
            this.props.UI.setTask({
              id: null,
              name: '',
              status: 0,
              level:3,
              start_time: '',
              end_time: ''
            })
          }
        }></i>
      </div>
      <Drawer
        title={task.id ? '编辑任务' : '新增任务'}
        closable
        dark
        mask
        footer={[
          <Button
            dark
            type='primary'
            label='保存'
            style={{ width: 60 }}
            onClick={
              () => {
                setVisible(false)
                addOrUpdateTask()
              }
            }
          />,
          <Button
            dark
            label='取消'
            style={{ width: 60 }}
            onClick={
              () => {
                setVisible(false)
              }
            }
          />
        ]}
        visible={visible}
        content={<TaskDrawer />}
        style={{
          width: 420,
          height: 'calc(100% - 40px)'
        }}
        onClose={
          () => {
            setVisible(false)
          }
        }
      />
    </div>
  }
}
export { Header }