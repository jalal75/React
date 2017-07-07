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
              done:        true
            } ,
            {
              description: "Do the homework",
              done:        false
            },
            {
              description: "Done",
              done:        true
            } ,
            {
              description: "Not Done",
              done:        false
            },
          ],

          newToDo:{
            description: "",
            done:        false
          }
        }

    }


    handleSubmit(event){
      event.preventDefault()
      const {newToDo} = this.state  // same like const newToDo=this.state.newToDo
      const todos = [...this.state.todos, newToDo]
      this.setState({todos})
      document.getElementById("addItem").reset();
      }

    handleChange(event){
      this.setState({
        newToDo: {
          description: event.target.value,
          done: false
        }
      })
    }

    renderAddItem (){
      return(
        <div>
          <form id="addItem" onSubmit={this.handleSubmit.bind(this)}>
            <input type="submit" value="Add" />
            <input type="text"  onChange={this.handleChange.bind(this)}/>
          </form>
        </div>
      )
    }

    onDelete= (index, done) => {
      let  doneList = [...this.state.todos].filter((item)=>{return item.done})
      let notDoneList = [...this.state.todos].filter((item)=>{return !item.done})
      if (done===true){
        doneList.splice(index, 1)
      }else {
        notDoneList.splice(index, 1)
      }
      this.setState({todos:[...doneList,...notDoneList]})
      }

    handleCheckBoxChange = (index, done) => {
      let  doneList = [...this.state.todos].filter((item)=>{return item.done})
      let notDoneList = [...this.state.todos].filter((item)=>{return !item.done})
      if (done===true){
        doneList[index].done = false;
      }else{
        notDoneList[index].done = true;
      }
      this.setState({todos:[...doneList,...notDoneList]})
    }

    save = (editToDo,index,done) => {
      let  doneList = [...this.state.todos].filter((item)=>{return item.done})
      let notDoneList = [...this.state.todos].filter((item)=>{return !item.done})
      if (done===true){
        doneList[index] = editToDo
      }else{
        notDoneList[index] = editToDo
      }
      this.setState({todos:[...doneList,...notDoneList]})
    }

    priority = (index, index1, done) => {
      let  doneList = [...this.state.todos].filter((item)=>{return item.done})
      let notDoneList = [...this.state.todos].filter((item)=>{return !item.done})
      if (done===true){
        const todoItem = doneList[index1]
        doneList[index1] = doneList[index]
        doneList[index] = todoItem
      }else{
        const todoItem = notDoneList[index1]
        notDoneList[index1] = notDoneList[index]
        notDoneList[index] = todoItem
      }
      this.setState({todos:[...doneList,...notDoneList]})
    }

    render() {
      let  doneList = [...this.state.todos].filter((item)=>{return item.done})
      let notDoneList = [...this.state.todos].filter((item)=>{return !item.done})
      doneList= doneList.map(function(item,index){
        return(<List  description={item.description}
          done ={item.done}
          key={index} index={index}
          Length = {doneList.length}
          onDelete={this.onDelete}
          priority={this.priority}
          handleCheckBoxChange={this.handleCheckBoxChange}
          save={this.save}
        />);

      }.bind(this))

      notDoneList= notDoneList.map(function(item,index){
        return( <List  description={item.description}
          done ={item.done}
          key={index} index={index}
          Length = {notDoneList.length}
          onDelete={this.onDelete}
          priority={this.priority}
          handleCheckBoxChange={this.handleCheckBoxChange}
          save={this.save}
        />);
      }.bind(this))

      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>To Do List</h2>
          </div>
          <div className= "App-Body">
          <div className="don-Item">{doneList}</div>
          <div className="notDon-Item">{notDoneList}</div>
          </div>
          {this.renderAddItem()}
        </div>
      );
    }

  }

  export default App;
