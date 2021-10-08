import { useState } from 'react';
import { NewIdeaFormSubmitted, NewIdeaForm } from './';


export default function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
   
     
    {!isSubmitted ? <NewIdeaForm setIsSubmitted={setIsSubmitted} />: <NewIdeaFormSubmitted />}
 </>
  )
}
