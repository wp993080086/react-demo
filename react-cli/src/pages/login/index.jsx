import React, { Component } from 'react';
import PubSub from 'pubsub-js'
import styles from './style.module.css'
import Children from '../../components/children'

export default class index extends Component {
  constructor() {
    super()
    this.state = {
      bus: null
    }
  }
  componentDidMount() {
    this.state.bus = PubSub.subscribe('search', (msg, data) => {
      console.log(msg, '触发了')
      console.log(data)
    })
  }
  getChildrenData = (data) => {
    console.log(data)
  }
  render() {
    const data = {
      sex: '男',
      age: 999
    }
    return (
      <div className={styles.login_box}>
        <span>Login</span>
        <Children name="张三" {...data} num={20} getData={this.getChildrenData} />
      </div>
    )
  }
}
