import { useState, useEffect, useCallback } from 'react';
import { send } from 'emailjs-com';
const initialState = { name: '', email: '', content: '' };
export default function useForm(formValidation, callback) {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = e => {
    const { value, name } = e.target;
    setValues(values => {
      return { ...values, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(formValidation({ values }));
    setIsSubmitting(true);
  };
  const sendForm = useCallback(async () => {
    console.log('sent');
    const USER_ID = process.env.REACT_APP_USER_ID;
    console.log(USER_ID);
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    console.log(values);
    try {
      send(SERVICE_ID, TEMPLATE_ID, values, USER_ID);
    } catch (err) {
      console.log(err);
    }
  }, [values]);

  useEffect(() => {
    console.log(errors);
    if (Object.values(errors).length === 0 && isSubmitting) {
      callback(true);
      sendForm();
    }
  }, [errors, isSubmitting, callback]);

  return { errors, values, handleChange, handleSubmit };
}
