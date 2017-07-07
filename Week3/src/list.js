import React from 'react';
import ListItem from './ListItem'
import './App.css';

 export default class List extends React.Component {

render() {

    return (
      <div className='todo-items'>
        <ListItem description={this.props.description}
        done ={this.props.done}
        key={this.props.index}
        index={this.props.index}
        onDelete={this.props.onDelete}
        priority={this.props.priority}
        Length={this.props.Length}
        handleCheckBoxChange={this.props.handleCheckBoxChange}
        save={this.props.save}
         />
        </div>

    );
  }
}
