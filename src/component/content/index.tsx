import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Switch, Table, Button, Select } from 'react-ryui'
import './index.less'
@inject('UI')
@observer
class Content extends React.Component<any, any> {
  [x: string]: any
  props: any
  state: any
  constructor(props) {
    super(props)
    this.state = {
      searchForm: {
        level: -1,
        status: -1
      }
    }
  }
  componentDidMount() {
    this.props.UI.getTaskList()
  }
  render() {
    const {
      taskList,
      searchForm: {
        level,
        status
      },
      setOrderForm
    } = this.props.UI
    const colmun = [{
      label: '序号',
      dataIndex: 'id',
      width: '10%',
      render: (id) => {
        return <span>{id}</span>
      }
    }, {
      label: <Select
        dark
        style={{
          width: 80,
          height: 30,
          border: 0,
          background: 'inherit',
          marginLeft: -8
        }}
        dataList={[
          {
            label: '全部级别',
            value: -1
          },
          {
            label: '暂缓',
            value: 1
          },
          {
            label: '一般',
            value: 2
          },
          {
            label: '优先',
            value: 3
          }
        ]}
        value={level}
        onChange={
          (e) => {
            this.props.UI.setSearchFormByKey('level', e)
          }
        }
      />,
      width: '10%',
      dataIndex: 'level',
      render: (level) => {
        return <span style={{ color: '#fff', fontSize: 12 }}>{level === 1 ? '暂缓' : level === 2 ? '一般' : '优先'}</span>
      }
    }, {
      label: '计划开始时间',
      width: '15%',
      sorter: (a, b) => {
        return a.level > b.level ? 1 : -1
      },
      dataIndex: 'start_time',
      render: (start_time) => {
        return <span>{new Date(start_time).toLocaleDateString()}</span>
      }
    }, {
      label: '任务详情',
      width: '30%',
      dataIndex: 'name'
    }, {
      label: '计划完成时间',
      width: '15%',
      sorter: (a, b) => {
        return a.level > b.level ? 1 : -1
      },
      dataIndex: 'end_time',
      render: (end_time) => {
        return <span>{new Date(end_time).toLocaleDateString()}</span>
      }
    }, {
      label: <Select
        dark
        style={{
          width: 80,
          height: 30,
          border: 0,
          background: 'inherit',
          marginLeft: -8
        }}
        dataList={[
          {
            label: '全部状态',
            value: -1
          },
          {
            label: '完成',
            value: 1
          },
          {
            label: '未完成',
            value: 0
          }
        ]}
        value={status}
        onChange={
          (e) => {
            this.props.UI.setSearchFormByKey('status', e)
          }
        }
      />,
      width: '10%',
      dataIndex: 'status',
      render: (status, record) => {
        return <Switch
          checked={record.status === 1}
          checkedNode={<span>Yes</span>}
          unCheckedNode={<span>No</span>}
          onChange={
            (e) => {
              this.props.UI.addOrUpdateTask(Object.assign({}, record, { status: e ? 1 : 0 }))
            }
          }
        />
      }
    }, {
      label: '操作',
      width: '10%',
      dataIndex: 'opeartion',
      render: (value, record) => {
        return [<Button
          onClick={
            () => {
              this.props.UI.setVisible(true)
              this.props.UI.setTask({ ...record }) // deep
            }
          }
          style={{ width: 50, marginRight: 10 }}
          label={
            <i className='diaryfont diary-bianji'></i>
          }
          type='primary'
        />, <Button
          onClick={
            () => {
              let result = window.confirm(`是否删除编号为(${record.id})的任务?`)
              result && this.props.UI.deleteTask(record.id)
            }
          }
          style={{ width: 50, marginRight: 10 }}
          label={<i className='diaryfont diary-remove'></i>}
          type='danger'
        />]
      }
    }]
    return <div className='app-content'>
      <Table
        dark
        style={{ height: '100%' }}
        data={taskList}
        colmun={colmun}
        onSort={
          (key, type) => {
            setOrderForm({
              [key]: type
            })
          }
        }
      />
    </div>
  }
}
export { Content }