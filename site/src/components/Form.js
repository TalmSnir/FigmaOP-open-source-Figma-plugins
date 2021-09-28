import React, { useState } from 'react';
import Button from './Button';
export default function Form() {
  const [formInputs, setFormInputs] = useState({
    name: '',
    email: '',
    content: '',
  });
  const handleInputChange = e => {
    const { value, name } = e.target;
    setFormInputs(formInputs => {
      return { ...formInputs, [name]: value };
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(formInputs);
  };
  return (
    <form className='form'>
      <div className='form__input-container'>
        <input
          type='text'
          name='name'
          id='name'
          value={formInputs.name}
          placeholder=' '
          onChange={handleInputChange}
        />
        <label htmlFor='name'>name</label>
      </div>
      <div className='form__input-container'>
        <input
          type='email'
          name='email'
          id='email'
          value={formInputs.email}
          placeholder=' '
          onChange={handleInputChange}
        />
        <label htmlFor='email'>email address</label>
      </div>
      <div className='form__input-container'>
        <textarea
          type='text'
          name='content'
          id='content'
          value={formInputs.content}
          placeholder=' '
          onChange={handleInputChange}
        />
        <label htmlFor='content'>write a description of your idea</label>
      </div>
      <Button type='primary' onClick={handleSubmit}>
        send
      </Button>
    </form>
  );
}
