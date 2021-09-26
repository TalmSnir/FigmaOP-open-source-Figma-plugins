import React from 'react';
import Button from '../components/Button';
import Container from '../components/Container';
function Return() {
  return (
    <section className='return'>
      <Container>
        <p className='return__text'>
          return to the community and contribute to make the plugins even better
        </p>
        <Button type='primary'>return to the community</Button>
      </Container>
    </section>
  );
}

export default Return;
