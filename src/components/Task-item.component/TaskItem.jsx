import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { removeTask } from '../../redux/task/task.actions';
import { connect } from 'react-redux';

const TaskItem = ({ task, removeTask }) => {
  return (
    <div className='task reminder '>
      <h3>
        {task}{' '}
        <FaTimes
          onClick={()=> removeTask(task)}
          style={{ color: 'red', cursor: 'pointer' }}
        />
      </h3>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeTask: (taskItem) => dispatch(removeTask(taskItem)),
});

export default connect(null,mapDispatchToProps)(TaskItem);
