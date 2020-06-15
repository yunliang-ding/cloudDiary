import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Drawer, Button } from 'react-ryui'
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
  renderView = () => {
  
  }
  render() {
    const {
      visible,
      setVisible,
      task
    } = this.props.UI
    return <div className='app-header'>
      <div className='app-header-left'>
        <i className='diaryfont diary-todo-list-o'></i>
        <span>Cloud Diary</span>
      </div>
      <div className='app-header-right'>
        <i className='diaryfont diary-Userpersonavtar'></i>
        <span>Yun Liang</span>
        <i className='diaryfont diary-jia' onClick={
          () => {
            setVisible(true)
            this.props.UI.setTask({
              id: null,
              time: '',
              content: '',
              status: 0
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
        content={this.renderView()}
        style={{
          width: 400,
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