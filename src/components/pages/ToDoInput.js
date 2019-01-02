import React, { Component } from 'react'

export default class ToDoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit } = this.props;
    return (
    <form onSubmit={handleSubmit}>
    <input type="text" className="form-control" placeholder="Escreva aqui" value={item} onChange={handleChange} />
    
    <p class="center-align">
<button class="btn waves-effect waves-ligh red" type="submit">Adicionar!</button>
</p>
    </form>
    )
  }
}
