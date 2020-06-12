import * as React from "react"
import { observer, inject } from 'mobx-react'
import './index.less'
@inject('UI')
@observer
class Header extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='app-header'>
      <div className='app-header-left'>
        <i class='diaryfont diary-todo-list-o'></i>
        <span>Cloud Diary</span>
      </div>
      <div className='app-header-right'>
        <i class='diaryfont diary-Userpersonavtar'></i>
        <span>Yun Liang</span>
        <i class='diaryfont diary-jia'></i>
      </div>
    </div>
  }
}
export { Header }