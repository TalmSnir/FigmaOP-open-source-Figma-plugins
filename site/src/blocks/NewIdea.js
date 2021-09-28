import React from 'react';
import Form from '../components/Form';

import Container from '../components/Container';
import communityPluginCard from '../assets/Community-Plugin-card.png';
function NewIdea() {
  return (
    <section className='new-idea' id='new-idea'>
      <Container>
        <h1 className='new-idea__title'>
          Have an idea for something new but dont have the skills yet ?
        </h1>
        <img src={communityPluginCard} alt='figma community plugin card' />
        <h2 className='new-idea__subtitle'>
          let us know and we will work together to make it
        </h2>
        <Form />
      </Container>
    </section>
  );
}

export default NewIdea;
