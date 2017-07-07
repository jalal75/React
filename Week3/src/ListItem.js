import React from 'react';
import './App.css';

 export default class ListItem extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      showEdit: true,
      editToDo: {
        description: props.description,
        done: false
      }
    }

  }

  Edit(showEdit) {
    if (!showEdit) {
      return (
        <div className='item-name'>
        <form id="addItem"  onSubmit={this.handelsave.bind(this)}>
          <input type="text"
            value={this.state.editToDo.description}
            onChange={this.handleTextChange.bind(this)}
          />
          <input type="submit" value="Save" />
          <button type="button"
              onClick={this.handelTextClick.bind(this)}
            >
            Cancel
          </button>
        </form>
      </div>
      );
    } else {
        return (
          <div className='item-name'>
            {this.handelDown()}
            <input type="checkbox"
              name="listItem"
              checked={this.props.done}
              onChange={()=>{this.props.handleCheckBoxChange(this.props.index, this.props.done)}}
              />
            <span onClick={this.handelTextClick.bind(this)}>{this.props.description} ... </span>
            <button
              type="button"
              onClick={()=>{this.props.onDelete(this.props.index, this.props.done)}}>
              Delete
            </button>
            {this.handelUp()}
          </div>
        )
      }
  }

handelDown(){
  if (this.props.index < this.props.Length-1) {
    return(
      <button
        type="button"
        onClick={()=>{this.props.priority(this.props.index, this.props.index+1)}}>
        &#8595;
      </button>
    )
  }
}

handelUp(){
  if(this.props.index > 0 ){
    return(
      <button
        type="button"
        onClick={()=>{this.props.priority(this.props.index, this.props.index-1, this.props.done)}}>
        &#24;
      </button>
    )
  }
}

handleTextChange(event){
  this.setState({
    editToDo: {
      description: event.target.value,
      done: this.props.done
    }
  })
}

handelsave(event){
  event.preventDefault()
  this.props.save(this.state.editToDo, this.props.index, this.props.done)
  this.handelTextClick()
}

handelTextClick(){
  this.setState({
      showEdit: !this.state.showEdit
    });
}

render() {
   return (
       <div >
       {this.Edit(this.state.showEdit)}
      </div>
    )
  }

}





// case 'keyboard-arrow-up':
//   return (
//     <g><path d="M7.41 15.41l4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6z"></path></g>
//   );
