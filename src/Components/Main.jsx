import React, { useState } from 'react';

const Todo = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>Priority: {props.priority}</p>
      <p>Completed: {props.completed ? 'Yes' : 'No'}</p>
      <button onClick={props.onDelete}>Delete</button>
      <button onClick={props.onMarkAsCompleted}>Mark as Completed</button>
    </div>
  );
};

export default Todo;
