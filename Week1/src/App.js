import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list'

  class App extends React.Component {
    constructor (props){
        super(props);
        this.state = {
          todos: [
               {
                description: "Read more about React",
                done:        'False'
               } ,
               {
              description: "Do the homework",
               done:        'true'
              },
            ]
        }

    }

    onAdd = () => {
    const description     = prompt("What is the description of to do?")
    const done = prompt("was it done?")

    const newToDo = {description, done}
    const toDos = [...this.state.todos, newToDo]
    this.setState({todos:toDos})
    }
  onDelete= (index) => {
    const todosList = [...this.state.todos]
    todosList.splice(index, 1)
    this.setState({todos:todosList})
  }
    render() {
      let todoList=this.state.todos
      todoList= todoList.map(function(item,index){
        return( <List  description={item.description} done ={item.done} key={index} index={index} onDelete={this.onDelete}/>);
      }.bind(this))
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>To Do List</h2>
          </div>
          <div className= "App-Body">
          {todoList}
          </div>
          <button type="button" onClick={this.onAdd}>Add</button>
        </div>
      );
    }

  }

  export default App;
