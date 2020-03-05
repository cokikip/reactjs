import React,{Component} from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component{
  state = {
    todos:
    [
      {
        id:1,
        title:"Take out trash",
        completed:false
      },
      {
        id:2,
        title:"Cook the meat",
        completed:true
      },
      {
        id:3,
        title:"Walk the dog",
        completed:false
      },
      {
        id:4,
        title:"Learn react",
        completed:true
      },
      {
        id:5,
        title:"Buy a land",
        completed:false
      }
    ]
  }
  //Mark Todo completed or not
  markComplete=(id)=>{
    this.setState({todos: this.state.todos.map((todo) => {
      if (todo.id===id) {
        todo.completed = !todo.completed;

      }
      return todo;
    })});


  }
  deleteBtn = (id) =>{
    this.setState({todos: [...this.state.todos.filter((todo) => todo.id!==id  )]})

  }

  render(){
    return (

      <div className="container bg-success">
      <h2 className="text-center">Todo App</h2>
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteBtn={this.deleteBtn}/>
      </div>
    );
  }


  }

export default App;
