import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { taskSelector } from './redux/task/task.selector';
import TaskList from './components/Task-list.component/TaskList';
import Form from './components/Form-input.component/Form';

const App = ({ tasks }) => {
  return (
    <div className='container'>
      
        
          <Form  />
       
      
      <TaskList tasks={tasks} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  tasks: taskSelector,
});

export default connect(mapStateToProps)(App);
