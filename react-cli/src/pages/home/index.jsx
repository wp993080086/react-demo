import React, { Component } from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js'
import styles from './style.module.css'

export default class index extends Component {
  constructor() {
    super()
    this.state = {
      keyword: '',
      bus: null
    }
  }
  requestHttp = () => {
    const { keyword } = this.state
    axios.get(`/api/search?keywords=${keyword}`).then((res) => {
      console.log(res.data)
      this.state.bus = PubSub.publish('search', res.data)
    })
    .catch((error) => {
      console.warn(error)
    })
  }
  // input输入事件
  handleInputChange = (el) => {
    const {target: { value }} = el
    this.setState({
      keyword: value
    })
  }
  render() {
    return (
      <div className={styles.home_box}>
        <input type="text" placeholder="请输入要搜索的歌曲名" onChange={this.handleInputChange} />
        <button onClick={this.requestHttp}>搜索</button>
      </div>
    )
  }
}
