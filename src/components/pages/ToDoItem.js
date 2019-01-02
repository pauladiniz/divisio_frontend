import React, { Component } from 'react'

export default class ToDoItem extends Component {
  render() {
    const { title, handleDelete } = this.props
    return (
      <li class="collection-item"><div>{title}<a class="secondary-content" onClick={handleDelete}>
      <i class="material-icons" >delete</i></a></div></li>
    )
  }
}
