import React, { Component } from 'react';
import InputField from './components/inputField'
import Todos from './components/todos/todos'
import NavBar from './components/navbar/navbar'
import './App.css'
class App extends Component {
  
  state={
    todos :[
          'Hello man',
          'How are you doing',
          'whats good',
          'how am good',
          'Hello man',
          'How are you doing',
          'whats good',
          'how am good'
    ],
    value : ''
  }



  handleChange =(e)=>{
  
    this.setState({value : e.target.value,})
    
  }
  onSubmit=(e)=>{
    e.preventDefault()
    const value = this.state.value;
    const todos = this.state.todos;

     todos.push(value);

    this.setState({
      todos ,
      value : ''
    })
    
    console.log(this.state.todos)

  }
  handleDelete=(todoId)=>{
    
    const todos = this.state.todos.filter(todo => todo.index !== todoId);
    this.setState({todos})
    
  }
 
  render() { 
    return ( 
      
      <div>
        <NavBar />
        
        <main className=" container mt-5">
          <InputField handlevalue={this.handleChange} onClick={this.onSubmit}/>
          <Todos todos={this.state.todos} deleteTodo={() =>this.handleDelete()}/>
        </main>
      </div>
     );
  }
}
 
export default App;