import React from 'react';

import { connect } from 'react-redux';
import { addTask } from '../../redux/task/task.actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      taskItem: '',
    };
    
  }

  handleChange = (e) => {
    const taskItem = e.target.value;

    this.setState({
      taskItem,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await this.props.addTask(this.state.taskItem);
      this.setState({
        
          taskItem: '',
          createdAt: '',
        
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className='form-control'>
        <form action='' onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='taskItem'
            value={this.state.taskItem}
            onChange={this.handleChange}
          />
          <button type='submit' className='btn'>
            Add Task
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(addTask(task)),
});

export default connect(null, mapDispatchToProps)(Form);
