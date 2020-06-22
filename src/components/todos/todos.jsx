import React, { Component } from 'react';

import '../todos/todo.css'
class Todos extends Component{
    render(){
        const {deleteTodo, todos} = this.props;

        if(todos.length === 0){
            return (
                <div>
                    <h1 className="mt-4">You currently do not have any Task available</h1>
                    <h2 className="mt-4">Add a Task Now!!!</h2>
                    
                    
                 </div>
            )
        }
        return(
        <div >
                {todos.map((todo, index) =>
                    <div className="todo" key={index}>
                         <p>{todo}</p>
                        <button className=" btn-todo-delete" onClick={deleteTodo}>Delete</button>
                    </div>
                )}
                
            
        </div>
        
        )
    }
}


export default Todos;