import React from 'react';
import './TaskList.styles.css';
import '../Task-item.component/TaskItem';
import TaskItem from '../Task-item.component/TaskItem';

const TaskList = ({tasks}) => {
  return (
    <div className=''>
      {tasks.map((task,index) => (
        <TaskItem key={index} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
