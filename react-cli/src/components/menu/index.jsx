import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

export default class Menu extends Component {
  render() {
    return (
      <div className={styles.menu_box}>
        <Link className={styles.menu_item} to="./aaaaa">aaaaa</Link>
        <Link className={styles.menu_item} to={'./bbbbb/3'}>bbbbb</Link>
      </div>
    )
  }
}
