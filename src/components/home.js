import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { Link } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';


function Home() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removedArr);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });

        setTodos(updatedTodos);
    };

    return (
        <>
            <div className='icons'>
                <Link to="/login"><TiArrowBack className='logout-icon' /></Link>
            </div>

            <div className="row d-flex justify-content-center pt-4 pb-4">
                <div className="col-lg-6 col-md-6">

                    <div className="card" >
                        <div className="card-header">
                            <h3 className="text-center mb-4">What's the Plan for Today?</h3>

                            <TodoForm onSubmit={addTodo} />
                        </div>
                        <div className="card-body scroller">
                            <Todo
                                todos={todos}
                                completeTodo={completeTodo}
                                removeTodo={removeTodo}
                                updateTodo={updateTodo}
                            />
                        </div>
                        <div className="card-footer">

                            <div className='row justify-content-center'>
                                <div className='col'>
                                    <span>Completed: <small id='completed' className="text-muted" >0</small></span>
                                </div>
                                <div className='col'>
                                    <span>Pending: <small id='pending' className="text-muted" >0</small></span>
                                </div>
                                <div className='col'>
                                    <span>Total: </span> <small id='total' className="text-muted" >0</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;