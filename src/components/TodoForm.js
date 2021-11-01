import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} >
            {props.edit ? (
                <>
                    <div className='pb-2'>
                        <input
                            placeholder='Update your item'
                            value={input}
                            onChange={handleChange}
                            name='text'
                            ref={inputRef}
                            className='form-control'
                        />
                    </div>

                    <button onClick={handleSubmit} className='btn btn-primary btn-block rounded bt'>
                        Update
                    </button>
                </>
            ) : (
                <>
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8 col-md-9 pb-2">
                            <input
                                placeholder='New Todo'
                                value={input}
                                onChange={handleChange}
                                name='text'
                                ref={inputRef}
                                className='form-control'
                            />
                        </div>

                        <div className="col-lg-4 col-md-3">
                            <button onClick={handleSubmit} className='btn btn-primary rounded btn-block bt'>
                                Add
                            </button>
                        </div>
                    </div>
                </>
            )}
        </form>
    );
}

export default TodoForm;