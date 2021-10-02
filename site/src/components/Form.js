import { useState } from 'react';

import { NewIdeaForm, NewIdeaFormSubmitted } from './NewIdeaForms';
export default function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return !isSubmitted ? (
    <NewIdeaForm setIsSubmitted={setIsSubmitted} />
  ) : (
    <NewIdeaFormSubmitted />
  );
}
