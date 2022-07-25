import React, { Component } from 'react';
import PubSub from 'pubsub-js'
import styles from './style.module.css'

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
  render() {
    return (
      <div className={styles.login_box}>
        Login
      </div>
    )
  }
}
