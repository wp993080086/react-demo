import React, { Component } from 'react'
import styles from './style.module.css'

export default class Layout extends Component {
  render() {
    return (
      <div className={styles.layout_box}>
        {this.props.children}
      </div>
    )
  }
}
