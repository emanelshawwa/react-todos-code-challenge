import React, { Fragment } from 'react';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import { useDispatch, useSelector } from "react-redux";
import {addTodo,removeTodo,editTodo,completeTodo} from '../../actions/todosAction'

function ContentContainer() {
  const todos = useSelector(state => state.todos) || [];
  const dispatch = useDispatch()
  
  // function to add new todo in list
  function  handleSubmit(todo) {
      dispatch(addTodo(todo));
   }
  // function to remove todo from list 
   function removeToDo(index){  
      dispatch(removeTodo(index));
   }
  // function to edit existing todo from list 
   function handleEditTodo(index,item){
      dispatch(editTodo(index,item))
  }
// function to set todo completed 
  function handleCompleteTodo(index) {
      dispatch(completeTodo(index))
  }
  return (
    <Fragment>
    <TodoForm handleSubmit={handleSubmit} />
    <TodoList  todosList={todos} removeToDo={removeToDo} handleEditTodo={handleEditTodo}  handleCompleteTodo={handleCompleteTodo}/>
   
    </Fragment>
    
  );
}

export default ContentContainer;
