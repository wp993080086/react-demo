import React from 'react'
import { useParams } from 'react-router-dom'

export default function index() {
  console.log(useParams())
  return (
    <div>
      我是bbbbb
    </div>
  )
}
