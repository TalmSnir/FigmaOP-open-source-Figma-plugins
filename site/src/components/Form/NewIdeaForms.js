import useForm from './useForm';
import formValidation from './formValidation';

export function NewIdeaForm({ setIsSubmitted }) {
  const { errors, values, handleChange, handleSubmit } = useForm(
    formValidation,
    setIsSubmitted
  );

  return (
    <form className='form' noValidate onSubmit={handleSubmit}>
    
      <div className={`form__input-container ${errors.name && 'input-error'}`}>
        <input
          type='text'
          name='name'
          id='name'
          value={values.name}
          placeholder=' '
          onChange={handleChange}
        />
        <label htmlFor='name'>name</label>
        {errors.name && <div className='error'>{errors.name}</div>}
      </div>
      <div className={`form__input-container ${errors.email && 'input-error'}`}>
        <input
          type='email'
          name='email'
          id='email'
          value={values.email}
          placeholder=' '
          onChange={handleChange}
        />
        <label htmlFor='email'>email address</label>
        {errors.email && <div className='error'>{errors.email}</div>}
      </div>
      <div className='form__input-container'>
        <textarea
          type='text'
          name='content'
          id='content'
          value={values.content}
          placeholder=' '
          onChange={handleChange}
        />
        <label htmlFor='content'>write a description of your idea</label>
      </div>
      <button type='submit' className='btn btn--primary'>
        send
      </button>
    </form>
  );
}
export function NewIdeaFormSubmitted() {
  return (
    <div className='form'>
      thank you for submitting a new idea. we will get back to you shortly
    </div>
  );
}
