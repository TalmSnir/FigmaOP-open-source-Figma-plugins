import React from 'react';
import PluginIcon from '../components/PluginIcon';
import Button from '../components/Button';
import Container from '../components/Container';
function NewIdea() {
  return (
    <section className='new-idea'>
      <Container>
        <h1 className='new-idea__title'>
          Have an idea for something new but dont have the skills yet ?
        </h1>
        <PluginIcon name='unknown' className='new-idea__icon' />
        <h2 className='new-idea__subtitle'>
          let us know and we will work together to make it
        </h2>
        <Button type='primary'>explore plugins on the community</Button>
      </Container>
    </section>
  );
}

export default NewIdea;
