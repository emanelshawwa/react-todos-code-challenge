import React,{useState}  from 'react';
import styles from './styles.module.sass';

function TodoForm(props) {
  const [todo,setToDo]= useState({
    todoname:'',
    complete:false,
  })
  // function to handle changes of text 
  function handleChange(event){
    const todo= event.target.value;
    setToDo({todoname:todo,complete:false});      
  }
  // function to submit data to store
  function onFormSubmit(event){
    event.preventDefault();
    props.handleSubmit(todo);
    setToDo({
      todoname:'',
    complete:false,
  });    
  }
  return (
   
    <form onSubmit={onFormSubmit} >
      <div className={styles.formdiv}>
      <input required
        type="text"
        placeholder="What do you have to do?"
        className={styles.input}
        name="todo"
        id="todo"
        value={todo.todoname}
        onChange={handleChange} 
      />
     
     <input type="submit"  value="Add Task" className={styles.add}/>
     </div>
    </form>
  
  );
}

export default TodoForm;
