import React, { Component } from 'react'
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'

import GlobalStyle from './GlobalStyle.css'

import uuid from "uuid"

class Member extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    this.setState({
    item: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
    id: this.state.id,
    title: this.state.item
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
    items: updatedItems,
    item: "",
    id: uuid(),
    editItem: false
    });
  };
  clearList = () => {
    this.setState({
    items: []
    });
  };
  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
    items: filteredItems
    });
  };
  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);

    const selectedItem = this.state.items.find(item => item.id === id);

    this.setState({
    items: filteredItems,
    item: selectedItem.title,
    editItem: true,
    id: id
    });
  };
  render() {
    const { currentUserEmail, currentUserName } = this.state;

    return (
    <div class="Aligner">
    <div class="Aligner-item">
          <h1>List Me!</h1>
          <div class="divider"></div>

    <div class="section">
    <ToDoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    </div>
    <ToDoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} />
    </div>
  </div>  
    
    );
  }
}

export default Member;
