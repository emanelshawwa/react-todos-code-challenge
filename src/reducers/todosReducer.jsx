import { ADD_TODO,DELETE_TODO,EDIT_TODO,COMPLETE_TODO} from '../actions/todosAction';

let initialState ={
  todos:[]
};
const reducer= (state = initialState, action) => {
  switch(action.type) {
   
     case ADD_TODO:
          return {...state,todos: state.todos.concat(action.payload)    }
     case EDIT_TODO:
          return{ ...state,    
          todos: state.todos.map(    
              (item, index) => index === action.id ? {...item, todoname : action.payload.todoname ,  complete : action.payload.complete }    
                                      : item)  
          }  
      case DELETE_TODO:
           let index= action.payload;
           return {...state,todos: state.todos.slice(0,index).concat(state.todos.slice(index + 1, state.todos.length))  
           };
      case COMPLETE_TODO:
           return{ ...state,    
           todos: state.todos.map(    
              (item, index) => index === action.payload ? {...item,   complete : true }    
                                      : item)  
           }  
      default:
          return state
  }
}

export default reducer;