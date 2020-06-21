import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { Header, Content, Footer } from 'component/index'
import { Button, Input } from 'react-ryui'
import './index.less'
@inject('UI')
@observer
class Layout extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  render() {
    const {
      userName,
      login,
      setUserName,
      setLogin
    } = this.props.UI
    return login ? <div className='app-layout'>
      <Header />
      <Content />
      <Footer />
    </div> : <div className='app-layout'>
        <div className='app-layout-login'>
          <div className='app-layout-login-box'>
            <Input
              dark
              style={{width: 300}}
              value={userName}
              placeholder='输入用户名'
              onChange={
                (e) => {
                  setUserName(e.target.value)
                }
              }
            />
            <Button label='确认' type='primary' onClick={
              () => {
                localStorage.setItem('user_name', this.props.UI.userName)
                setLogin(true)
              }
            }
            />
          </div>
        </div>
      </div>
  }
}
export { Layout }