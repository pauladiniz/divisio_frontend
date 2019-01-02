import React, { Component } from 'react'
import ToDoItem from './ToDoItem'

export default class ToDoList extends Component {
render() {
    const { items, clearList, handleDelete } = this.props
    return (
    <ul class="collection">

{items.map(item => {
    return (
    <ToDoItem key={item.id} title={item.title} handleDelete={() => handleDelete(item.id)} />
    );
})}

<p class="center-align">
    <button type="button" class="btn waves-effect waves-ligh red" onClick={clearList}>
    Limpar Itens
    </button>
</p>
    </ul>  
    )
}
}
