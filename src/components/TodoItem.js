import React, { Component } from 'react';   
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => {
    return {
      fontWeight: 'bold',   
      background: '#37A6B0',
      padding: '10px',
      border: '1px #0F6168 solid',
      color: '#02323B',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'  
    }
  };


  
  render()  {
    const { id, title } = this.props.todo;
      return  (
        <div style={ this.getStyle() }>
            <input type="checkbox" onChange={ this.props.markComplete.bind(this, id) }/> {' '}
            <p style={{ display: 'inline' }}>{ title }</p>
            <button onClick={ this.props.delTodo.bind(this, id) } style={ btnStyle }>Delete</button>
        </div>
    );
  }
}



TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
background: '#5AB9C2',
color: '#02323B',
border:'2px solid',
padding: '5px 10px',
margin: '',
borderRadius: '10%',
cursor: 'pointer',
float: 'right'

};

export default TodoItem;