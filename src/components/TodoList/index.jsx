import React from 'react';
import TodoItem from '../TodoItem';

function TodoList(props) {
  const {removeToDo,handleEditTodo,handleCompleteTodo} =props;
  const todos = props.todosList.map((todo, index) => {
    return(       
      <TodoItem   todo={todo} index={index} key={index} {...props} />   
     )
  })
  return (
    <div>
     {todos}
    </div>
  );
}

export default TodoList;
