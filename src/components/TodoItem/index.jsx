import React ,{Fragment, useEffect,useState}from 'react';

import styles from './styles.module.sass';

function TodoItem(props) {
  const[isedit,setIsedit]=useState(false);
  const[todo,setToDo] = useState(props.todo)
// function to update state
function handleUpdate(event) {
  setToDo(
    {todoname:event.target.value,complete:todo.complete}
  );      
}
// function to update todo
function handleUpdateTodo(event) {
  event.preventDefault();
  props.handleEditTodo(props.index,todo);
  toggleToDo();

}
function toggleToDo() {
  const editState= isedit ;
  setIsedit(! editState);
}
function completeToDo(event) {
  setToDo({
    todoname:todo.todoname,
    complete:true
  })
  props.handleCompleteTodo(props.index)
}
  return (
    
    <Fragment>
    { isedit == false?
      
    <div className={styles.card}>
      {
       todo.complete== true? 
      <Fragment>
        <h2 
         className={styles.title}> {todo.todoname}</h2>
      </Fragment>:
      <Fragment>        
        <h2  className={styles.titleCompleted}>{todo.todoname}</h2>
        <button className={styles.completeBtn} onClick={() =>completeToDo()}>Complete</button>
        <button   className={styles.updateBtn} onClick={() => toggleToDo()}>Update</button>
      </Fragment>
}     
      <button onClick={() => props.removeToDo(props.index)} className={styles.deleteBtn}>Delete</button>
    </div>: 
    <div className={styles.card}>
    <form onSubmit={handleUpdateTodo}>
          <div className={styles.formdiv}>             
             <input type="text" value={todo.todoname} required  className={styles.input} onChange={handleUpdate}/>          
             <button className={styles.update} >Update</button>
              </div>
          </form>
    
    </div>
}
   </Fragment>
  );
  }

export default TodoItem;
