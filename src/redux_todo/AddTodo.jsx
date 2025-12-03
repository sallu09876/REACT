import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions';

const AddTodo = () => {

  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input))
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Add a new task...'
      />
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default AddTodo
