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
  render() {
    return <div className='app-content'>
      <div className='app-content-box'>
        <div className='app-content-box-header'>
          <div className='app-content-box-item'>
            <div className='app-content-box-item-sort'>
              Sort
            </div>
            <div className='app-content-box-item-time'>
              Time
            </div>
            <div className='app-content-box-item-content'>
              Content
            </div>
            <div className='app-content-box-item-status'>
              Finished
            </div>
            <div className='app-content-box-item-operation'>
              Operation
            </div>
          </div>
        </div>
        <div className='app-content-box-body'>
          {
            this.props.UI.taskList.map((item, index) => {
              return <div className='app-content-box-item' key={item.key}>
                <div className='app-content-box-item-sort'>
                  {index+1}
                </div>
                <div className='app-content-box-item-time'>
                  {item.time}
                </div>
                <div className='app-content-box-item-content'>
                  {item.content}
                </div>
                <div className='app-content-box-item-status'>
                  <Switch
                    checked={item.status === 1}
                    checkedNode={<span>Yes</span>}
                    unCheckedNode={<span>No</span>}
                    onChange={
                      (e) => {
                        console.log(e)
                      }
                    }
                  />
                </div>
                <div className='app-content-box-item-operation'>
                  <i className='diaryfont diary-bianji' onClick={
                    () => {
                      this.props.UI.setVisible(true)
                      this.props.UI.setTask(item)
                    }
                  }></i>
                  <i className='diaryfont diary-remove'></i>
                </div>
              </div>
            })
          }
        </div>
        <div className='app-content-box-footer'>
          <Pagination
            current={8}
            pageSize={10}
            total={180}
            showJumper
            dark
            onChange={
              (e) => {
                console.log(e)
              }
            }
          />
        </div>
      </div>
    </div>
  }
}
export { Content }